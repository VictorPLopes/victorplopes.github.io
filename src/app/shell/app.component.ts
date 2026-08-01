import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { ProfileSidebarComponent } from './profile-sidebar/profile-sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Profile } from './profile-sidebar/models/profile';
import {
  combineLatest,
  filter,
  map,
  mapTo,
  Observable,
  of,
  shareReplay,
  startWith,
  Subscription,
  take,
} from 'rxjs';
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
  hasLoadedOnce$: Observable<boolean> = of(false);
  showInitialSpinner$: Observable<boolean> = of(false);

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
    const navEvents$ = this.router.events.pipe(
      filter(
        (e) =>
          e instanceof NavigationStart ||
          e instanceof NavigationEnd ||
          e instanceof NavigationCancel ||
          e instanceof NavigationError
      ),
      shareReplay({ bufferSize: 1, refCount: true })
    );

    this.loading$ = navEvents$.pipe(
      map((e) => e instanceof NavigationStart),
      startWith(false),
      shareReplay({ bufferSize: 1, refCount: true })
    );

    this.hasLoadedOnce$ = navEvents$.pipe(
      filter(
        (e) =>
          e instanceof NavigationEnd ||
          e instanceof NavigationCancel ||
          e instanceof NavigationError
      ),
      take(1),
      mapTo(true),
      startWith(false),
      shareReplay({ bufferSize: 1, refCount: true })
    );

    this.showInitialSpinner$ = combineLatest([this.loading$, this.hasLoadedOnce$]).pipe(
      map(([loading, hasLoadedOnce]) => loading && !hasLoadedOnce),
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
