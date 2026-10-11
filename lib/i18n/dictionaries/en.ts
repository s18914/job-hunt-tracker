import type { Dictionary } from './pl'

export const en: Dictionary = {
  nav: {
    features: 'Features',
    faq: 'FAQ',
    about: 'About me',
    signIn: 'Sign in',
    signUp: 'Sign up',
    language: 'Site language',
  },
  footer: {
    tagline:
      'Keep track of your job applications, from first submission to offer.',
    product: 'Product',
    author: 'Author',
  },
  home: {
    titleStart: 'Your job search,',
    titleHighlight: 'organized',
    description:
      'Track every application from first submission to offer. Always know where you stand and which role deserves your energy next.',
    cta: 'Get Started',
  },
  features: {
    title: 'Features',
    description:
      "Everything you need to keep your job search under control, and nothing you don't.",
    items: [
      {
        title: 'Application Tracking',
        description:
          'Add every role you apply for and keep the company, position and your notes in one place.',
      },
      {
        title: 'Clear Stages',
        description:
          'Move each application through the process: saved, applied, interview, offer or rejected.',
      },
      {
        title: 'Priorities',
        description:
          'Mark how much you want each role, so you know where to focus your time and energy.',
      },
      {
        title: 'Dashboard Overview',
        description:
          'See all your applications at a glance, with the most recent ones at the top.',
      },
      {
        title: 'Secure Account',
        description:
          'Sign in with email and password. Passwords are hashed and sessions are kept in signed tokens.',
      },
      {
        title: 'Light and Dark Theme',
        description:
          'The interface follows your system theme and works on any screen size.',
      },
    ],
  },
  faq: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'What is Job Hunt Tracker?',
        answer:
          'A simple app for keeping track of job applications. Add the roles you apply for, update their stage as the process moves on, and always know where you stand.',
      },
      {
        question: 'How do I create an account?',
        answer:
          "Click the 'Sign up' button in the top navigation bar. You'll need to provide an email address and create a password.",
      },
      {
        question: 'Is it free to use?',
        answer:
          'Yes. Job Hunt Tracker is a portfolio project, so there are no paid plans.',
      },
      {
        question: 'Who built it?',
        answer:
          'Emilia Cholewicka, a frontend developer. You can find her experience and skills on the About me page.',
      },
      {
        question: 'How do I report a bug or suggest a feature?',
        answer:
          "Open an issue in the project's GitHub repository. Feedback is always welcome!",
      },
      {
        question: 'What technologies does it use?',
        answer:
          'Next.js with the App Router and Server Actions, React, TypeScript, Tailwind CSS, Drizzle ORM and a PostgreSQL database.',
      },
    ],
  },
  about: {
    experience: 'Experience',
    skills: 'Skills',
    commercialProjects: 'Commercial Projects',
    commercialProjectsNote: 'Built at Kupfundusz.pl',
    personalProjects: 'Personal Projects',
    education: 'Education',
    languages: 'Languages',
    moreProjects: 'More projects on GitHub',
  },
  auth: {
    signInTitle: 'Sign in to your account',
    noAccount: "Don't have an account?",
    signUpTitle: 'Create a new account',
    haveAccount: 'Already have an account?',
  },
}
