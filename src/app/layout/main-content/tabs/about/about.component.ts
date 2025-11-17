import { Component } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatList, MatListItem } from '@angular/material/list';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'pf-about',
  imports: [MatDivider, MatList, MatListItem, TranslocoPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
