import { Component, computed, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'pf-text-content',
  imports: [
    MatCardModule,
    NgOptimizedImage,
    MatChipsModule,
    MatButtonModule,
    MatIcon,
    TranslocoPipe,
  ],
  templateUrl: './text-content.component.html',
  styleUrl: './text-content.component.scss',
})
export class TextContentComponent {
  public readonly title = input.required<string>();
  public readonly subtitle = input<string | undefined>();
  public readonly imageUrl = input<string | undefined>();
  public readonly description = input<string | undefined>('');
  public readonly url = input<string | undefined>();
  public readonly tags = input<string[] | undefined>([]);
  public readonly tagsList = computed(() => this.tags() ?? []);
}
