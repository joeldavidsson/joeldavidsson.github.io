import React, { JSX } from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaAngular,
  FaVuejs,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaWordpress,
  FaDatabase,
  FaSearch,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiJquery,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
} from 'react-icons/si';
import { MdDesignServices } from 'react-icons/md';
import { VscAzure } from 'react-icons/vsc';
import { TbBrandCSharp, TbApi } from 'react-icons/tb';
import { AiOutlineProject } from 'react-icons/ai';

export interface Skill {
  icon: JSX.Element;
  name: string;
  category:
    | 'Frontend'
    | 'Backend & API'
    | 'Databases & DevOps'
    | 'Tools & Methods';
}

export const skills: Skill[] = [
  { icon: <FaHtml5 />, name: 'HTML', category: 'Frontend' },
  { icon: <FaCss3Alt />, name: 'CSS, SASS, TailwindCSS', category: 'Frontend' },
  { icon: <FaJs />, name: 'JavaScript', category: 'Frontend' },
  { icon: <SiTypescript />, name: 'TypeScript', category: 'Frontend' },
  { icon: <FaReact />, name: 'React', category: 'Frontend' },
  { icon: <FaAngular />, name: 'Angular', category: 'Frontend' },
  { icon: <FaVuejs />, name: 'Vue', category: 'Frontend' },
  { icon: <SiNextdotjs />, name: 'Next.js', category: 'Frontend' },
  { icon: <SiJquery />, name: 'jQuery', category: 'Frontend' },
  { icon: <MdDesignServices />, name: 'UX / UI', category: 'Frontend' },

  { icon: <FaNodeJs />, name: 'Node.js', category: 'Backend & API' },
  { icon: <TbBrandCSharp />, name: 'C# .NET', category: 'Backend & API' },
  { icon: <TbApi />, name: 'REST API', category: 'Backend & API' },
  { icon: <SiGraphql />, name: 'GraphQL', category: 'Backend & API' },

  // Databaser & DevOps
  { icon: <FaDatabase />, name: 'SQL', category: 'Databases & DevOps' },
  { icon: <SiMongodb />, name: 'MongoDB', category: 'Databases & DevOps' },
  {
    icon: <SiPostgresql />,
    name: 'PostgreSQL',
    category: 'Databases & DevOps',
  },
  { icon: <FaDocker />, name: 'Docker', category: 'Databases & DevOps' },
  {
    icon: <VscAzure />,
    name: 'Azure Cloud Development',
    category: 'Databases & DevOps',
  },
  {
    icon: <VscAzure />,
    name: 'Azure DevOps',
    category: 'Databases & DevOps',
  },

  // Verktyg & Metoder
  { icon: <FaWordpress />, name: 'WordPress', category: 'Tools & Methods' },
  { icon: <FaGitAlt />, name: 'Git', category: 'Tools & Methods' },
  { icon: <FaSearch />, name: 'SEO', category: 'Tools & Methods' },
  {
    icon: <AiOutlineProject />,
    name: 'Agile Software Development',
    category: 'Tools & Methods',
  },
  {
    icon: <AiOutlineProject />,
    name: 'Project Management',
    category: 'Tools & Methods',
  },
];
