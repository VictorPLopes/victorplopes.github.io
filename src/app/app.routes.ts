import { Routes } from '@angular/router';
import { AboutComponent } from './layout/main-content/tabs/about/about.component';
import { ProjectsComponent } from './layout/main-content/tabs/projects/projects.component';
import { ArtworkComponent } from './layout/main-content/tabs/artwork/artwork.component';

export const routes: Routes = [
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "projects",
    component: ProjectsComponent
  },
  {
    path: "artwork",
    component: ArtworkComponent
  },
  {
    path: "",
    redirectTo: "about",
    pathMatch: "full"
  }
];
