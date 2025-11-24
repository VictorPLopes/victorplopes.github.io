import { Routes } from '@angular/router';
import { provideTranslocoScope } from '@jsverse/transloco';

export const routes: Routes = [
  {
    path: "about",
    loadComponent: () => import('./layout/main-content/tabs/about/about.component').then((m) => m.AboutComponent),
    providers: [provideTranslocoScope('about')]
  },
  {
    path: "projects",
    loadComponent: () => import('./layout/main-content/tabs/projects/projects.component').then((m) => m.ProjectsComponent)
  },
  {
    path: "artwork",
    loadComponent: () => import('./layout/main-content/tabs/artwork/artwork.component').then((m) => m.ArtworkComponent)
  },
  {
    path: "",
    redirectTo: "about",
    pathMatch: "full"
  }
];
