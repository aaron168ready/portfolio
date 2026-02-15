export type SkillGroup = {
  title: string;
  desc: string;
  items: string[];
};

export const skillGroups = [
  {
    title: 'Frontend',
    desc: 'Scalable UI architecture, theming, accessibility.',
    items: [
      'Angular 20',
      'React',
      'AG Grid',
      'TypeScript',
      'TailwindCSS',
      'Redux',
      'RxJS',
      'NgRx',
      'Nx',
      'Module Federation',
      'Microfrontends',
    ],
  },
  {
    title: 'Backend',
    desc: 'APIs, auth, persistence, integrations.',
    items: [
      'Java 8',
      'Python',
      'SQL',
      'Spring Boot',
      'REST API',
      'JWT/OAuth',
      'PostgreSQL',
      'Kafka',
      'Kafka Connect',
    ],
  },
  {
    title: 'Quality',
    desc: 'Testing, reliability, maintainability.',
    items: [
      'Jasmine',
      'Cucumber',
      'Playwright',
      'TDD/BDD',
      'CI/CD',
      'Code review',
      'Observability',
    ],
  },
  {
    title: 'Delivery',
    desc: 'Release workflows and infrastructure basics.',
    items: [
      'Docker',
      'Kubernetes (OpenShift)',
      'Blue/Green',
      'GitHub Actions',
      'Jenkins',
      'Monorepo',
    ],
  },
];
