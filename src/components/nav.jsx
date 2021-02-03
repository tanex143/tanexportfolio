import { Link } from 'react-router-dom';
import logo from '../images/tanex-logo-black-sm.png';

const Nav = () => {
  return (
    <div className='bg-gray-900 pt-4 px-2'>
      <div className='container mx-auto'>
        <div className='flex justify-between text-white py-3'>
          <div className='flex'>
            <img src={logo} alt='img' className='transform scale-75' />
            <h1 className='my-auto font-lato text-lg tracking-widest'>
              TANEXDESIGN
            </h1>
          </div>
          <div className='flex gap-10 uppercase tracking-wide text-lg my-auto'>
            <Link
              to='/'
              className='px-8 cursor-pointer transform hover:scale-110 transition-all duration-500 ease-in-out'
            >
              Home
            </Link>
            <Link
              to='/portfolio'
              className='px-8 cursor-pointer transform hover:scale-110 transition-all duration-500 ease-in-out'
            >
              Portfolio
            </Link>
            <p className='px-8 cursor-pointer transform hover:scale-110 transition-all duration-500 ease-in-out'>
              About Me
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
