import vectorImg from '../images/Blogging-bro.svg';
import shoesECommerce from '../images/shoes-e-commerce.jpg';
import tmdbMovies from '../images/tmdb-movies.jpg';
import youtubeConverter from '../images/youtube-converter.jpg';
import Services from './../components/services';
import Contact from './../components/contact';

const Home = () => {
  return (
    <>
      <div className='bg-gray-900 h-91vh px-2'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-10'>
            <div className='col-start-1 col-span-4 text-white my-64'>
              <h1 className='text-5xl pb-5'>Hello, I'm Tanex.</h1>
              <p className='pb-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, libero. Dignissimos, doloremque maxime? Harum sit
                illum eaque praesentium repudiandae quia omnis ab soluta! At
                temporibus sequi unde odit? Sed, repellendus.
              </p>

              <button className='py-3 px-8 border border-white text-lg rounded hover:text-black font-semibold focus:outline-none hover:bg-white transition-all duration-500 ease-in-out'>
                My Portfolio
              </button>
            </div>
            <div className='col-start-5 col-span-6'>
              <img src={vectorImg} alt='img' className='-mt-10' />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-800 px-2 pt-10'>
        <div className='container mx-auto'>
          <h1 className='max-w-lg mx-auto tracking-wide font-semibold text-gray-300 text-center border-t-2 border-gray-300 pt-4'>
            My recent works
          </h1>
          <p className='text-center text-4xl text-white mb-20 pt-1 uppercase tracking-wider font-semibold'>
            Portfolio
          </p>
          <div className='bg-gray-700 rounded-tl-full rounded-br-full'>
            <div className='grid grid-cols-10 gap-10 py-16 px-8'>
              <div className='col-start-1 col-span-6 text-white'>
                <img
                  src={shoesECommerce}
                  alt='img'
                  className='w-full rounded'
                />
              </div>
              <div className='col-start-7 col-span-4 text-white'>
                <h1 className='text-3xl font-semibold tracking-wide pb-5 mt-8'>
                  Nike Shoes E-commerce
                </h1>
                <p>
                  A simple responsive e-commerce website with the use of Context
                  Hook of React JS. A dynamic website that has simple validation
                  to create and login user, item add to cart, delete per item,
                  delete all item in cart and checkout function with the use of
                  react-paypal-express-checkout. I just assume that all items
                  has only 1 stock.
                </p>
                <div className='flex gap-4 pt-5'>
                  <p>Github Source:</p>
                  <a
                    href='https://github.com/tanex143/shoes-e-commerce'
                    className='text-white hover:text-blue-500'
                  >
                    Shoes E-commerce
                  </a>
                </div>
                <div className='flex gap-5 pb-10'>
                  <p className=''>Built with:</p>
                  <a
                    href='https://reactjs.org/'
                    className='text-white hover:text-blue-500'
                  >
                    React JS
                  </a>
                  <a
                    href='https://ant.design/'
                    className='text-white hover:text-blue-500'
                  >
                    Ant Design
                  </a>
                  <a
                    href='https://tailwindcss.com/'
                    className='text-white hover:text-blue-500'
                  >
                    Tailwind CSS
                  </a>
                </div>
                <div>
                  <button className='py-2 px-6 border border-white text-white rounded tracking-wide hover:bg-white hover:text-black transition-all duration-500 ease-in-out'>
                    View Site
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-gray-800 px-2'>
        <div className='container mx-auto pt-16'>
          <div className='bg-gray-700 rounded-tr-full rounded-bl-full'>
            <div className='grid grid-cols-10 gap-10 py-16 px-8'>
              <div className='col-start-1 col-span-4 text-white grid justify-items-end'>
                <h1 className='text-3xl font-semibold tracking-wide pb-5 mt-8'>
                  TMDb Movies
                </h1>
                <p className='text-right'>
                  A dynamic movies with a glassmorphism design. I fetch all the
                  movies data in TMDb API website using useEffect Hook of React
                  JS. It shows what are the trending movies, upcoming movies and
                  now playing in cinema movies. Each movie shows the details of
                  the movie. I use framer motion for the animation.
                </p>
                <div className='flex gap-4 pt-5'>
                  <p>Github Source:</p>
                  <a
                    href='https://github.com/tanex143/tmdb-movies'
                    className='text-white hover:text-blue-500'
                  >
                    TMDb Movies
                  </a>
                </div>
                <p className='text-right pt-2'>Built with:</p>
                <div className='flex gap-5 pb-10'>
                  <a
                    href='https://reactjs.org/'
                    className='text-white hover:text-blue-500'
                  >
                    React JS
                  </a>
                  <a
                    href='https://ant.design/'
                    className='text-white hover:text-blue-500'
                  >
                    Ant Design
                  </a>
                  <a
                    href='https://tailwindcss.com/'
                    className='text-white hover:text-blue-500'
                  >
                    Tailwind CSS
                  </a>
                  <a
                    href='https://www.framer.com/motion/'
                    className='text-white hover:text-blue-500'
                  >
                    Framer Motion
                  </a>
                </div>
                <div>
                  <button className='py-2 px-6 border border-white text-white rounded tracking-wide hover:bg-white hover:text-black transition-all duration-500 ease-in-out'>
                    View Site
                  </button>
                </div>
              </div>
              <div className='col-start-5 col-span-6 text-white'>
                <img src={tmdbMovies} alt='img' className='w-full rounded' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-gray-800 px-2'>
        <div className='container mx-auto pt-16'>
          <div className='bg-gray-700 rounded-tl-full rounded-br-full'>
            <div className='grid grid-cols-10 gap-10 py-16 px-8'>
              <div className='col-start-1 col-span-6 text-white'>
                <img
                  src={youtubeConverter}
                  alt='img'
                  className='w-full rounded'
                />
              </div>
              <div className='col-start-7 col-span-4 text-white'>
                <h1 className='text-3xl font-semibold tracking-wide pb-5 mt-8'>
                  Youtube Converter
                </h1>
                <p>
                  A simple responsive youtube converter using yt-download API.
                  You will just copy the youtube URL and paste here and it will
                  automatically convert to MP3 and MP4. You can also choose what
                  to download.
                </p>
                <div className='flex gap-4 pt-5'>
                  <p>Github Source:</p>
                  <a
                    href='https://github.com/tanex143/youtube-converter'
                    className='text-white hover:text-blue-500'
                  >
                    Youtube Converter
                  </a>
                </div>
                <div className='flex gap-5 pb-10'>
                  <p className=''>Built with:</p>
                  <a
                    href='https://reactjs.org/'
                    className='text-white hover:text-blue-500'
                  >
                    React JS
                  </a>
                  <a
                    href='https://tailwindcss.com/'
                    className='text-white hover:text-blue-500'
                  >
                    Tailwind CSS
                  </a>
                </div>
                <div>
                  <button className='py-2 px-6 border border-white text-white rounded tracking-wide hover:bg-white hover:text-black transition-all duration-500 ease-in-out'>
                    View Site
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-gray-800 px-2 pb-10'>
        <div className='container mx-auto pt-10'>
          <div className='w-full text-center'>
            <button className='py-2 px-6 text-lg border border-white rounded text-white hover:bg-white hover:text-black transition-all duration-500 ease-in-out uppercase'>
              view all projects
            </button>
          </div>
        </div>
      </div>
      <Services />
      <Contact />
    </>
  );
};

export default Home;
