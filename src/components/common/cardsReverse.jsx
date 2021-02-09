import { motion } from 'framer-motion';
import { AnimationControls } from './../animation/animationControls';
import { rightToCenter } from './../animation/animations';

const CardsReverse = ({ data }) => {
  const [element, controls] = AnimationControls();

  return (
    <div ref={element}>
      <motion.div
        variants={rightToCenter}
        initial='hidden'
        animate={controls}
        className='bg-gray-600 rounded-tr-full border border-violet-400'
      >
        <div className='flex flex-col-reverse lg:grid lg:grid-cols-10 lg:gap-10 md:py-16 py-10 xs:px-10 px-3.5'>
          <div className='col-start-1 col-span-4 text-white grid justify-items-end mr-2'>
            <h1 className='md:text-3xl text-2xl text-violet-400 font-semibold tracking-wide'>
              {data.project_name}
            </h1>
            <h1 className='text-white pb-5'>
              &mdash;
              <span className='-ml-0.5'>&mdash;</span> {data.date}
            </h1>
            <p className='text-right md:text-base text-sm'>
              {data.description}
            </p>
            <div className='flex gap-4 pt-5 md:text-base text-sm'>
              <p>Github Source:</p>
              <a
                href={data.source}
                className='text-white hover:text-blue-500 md:text-base text-sm'
              >
                {data.project_name}
              </a>
            </div>
            <div className='flex flex-col pb-6 pt-5 text-right'>
              <p className='text-violet-400 font-semibold uppercase md:text-base text-sm'>
                Built with:
              </p>
              {data.builtwith.map((name, index) => (
                <a
                  key={index}
                  href={name.source}
                  target='_blank'
                  rel='noreferrer'
                  className='text-white hover:text-blue-500 md:text-base text-sm'
                >
                  {name.name}
                </a>
              ))}
            </div>

            <div>
              <a
                href={data.site_link}
                target='_blank'
                rel='noreferrer'
                className='md:py-2 md:px-6 py-1 px-4 md:text-base text-sm border border-violet-500 text-white hover:text-white rounded tracking-wide hover:bg-violet-500 transition-all duration-500 ease-in-out'
              >
                View Site
              </a>
            </div>
          </div>
          <div className='col-start-5 col-span-6 text-white relative mb-6 md:mb-10'>
            <img
              src={data.project_image}
              alt='img'
              className='w-full h-full rounded relative z-10'
            />
            <div className='absolute top-0 right-0 md:mt-8 xs:mt-6 mt-2.5 md:mr-8 xs:mr-6 mr-2.5 bg-violet-400 w-full h-full rounded shadow-xl'></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CardsReverse;
