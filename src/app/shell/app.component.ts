import { Component, effect, inject, signal } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { ProfileSidebarComponent } from './profile-sidebar/profile-sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MatFormFieldModule } from '@angular/material/form-field';
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
import { toSignal, takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'pf-root',
  imports: [
    ProfileSidebarComponent,
    MainContentComponent,
    TranslocoPipe,
    MatFormFieldModule,
    OptionsComponent,
    MatProgressSpinnerModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    class: 'pf-root',
  },
})
export class AppComponent {
  readonly #title = inject(Title);
  readonly #translocoService = inject(TranslocoService);
  readonly #router = inject(Router);

  protected readonly currentYear = new Date().getFullYear();

  protected showInitialSpinner = signal(false);
  #hasLoadedOnce = false;

  protected myProfile = toSignal(this.#translocoService.selectTranslation('profile'));
  protected portfolioTitle = toSignal(this.#translocoService.selectTranslate<string>('portfolio'));

  constructor() {
    this.#router.events.pipe(takeUntilDestroyed()).subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (!this.#hasLoadedOnce) {
          this.showInitialSpinner.set(true);
        }
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.#hasLoadedOnce = true;
        this.showInitialSpinner.set(false);
      }
    });

    effect(() => {
      const title = this.portfolioTitle();
      if (title) {
        this.#title.setTitle(title);
      }
    });
  }
}
