import { Component, input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.html',
})
export class ContactComponent {
  year = new Date().getFullYear();
  githubUrl = input<string>('https://github.com/aaron168ready');
  email = 'aaron168ready@gmail.com';
  linkedinUrl = input<string>('https://linkedin.com/in/zni');
}
