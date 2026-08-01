import { Component, computed } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatList, MatListItem, MatListItemIcon } from '@angular/material/list';
import { provideTranslocoScope, TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'pf-about',
  imports: [MatDivider, MatList, MatListItem, MatListItemIcon, TranslocoPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  providers: [provideTranslocoScope('about')],
})
export class AboutComponent {
  protected birthDate = new Date(2003, 0, 19);

  protected age = computed(() => {
    const today = new Date();
    let currentAge = today.getFullYear() - this.birthDate.getFullYear();
    const m = today.getMonth() - this.birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < this.birthDate.getDate())) currentAge--;
    return currentAge;
  });

  protected isArray(val: unknown): val is string[] {
    return Array.isArray(val);
  }
}
