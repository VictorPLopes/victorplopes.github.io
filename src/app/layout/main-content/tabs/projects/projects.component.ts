import { Component } from '@angular/core';
import { TextContentComponent } from "../../../../text-content/text-content.component";
import { TextItem } from '../../../../text-content/models/text-item';
import projects from '../../../../../../public/data/projects/en-US/projects.json';


@Component({
  selector: 'pf-projects',
  imports: [TextContentComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projectsList: TextItem[] = projects;
}
