import {
  faLaptopCode,
  faMobileAlt,
  faPalette,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Services = () => {
  return (
    <div className='bg-gray-800 py-20'>
      <div className='container mx-auto'>
        <h1 className='pt-5 border-t-2 font-semibold border-violet-400 text-white max-w-lg mx-auto text-center tracking-wide'>
          What can I do
        </h1>
        <p className='uppercase text-center text-4xl font-semibold text-violet-500 tracking-wider'>
          services
        </p>

        <div className='pt-20'>
          <div className='grid grid-cols-3 gap-5'>
            <div className='bg-gray-700 rounded text-white text-center py-10 px-5 border border-violet-400'>
              <FontAwesomeIcon
                icon={faMobileAlt}
                className='text-6xl mt-2 mb-6 text-violet-500'
              />
              <h1 className='text-3xl text-violet-400 font-semibold py-5'>
                Responsive Design
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti laudantium vel inventore odit recusandae laboriosam.
              </p>
            </div>
            <div className='bg-gray-700 rounded text-white text-center py-10 px-5 border border-violet-400'>
              <FontAwesomeIcon
                icon={faLaptopCode}
                className='text-6xl mt-2 mb-6 text-violet-500'
              />
              <h1 className='text-3xl text-violet-400 font-semibold py-5'>
                Web Design
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti laudantium vel inventore odit recusandae laboriosam.
              </p>
            </div>
            <div className='bg-gray-700 rounded text-white text-center py-10 px-5 border border-violet-400'>
              <FontAwesomeIcon
                icon={faPalette}
                className='text-6xl mt-2 mb-6 text-violet-500'
              />
              <h1 className='text-3xl text-violet-400 font-semibold py-5'>
                Graphic Design
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti laudantium vel inventore odit recusandae laboriosam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
