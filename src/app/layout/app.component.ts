import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { ProfileSidebarComponent } from "./profile-sidebar/profile-sidebar.component";
import { MainContentComponent } from "./main-content/main-content.component";
import { ThemePickerComponent } from "./theme-picker/theme-picker.component";
import { Profile } from './profile-sidebar/models/profile';
import profile from "../../../public/data/profile/en-US/profile.json";

@Component({
  selector: 'pf-root',
  imports: [ProfileSidebarComponent, MainContentComponent, ThemePickerComponent, TranslocoPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'pf-root'
  }
})
export class AppComponent {
  myProfile: Profile = profile as unknown as Profile;
}
