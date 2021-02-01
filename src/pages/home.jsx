import vectorImg from '../images/Blogging-bro.svg';

const Home = () => {
  return (
    <div className='bg-gray-900 h-91vh px-2'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-10'>
          <div className='col-start-1 col-span-4 text-white my-64'>
            <h1 className='text-4xl pb-5'>Hey, I'm Tanex.</h1>
            <p className='pb-8'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, libero. Dignissimos, doloremque maxime? Harum sit illum
              eaque praesentium repudiandae quia omnis ab soluta! At temporibus
              sequi unde odit? Sed, repellendus.
            </p>

            <button className='py-2 px-5 bg-coolgray-300 rounded text-black font-semibold'>
              My Projects
            </button>
          </div>
          <div className='col-start-5 col-span-6'>
            <img src={vectorImg} alt='img' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
