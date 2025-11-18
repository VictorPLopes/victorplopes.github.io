import { Component, computed, input } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import {MatChipsModule} from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common'
import { MatIcon } from "@angular/material/icon";
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'pf-text-content',
  imports: [MatCardModule, NgOptimizedImage, MatChipsModule, MatButtonModule, MatIcon, TranslocoPipe],
  templateUrl: './text-content.component.html',
  styleUrl: './text-content.component.scss',
})
export class TextContentComponent {
  readonly title = input.required<string>();
  readonly subtitle = input<string | undefined>();
  readonly imageUrl = input<string | undefined>()
  readonly description = input<string | undefined>("");
  readonly url = input<string | undefined>();
  readonly tags = input<string[] | undefined>([]);

  readonly tagsList = computed(() => this.tags() ?? []);
}
