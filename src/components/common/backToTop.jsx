import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const BackToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    window.pageYOffset > 400 ? setShowScroll(true) : setShowScroll(false);
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <>
      <div
        onClick={() => window.scrollTo(0, 0)}
        className={`bg-white fixed z-50 bottom-0 right-0 w-10 h-10 rounded mr-10 flex justify-center items-center cursor-pointer transition-all duration-500 ease-in-out ${
          showScroll ? 'opacity-100 mb-10' : 'opacity-0 -mb-10'
        }`}
      >
        <FontAwesomeIcon
          icon={faArrowUp}
          className='text-violet-500 text-2xl hover:text-black transition-all duration-500 ease-in-out'
        />
      </div>
    </>
  );
};

export default BackToTop;
