import portfolio from '../images/version-control-bro.svg';
import shoesECommerce from '../images/shoes-e-commerce.jpg';
import tmdbMovies from '../images/tmdb-movies.jpg';
import youtubeConverter from '../images/youtube-converter.jpg';

const Portfolio = () => {
  return (
    <>
      <div className='bg-gray-900'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-8'>
            <div className='col-start-2 col-span-3'>
              <img src={portfolio} alt='img' className='w-full opacity-90 ' />
            </div>
            <div className='col-start-5 col-span-3 my-auto'>
              <h1 className='text-left uppercase text-white text-2xl'>my</h1>
              <h1 className='text-5xl tracking-widest text-white uppercase'>
                portfolio
              </h1>
              <p className='text-white text-lg'>The results of my learning.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-gray-800 py-16'>
        <div className='container mx-auto'>
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

          <div className='bg-gray-800 px-2'>
            <div className='container mx-auto pt-16'>
              <div className='bg-gray-700 rounded-tr-full rounded-bl-full'>
                <div className='grid grid-cols-10 gap-10 py-16 px-8'>
                  <div className='col-start-1 col-span-4 text-white grid justify-items-end'>
                    <h1 className='text-3xl font-semibold tracking-wide pb-5 mt-8'>
                      TMDb Movies
                    </h1>
                    <p className='text-right'>
                      A dynamic movies with a glassmorphism design. I fetch all
                      the movies data in TMDb API website using useEffect Hook
                      of React JS. It shows what are the trending movies,
                      upcoming movies and now playing in cinema movies. Each
                      movie shows the details of the movie. I use framer motion
                      for the animation.
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
                    <img
                      src={tmdbMovies}
                      alt='img'
                      className='w-full rounded'
                    />
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
                      A simple responsive youtube converter using yt-download
                      API. You will just copy the youtube URL and paste here and
                      it will automatically convert to MP3 and MP4. You can also
                      choose what to download.
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
        </div>
      </div>
    </>
  );
};

export default Portfolio;
