import { Component } from '@angular/core';
import { MediaContentComponent } from '../../../../media-content/media-content.component';
import { MediaItem } from '../../../../media-content/models/media-item';
import artProjects from '../../../../../../public/data/artwork/en-US/artwork.json';

@Component({
  selector: 'pf-artwork',
  imports: [MediaContentComponent],
  templateUrl: './artwork.component.html',
  styleUrl: './artwork.component.scss',
})
export class ArtworkComponent {
  artProjectsList: MediaItem[] = artProjects;
}
