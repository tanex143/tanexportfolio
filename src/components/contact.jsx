import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
  faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { zoomIn, leftToCenterStagger } from './animation/animations';
import { AnimationControls } from './animation/animationControls';

const Contact = () => {
  const [element, controls] = AnimationControls();
  const [element2, controls2] = AnimationControls();
  return (
    <div className='bg-gray-700 py-20 -mt-0.5 px-3 md:px-20'>
      <div className='container mx-auto'>
        <h1 className='pt-5 border-t-2 font-semibold border-violet-400 text-white md:text-base text-sm md:max-w-lg xs:max-w-sm max-w-xs mx-auto text-center tracking-wide'>
          Get in touch
        </h1>
        <p className='uppercase text-center md:text-4xl text-3xl font-semibold text-violet-500 tracking-wider'>
          Contact Me
        </p>

        <div className='lg:grid lg:grid-cols-2 flex flex-col gap-5'>
          <div ref={element}>
            <motion.div
              variants={leftToCenterStagger}
              initial='hidden'
              animate={controls}
              className='pt-16 text-white'
            >
              <motion.div variants={leftToCenterStagger} className='flex gap-4'>
                <FontAwesomeIcon
                  icon={faUserAlt}
                  className='text-2xl my-auto'
                />
                <div className='py-2'>
                  <p className='text-gray-300'>Name</p>
                  <p className='text-lg text-violet-400'>Reynaldo D. Tan Jr.</p>
                </div>
              </motion.div>
              <motion.div variants={leftToCenterStagger} className='flex gap-4'>
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  className='text-2xl my-auto'
                />
                <div className='py-2'>
                  <p className='text-gray-300'>Contact</p>
                  <p className='text-lg text-violet-400'>(+63)975-721-1645</p>
                </div>
              </motion.div>

              <motion.div variants={leftToCenterStagger} className='flex gap-4'>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className='text-2xl my-auto mr-1'
                />
                <div className='py-2'>
                  <p className='text-gray-300'>Address</p>
                  <p className='text-lg text-violet-400'>
                    Zone 3 Puerto, Cagayan de Oro City, Misamis Oriental
                  </p>
                </div>
              </motion.div>

              <motion.div variants={leftToCenterStagger} className='flex gap-4'>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className='text-2xl my-auto'
                />
                <div className='py-2'>
                  <p className='text-gray-300'>Email</p>
                  <p className='text-lg text-violet-400'>
                    reynaldojrtan29@gmail.com
                  </p>
                </div>
              </motion.div>
              <motion.div variants={leftToCenterStagger} className='flex gap-4'>
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className='text-2xl my-auto mr-1'
                />
                <div className='py-2'>
                  <p className='text-gray-300'>Facebook</p>
                  <a
                    href='https://www.facebook.com/reynaldojrtan'
                    target='_blank'
                    rel='noreferrer'
                    className='text-violet-400 text-lg hover:text-lightblue-500'
                  >
                    Tanex Junior
                  </a>
                </div>
              </motion.div>
              <motion.div variants={leftToCenterStagger} className='flex gap-4'>
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className='text-2xl my-auto'
                />
                <div className='py-2'>
                  <p className='text-gray-300'>LinkedIn</p>
                  <a
                    href='https://www.linkedin.com/in/reynaldo-tan-jr-9ab103166/'
                    target='_blank'
                    rel='noreferrer'
                    className='text-violet-400 text-lg hover:text-lightblue-500'
                  >
                    Reynaldo Tan Jr.
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
          <div ref={element2}>
            <motion.div
              variants={zoomIn}
              initial='hidden'
              animate={controls2}
              className='mt-12 py-8 sm:px-10 px-4 rounded text-white bg-gray-600 border border-violet-400'
            >
              <h1 className='text-2xl md:pb-5 pb-3 text-white'>
                Message <span className='text-violet-500'>Me</span>
              </h1>
              <form method='post' name='contact' data-netlify='true'>
                <input type='hidden' name='form-name' value='contact' />
                <div className='grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-3'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Name*'
                    className='py-1 md:py-2  text-black indent-10 focus:outline-none rounded'
                    required
                  />
                  <input
                    type='email'
                    name='email'
                    placeholder='Email*'
                    className='py-1 md:py-2  text-black indent-10 focus:outline-none rounded'
                    required
                  />
                </div>
                <div className='w-full md:py-4 py-3'>
                  <input
                    type='text'
                    name='subject'
                    placeholder='Subject*'
                    className='w-full py-1 md:py-2 text-black indent-10  focus:outline-none rounded'
                    required
                  />
                </div>
                <div className='w-full md:pb-4 pb-3'>
                  <textarea
                    cols='30'
                    rows='6'
                    name='message'
                    placeholder='Message'
                    className='w-full indent-10 text-black  focus:outline-none py-2 rounded'
                  />
                </div>
                <div className='w-full'>
                  <button
                    type='submit'
                    className='py-2 px-5 border rounded border-violet-500 text-white hover:bg-violet-500 w-full transition-all duration-500 ease-in-out'
                  >
                    Send
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
