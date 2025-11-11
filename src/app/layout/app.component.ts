import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProfileSidebarComponent } from "./profile-sidebar/profile-sidebar.component";
import { MainContentComponent } from "./main-content/main-content.component";

@Component({
  selector: 'pf-root',
  imports: [ProfileSidebarComponent, MainContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'pf-root'
  }
})
export class AppComponent {

}
