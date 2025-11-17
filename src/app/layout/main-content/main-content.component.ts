import { Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'pf-main-content',
  imports: [MatTabsModule, RouterModule, TitleCasePipe],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  links = ['about', 'projects', 'artwork'];
  activeLink = this.links[0];
}
