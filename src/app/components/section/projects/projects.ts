import { Component } from '@angular/core';
import { Project, projects } from '../../../pages/landing/projects';

@Component({
  selector: 'app-projects',
  templateUrl: 'projects.html',
})
export class BackgroundComponent {
  projects: Project[] = projects;
}
