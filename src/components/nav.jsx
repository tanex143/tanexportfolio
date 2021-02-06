import { Link } from 'react-router-dom';
import logo from '../images/tanex-logo-black-sm.png';

const Nav = () => {
  return (
    <div className='bg-gray-800 pt-4 px-2'>
      <div className='container mx-auto'>
        <div className='flex justify-between text-white py-3'>
          <div className='flex'>
            <img src={logo} alt='img' className='transform scale-75' />
            <Link
              to='/'
              className='my-auto font-lato text-lg tracking-widest cursor-pointer'
            >
              TANEX<span className='text-violet-500'>DESIGN</span>
            </Link>
          </div>
          <div className='flex gap-10 uppercase tracking-wide text-lg my-auto'>
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
        </div>
      </div>
    </div>
  );
};

export default Nav;
