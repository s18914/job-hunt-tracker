export const pl = {
  nav: {
    features: 'Funkcje',
    faq: 'FAQ',
    about: 'O mnie',
    signIn: 'Zaloguj się',
    signUp: 'Zarejestruj się',
    language: 'Język strony',
  },
  footer: {
    tagline: 'Śledź swoje rekrutacje: od wysłania aplikacji aż po ofertę.',
    product: 'Produkt',
    author: 'Autorka',
  },
  home: {
    titleStart: 'Szukanie pracy',
    titleHighlight: 'pod kontrolą',
    description:
      'Śledź każdą aplikację od wysłania CV aż po ofertę. Zawsze wiesz, na jakim etapie jesteś i której rekrutacji warto poświęcić energię.',
    cta: 'Zacznij teraz',
  },
  features: {
    title: 'Funkcje',
    description:
      'Wszystko, czego potrzebujesz, żeby panować nad szukaniem pracy. I nic ponad to.',
    items: [
      {
        title: 'Śledzenie aplikacji',
        description:
          'Dodawaj każdą rolę, na którą aplikujesz, i trzymaj firmę, stanowisko oraz notatki w jednym miejscu.',
      },
      {
        title: 'Przejrzyste etapy',
        description:
          'Przesuwaj aplikacje przez kolejne etapy: zapisane, wysłane, rozmowa, oferta lub odmowa.',
      },
      {
        title: 'Priorytety',
        description:
          'Zaznacz, jak bardzo zależy Ci na danej roli, żeby wiedzieć, na czym skupić czas i energię.',
      },
      {
        title: 'Przegląd na dashboardzie',
        description:
          'Wszystkie aplikacje w jednym widoku, najnowsze na samej górze.',
      },
      {
        title: 'Bezpieczne konto',
        description:
          'Logowanie e-mailem i hasłem. Hasła są hashowane, a sesje przechowywane w podpisanych tokenach.',
      },
      {
        title: 'Jasny i ciemny motyw',
        description:
          'Interfejs dopasowuje się do motywu systemu i działa na każdym rozmiarze ekranu.',
      },
    ],
  },
  faq: {
    title: 'Najczęściej zadawane pytania',
    items: [
      {
        question: 'Czym jest Job Hunt Tracker?',
        answer:
          'To prosta aplikacja do śledzenia rekrutacji. Dodajesz stanowiska, na które aplikujesz, aktualizujesz etap, gdy proces idzie dalej, i zawsze wiesz, na czym stoisz.',
      },
      {
        question: 'Jak założyć konto?',
        answer:
          'Kliknij przycisk „Zarejestruj się” w górnym pasku nawigacji. Wystarczy podać adres e-mail i utworzyć hasło.',
      },
      {
        question: 'Czy aplikacja jest darmowa?',
        answer:
          'Tak. Job Hunt Tracker to projekt portfolio, więc nie ma żadnych płatnych planów.',
      },
      {
        question: 'Kto ją stworzył?',
        answer:
          'Emilia Cholewicka, frontend developerka. Jej doświadczenie i umiejętności znajdziesz na stronie „O mnie”.',
      },
      {
        question: 'Jak zgłosić błąd albo zaproponować nową funkcję?',
        answer:
          'Otwórz issue w repozytorium projektu na GitHubie. Każda opinia jest mile widziana!',
      },
      {
        question: 'Jakich technologii używa?',
        answer:
          'Next.js z App Routerem i Server Actions, React, TypeScript, Tailwind CSS, Drizzle ORM oraz baza danych PostgreSQL.',
      },
    ],
  },
  about: {
    experience: 'Doświadczenie',
    skills: 'Umiejętności',
    commercialProjects: 'Projekty komercyjne',
    commercialProjectsNote: 'Zrealizowane w Kupfundusz.pl',
    personalProjects: 'Projekty własne',
    education: 'Wykształcenie',
    languages: 'Języki',
    moreProjects: 'Więcej projektów na GitHubie',
  },
  auth: {
    signInTitle: 'Zaloguj się na swoje konto',
    noAccount: 'Nie masz konta?',
    signUpTitle: 'Utwórz nowe konto',
    haveAccount: 'Masz już konto?',
  },
}

export type Dictionary = typeof pl
