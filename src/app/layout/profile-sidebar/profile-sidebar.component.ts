import { Component, computed, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { SocialItem } from './models/social-item';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'pf-profile-sidebar',
  imports: [NgOptimizedImage, MatCardModule, MatDivider, MatButtonModule],
  templateUrl: './profile-sidebar.component.html',
  styleUrl: './profile-sidebar.component.scss',
})
export class ProfileSidebarComponent {
  readonly name = input.required<string>();
  readonly avatarSrc = input.required<string>();
  readonly nickname = input.required<string>();
  readonly role = input.required<string>();
  readonly bio = input.required<string>();
  readonly social = input<SocialItem[]>([]);

  readonly socialList = computed(() => this.social() ?? []);
}
