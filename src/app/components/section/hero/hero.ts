import { Component } from '@angular/core';
import { EmploymentStatus, EmploymentStatusType } from '../../employment-status/employment-status';

@Component({
  selector: 'app-hero',
  imports: [EmploymentStatus],
  templateUrl: 'hero.html',
})
export class HeroComponent {
  status: EmploymentStatusType = 'busy';
  resumeUrl = '/assets/resume.pdf';
  heroChips = [
    'Angular 20',
    'React',
    'TailwindCSS 4',
    'TypeScript',
    'Java',
    'Spring Boot',
    'Nx Monorepo',
    'Kafka',
    'SQL',
    'CI/CD',
    'Testing (Jasmine/Playwright)',
  ];
  heroList = [
    {
      title: 'Component library',
      desc: 'Accessible, themed components with tokens + variants.',
      badge: 'UI',
    },
    { title: 'Monorepo tooling', desc: 'Nx patterns for scaling apps, libs, and CI.', badge: 'DX' },
    {
      title: 'Full-stack delivery',
      desc: 'API design, auth, DB modeling, deployment.',
      badge: 'Backend',
    },
  ];
  highlights = [
    { value: '5+ yrs', label: 'Shipping production software' },
    { value: 'Nx + Angular', label: 'Scaled frontends & shared libraries' },
    { value: 'AG Grid + Angular', label: 'Production Level AG Grid Features' },
    { value: 'Kafka Connect', label: 'Streamlined data pipelines' },
    { value: 'CI/CD', label: 'Automated testing + release pipelines' },
    { value: 'Playwright', label: 'Streamlined E2E testing' },
  ];
}
