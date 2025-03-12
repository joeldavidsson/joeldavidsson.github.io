import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../data/skillsData';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof skills>,
  );

  const categories = ['All', ...Object.keys(groupedSkills)];

  return (
    <div className='bg-[url(/images/codegreen.jpg)] bg-cover bg-bottom bg-no-repeat'>
      <section className='bg-black bg-opacity-85 p-6 h-[95vh]'>
        <h1 className='text-4xl text-white uppercase font-bold text-center'>
          Skills
        </h1>

        <div className='flex justify-center flex-wrap gap-4 my-4'>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`w-48 px-4 py-4 rounded-md text-white font-bold transition 
              ${selectedCategory === category ? 'bg-emerald-900' : 'bg-emerald-950 hover:bg-emerald-700'}
            `}
            >
              {category}
            </button>
          ))}
        </div>

        <div className='skills-card'>
          <div className='card-content'>
            <AnimatePresence mode='sync'>
              {Object.entries(groupedSkills)
                .filter(
                  ([category]) =>
                    selectedCategory === 'All' || selectedCategory === category,
                )
                .map(([category, skills]) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, transition: { duration: 0 } }}
                    transition={{ duration: 0.3, ease: 'easeIn' }}
                    className='mb-4 w-1/5'
                  >
                    <h2 className='text-2xl text-white font-semibold mt-6 mb-4'>
                      {category}
                    </h2>
                    <ul>
                      {skills.map((skill, index) => (
                        <span
                          key={index}
                          className='bg-[url(/images/codebg.jpg)] bg-cover bg-center bg-no-repeat flex items-center rounded-sm border-black border-y-4 hover:border-emerald-700 hover:scale-105 hover:ease-in-out transition'
                        >
                          <li className='bg-emerald-900 bg-opacity-95'>
                            {skill.icon} {skill.name}
                          </li>
                        </span>
                      ))}
                    </ul>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
