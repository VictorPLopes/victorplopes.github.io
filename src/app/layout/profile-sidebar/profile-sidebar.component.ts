import { Component, computed, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { CustomWebsite } from './models/custom-website';
import { MatButtonModule } from '@angular/material/button';
import { MatIconRegistry, MatIcon } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HandlePipe } from '../../pipes/handle-pipe';

@Component({
  selector: 'pf-profile-sidebar',
  imports: [NgOptimizedImage, MatCardModule, MatDivider, MatButtonModule, MatIcon, HandlePipe],
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
  readonly socialButtonStyle = input<'text' | 'filled' | 'elevated' | 'outlined' | 'tonal'>(
    'filled'
  );
  readonly customWebsites = input<CustomWebsite[]>([]);

  readonly customWebsiteList = computed(() => this.customWebsites() ?? []);

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('github.svg'));
    iconRegistry.addSvgIcon('twitter', sanitizer.bypassSecurityTrustResourceUrl('twitter.svg'));
    iconRegistry.addSvgIcon('linkedin', sanitizer.bypassSecurityTrustResourceUrl('linkedin.svg'));
  }
}
