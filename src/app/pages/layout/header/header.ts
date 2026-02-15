import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: 'header.html',
})
export class HeaderComponent {
  mobileOpen = signal(false);
  linkedinUrl = input<string>('https://linkedin.com/in/zni');
  githubUrl = input<string>('https://github.com/aaron168ready');
}
