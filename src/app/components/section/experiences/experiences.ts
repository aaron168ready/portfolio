import { Component } from '@angular/core';
import { Experience, experiences } from '../../../pages/landing/experiences';

@Component({
  selector: 'app-experiences',
  templateUrl: 'experiences.html',
})
export class ExperiencesComponent {
  experiences: Experience[] = experiences;
}
