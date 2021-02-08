import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import logo from '../images/tanex-logo-black-sm.png';
import { contextProvider } from './../context';
import { useContext } from 'react';

const Nav = () => {
  const { menubars, setMenuBars } = useContext(contextProvider);

  return (
    <>
      <div className='bg-gray-800 pt-4 px-2'>
        <div className='container mx-auto'>
          <div className='flex justify-between text-white py-3'>
            <div className='flex relative z-50'>
              <img src={logo} alt='img' className='transform scale-75' />
              <Link
                to='/'
                className='my-auto font-lato text-lg tracking-widest cursor-pointer'
              >
                TANEX<span className='text-violet-500'>DESIGN</span>
              </Link>
            </div>
            <div className='hidden lg:flex gap-10 uppercase tracking-wide text-lg my-auto'>
              <Link
                to='/'
                className='px-8 cursor-pointer transform hover:text-violet-500 hover:scale-110 transition-all duration-500 ease-in-out'
              >
                Home
              </Link>
              <Link
                to='/portfolio'
                className='px-8 cursor-pointer transform hover:text-violet-500 hover:scale-110 transition-all duration-500 ease-in-out'
              >
                Portfolio
              </Link>
              <Link
                to='/aboutme'
                className='px-8 cursor-pointer transform hover:text-violet-500 hover:scale-110 transition-all duration-500 ease-in-out'
              >
                About Me
              </Link>
            </div>

            <div
              onClick={() => setMenuBars(!menubars)}
              className='lg:hidden cursor-pointer  my-auto relative z-50'
            >
              {menubars ? (
                <FontAwesomeIcon
                  icon={faTimes}
                  className={`text-3xl hover:text-violet-500`}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBars}
                  className={`text-2xl hover:text-violet-500`}
                />
              )}
            </div>
          </div>

          {/* //////////////////////////// inside of menu bars ///////////////////////////////////////  */}

          <div
            className={`flex flex-col fixed top-0 left-0 text-white justify-center items-center z-40 w-full h-full bg-gray-700 gap-10 uppercase tracking-wide text-3xl my-auto transition-all duration-700 ease-out transform ${
              !menubars ? '-translate-x-full' : 'translate-x-0'
            }`}
          >
            <Link
              to='/'
              onClick={() => setMenuBars(!menubars)}
              className='px-8 cursor-pointer transform hover:text-violet-500 hover:scale-110 transition-all duration-500 ease-in-out'
            >
              Home
            </Link>
            <Link
              to='/portfolio'
              onClick={() => setMenuBars(!menubars)}
              className='px-8 cursor-pointer transform hover:text-violet-500 hover:scale-110 transition-all duration-500 ease-in-out'
            >
              Portfolio
            </Link>
            <Link
              to='/aboutme'
              onClick={() => setMenuBars(!menubars)}
              className='px-8 cursor-pointer transform hover:text-violet-500 hover:scale-110 transition-all duration-500 ease-in-out'
            >
              About Me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
