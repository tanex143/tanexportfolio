import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
  faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  return (
    <div className='bg-gray-800 py-20'>
      <div className='container mx-auto'>
        <h1 className='pt-5 border-t-2 font-semibold border-gray-300 text-gray-300 max-w-lg mx-auto text-center tracking-wide'>
          Get in touch
        </h1>
        <p className='uppercase text-center text-4xl font-semibold text-white tracking-wider'>
          Contact Me
        </p>

        <div className='grid grid-cols-2 gap-5'>
          <div className='pt-16 text-white'>
            <div className='flex gap-4'>
              <FontAwesomeIcon icon={faUserAlt} className='text-2xl my-auto' />
              <div className='py-2'>
                <p className='text-gray-300'>Name</p>
                <p className='text-lg'>Reynaldo D. Tan Jr.</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <FontAwesomeIcon icon={faPhoneAlt} className='text-2xl my-auto' />
              <div className='py-2'>
                <p className='text-gray-300'>Contact</p>
                <p className='text-lg'>(+63)975-721-1645</p>
              </div>
            </div>

            <div className='flex gap-4'>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className='text-2xl my-auto mr-1'
              />
              <div className='py-2'>
                <p className='text-gray-300'>Address</p>
                <p className='text-lg'>
                  Zone 3 Puerto, Cagayan de Oro City, Misamis Oriental
                </p>
              </div>
            </div>

            <div className='flex gap-4'>
              <FontAwesomeIcon icon={faEnvelope} className='text-2xl my-auto' />
              <div className='py-2'>
                <p className='text-gray-300'>Email</p>
                <p className='text-lg'>reynaldojrtan29@gmail.com</p>
              </div>
            </div>
            <div className='flex gap-4'>
              <FontAwesomeIcon
                icon={faFacebookF}
                className='text-2xl my-auto mr-1'
              />
              <div className='py-2'>
                <p className='text-gray-300'>Facebook</p>
                <a
                  href='https://www.facebook.com/reynaldojrtan'
                  className='text-white text-lg hover:text-lightblue-500'
                >
                  Tanex Junior
                </a>
              </div>
            </div>
            <div className='flex gap-4'>
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className='text-2xl my-auto'
              />
              <div className='py-2'>
                <p className='text-gray-300'>LinkedIn</p>
                <a
                  href='https://www.linkedin.com/in/reynaldo-tan-jr-9ab103166/'
                  className='text-white text-lg hover:text-lightblue-500'
                >
                  Reynaldo Tan Jr.
                </a>
              </div>
            </div>
          </div>
          <div className='mt-12 pt-4 px-4 rounded text-white bg-gray-700'>
            <h1 className='text-2xl pb-5'>Message Me</h1>
            <form method='post' name='contact' data-netlify='true'>
              <input type='hidden' name='form-name' value='contact' />
              <div className='grid grid-cols-2 gap-4'>
                <input
                  type='text'
                  name='name'
                  placeholder='Name*'
                  className='py-2  text-black indent-10 focus:outline-none'
                  required
                />
                <input
                  type='email'
                  name='email'
                  placeholder='Email*'
                  className='py-2  text-black indent-10 focus:outline-none'
                  required
                />
              </div>
              <div className='w-full py-4'>
                <input
                  type='text'
                  name='subject'
                  placeholder='Subject*'
                  className='w-full py-2 text-black indent-10  focus:outline-none'
                  required
                />
              </div>
              <div className='w-full pb-4'>
                <textarea
                  cols='30'
                  rows='6'
                  name='message'
                  placeholder='Message'
                  className='w-full indent-10 text-black  focus:outline-none py-2'
                />
              </div>
              <div className='w-full pb-5'>
                <button
                  type='submit'
                  className='py-2 px-5 border border-white text-white hover:text-black hover:bg-white w-full transition-all duration-500 ease-in-out'
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
