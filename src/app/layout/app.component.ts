import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { ProfileSidebarComponent } from './profile-sidebar/profile-sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Profile } from './profile-sidebar/models/profile';
import { Subscription } from 'rxjs';
import { OptionsComponent } from '../options/options.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'pf-root',
  imports: [
    ProfileSidebarComponent,
    MainContentComponent,
    TranslocoPipe,
    MatFormFieldModule,
    OptionsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'pf-root',
  },
})
export class AppComponent implements OnDestroy {
  myProfile!: Profile;

  private sub = new Subscription();

  constructor(private title: Title, private translocoService: TranslocoService) {
    this.sub.add(
      this.translocoService.selectTranslation('profile').subscribe((profile: any) => {
        this.myProfile = profile;
      })
    );
    this.sub.add(
      this.translocoService.selectTranslate('portfolio').subscribe((value: any) => {
        this.title.setTitle(value);
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
