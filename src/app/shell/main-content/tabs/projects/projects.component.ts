import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { map, Observable } from 'rxjs';
import { provideTranslocoScope, TranslocoService } from '@jsverse/transloco';
import { TextContentComponent } from '../../../../text-content/text-content.component';
import { TextItem } from '../../../../text-content/models/text-item';

@Component({
  selector: 'pf-projects',
  imports: [TextContentComponent, AsyncPipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projectsList$: Observable<TextItem[]>;

  constructor(private translocoService: TranslocoService) {
    this.projectsList$ = this.translocoService.selectTranslation('projects').pipe(
      map((p: any) => {
        if (!p) return [];
        if (Array.isArray(p)) return p;
        if (Array.isArray(p.projects)) return p.projects;
        return [];
      })
    );
  }
}
