import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../data/skillsData';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1280);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 1280;

      setIsMobile(isNowMobile);

      if (isNowMobile && selectedCategory === 'All') {
        setSelectedCategory('Frontend');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [selectedCategory]);

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
    <div className='bg-[#344e41]/90'>
      <section className='bg-black/50 h-[95vh]'>
        <h1 className='text-4xl uppercase font-bold text-center pt-6'>
          Technical abilities
        </h1>

        <div className='flex justify-center flex-wrap gap-4 my-2'>
          {categories
            .filter((category) => !(isMobile && category === 'All'))
            .map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer w-48 px-4 py-2 rounded-md text-[#dad7cd] font-bold transition 
                ${selectedCategory === category ? 'bg-[#588157]' : 'bg-[#344E41] hover:bg-[#588157]'}`}
              >
                {category}
              </button>
            ))}
        </div>

        <div className='skills-card'>
          <div className='card-content'>
            <AnimatePresence mode='sync'>
              {Object.entries(groupedSkills)
                .filter(([category]) => {
                  if (isMobile && selectedCategory === 'All') {
                    return category === 'Frontend';
                  }
                  return (
                    selectedCategory === 'All' || selectedCategory === category
                  );
                })
                .map(([category, skills]) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, transition: { duration: 0 } }}
                    transition={{ duration: 0.3, ease: 'easeIn' }}
                    className='mb-4 md:w-1/4 w-full'
                  >
                    <h2 className='text-2xl text-[#fefae0] font-semibold mt-6 mb-4'>
                      {category}
                    </h2>
                    <ul>
                      {skills.map((skill, index) => (
                        <span
                          key={index}
                          className='flex items-center rounded-xs hover:scale-105 hover:ease-in-out duration-200'
                        >
                          <li className='bg-black/5 hover:bg-[#344E41] border-t-2 border-[#344E41]'>
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
