import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { TextContentComponent } from "./text-content/text-content.component";
import projects from "../../assets/projects.json"
import { TextItem } from './text-content/models/text-item';

@Component({
  selector: 'pf-main-content',
  imports: [MatTabsModule, TextContentComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  projectsList: TextItem[] = projects;
}
