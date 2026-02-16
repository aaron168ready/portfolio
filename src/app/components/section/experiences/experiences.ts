import { Component } from '@angular/core';
import { Experience, experiences } from './experience-lists';

@Component({
  selector: 'app-experiences',
  templateUrl: 'experiences.html',
})
export class ExperiencesComponent {
  experiences: Experience[] = experiences;
}
