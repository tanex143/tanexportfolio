import portfolio from '../images/version-control-broo.svg';
import { useContext } from 'react';
import { contextProvider } from './../context';
import Cards from '../components/common/cards';
import CardsReverse from './../components/common/cardsReverse';
import { motion } from 'framer-motion';
import { AnimationControls } from './../components/animation/animationControls';
import {
  leftToCenter,
  rightToCenter,
} from './../components/animation/animations';

const Portfolio = () => {
  const { projectData } = useContext(contextProvider);
  const [element, controls] = AnimationControls();
  const [element2, controls2] = AnimationControls();

  return (
    <>
      <div className='bg-gray-800'>
        <div className='container mx-auto'>
          <div className='lg:grid lg:grid-cols-8 flex flex-col-reverse'>
            <div ref={element} className='lg:col-start-2 lg:col-span-3'>
              <motion.img
                variants={leftToCenter}
                initial='hidden'
                animate={controls}
                src={portfolio}
                alt='img'
                className='opacity-90 lg:w-full w-4/6 mx-auto'
              />
            </div>
            <div
              ref={element2}
              className='lg:col-start-5 lg:col-span-3 my-auto mx-auto pt-16'
            >
              <motion.h1
                variants={rightToCenter}
                initial='hidden'
                animate={controls2}
                className='text-left uppercase text-white md:text-2xl text-xl'
              >
                my
              </motion.h1>
              <motion.h1
                variants={rightToCenter}
                initial='hidden'
                animate={controls2}
                className='md:text-5xl text-3xl tracking-widest text-violet-500 uppercase'
              >
                portfolio
              </motion.h1>
              <motion.p
                variants={rightToCenter}
                initial='hidden'
                animate={controls2}
                className='text-white text-lg'
              >
                The results of my learning.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {projectData.map((data) => (
        <div key={data.id} className='bg-gray-700 px-1 py-8'>
          <div className='container mx-auto'>
            {data.id % 2 === 0 ? (
              <Cards data={data} />
            ) : (
              <CardsReverse data={data} />
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Portfolio;
