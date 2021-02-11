import {
  faLaptopCode,
  faMobileAlt,
  faPalette,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { zoomIn } from './animation/animations';
import { AnimationControls } from './animation/animationControls';

const Services = () => {
  const [element, controls] = AnimationControls();
  const [element2, controls2] = AnimationControls();
  const [element3, controls3] = AnimationControls();
  return (
    <div className='bg-gray-800 py-20 -mt-0.5 px-2'>
      <div className='container mx-auto'>
        <h1 className='pt-5 border-t-2 font-semibold border-violet-400 text-white md:text-base text-sm md:max-w-lg xs:max-w-sm max-w-xs mx-auto text-center tracking-wide'>
          What can I do
        </h1>
        <p className='uppercase text-center md:text-4xl text-3xl font-semibold text-violet-500 tracking-wider'>
          services
        </p>

        <div className='pt-20'>
          <div className='grid md:grid-cols-3 grid-cols-1 w-5/6 md:w-full mx-auto gap-5'>
            <div ref={element}>
              <motion.div
                whileHover={{ y: -10 }}
                variants={zoomIn}
                initial='hidden'
                animate={controls}
                className='bg-gray-700 rounded h-full text-white text-center py-10 px-5 border border-violet-400 transition-all duration-500 ease-out'
              >
                <FontAwesomeIcon
                  icon={faMobileAlt}
                  className='md:text-6xl text-5xl mt-2 md:mb-6 text-violet-500'
                />
                <h1 className='lg:text-3xl text-2xl text-violet-400 font-semibold py-5'>
                  Responsive Design
                </h1>
                <p className='md:text-base text-sm'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deleniti laudantium vel inventore odit recusandae laboriosam.
                </p>
              </motion.div>
            </div>
            <div ref={element2}>
              <motion.div
                whileHover={{ y: -10 }}
                variants={zoomIn}
                initial='hidden'
                animate={controls2}
                className='bg-gray-700 rounded h-full text-white text-center py-10 px-5 border border-violet-400 transition-all duration-500 ease-out'
              >
                <FontAwesomeIcon
                  icon={faLaptopCode}
                  className='md:text-6xl text-5xl mt-2 md:mb-6 text-violet-500'
                />
                <h1 className='lg:text-3xl text-2xl text-violet-400 font-semibold py-5'>
                  Web Design
                </h1>
                <p className='md:text-base text-sm'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deleniti laudantium vel inventore odit recusandae laboriosam.
                </p>
              </motion.div>
            </div>
            <div ref={element3}>
              <motion.div
                whileHover={{ y: -10 }}
                variants={zoomIn}
                initial='hidden'
                animate={controls3}
                className='bg-gray-700 rounded h-full text-white text-center py-10 px-5 border border-violet-400 transition-all duration-500 ease-out'
              >
                <FontAwesomeIcon
                  icon={faPalette}
                  className='md:text-6xl text-5xl mt-2 md:mb-6 text-violet-500'
                />
                <h1 className='lg:text-3xl text-2xl text-violet-400 font-semibold py-5'>
                  Graphic Design
                </h1>
                <p className='md:text-base text-sm'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deleniti laudantium vel inventore odit recusandae laboriosam.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
