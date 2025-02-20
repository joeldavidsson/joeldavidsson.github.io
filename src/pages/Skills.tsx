import React from 'react';
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

const Skills = () => {
  return (
    <section className='bg-orange-500'>
      <div className='card'>
        <h1 className='text-4xl'>Skills</h1>
        <div className='card-content'>
          <ul>
            <li>
              <FaHtml5 /> HTML
            </li>
            <li>
              <FaCss3Alt /> CSS
            </li>
            <li>
              <FaJs /> JavaScript
            </li>
            <li>
              <SiTypescript /> TypeScript
            </li>
            <li>
              <FaReact /> React
            </li>
            <li>
              <FaAngular /> Angular
            </li>
            <li>
              <FaVuejs /> Vue
            </li>
            <li>
              <SiNextdotjs /> Next.js
            </li>
            <li>
              <SiJquery /> jQuery
            </li>
            <li>
              <FaNodeJs /> Node.js
            </li>
            <li>
              <MdDesignServices /> UX / UI
            </li>
            <li>
              <FaWordpress /> Wordpress
            </li>
            <li>
              <TbBrandCSharp /> C#.NET
            </li>
            <li>
              <FaDatabase /> SQL
            </li>
            <li>
              <FaDocker /> Docker
            </li>
            <li>
              <SiMongodb /> MongoDB
            </li>
            <li>
              <SiPostgresql /> PostgreSQL
            </li>
            <li>
              <TbApi /> REST API
            </li>
            <li>
              <SiGraphql /> GraphQL
            </li>
            <li>
              <AiOutlineProject /> Agile software development
            </li>
            <li>
              <FaGitAlt /> Git
            </li>
            <li>
              <VscAzure /> Azure DevOps
            </li>
            <li>
              <FaSearch /> SEO
            </li>
            <li>
              <AiOutlineProject /> Project management
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
