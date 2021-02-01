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
          <div className='flex gap-20 uppercase tracking-wide text-lg my-auto'>
            <p>Home</p>
            <p>Projects</p>
            <p>About Me</p>
            <p>Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
