export type Project = {
  title: string;
  desc: string;
  tags: string[];
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: 'Angular AG Grid Component Libraries',
    desc: 'Built and published Angular UI component libraries for AG Grid with production-level features, supporting 10+ teams of developers, traders, and analysts.',
    tags: [
      'Angular',
      'AG Grid',
      'NgRx',
      'PrimeNG',
      'Tailwind CSS',
      'Figma',
      'Component Library',
      'Enterprise',
    ],
    href: '#',
    repo: '#',
  },
  {
    title: 'Design Token Generation Pipeline (Nx + Tailwind CLI)',
    desc: 'Streamlined design token generation using TailwindCSS CLI and Nx, cutting maintenance time by ~90% and improving token accuracy.',
    tags: ['TailwindCSS CLI', 'Nx', 'Typescript', 'Design Tokens', 'Automation'],
    href: '#',
    repo: '#',
  },
  {
    title: 'Playwright E2E Fixture Framework',
    desc: 'Standardized end-to-end testing with Playwright fixtures to reduce duplication and improve test stability by ~90%.',
    tags: ['Playwright', 'E2E', 'Fixtures', 'Test Stability'],
    href: '#',
    repo: '#',
  },
  {
    title: 'Kafka-Driven Batch Modernization',
    desc: 'Redesigned a legacy batch process into a Kafka-driven system, reducing processing time for 3M+ records from ~6 hours to under 30 minutes with monitoring and fault tolerance.',
    tags: [
      'Kafka',
      'Kafka Connect',
      'S3',
      'Kubernetes(OpenShift)',
      'High Throughput',
      'Fault Tolerance',
      'ELK Stack',
    ],
    href: '#',
    repo: '#',
  },
  {
    title: 'Micro-Frontend Migration (Module Federation)',
    desc: 'Migrated a large monolithic frontend into a framework-agnostic micro-frontend architecture using Webpack Module Federation and micro-frontend state management.',
    tags: ['Angular', 'React', 'Module Federation', 'Microfrontends', 'Webpack', 'Redux'],
    href: '#',
    repo: '#',
  },
  {
    title: 'Form UI Component Management Dashboard',
    desc: 'Built an Angular dashboard to manage 800+ specialized form components with complex relationships, powered with reactive forms to handle dynamic interactions and validation.',
    tags: ['Angular', 'Reactive Form', 'Dashboard', 'UI Components'],
  },
];
