import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { map, Observable } from 'rxjs';
import { provideTranslocoScope, TranslocoService } from '@jsverse/transloco';
import { MediaContentComponent } from '../../../../media-content/media-content.component';
import { MediaItem } from '../../../../media-content/models/media-item';

@Component({
  selector: 'pf-artwork',
  imports: [MediaContentComponent, AsyncPipe],
  templateUrl: './artwork.component.html',
  styleUrl: './artwork.component.scss',
})
export class ArtworkComponent {
  artProjectsList$: Observable<MediaItem[]>;

  constructor(private translocoService: TranslocoService) {
    this.artProjectsList$ = this.translocoService.selectTranslation('artwork').pipe(
      map((a: any) => {
        if (!a) return [];
        if (Array.isArray(a)) return a;
        if (Array.isArray(a.artwork)) return a.artwork;
        return [];
      })
    );
  }
}
