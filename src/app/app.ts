import { Component, signal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

type QAItem = {
  id: string;
  title: string;
  sections: Array<{
    heading?: string;
    bullets?: string[];
    paragraphs?: string[];
  }>;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './app.html',
})
export class App {
  items: QAItem[] = [
    {
      id: 'q1',
      title: '1. Tell me about yourself',
      sections: [
        {
          heading: 'This is almost always the first question.',
          paragraphs: ['What they want:'],
          bullets: ['quick career summary', 'relevant tech experience', "why you're a good fit"],
        },
        {
          paragraphs: ['Structure:'],
          bullets: ['current role', 'key technologies', 'achievements', "why you're interested"],
        },
        {
          heading: 'Example outline:',
          paragraphs: [
            'I’m a full-stack software engineer primarily working with Java, Spring Boot, and modern frontend frameworks like Angular and React.',
            'Currently I work at Capgemini supporting financial clients where I build REST APIs and frontend components libraries, focusing on scalable backend services and clean UI architecture.',
            'In my current role as Principal software engineer, I work closely with system architect to help make high-level design decisions, ensure good code quality regularly, and review PRs with focus on best-practices and scalability.',
            'I enjoy improving system architecture to empower developers and enhance user experience, which is why this role interested me.',
          ],
        },
      ],
    },
    {
      id: 'q2',
      title: '2. Tell me about a challenging problem you solved',
      sections: [
        {
          paragraphs: ['Interviewers want to see:'],
          bullets: ['problem solving', 'debugging', 'technical depth'],
        },
        {
          paragraphs: ['Example themes you can use:'],
          bullets: ['performance issue', 'production bug', 'scaling problem', 'integration issue'],
        },
        {
          heading: 'Good example structure:',
          paragraphs: [
            'Situation: Per leadership decision, all UI components should be build using standardized design components(PrimeNG) or design tokens.',
            'Task: I was responsible for maintaining around 190 color tokens used by our feature components, which is a lot of maintenance whenever design team makes changes to the list.',
            'Action: I analyzed common patterns in the token spec files, used Tailwind CLI , Nx, and NodeJs to automate the token generation step before app is build. Not only that, I created a dashboard where all latest available color can be picked and used easily by the developers.',
            'Result: Significantly reduced debugging time and improve token accuracy confidence.',
          ],
        },
      ],
    },
    {
      id: 'q3',
      title: '3. Tell me about a time you disagreed with a teammate',
      sections: [
        {
          paragraphs: ['This tests:'],
          bullets: ['collaboration', 'communication', 'maturity'],
        },
        {
          paragraphs: ['Key rule:'],
          bullets: ['❌ never blame the other person'],
        },
        {
          heading: 'Example:',
          paragraphs: [
            "My architect preferred implementing a feature with a dependency on a feature in AG Grid, which we didn't know wasn't possible, while I suggested a simpler approach without the dependency.",
            'I scheduled a quick design discussion and we reviewed both options and built prototypes.',
            'We realized using the feature would create unnecessary complexity in workarounds and tech-debts.',
            'We agreed on a simpler implementation which reduced code size and made maintenance easier.',
          ],
        },
      ],
    },
    {
      id: 'q4',
      title: '4. Tell me about a time you made a mistake',
      sections: [
        {
          paragraphs: ['They want to see:'],
          bullets: ['accountability', 'learning'],
        },
        {
          heading: 'Example:',
          paragraphs: [
            "I once deployed a release that unintentionally caused a production artifact install issue because I didn't account for a package version change and had to abort during the process.",
            'Once I noticed the problem I immediately reported to the team and quickly discussed solutions to try.',
            'Afterward I created a review checklist that eventually got adopted as SOP in the code review process.',
            'It helped prevent similar issues in future releases.',
          ],
        },
      ],
    },
    {
      id: 'q5',
      title: '5. Tell me about a time you had to learn something quickly',
      sections: [
        {
          paragraphs: ['Software engineering requires constant learning.'],
        },
        {
          heading: 'Example:',
          paragraphs: [
            'In one project we needed to integrate Kafka for event processing but I had limited experience with it.',
            'I studied Kafka architecture, partitions, and consumer groups, then most importantly built small prototypes where I test the behaviors against new knowledge.',
            'Within a week I was able to implement the integration and document best practices for the team.',
          ],
        },
      ],
    },
    {
      id: 'q6',
      title: '6. Tell me about a time you improved a system',
      sections: [
        {
          paragraphs: ['This shows initiative.'],
        },
        {
          paragraphs: ['Example ideas:'],
          bullets: [
            'improved performance',
            'refactored legacy code',
            'automated something',
            'improved developer workflow',
          ],
        },
      ],
    },
    {
      id: 'q7',
      title: '7. Tell me about a time you handled pressure or deadlines',
      sections: [
        {
          heading: 'Example:',
          paragraphs: [
            "One of the dependency used by our library had a new version which included breaking changes 2 hours right before we're planned to release, and per leadership recommendation we need to use the latest version.",
            'As the release manager I identified the impacted files, analyzed the architecture dependency, and proposed release strategies to the team.',
            'We agreed to roll back to previous stable dependency version to proceed with release on time while implementing incremental upgrade and QA to make sure these incident does not happen again.',
          ],
        },
      ],
    },
    {
      id: 'q8',
      title: '8. Tell me about a time you worked with a difficult stakeholder',
      sections: [
        {
          paragraphs: ['Important for enterprise companies like banks or insurance.'],
        },
        {
          heading: 'Example:',
          paragraphs: [
            "A business stakeholder in charge of standardization of organization app's UI design wanted restricted access to the designer approved tokens.",
            'As part of a product team with dependency on the design tokens I explained the technical constraints and proposed a phased solution where we surface a subset of tokens first.',
            'This allowed the product team to start using the designs while we helped their team completed the full designed component inventory.',
          ],
        },
      ],
    },
    {
      id: 'q9',
      title: '9. Why do you want to work here?',
      sections: [
        {
          paragraphs: ['Always research:'],
          bullets: ['company mission', 'products', 'industry'],
        },
        {
          heading: 'Example for insurance / finance companies like Prudential:',
          paragraphs: [
            "I'm interested in how technology is transforming financial services and insurance.",
            "Prudential's focus on long-term financial security and digital transformation makes this a place where strong engineering can have meaningful impact.",
            'I’m particularly interested in contributing to scalable systems that support financial products used by millions of customers.',
          ],
        },
      ],
    },
    {
      id: 'q10',
      title: '10. What are your strengths and weaknesses?',
      sections: [
        {
          heading: 'Strength examples:',
          bullets: ['system design thinking', 'debugging complex problems', 'learning quickly'],
        },
        {
          heading: 'Weakness examples (safe ones):',
          bullets: ['sometimes too detail oriented', 'previously hesitant to delegate'],
        },
        {
          paragraphs: ['But always include improvement steps.'],
        },
      ],
    },
    {
      id: 'q11',
      title: '11. How would you design a REST API?',
      sections: [
        {
          heading: 'Answer',
          paragraphs: [
            'I would start with the resources first, not the endpoints. So I would identify core entities like users, accounts, or orders, then map them to clear nouns in the URL',
            'I would use standard HTTP methods like GET for retrieval, POST for creation, PUT/PATCH for updates, and DELETE for deletions.',
          ],
          bullets: [
            'request and response shapes are consistent',
            'proper status codes are returned',
            'validation, error handling, and versioning are in place',
            'auth is handled, usually with OAuth2 or JWT depending on the system',
          ],
        },
      ],
    },
    {
      id: 'q12',
      title: '12. How do you handle concurrency in Java?',
      sections: [
        {
          heading: 'Answer',
          paragraphs: [
            'My first choice is usually to avoid shared mutable state when possible. That is s the cleanest solution. If threads do need to share data, then I would use the right tools like:',
          ],
          bullets: [
            'synchronized blocks or methods for simple cases',
            'ConcurrentHashMap for shared collections',
            'atomic classes for value types',
          ],
        },
      ],
    },
    {
      id: 'q13',
      title: '13. How do you design a microservice?',
      sections: [
        {
          heading: 'Answer',
          paragraphs: [
            'I would design a microservice around a single business capability. So not just “one small app,” but one service with a clear responsibility and ownership boundary. \nUsually I would make sure it has:',
          ],
          bullets: [
            'its own domain responsibility',
            'its own data ownership if possible',
            'a clean API contract',
            '[optional] clear observability: logs, metrics, tracing',
            '[optional] fault handling like retries, timeouts, and circuit breakers',
          ],
        },
      ],
    },
  ];

  // Single-open accordion: store the currently open id (or null)
  openId = signal<string | null>('q1');

  toggle(id: string) {
    this.openId.update((cur) => (cur === id ? null : id));
  }

  isOpen(id: string) {
    return this.openId() === id;
  }

  toggleDarkMode() {
    const html = document.documentElement;

    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
    } else {
      html.classList.add('dark');
    }
  }
}
