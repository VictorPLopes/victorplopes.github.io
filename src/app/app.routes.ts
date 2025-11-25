import { Routes } from '@angular/router';
import { provideTranslocoScope } from '@jsverse/transloco';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: () =>
      import('./layout/main-content/tabs/about/about.component').then((m) => m.AboutComponent),
    providers: [provideTranslocoScope('about')],
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./layout/main-content/tabs/projects/projects.component').then(
        (m) => m.ProjectsComponent
      ),
    providers: [provideTranslocoScope('projects')],
  },
  {
    path: 'artwork',
    loadComponent: () =>
      import('./layout/main-content/tabs/artwork/artwork.component').then(
        (m) => m.ArtworkComponent
      ),
    providers: [provideTranslocoScope('artwork')],
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./layout/main-content/tabs/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
    providers: [provideTranslocoScope('contact')],
  },
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
  },
];
