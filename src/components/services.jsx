import {
  faLaptopCode,
  faMobileAlt,
  faPalette,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Services = () => {
  return (
    <div className='bg-gray-900 py-20'>
      <div className='container mx-auto'>
        <h1 className='pt-5 border-t-2 border-gray-300 text-gray-300 max-w-lg mx-auto text-center tracking-wide'>
          What can I do
        </h1>
        <p className='uppercase text-center text-4xl font-semibold text-white tracking-wider'>
          services
        </p>

        <div className='pt-20'>
          <div className='grid grid-cols-3 gap-5'>
            <div className='bg-gray-800 rounded text-white text-center py-10 px-5'>
              <FontAwesomeIcon
                icon={faMobileAlt}
                className='text-6xl mt-2 mb-6'
              />
              <h1 className='text-3xl font-semibold py-5'>Responsive Design</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                vel ullam consequuntur aliquid soluta itaque unde beatae
                officiis accusantium deserunt.
              </p>
            </div>
            <div className='bg-gray-800 rounded text-white text-center py-10 px-5'>
              <FontAwesomeIcon
                icon={faLaptopCode}
                className='text-6xl mt-2 mb-6'
              />
              <h1 className='text-3xl font-semibold py-5'>Web Design</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                vel ullam consequuntur aliquid soluta itaque unde beatae
                officiis accusantium deserunt.
              </p>
            </div>
            <div className='bg-gray-800 rounded text-white text-center py-10 px-5'>
              <FontAwesomeIcon
                icon={faPalette}
                className='text-6xl mt-2 mb-6'
              />
              <h1 className='text-3xl font-semibold py-5'>Graphic Design</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                vel ullam consequuntur aliquid soluta itaque unde beatae
                officiis accusantium deserunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
