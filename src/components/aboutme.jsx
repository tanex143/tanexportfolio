import me from '../images/me.jpg';
import cv from '../images/tanex_cv.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBootstrap,
  faCss3,
  faFacebookSquare,
  faGitAlt,
  faGithub,
  faGithubSquare,
  faHtml5,
  faJs,
  faLinkedin,
  faReact,
} from '@fortawesome/free-brands-svg-icons';

import tailwindIcon from '../images/tailwind.png';
import antdIcon from '../images/antd.png';

const AboutMe = () => {
  return (
    <>
      <div className='bg-gray-800'>
        <div className='container mx-auto py-20 px-3'>
          <div className='lg:grid lg:grid-cols-4 lg:gap-5 lg:pb-20 pb-14 flex flex-col'>
            <div className='lg:col-start-2 relative'>
              <img
                src={me}
                alt='me'
                className='relative z-10 lg:w-full h-full sm:w-3/6 w-4/6 mx-auto'
              />
              <div className='absolute bottom-0 right-0 lg:mb-10 lg:mr-10 xs:mb-8 md:mr-56 xs:mr-48 mb-7 mr-20 bg-violet-400 lg:w-full h-full shadow-xl sm:w-3/6 w-4/6'></div>
            </div>
            <div className='my-auto pt-14'>
              <h1 className='text-white sm:text-xl text-lg'>Hello, I am</h1>
              <h1 className='sm:text-3xl text-2xl text-violet-500'>
                Reynaldo D. Tan Jr.
              </h1>
              <h1 className='text-white sm:text-2xl text-xl pb-4'>
                A Front-end Developer.
              </h1>
              <h1 className='text-white sm:text-lg'>
                I love to work hard and put best of my effort into things that I
                do not know yet. For the same reason, I also like to be part of
                the team in solving of every problem.
              </h1>
            </div>
          </div>

          <div className='flex gap-10 justify-center'>
            <a
              href='https://www.facebook.com/reynaldojrtan'
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon
                icon={faFacebookSquare}
                className='text-3xl text-white cursor-pointer hover:text-violet-400'
              />
            </a>
            <a
              href='https://github.com/tanex143'
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon
                icon={faGithubSquare}
                className='text-3xl text-white cursor-pointer hover:text-violet-400'
              />
            </a>
            <a
              href='https://www.linkedin.com/in/reynaldo-tan-jr-9ab103166/'
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className='text-3xl text-white cursor-pointer hover:text-violet-400'
              />
            </a>
          </div>

          <div className='pt-5 text-center'>
            <a
              href={cv}
              className='py-3 px-6 rounded bg-violet-500 text-white hover:bg-violet-600 cursor-pointer'
              download='Tanex_CV'
            >
              Download CV
            </a>
          </div>
        </div>

        <div className='py-20 bg-gray-700 px-3'>
          <div className='container mx-auto'>
            <div>
              <p className='pt-4 border-t-2 border-violet-400 text-white md:text-base text-sm md:max-w-lg xs:max-w-sm max-w-xs mx-auto text-center'>
                Basic Knowledge with
              </p>
              <h1 className='lg:text-4xl text-3xl text-violet-500 text-center tracking-widest uppercase font-semibold'>
                skills
              </h1>
            </div>

            <div className='pt-16'>
              <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 text-center gap-10 text-white'>
                <div className='lg:col-start-2 flex gap-2'>
                  <FontAwesomeIcon
                    icon={faHtml5}
                    className='md:text-4xl text-2xl text-orange-500 '
                  />
                  <p className='uppercase font-semibold tracking-wide md:text-2xl xs:text-lg'>
                    html
                  </p>
                </div>
                <div className='flex gap-2'>
                  <FontAwesomeIcon
                    icon={faCss3}
                    className='md:text-4xl text-2xl text-blue-500'
                  />
                  <p className='uppercase font-semibold tracking-wide md:text-2xl xs:text-lg'>
                    css
                  </p>
                </div>
                <div className='flex gap-2'>
                  <FontAwesomeIcon
                    icon={faJs}
                    className='md:text-4xl text-2xl text-yellow-400'
                  />
                  <p className='uppercase font-semibold tracking-wide md:text-2xl xs:text-lg'>
                    javascript
                  </p>
                </div>
                <div className='lg:col-start-2 flex gap-2'>
                  <FontAwesomeIcon
                    icon={faBootstrap}
                    className='md:text-4xl text-2xl text-violet-500'
                  />
                  <p className='uppercase font-semibold tracking-wide md:text-2xl xs:text-lg'>
                    Bootstrap
                  </p>
                </div>
                <div className='flex gap-2'>
                  <FontAwesomeIcon
                    icon={faReact}
                    className='md:text-4xl text-2xl text-lightblue-500'
                  />
                  <p className='uppercase font-semibold tracking-wide md:text-2xl xs:text-lg'>
                    React JS
                  </p>
                </div>
                <div className='flex gap-2'>
                  <FontAwesomeIcon
                    icon={faGithub}
                    className='md:text-4xl text-2xl text-gray-900'
                  />
                  <p className='uppercase font-semibold tracking-wide md:text-2xl xs:text-lg'>
                    Github
                  </p>
                </div>

                <div className='lg:col-start-2 flex gap-2'>
                  <FontAwesomeIcon
                    icon={faGitAlt}
                    className='md:text-4xl text-2xl text-orange-600'
                  />
                  <p className='uppercase font-semibold tracking-wide md:text-2xl xs:text-lg'>
                    Git
                  </p>
                </div>

                <div className='flex gap-2'>
                  <img
                    src={antdIcon}
                    alt='icon'
                    className='md:h-8 lg:h-9 h-6 my-auto'
                  />
                  <p className='uppercase font-semibold tracking-wide md:text-2xl xs:text-lg my-auto'>
                    Ant Design
                  </p>
                </div>

                <div className='flex gap-2'>
                  <img
                    src={tailwindIcon}
                    alt='icon'
                    className='md:h-8 lg:h-9 h-6'
                  />
                  <p className='uppercase font-semibold tracking-wide md:text-2xl xs:text-lg my-auto'>
                    Tailwind CSS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
