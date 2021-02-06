import me from '../images/me.jpg';
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
        <div className='container mx-auto py-20'>
          <div className='grid grid-cols-4 gap-5 pb-20'>
            <div className='col-start-2 relative'>
              <img src={me} alt='me' className='relative z-10 w-full' />
              <div className='absolute bottom-0 right-0 mb-10 mr-10 bg-violet-400 w-full h-full shadow-xl'></div>
            </div>
            <div className='my-auto'>
              <h1 className='text-white text-xl'>Hello, I am</h1>
              <h1 className='text-3xl text-violet-500'>Reynaldo D. Tan Jr.</h1>
              <h1 className='text-white text-2xl pb-4'>A Web Developer.</h1>
              <h1 className='text-white text-lg'>
                I love to work hard and put best of my effort into things that I
                do not know yet. For the same reason, I also like to be part of
                the team in solving of every problem.
              </h1>
            </div>
          </div>

          <div className='flex gap-10 justify-center'>
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className='text-3xl text-white cursor-pointer hover:text-violet-400'
            />
            <FontAwesomeIcon
              icon={faGithubSquare}
              className='text-3xl text-white cursor-pointer hover:text-violet-400'
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              className='text-3xl text-white cursor-pointer hover:text-violet-400'
            />
          </div>
        </div>

        <div className='py-20 bg-gray-700'>
          <div className='container mx-auto'>
            <div>
              <p className='pt-4 border-t-2 border-violet-400 text-white max-w-lg mx-auto text-center'>
                Basic Knowledge with
              </p>
              <h1 className='text-3xl text-violet-500 text-center tracking-widest uppercase font-semibold'>
                skills
              </h1>
            </div>

            <div className='pt-16'>
              <div className='grid grid-cols-5 text-center gap-10 text-white'>
                <div className='col-start-2 flex gap-2'>
                  <FontAwesomeIcon
                    icon={faHtml5}
                    className='text-4xl text-orange-500 '
                  />
                  <p className='uppercase font-semibold tracking-wide text-2xl'>
                    html
                  </p>
                </div>
                <div className='flex gap-2'>
                  <FontAwesomeIcon
                    icon={faCss3}
                    className='text-4xl text-blue-500'
                  />
                  <p className='uppercase font-semibold tracking-wide text-2xl'>
                    css
                  </p>
                </div>
                <div className='flex gap-2'>
                  <FontAwesomeIcon
                    icon={faJs}
                    className='text-4xl text-yellow-400'
                  />
                  <p className='uppercase font-semibold tracking-wide text-2xl'>
                    javascript
                  </p>
                </div>
                <div className='col-start-2 flex gap-2'>
                  <FontAwesomeIcon
                    icon={faBootstrap}
                    className='text-4xl text-violet-500'
                  />
                  <p className='uppercase font-semibold tracking-wide text-2xl'>
                    Bootstrap
                  </p>
                </div>
                <div className='flex gap-2'>
                  <FontAwesomeIcon
                    icon={faReact}
                    className='text-4xl text-lightblue-500'
                  />
                  <p className='uppercase font-semibold tracking-wide text-2xl'>
                    React JS
                  </p>
                </div>
                <div className='flex gap-2'>
                  <FontAwesomeIcon
                    icon={faGithub}
                    className='text-4xl text-gray-900'
                  />
                  <p className='uppercase font-semibold tracking-wide text-2xl'>
                    Github
                  </p>
                </div>

                <div className='col-start-2 flex gap-2'>
                  <img src={antdIcon} alt='icon' />
                  <p className='uppercase font-semibold tracking-wide text-2xl my-auto'>
                    Ant Design
                  </p>
                </div>
                <div className='flex gap-2'>
                  <FontAwesomeIcon
                    icon={faGitAlt}
                    className='text-4xl text-orange-600'
                  />
                  <p className='uppercase font-semibold tracking-wide text-2xl'>
                    Git
                  </p>
                </div>
                <div className='flex gap-2'>
                  <img src={tailwindIcon} alt='icon' />
                  <p className='uppercase font-semibold tracking-wide text-2xl my-auto'>
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
