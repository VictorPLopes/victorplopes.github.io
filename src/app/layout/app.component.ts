import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProfileSidebarComponent } from "./profile-sidebar/profile-sidebar.component";
import { MainContentComponent } from "./main-content/main-content.component";
import { ThemePickerComponent } from "./theme-picker/theme-picker.component";
import profile from "../../../public/data/profile/en-US/profile.json"
import { Profile } from './profile-sidebar/models/profile';

@Component({
  selector: 'pf-root',
  imports: [ProfileSidebarComponent, MainContentComponent, ThemePickerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'pf-root'
  }
})
export class AppComponent {
  //author = input.required<string>();
  myProfile: Profile = profile as unknown as Profile;
}
