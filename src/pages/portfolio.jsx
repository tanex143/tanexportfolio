import portfolio from '../images/version-control-broo.svg';
import { useContext } from 'react';
import { contextProvider } from './../context';
import Cards from '../components/common/cards';

const Portfolio = () => {
  const { projectData } = useContext(contextProvider);
  return (
    <>
      <div className='bg-gray-800'>
        <div className='container mx-auto'>
          <div className='lg:grid lg:grid-cols-8 flex flex-col-reverse'>
            <div className='lg:col-start-2 lg:col-span-3'>
              <img
                src={portfolio}
                alt='img'
                className='opacity-90 lg:w-full w-4/6 mx-auto'
              />
            </div>
            <div className='lg:col-start-5 lg:col-span-3 my-auto mx-auto pt-16'>
              <h1 className='text-left uppercase text-white md:text-2xl text-xl'>
                my
              </h1>
              <h1 className='md:text-5xl text-3xl tracking-widest text-violet-500 uppercase'>
                portfolio
              </h1>
              <p className='text-white text-lg'>The results of my learning.</p>
            </div>
          </div>
        </div>
      </div>

      <Cards projectData={projectData} />
    </>
  );
};

export default Portfolio;
