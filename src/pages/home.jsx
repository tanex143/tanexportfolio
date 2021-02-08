import vectorImg from '../images/blogging-broo.svg';
import Services from './../components/services';
import Contact from './../components/contact';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { contextProvider } from './../context';
import Cards from '../components/common/cards';

const Home = () => {
  const { projectData, goToTop } = useContext(contextProvider);

  // to view only 3 project in home page.
  const splicingData = () => {
    const data = [...projectData];

    let spliced = data.splice(0, 3);

    return spliced;
  };

  return (
    <>
      <div className='bg-gray-800 h-91vh px-2 -mt-0.5'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:grid lg:grid-cols-10'>
            <div className='text-center lg:text-left max-w-xl mx-auto lg:col-start-1 lg:col-span-4 text-white xl:my-64 lg:mt-48 mt-20'>
              <h1 className='lg:text-5xl md:text-4xl text-3xl pb-5 text-white'>
                Hello, I'm <span className='text-violet-500'>Tanex</span>.
              </h1>
              <p className='pb-10 lg:text-lg md:text-base text-sm'>
                A self taught Web Developer and still learning. I like to create
                and build new design and features to hone my skills because I
                have a growing enthusiasm to be better.
              </p>

              <Link
                to='/portfolio'
                className='lg:py-3 lg:px-8 py-2 px-6 border border-violet-500 text-white md:text-lg text-sm rounded hover:text-white font-semibold focus:outline-none hover:bg-violet-500 transition-all duration-500 ease-in-out'
              >
                My Portfolio
              </Link>
            </div>
            <div className='lg:col-start-5 lg:col-span-6'>
              <img
                src={vectorImg}
                alt='img'
                className='lg:w-full w-5/6 mx-auto xl:-mt-10'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-700 px-2 pt-10 -mt-0.5'>
        <div className='container mx-auto'>
          <h1 className='md:max-w-lg xs:max-w-sm max-w-xs mx-auto tracking-wide font-semibold text-white md:text-base text-sm text-center border-t-2 border-violet-400 pt-4'>
            My recent works
          </h1>
          <p className='text-center md:text-4xl text-3xl text-violet-500 md:mb-16 mb-10 pt-1 uppercase tracking-wider font-semibold'>
            Portfolio
          </p>
          <Cards projectData={splicingData()} />
        </div>
      </div>

      <div className='bg-gray-700 px-2 pb-10 -mt-0.5'>
        <div className='container mx-auto pt-10'>
          <div className='w-full text-center'>
            <Link
              to='/portfolio'
              onClick={goToTop}
              className='py-2 px-6 md:text-lg border border-violet-500 rounded text-white hover:text-white hover:bg-violet-500 transition-all duration-500 ease-in-out uppercase'
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
