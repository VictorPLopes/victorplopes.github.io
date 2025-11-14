import { Component } from '@angular/core';
import { MatDivider } from "@angular/material/divider";
import { MatList, MatListItem } from "@angular/material/list";

@Component({
  selector: 'pf-about',
  imports: [MatDivider, MatList, MatListItem],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {

}
