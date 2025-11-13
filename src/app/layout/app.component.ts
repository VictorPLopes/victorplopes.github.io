import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProfileSidebarComponent } from "./profile-sidebar/profile-sidebar.component";
import { MainContentComponent } from "./main-content/main-content.component";
import { ThemePickerComponent } from "./theme-picker/theme-picker.component";

@Component({
  selector: 'pf-root',
  imports: [ProfileSidebarComponent, MainContentComponent, ThemePickerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'pf-root'
  }
})
export class AppComponent {

}
