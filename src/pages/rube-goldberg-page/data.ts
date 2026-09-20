import type { Bi } from './use-copy'
import ambalajLogo from '../../assets/rube-goldberg/sponsors/ambalaj.png'
import cybercorLogo from '../../assets/rube-goldberg/sponsors/cybercor.png'
import diezLogo from '../../assets/rube-goldberg/sponsors/diez.png'
import kleverLogo from '../../assets/rube-goldberg/sponsors/klever.png'
import utmLogo from '../../assets/rube-goldberg/sponsors/utm-logo.png'

export const calendarUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Rube%20Goldberg%202026&dates=20261030T100000%2F20261030T140000&ctz=Europe%2FChisinau&location=Universitatea%20Tehnica%20a%20Moldovei%2C%20Aula%203-3&details=Jurizarea%20Rube%20Goldberg%202026%20si%20demonstratiile%20celor%209%20echipe.'
export const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Universitatea+Tehnica+a+Moldovei+Aula+3-3+Chisinau'
export const instagramUrl = 'https://www.instagram.com/best_chisinau/'

export const eventDate = { iso: '2026-10-30', label: '30.10.2026' }
export const eventTime = '10:00–14:00'

export const labels = {
  date: { ro: 'Data', en: 'Date' },
  time: { ro: 'Ora', en: 'Time' },
  venue: { ro: 'Loc', en: 'Venue' },
  teams: { ro: 'echipe', en: 'teams' },
  faculties: { ro: 'facultăți și centre', en: 'faculties and centres' }
} satisfies Record<string, Bi>

export const campus: Bi = { ro: 'Campusul UTM · Rîșcani', en: 'UTM Campus · Rîșcani' }
export const venue: Bi = {
  ro: 'Universitatea Tehnică a Moldovei, Aula 3-3',
  en: 'Technical University of Moldova, Aula 3-3'
}

export type Stage = { date: string; dateTime?: string; title: Bi }

export const stages: Stage[] = [
  { date: '14.09', dateTime: '2026-09-14', title: { ro: 'Deschiderea oficială și prezentarea provocării', en: 'Official opening and challenge presentation' } },
  { date: '30.09', dateTime: '2026-09-30', title: { ro: 'Prezentarea conceptelor și schițelor', en: 'Concept and sketch presentation' } },
  { date: '21.10', dateTime: '2026-10-21', title: { ro: 'Etapa finală de construcție și testare', en: 'Final construction and testing stage' } },
  { date: '22–28.10', title: { ro: 'Pregătirea pentru jurizare', en: 'Preparation for judging' } },
  { date: '30.10', dateTime: '2026-10-30', title: { ro: 'Jurizarea finală', en: 'Final judging' } }
]

export type Team = { short: string; full: Bi; note?: Bi }

export const teams: Team[] = [
  { short: 'FET', full: { ro: 'Electronică și Telecomunicații', en: 'Electronics and Telecommunications' } },
  { short: 'FEIE', full: { ro: 'Energetică și Inginerie Electrică', en: 'Power and Electrical Engineering' } },
  {
    short: 'FCIM',
    full: { ro: 'Calculatoare, Informatică și Microelectronică', en: 'Computers, Informatics and Microelectronics' },
    note: { ro: '2 echipe', en: '2 teams' }
  },
  { short: 'FIMIT', full: { ro: 'Inginerie Mecanică, Industrială și Transporturi', en: 'Mechanical, Industrial and Transport Engineering' } },
  { short: 'FUA', full: { ro: 'Urbanism și Arhitectură', en: 'Urbanism and Architecture' } },
  { short: 'FD', full: { ro: 'Design', en: 'Design' } },
  { short: 'FCG', full: { ro: 'Construcții, Geodezie și Cadastru', en: 'Construction, Geodesy and Cadastre' } },
  { short: 'CAHUL', full: { ro: 'Centrul Universitar „B. P. Hasdeu”', en: '“B. P. Hasdeu” University Centre' } }
]

export const teamCount = 9
export const facultyCount = teams.length

export type Reason = { title: Bi; description: Bi }

export const reasons: Reason[] = [
  {
    title: { ro: 'Vezi mecanismele în acțiune', en: 'See the machines in action' },
    description: {
      ro: 'Urmărești două runde de demonstrații și fiecare reacție care duce spre pagina întoarsă.',
      en: 'Watch two demonstration rounds and every reaction that leads to the turning page.'
    }
  },
  {
    title: { ro: 'Susține echipa facultății tale', en: 'Support your faculty team' },
    description: {
      ro: 'Nouă echipe din opt facultăți și centre universitare intră în aceeași provocare.',
      en: 'Nine teams from eight faculties and university centres take on the same challenge.'
    }
  },
  {
    title: { ro: 'Descoperă soluții neașteptate', en: 'Discover unexpected solutions' },
    description: {
      ro: 'Aceeași sarcină capătă nouă interpretări prin mecanică, electronică și design.',
      en: 'The same task gets nine interpretations through mechanics, electronics and design.'
    }
  },
  {
    title: { ro: 'Află cine câștigă', en: 'See who wins' },
    description: {
      ro: 'Ziua se încheie în Aula 3-3 cu premierea și ceremonia oficială.',
      en: 'The day ends in Aula 3-3 with the awards and official closing ceremony.'
    }
  }
]

export type Sponsor = { name: string; logo: string; width: number; height: number; featured?: boolean }

// Intrinsic sizes let the grid size every logo by optical area, not by height.
export const sponsors: Sponsor[] = [
  { name: 'Klever', logo: kleverLogo, width: 1317, height: 408, featured: true },
  { name: 'Ambalaj Market', logo: ambalajLogo, width: 873, height: 206, featured: true },
  { name: 'Universitatea Tehnică a Moldovei', logo: utmLogo, width: 513, height: 258 },
  { name: 'Cybercor', logo: cybercorLogo, width: 3542, height: 402 },
  { name: 'diez', logo: diezLogo, width: 1928, height: 840 }
]

export type Faq = { question: string; answer: string }

// The two languages deliberately carry different questions.
export const faqs: { ro: Faq[]; en: Faq[] } = {
  ro: [
    {
      question: 'Pot participa la jurizare dacă nu fac parte dintr-o echipă?',
      answer: 'Da. Jurizarea este deschisă publicului, iar cei interesați pot veni să urmărească prezentările și demonstrațiile echipelor.'
    },
    {
      question: 'Unde are loc evenimentul?',
      answer: 'Evenimentul are loc la Universitatea Tehnică a Moldovei, Aula 3-3, pe 30 octombrie 2026, între orele 10:00 și 14:00.'
    },
    {
      question: 'Este necesară înregistrarea?',
      answer: 'Informațiile privind accesul și eventuala înregistrare vor fi publicate înainte de eveniment.'
    }
  ],
  en: [
    { question: 'When is the final?', answer: 'On 30 October 2026, from 10:00 to 14:00.' },
    { question: 'Where does it take place?', answer: 'The event takes place at the Technical University of Moldova, Aula 3-3.' },
    { question: 'What will I see?', answer: 'Nine machine presentations, two judging rounds and the awards ceremony.' },
    { question: 'Who organises the event?', answer: 'BEST Chișinău together with the Technical University of Moldova.' }
  ]
}
