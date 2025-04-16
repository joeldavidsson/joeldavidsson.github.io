export interface TimelineEvent {
  year: string;
  description: string;
}

export const timelineEvents: TimelineEvent[] = [
  { year: '1992', description: '"Hello, World!" from Markaryd, Småland.' },
  {
    year: '2012',
    description:
      'Moved to Halmstad and studied Social Psychology at University of Halmstad.',
  },
  {
    year: '2015',
    description:
      'Graduated with a bachelors degree. Traveled in Australia and Asia for five months.',
  },
  {
    year: '2016',
    description:
      'Started working in social services, primarily with troubled youths.',
  },
  {
    year: '2019',
    description: 'Started self-study programming during the COVID-19 pandemic.',
  },
  {
    year: '2023',
    description:
      'Decided to change my career and started studying Frontend development at EC Utbildning.',
  },
  {
    year: '2024',
    description: 'Internship at Quicksearch AB for a total of six months.',
  },
  {
    year: '2025',
    description:
      'Graduated as a Frontend developer. Studying "Cloud development in Azure" and "Python for AI-development" at IT-Högskolan while finding a workplace to start my new career journey.',
  },
];
