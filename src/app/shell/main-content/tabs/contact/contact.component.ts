import { Component, HostListener, OnDestroy } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MatDividerModule } from '@angular/material/divider';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'pf-contact',
  imports: [TranslocoPipe, PdfViewerModule, MatDividerModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnDestroy {
  protected pdfSrc: string = 'https://copyparty.victorpl.ovh/Victor/Documents/ID/Curr%C3%ADculo%20%28P%C3%BAblico%29.pdf?k=0XBX';
  protected isDesktop: boolean = true;
  protected page: number = 2;

  private destroy$ = new Subject<void>();

  constructor(private translocoService: TranslocoService) {
    this.setPageForLang(this.translocoService.getActiveLang());

    this.translocoService.langChanges$.pipe(takeUntil(this.destroy$)).subscribe((lang) => {
      this.setPageForLang(lang);
    });

    this.updateLayout();
  }

  private setPageForLang(lang: string) {
    this.page = lang === 'pt' ? 1 : 2;
  }

  @HostListener('window:resize')
  updateLayout() {
    this.isDesktop = window.innerWidth > 768;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
