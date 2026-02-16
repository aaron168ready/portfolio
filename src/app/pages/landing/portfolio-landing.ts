import { Component } from '@angular/core';
import { HeaderComponent } from '../layout/header/header';
import { HeroComponent } from '../../components/section/hero/hero';
import { ContactComponent } from '../../components/section/contact/contact';
import { SkillsComponent } from '../../components/section/skills/skills';
import { ExperiencesComponent } from '../../components/section/experiences/experiences';
import { ProjectsComponent } from '../../components/section/projects/projects';
import { FooterComponent } from '../layout/footer/footer';

@Component({
  selector: 'app-portfolio-landing',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    ContactComponent,
    SkillsComponent,
    ExperiencesComponent,
    ProjectsComponent,
    FooterComponent,
  ],
  templateUrl: 'portfolio-landing.html',
})
export class PortfolioLandingComponent {
  linkedinUrl = 'https://linkedin.com/in/zni';
  githubUrl = 'https://github.com/aaron168ready';
}
