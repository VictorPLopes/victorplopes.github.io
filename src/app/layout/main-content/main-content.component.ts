import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { TextContentComponent } from "./text-content/text-content.component";
import { TextItem } from './text-content/models/text-item';
import { MediaItem } from './media-content/models/media-item';
import projects from "../../assets/projects.json"
import artProjects from "../../assets/art-projects.json"
import { MediaContentComponent } from "./media-content/media-content.component";

@Component({
  selector: 'pf-main-content',
  imports: [MatTabsModule, TextContentComponent, MediaContentComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  projectsList: TextItem[] = projects;
  artProjectsList: MediaItem[] = artProjects;
}
