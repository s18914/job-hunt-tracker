import type { Locale } from '@/lib/i18n/config'

interface Stat {
  value: string
  label: string
}

interface Experience {
  role: string
  company: string
  location: string
  period: string
  highlights: string[]
}

interface SkillGroup {
  name: string
  items: string[]
}

export interface Project {
  name: string
  period: string
  description: string
  highlights: string[]
  tech: string[]
  links?: { label: string; href: string }[]
}

interface Education {
  degree: string
  school: string
  period: string
}

interface Language {
  name: string
  level?: string
}

interface Cv {
  name: string
  role: string
  github: string
  summary: string
  stats: Stat[]
  experience: Experience[]
  commercialProjects: Project[]
  personalProjects: Project[]
  skills: SkillGroup[]
  education: Education[]
  languages: Language[]
}

const contact = {
  name: 'Emilia Cholewicka',
  role: 'Frontend Developer',
  github: 'https://github.com/s18914',
}

const links = {
  kupfundusz: 'https://kupfundusz.pl',
  investBuddyDemo: 'https://invest-buddy-omega.vercel.app',
  investBuddyRepo: 'https://github.com/s18914/InvestBuddy',
  jobHuntTrackerRepo: 'https://github.com/s18914/job-hunt-tracker',
}

const tech = {
  kupfundusz: [
    'React',
    'TypeScript',
    'SASS/SCSS',
    'D3.js',
    'Recoil',
    'TanStack Query',
    'Axios',
    'React Hook Form',
    'SignalR',
    'MUI',
    'C# (.NET)',
    'PostgreSQL',
  ],
  website: ['JavaScript', 'HTML', 'SCSS', 'Twig (Symfony)', 'Sketch', 'Git', 'Scrum'],
  mobile: ['React Native', 'TypeScript', 'WebView'],
  investBuddy: ['React', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL', 'Vercel'],
  jobHuntTracker: [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Drizzle ORM',
    'PostgreSQL',
  ],
}

export const cv: Record<Locale, Cv> = {
  pl: {
    ...contact,
    summary:
      'Jestem magistrem inżynierem informatyki z 5-letnim doświadczeniem w IT. Łączę kompetencje frontendowe z solidnym zrozumieniem logiki backendowej i baz danych — to połączenie wciąż rzadko spotykane na rynku. W codziennej pracy przykładam dużą wagę do szczegółów: dbam o to, by interfejs działał bezbłędnie w każdej rozdzielczości. W zespole naturalnie biorę na siebie rolę organizacyjną — pilnuję statusów zadań, proaktywnie komunikuję postępy i reprezentuję zespół w rozmowach z klientem przy zbieraniu wymagań. Obecnie poszerzam kompetencje w kierunku React Native oraz UI/UX, a także świadomie wykorzystuję narzędzia AI-assisted development we własnym warsztacie pracy.',
    stats: [
      { value: '5 lat', label: 'doświadczenia w IT' },
      { value: '12 000+', label: 'użytkowników platformy, którą rozwijam' },
      { value: '300+ mln zł', label: 'aktywów zarządzanych na platformie' },
    ],
    experience: [
      {
        role: 'Frontend Developer',
        company: 'Kupfundusz.pl',
        location: 'Warszawa',
        period: '2022 – obecnie',
        highlights: [
          'Biorę udział w rozwoju i utrzymaniu platformy inwestycyjnej (React, TypeScript) wykorzystywanej przez ponad 12 000 użytkowników i zarządzającej aktywami przekraczającymi 300 mln złotych.',
          'Pełnię rolę osoby wiodącej w projekcie budowy mobilnej wersji aplikacji (React Native).',
          'Integruję frontend z API backendowym opartym na .NET/C#, a także samodzielnie tworzę endpointy i logikę po stronie backendu, w tym modyfikacje bazy danych na potrzeby zadań frontendowych (PostgreSQL).',
          'Aktywnie uczestniczę w spotkaniach dotyczących planowania prac i ustalania wymagań klienta.',
        ],
      },
      {
        role: 'Junior SQL Developer',
        company: 'Certusoft',
        location: 'Warszawa',
        period: '2021 – 2022',
        highlights: [
          'Obsługiwałam system ERP dla kilku klientów biznesowych — od zbierania wymagań i konfiguracji po wdrożenie zmian (T-SQL, HTML/XML, Vue.js).',
          'Diagnozowałam i naprawiałam błędy oraz wdrażałam nowe funkcjonalności, pracując zarówno nad logiką bazodanową (T-SQL), jak i warstwą frontendową (HTML, XML, Vue.js).',
          'Pisałam i optymalizowałam procedury T-SQL oraz obsługiwałam eskalacje klientów, pracując pod presją czasu przy zmianach krytycznych funkcjonalności.',
        ],
      },
    ],
    commercialProjects: [
      {
        name: 'Platforma Kupfundusz',
        period: '2022 – obecnie',
        description:
          'Platforma inwestycyjna wykorzystywana przez ponad 12 000 użytkowników, zarządzająca aktywami przekraczającymi 300 mln zł. Składa się z aplikacji klienta i aplikacji administratora. Obecnie odświeżamy jej design według ekranów projektowanych przez zespół Squareblack (Diana i Michał Malewicz), dzięki czemu poszerzam wiedzę o najnowszych trendach UX/UI.',
        highlights: [
          'Buduję responsywne komponenty UI i system designu (React, TypeScript, SASS/SCSS).',
          'Tworzę wizualizacje danych w D3.js.',
          "Zarządzam stanem w Recoil, a dane pobieram i cache'uję z TanStack React Query i Axios.",
          'Obsługuję formularze i walidację (React Hook Form) oraz komunikację w czasie rzeczywistym przez SignalR.',
          'W aplikacji administratora korzystam dodatkowo z biblioteki MUI.',
          'Piszę i utrzymuję endpointy oraz logikę biznesową w C# (.NET), w tym zmiany struktury i zapytań w bazie PostgreSQL.',
        ],
        tech: tech.kupfundusz,
      },
      {
        name: 'Strona kupfundusz.pl',
        period: 'styczeń – czerwiec 2024',
        description:
          'Rozbudowana strona będąca wizytówką platformy, z interfejsem zaprojektowanym przez zespół Squareblack. Wyzwaniem były liczne animowane przejścia, dynamiczne kalkulatory finansowe w JavaScripcie i wymóg pikselowo dokładnego wyglądu w każdej rozdzielczości.',
        highlights: [
          'Byłam główną osobą odpowiedzialną za frontend i wspierałam pozostałych członków zespołu.',
          'Stworzyłam szkielet strony z reużywalnymi komponentami, dynamiczne wykresy i większość podstron serwisu.',
        ],
        tech: tech.website,
        links: [{ label: 'kupfundusz.pl', href: links.kupfundusz }],
      },
      {
        name: 'Aplikacja mobilna Kupfundusz',
        period: 'w trakcie',
        description:
          'Natywna aplikacja mobilna w React Native, która łączy dotychczasową platformę webową z warstwą mobilną za pomocą WebView i ma udostępnić platformę Kupfundusz w App Store. Aplikacja jest w fazie wstępnych testów.',
        highlights: [
          'Jestem osobą wiodącą w projekcie.',
          'Samodzielnie nauczyłam się React Native na potrzeby projektu.',
          'Konsultowałam potrzebne ekrany z zespołem Squareblack, a następnie je zaimplementowałam.',
        ],
        tech: tech.mobile,
      },
    ],
    personalProjects: [
      {
        name: 'InvestBuddy',
        period: 'listopad 2025 – luty 2026',
        description:
          'Samodzielnie zaprojektowana i zaimplementowana aplikacja webowa, która pomaga początkującym inwestorom śledzić portfel inwestycyjny i podejmować świadome decyzje finansowe.',
        highlights: [
          'Profilowanie użytkownika według standardu MiFID.',
          'Śledzenie wielu klas aktywów: obligacje, lokaty, konta oszczędnościowe, fundusze inwestycyjne, IKE/IKZE, PPK, złoto, waluty i gotówka.',
          'Interaktywne wizualizacje historii wartości portfela.',
          'Inteligentna optymalizacja portfela (rebalancing).',
          'System reguł i alertów: zapadalność lokat, przekroczenie limitów gotówkowych, terminy wpłat na IKE/IKZE.',
        ],
        tech: tech.investBuddy,
        links: [
          { label: 'Demo', href: links.investBuddyDemo },
          { label: 'Kod na GitHubie', href: links.investBuddyRepo },
        ],
      },
      {
        name: 'Job Hunt Tracker',
        period: 'w trakcie',
        description:
          'Aplikacja, którą właśnie oglądasz: tracker rekrutacji, w którym śledzisz swoje aplikacje o pracę od wysłania CV aż po ofertę.',
        highlights: [
          'Next.js z App Routerem: Server Components i Server Actions.',
          'Logowanie oparte na JWT i baza PostgreSQL obsługiwana przez Drizzle ORM.',
          'Dwie wersje językowe (PL/EN) z przełącznikiem języka.',
        ],
        tech: tech.jobHuntTracker,
        links: [{ label: 'Kod na GitHubie', href: links.jobHuntTrackerRepo }],
      },
    ],
    skills: [
      {
        name: 'Frontend',
        items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS', 'SASS/SCSS', 'UI/UX'],
      },
      { name: 'Mobilne', items: ['React Native'] },
      {
        name: 'Biblioteki',
        items: [
          'D3',
          'MUI',
          'Framer',
          'Recoil',
          'TanStack React Query',
          'Axios',
          'React Hook Form',
          'SignalR',
        ],
      },
      {
        name: 'Backend',
        items: [
          'C# (.NET)',
          'Integracja z API',
          'Node.js',
          'SQL',
          'T-SQL',
          'PostgreSQL',
          'Supabase',
          'Relacyjne bazy danych',
        ],
      },
      { name: 'Narzędzia AI', items: ['Claude Code', 'Cursor', 'Windsurf'] },
      {
        name: 'Narzędzia i proces',
        items: [
          'Git',
          'CI/CD (GitLab CI)',
          'Jira',
          'Vite',
          'Vercel',
          'Sketch',
          'Figma',
          'Visual Studio',
          'JetBrains Rider',
          'Scrum',
        ],
      },
    ],
    education: [
      {
        degree: 'Magister inżynier, Informatyka',
        school: 'Europejska Uczelnia w Warszawie',
        period: '2024 – 2026',
      },
      {
        degree: 'Inżynier, Informatyka',
        school: 'Polsko-Japońska Akademia Technik Komputerowych',
        period: '2018 – 2022',
      },
    ],
    languages: [{ name: 'Polski' }, { name: 'Angielski', level: 'B2' }],
  },
  en: {
    ...contact,
    summary:
      "I hold an MSc Eng in Computer Science and have 5 years of experience in IT, combining frontend skills with a solid understanding of backend logic and databases, a combination that's still rare on the market. I pay close attention to detail and make sure the interface works flawlessly at every resolution. In a team, I naturally take on an organizational role: I keep an eye on task statuses, proactively communicate progress and represent the team in client meetings when gathering requirements. I'm currently expanding my skills in React Native and UI/UX, and I deliberately use AI-assisted development tools in my daily work.",
    stats: [
      { value: '5 years', label: 'of experience in IT' },
      { value: '12,000+', label: 'users of the platform I develop' },
      { value: 'PLN 300M+', label: 'in assets managed on the platform' },
    ],
    experience: [
      {
        role: 'Frontend Developer',
        company: 'Kupfundusz.pl',
        location: 'Warsaw',
        period: '2022 – present',
        highlights: [
          'Develop and maintain an investment platform (React, TypeScript) used by over 12,000 users and managing assets of more than PLN 300 million.',
          'Lead the project to build the mobile version of the app (React Native).',
          'Integrate the frontend with a .NET/C# backend API, and independently build endpoints and backend logic, including database changes needed for frontend tasks (PostgreSQL).',
          'Take an active part in planning meetings and gathering client requirements.',
        ],
      },
      {
        role: 'Junior SQL Developer',
        company: 'Certusoft',
        location: 'Warsaw',
        period: '2021 – 2022',
        highlights: [
          'Supported an ERP system for several business clients, from gathering requirements and configuration to deploying changes (T-SQL, HTML/XML, Vue.js).',
          'Diagnosed and fixed bugs and delivered new features, working on both the database logic (T-SQL) and the frontend layer (HTML, XML, Vue.js).',
          'Wrote and optimized T-SQL procedures and handled client escalations under time pressure during changes to critical functionality.',
        ],
      },
    ],
    commercialProjects: [
      {
        name: 'Kupfundusz Platform',
        period: '2022 – present',
        description:
          'An investment platform used by over 12,000 users, managing assets of more than PLN 300 million. It consists of a client app and an admin app. We are currently refreshing its design based on screens by the Squareblack team (Diana and Michał Malewicz), which helps me keep up with the latest UX/UI trends.',
        highlights: [
          'Build responsive UI components and a design system (React, TypeScript, SASS/SCSS).',
          'Create data visualizations with D3.js.',
          'Manage state with Recoil, and fetch and cache data with TanStack React Query and Axios.',
          'Handle forms and validation (React Hook Form) and real-time communication via SignalR.',
          'Use the MUI library in the admin app.',
          'Write and maintain endpoints and business logic in C# (.NET), including changes to the PostgreSQL database structure and queries.',
        ],
        tech: tech.kupfundusz,
      },
      {
        name: 'kupfundusz.pl Website',
        period: 'January – June 2024',
        description:
          'An extensive website that serves as the showcase of the platform, with an interface designed by the Squareblack team. The challenges were numerous animated transitions, dynamic financial calculators in JavaScript, and a pixel-perfect look at every resolution.',
        highlights: [
          'Was the main person responsible for the frontend and supported the other team members.',
          'Built the site skeleton with reusable components, dynamic charts and most of the subpages.',
        ],
        tech: tech.website,
        links: [{ label: 'kupfundusz.pl', href: links.kupfundusz }],
      },
      {
        name: 'Kupfundusz Mobile App',
        period: 'in progress',
        description:
          'A native React Native app that connects the existing web platform with a mobile layer through WebView, with the goal of releasing the Kupfundusz platform on the App Store. The app is currently in early testing.',
        highlights: [
          'Lead the project.',
          'Learned React Native on my own for this project.',
          'Consulted the required screens with the Squareblack team and then implemented them.',
        ],
        tech: tech.mobile,
      },
    ],
    personalProjects: [
      {
        name: 'InvestBuddy',
        period: 'November 2025 – February 2026',
        description:
          'A web app I designed and built on my own to help beginner investors track their portfolio and make informed financial decisions.',
        highlights: [
          'User profiling based on the MiFID standard.',
          'Tracking of many asset classes: bonds, deposits, savings accounts, investment funds, Polish retirement accounts (IKE/IKZE, PPK), gold, currencies and cash.',
          'Interactive charts of portfolio value over time.',
          'Smart portfolio optimization (rebalancing).',
          'Rule-based alerts: deposit maturity, exceeded cash limits and IKE/IKZE contribution deadlines.',
        ],
        tech: tech.investBuddy,
        links: [
          { label: 'Demo', href: links.investBuddyDemo },
          { label: 'Source code', href: links.investBuddyRepo },
        ],
      },
      {
        name: 'Job Hunt Tracker',
        period: 'in progress',
        description:
          'The app you are looking at: a tracker for your job applications, from first submission to offer.',
        highlights: [
          'Next.js App Router with Server Components and Server Actions.',
          'JWT-based authentication and a PostgreSQL database accessed with Drizzle ORM.',
          'Polish and English versions with a language switcher.',
        ],
        tech: tech.jobHuntTracker,
        links: [{ label: 'Source code', href: links.jobHuntTrackerRepo }],
      },
    ],
    skills: [
      {
        name: 'Frontend',
        items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS', 'SASS/SCSS', 'UI/UX'],
      },
      { name: 'Mobile', items: ['React Native'] },
      {
        name: 'Libraries',
        items: [
          'D3',
          'MUI',
          'Framer',
          'Recoil',
          'TanStack React Query',
          'Axios',
          'React Hook Form',
          'SignalR',
        ],
      },
      {
        name: 'Backend',
        items: [
          'C# (.NET)',
          'API integration',
          'Node.js',
          'SQL',
          'T-SQL',
          'PostgreSQL',
          'Supabase',
          'Relational databases',
        ],
      },
      { name: 'AI tools', items: ['Claude Code', 'Cursor', 'Windsurf'] },
      {
        name: 'Tools & process',
        items: [
          'Git',
          'CI/CD (GitLab CI)',
          'Jira',
          'Vite',
          'Vercel',
          'Sketch',
          'Figma',
          'Visual Studio',
          'JetBrains Rider',
          'Scrum',
        ],
      },
    ],
    education: [
      {
        degree: 'MSc Eng, Computer Science',
        school: 'Europejska Uczelnia w Warszawie',
        period: '2024 – 2026',
      },
      {
        degree: 'BSc Eng, Computer Science',
        school: 'Polsko-Japońska Akademia Technik Komputerowych',
        period: '2018 – 2022',
      },
    ],
    languages: [{ name: 'Polish' }, { name: 'English', level: 'B2' }],
  },
}
