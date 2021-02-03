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
          <div className='grid grid-cols-8'>
            <div className='col-start-2 col-span-3'>
              <img src={portfolio} alt='img' className='w-full opacity-90 ' />
            </div>
            <div className='col-start-5 col-span-3 my-auto'>
              <h1 className='text-left uppercase text-white text-2xl'>my</h1>
              <h1 className='text-5xl tracking-widest text-violet-500 uppercase'>
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
