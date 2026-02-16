import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  #router = inject(Router);

  routeTo(href: string) {
    if (href.startsWith('#')) {
      const el = document.querySelector(href) as HTMLElement | null;
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href.startsWith('http')) {
      window.open(href, '_blank');
    } else {
      this.#router.navigateByUrl(href);
    }
  }
}
