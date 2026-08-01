import { Component, computed, effect, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { SocialItem } from './models/social-item';
import { MatButtonModule } from '@angular/material/button';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'pf-profile-sidebar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    TranslocoPipe,
  ],
  templateUrl: './profile-sidebar.component.html',
  styleUrl: './profile-sidebar.component.scss',
})
export class ProfileSidebarComponent {
  readonly name = input.required<string>();
  readonly avatarSrc = input.required<string>();
  readonly nickname = input.required<string>();
  readonly role = input.required<string>();
  readonly bio = input.required<string>();
  readonly maxExpandedLinks = input<number>(5);
  readonly github = input<string>();
  readonly twitter = input<string>();
  readonly linkedin = input<string>();
  readonly instagram = input<string>();
  readonly facebook = input<string>();
  readonly socialButtonStyle = input<'text' | 'filled' | 'elevated' | 'outlined' | 'tonal'>(
    'filled'
  );
  readonly customWebsites = input<SocialItem[]>([]);

  readonly socialItems = computed<SocialItem[]>(() => {
    const items: SocialItem[] = [];

    if (this.github()) {
      items.push({
        id: 'github',
        label: 'GitHub',
        url: `https://www.github.com/${this.github()}`,
        icon: 'icons/github.svg',
      });
    }
    if (this.linkedin()) {
      items.push({
        id: 'linkedin',
        label: 'LinkedIn',
        url: `https://www.linkedin.com/in/${this.linkedin()}`,
        icon: 'icons/linkedin.svg',
      });
    }
    if (this.twitter()) {
      items.push({
        id: 'twitter',
        label: 'Twitter ("X")',
        url: `https://www.x.com/${this.twitter()}`,
        icon: 'icons/twitter.svg',
      });
    }
    if (this.instagram()) {
      items.push({
        id: 'instagram',
        label: 'Instagram',
        url: `https://www.instagram.com/${this.instagram()}`,
        icon: 'icons/instagram.svg',
      });
    }
    if (this.facebook()) {
      items.push({
        id: 'facebook',
        label: 'Facebook',
        url: `https://www.facebook.com/${this.facebook()}`,
        icon: 'icons/facebook.svg',
      });
    }

    for (const w of this.customWebsites() ?? []) {
      items.push({
        id: w.id ?? w.url,
        label: w.label,
        url: w.url,
        icon: w.icon,
        style: w.style,
      });
    }

    return items;
  });

  readonly socialRows = computed<SocialItem[][]>(() => {
    const items = this.socialItems();
    const n = items.length;
    if (n === 0) return [];

    const maxCols = 3;
    const rowsCount = Math.max(1, Math.ceil(n / maxCols));
    const base = Math.floor(n / rowsCount);
    const extra = n % rowsCount;

    const rows: SocialItem[][] = [];
    let idx = 0;
    for (let i = 0; i < rowsCount; i++) {
      const cols = base + (i < extra ? 1 : 0);
      rows.push(items.slice(idx, idx + cols));
      idx += cols;
    }
    return rows;
  });

  private registered = new Set<string>();

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    effect(() => {
      const items = this.socialItems();
      for (const item of items) {
        if (!item.icon) continue;
        const name = item.id?.toString() ?? item.url;
        if (this.registered.has(name)) continue;

        const url = item.icon.endsWith('.svg') ? item.icon : `${item.icon}.svg`;

        this.iconRegistry.addSvgIcon(name, this.sanitizer.bypassSecurityTrustResourceUrl(url));
        this.registered.add(name);
      }
    });
  }
}
