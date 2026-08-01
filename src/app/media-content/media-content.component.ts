import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { TranslocoPipe } from '@jsverse/transloco';
import { TextContentComponent } from '../text-content/text-content.component';

@Component({
  selector: 'pf-media-content',
  imports: [
    MatCardModule,
    NgOptimizedImage,
    MatChipsModule,
    MatButtonModule,
    MatIcon,
    TranslocoPipe,
  ],
  templateUrl: './media-content.component.html',
  styleUrl: './media-content.component.scss',
})
export class MediaContentComponent extends TextContentComponent {}
