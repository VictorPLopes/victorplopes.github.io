import { Component, computed, input } from '@angular/core';
import { NgOptimizedImage, NgClass } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { SocialItem } from './models/social-item';
import { MatButtonModule } from '@angular/material/button';
import { MatIconRegistry, MatIcon } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'pf-profile-sidebar',
  imports: [NgOptimizedImage, MatCardModule, MatDivider, MatButtonModule, MatIcon, NgClass],
  templateUrl: './profile-sidebar.component.html',
  styleUrl: './profile-sidebar.component.scss',
})
export class ProfileSidebarComponent {
  readonly name = input.required<string>();
  readonly avatarSrc = input.required<string>();
  readonly nickname = input.required<string>();
  readonly role = input.required<string>();
  readonly bio = input.required<string>();
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
        icon: 'github',
      });
    }
    if (this.linkedin()) {
      items.push({
        id: 'linkedin',
        label: 'LinkedIn',
        url: `https://www.linkedin.com/${this.linkedin()}`,
        icon: 'linkedin',
      });
    }
    if (this.twitter()) {
      items.push({
        id: 'twitter',
        label: 'Twitter ("X")',
        url: `https://www.x.com/${this.twitter()}`,
        icon: 'twitter',
      });
    }
    if (this.instagram()) {
      items.push({
        id: 'instagram',
        label: 'Instagram',
        url: `https://www.instagram.com/${this.instagram()}`,
        icon: 'instagram',
      });
    }
    if (this.facebook()) {
      items.push({
        id: 'facebook',
        label: 'Facebook',
        url: `https://www.facebook.com/${this.facebook()}`,
        icon: 'facebook',
      });
    }

    // add custom websites (preserve whatever order you want)
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

    const maxCols = 3; // prefer up to 3 columns per row
    // Compute row count so each row has 2 or 3 items when possible:
    const rowsCount = Math.max(1, Math.ceil(n / maxCols));
    const base = Math.floor(n / rowsCount);
    const extra = n % rowsCount; // first extra rows get one extra item

    const rows: SocialItem[][] = [];
    let idx = 0;
    for (let i = 0; i < rowsCount; i++) {
      const cols = base + (i < extra ? 1 : 0);
      rows.push(items.slice(idx, idx + cols));
      idx += cols;
    }
    return rows;
  });

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('github.svg'));
    iconRegistry.addSvgIcon('twitter', sanitizer.bypassSecurityTrustResourceUrl('twitter.svg'));
    iconRegistry.addSvgIcon('linkedin', sanitizer.bypassSecurityTrustResourceUrl('linkedin.svg'));
    iconRegistry.addSvgIcon('instagram', sanitizer.bypassSecurityTrustResourceUrl('instagram.svg'));
    iconRegistry.addSvgIcon('facebook', sanitizer.bypassSecurityTrustResourceUrl('facebook.svg'));
  }
}
