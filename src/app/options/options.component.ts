import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon, MatIconRegistry } from '@angular/material/icon';
import { MatSelect, MatOption, MatSelectTrigger, MatSelectChange } from '@angular/material/select';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { ThemePickerComponent } from '../layout/theme-picker/theme-picker.component';
import { Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import customLanguages from '../../../public/data/custom-languages.json';

type AvailableLang = string | { id: string; label?: string };

@Component({
  selector: 'pf-options',
  imports: [
    ThemePickerComponent,
    TranslocoPipe,
    MatFormFieldModule,
    MatSelect,
    MatOption,
    MatIcon,
    MatSelectTrigger,
  ],
  templateUrl: './options.component.html',
  styleUrl: './options.component.scss',
})
export class OptionsComponent {
  selectedLanguage: string;
  languages: Language[] = [];
  translocoLanguages: string[] = [];

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
