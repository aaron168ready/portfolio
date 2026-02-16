import { Component, inject, input, signal } from '@angular/core';
import { DynamicIconDirective } from '../../../directives/dynamic-icon/dynamic-icon';
import { RouterService } from '../../../services/router.service';

@Component({
  selector: 'app-header',
  imports: [DynamicIconDirective],
  standalone: true,
  templateUrl: 'header.html',
})
export class HeaderComponent {
  #routerService = inject(RouterService);
  mobileOpen = signal(false);
  linkedinUrl = input<string>('https://linkedin.com/in/zni');
  githubUrl = input<string>('https://github.com/aaron168ready');

  routeTo(href: string) {
    this.#routerService.routeTo(href);

    if (this.mobileOpen()) {
      this.mobileOpen.set(false);
    }
  }
}
