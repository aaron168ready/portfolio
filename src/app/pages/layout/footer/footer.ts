import { Component, inject, input } from '@angular/core';
import { DynamicIconDirective } from '../../../directives/dynamic-icon/dynamic-icon';
import { RouterService } from '../../../services/router.service';

@Component({
  selector: 'app-footer',
  imports: [DynamicIconDirective],
  templateUrl: 'footer.html',
})
export class FooterComponent {
  #routerService = inject(RouterService);

  year = new Date().getFullYear();
  githubUrl = input<string>('https://github.com/aaron168ready');
  linkedinUrl = input<string>('https://linkedin.com/in/zni');

  routeTo = (href: string) => this.#routerService.routeTo(href);
}
