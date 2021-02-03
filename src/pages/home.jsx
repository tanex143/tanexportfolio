import vectorImg from '../images/blogging-broo.svg';
import Services from './../components/services';
import Contact from './../components/contact';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { contextProvider } from './../context';
import Cards from '../components/common/cards';

const Home = () => {
  const { projectData } = useContext(contextProvider);

  return (
    <>
      {console.log(projectData)}
      <div className='bg-gray-800 h-91vh px-2'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-10'>
            <div className='col-start-1 col-span-4 text-white my-64'>
              <h1 className='text-5xl pb-5'>
                Hello, I'm <span className='text-violet-500'>Tanex</span>.
              </h1>
              <p className='pb-10'>
                A self taught <span className='italic'>web developer</span>. I
                like to create and build new design to hone my skills since
                things are always evolving.
              </p>

              <Link
                to='/portfolio'
                className='py-3 px-8 border border-violet-500 text-white text-lg rounded hover:text-white font-semibold focus:outline-none hover:bg-violet-500 transition-all duration-500 ease-in-out'
              >
                My Portfolio
              </Link>
            </div>
            <div className='col-start-5 col-span-6'>
              <img src={vectorImg} alt='img' className='-mt-10' />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-700 px-2 pt-10'>
        <div className='container mx-auto'>
          <h1 className='max-w-lg mx-auto tracking-wide font-semibold text-white text-center border-t-2 border-violet-400 pt-4'>
            My recent works
          </h1>
          <p className='text-center text-4xl text-violet-500 mb-20 pt-1 uppercase tracking-wider font-semibold'>
            Portfolio
          </p>
          <Cards projectData={projectData} />
        </div>
      </div>

      <div className='bg-gray-700 px-2 pb-10'>
        <div className='container mx-auto pt-10'>
          <div className='w-full text-center'>
            <Link
              to='/portfolio'
              className='py-2 px-6 text-lg border border-violet-500 rounded text-white hover:bg-violet-500 transition-all duration-500 ease-in-out uppercase'
            >
              view all projects
            </Link>
          </div>
        </div>
      </div>
      <Services />
      <Contact />
    </>
  );
};

export default Home;
