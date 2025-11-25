import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { provideTranslocoScope, TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { ProfileSidebarComponent } from './profile-sidebar/profile-sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelect, MatOption, MatSelectChange, MatSelectTrigger } from '@angular/material/select';
import { MatIconRegistry, MatIcon } from '@angular/material/icon';
import { Profile } from './profile-sidebar/models/profile';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import customLanguages from '../../../public/data/custom-languages.json';

type AvailableLang = string | { id: string; label?: string };

@Component({
  selector: 'pf-root',
  imports: [
    ProfileSidebarComponent,
    MainContentComponent,
    ThemePickerComponent,
    TranslocoPipe,
    MatFormFieldModule,
    MatSelect,
    MatOption,
    MatIcon,
    MatSelectTrigger,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'pf-root',
  },
})
export class AppComponent implements OnDestroy {
  selectedLanguage: string;
  languages: Language[] = [];
  translocoLanguages: string[] = [];

  myProfile!: Profile;

  private sub = new Subscription();


  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private translocoService: TranslocoService
  ) {
    this.selectedLanguage = this.translocoService.getActiveLang();

    const availableLangs = this.translocoService.getAvailableLangs() as AvailableLang[];

    const registeredIcons = new Set<string>();

    const normalize = (l: AvailableLang) => {
      const id = typeof l === 'string' ? l : l.id;
      const providedLabel = typeof l === 'string' ? undefined : l.label;
      const custom = (customLanguages as Record<string, { label: string; icon?: string }>)[id];

      const label = custom?.label ?? providedLabel ?? id;
      const icon = custom?.icon;

      return { id, label, icon } as Language;
    };

    const processed = availableLangs.map(normalize).map((lang) => {
      if (lang.icon && !registeredIcons.has(lang.id)) {
        iconRegistry.addSvgIcon(lang.id, sanitizer.bypassSecurityTrustResourceUrl(lang.icon));
        registeredIcons.add(lang.id);
      }
      return lang;
    });

    this.languages = processed;
    this.translocoLanguages = processed.map((l) => l.id);

    this.sub.add(
      this.translocoService.selectTranslation('profile').subscribe((profile: any) => {
        this.myProfile = profile;
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onChange(event: MatSelectChange): void {
    const langCode = event.value;

    this.translocoService.setActiveLang(langCode);
    this.selectedLanguage = langCode;
  }

  getSelectedLabel(): string {
    return (
      this.languages.find((l) => l.id === this.selectedLanguage)?.label ?? this.selectedLanguage
    );
  }
}
