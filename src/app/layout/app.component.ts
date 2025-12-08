import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { ProfileSidebarComponent } from './profile-sidebar/profile-sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Profile } from './profile-sidebar/models/profile';
import { filter, map, Observable, of, Subscription } from 'rxjs';
import { OptionsComponent } from '../options/options.component';
import { Title } from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';

@Component({
  selector: 'pf-root',
  imports: [
    ProfileSidebarComponent,
    MainContentComponent,
    TranslocoPipe,
    MatFormFieldModule,
    AsyncPipe,
    OptionsComponent,
    MatProgressSpinnerModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'pf-root',
  },
})
export class AppComponent implements OnInit, OnDestroy {
  loading$: Observable<boolean> = of(false);

  myProfile!: Profile;

  private sub = new Subscription();

  constructor(
    private title: Title,
    private translocoService: TranslocoService,
    private router: Router
  ) {
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

  ngOnInit() {
    this.loading$ = this.router.events.pipe(
      filter(
        (e) =>
          e instanceof NavigationStart ||
          e instanceof NavigationEnd ||
          e instanceof NavigationCancel ||
          e instanceof NavigationError
      ),
      map((e) => e instanceof NavigationStart)
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
