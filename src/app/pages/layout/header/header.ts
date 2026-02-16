import { Component, input, signal } from '@angular/core';
import { DynamicIconDirective } from '../../../directives/dynamic-icon/dynamic-icon';

@Component({
  selector: 'app-header',
  imports: [DynamicIconDirective],
  standalone: true,
  templateUrl: 'header.html',
})
export class HeaderComponent {
  mobileOpen = signal(false);
  linkedinUrl = input<string>('https://linkedin.com/in/zni');
  githubUrl = input<string>('https://github.com/aaron168ready');
}
