import { Component } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'pf-contact',
  imports: [MatDivider, TranslocoPipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}
