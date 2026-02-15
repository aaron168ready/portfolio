export type Experience = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    role: 'Principle Software Engineer (Contract)',
    org: 'Fidelity Investments',
    period: 'May 2025 — Present',
    bullets: [
      'Led teams of 9 developers, managing priorities and refinement to ensure on-time delivery while maintaining 100% test coverage in fast-paced release cycles.',
      'Built and published Angular UI component libraries for AG Grid supporting 10+ teams of developers, traders, and analysts across business domains.',
      'Used TailwindCSS CLI and Nx to streamline design token generation, cutting maintenance time by ~90% and improving token accuracy.',
      'Leveraged GitHub Copilot to generate library API documentation, boosting productivity by ~200%.',
      'Reviewed 7–12 PRs per week focusing on reusability, best practices, modern Angular patterns, scalability, and performance.',
      'Streamlined end-to-end testing using Playwright fixtures to reduce duplication and improve test stability by ~90%.',
    ],
  },
  {
    role: 'IT Developer (Contract)',
    org: 'Navy Federal Credit Union',
    period: 'Aug 2024 — Mar 2025',
    bullets: [
      'Documented 170+ REST and SOAP APIs hosted on Azure with DB2 and mainframe backend systems.',
      'Automated API documentation by parsing OpenAPI specs using FasterXML/Jackson, reducing manual effort by ~80% and minimizing human error.',
    ],
  },
  {
    role: 'Fullstack Developer (Contract)',
    org: 'Discover Financial Services',
    period: 'Feb 2023 — Aug 2024',
    bullets: [
      'Redesigned a legacy batch process into a Kafka-driven system, cutting 3M+ record processing from ~6 hours to under 30 minutes with monitoring and fault tolerance.',
      'Implemented auto-scaling on OpenShift to handle spikes during Kafka kickoff events while lowering overhead.',
      'Implemented ELK stack monitoring and automated email notifications to improve debug efficiency by ~60%.',
      'Redesigned a monolithic frontend into a React/Angular framework-agnostic micro-frontend architecture using Webpack Module Federation, reducing release cycle time by ~40%.',
      'Architected micro-frontend state management using an open-source redux-micro-frontend approach to streamline cross-team state communication.',
    ],
  },
  {
    role: 'Fullstack Developer (Contract)',
    org: 'Fidelity Investments',
    period: 'Feb 2022 — Feb 2023',
    bullets: [
      'Built an Angular UI managing 800+ specialized form elements with complex relationships using reactive forms.',
      'Integrated with Java microservice backend for CRUD operations, helping business users and developers roll out updates efficiently.',
      'Implemented ETL for 65+ data points from legacy systems (DB2, Oracle, mainframe) to target systems.',
      'Created an Angular dashboard using RxJS to asynchronously report migration status and errors.',
    ],
  },
  {
    role: 'Associate Consultant',
    org: 'Capgemini',
    period: 'Aug 2021 — Present',
    bullets: [
      'Led digital transformation initiatives to optimize business processes and develop solutions that boost operational efficiency.',
      'Guided junior developers on delivery strategies, client communication, and transitioning to billable roles.',
      'Maintained a talent network across engineering disciplines to fill openings efficiently and keep stakeholder communication strong.',
    ],
  },
];
