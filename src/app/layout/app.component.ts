import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { ProfileSidebarComponent } from './profile-sidebar/profile-sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelect, MatOption } from '@angular/material/select';
import { MatIconRegistry, MatIcon } from '@angular/material/icon';
import { Profile } from './profile-sidebar/models/profile';
import profile from '../../../public/data/profile/en-US/profile.json';
import { DomSanitizer } from '@angular/platform-browser';

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
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'pf-root',
  },
})
export class AppComponent {
  languages: Language[] = [
    { value: 'en', viewValue: 'English (US)', icon: 'icons/us.svg' },
    { value: 'pt', viewValue: 'Portuguese', icon: 'icons/br.svg' },
  ];
  selectedLanguage = this.languages[0].value;
  myProfile: Profile = profile as unknown as Profile;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.languages.forEach((language) => {
      iconRegistry.addSvgIcon(
        language.value,
        sanitizer.bypassSecurityTrustResourceUrl(language.icon)
      );
    });
  }
}
