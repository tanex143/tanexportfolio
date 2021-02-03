import shoesECommerce from './images/shoes-e-commerce.jpg';
import tmdbMovies from './images/tmdb-movies.jpg';
import youtubeConverter from './images/youtube-converter.jpg';

export const portfolioData = [
  {
    id: 1,
    project_name: 'Nike Shoes E-commerce',
    description:
      'A simple responsive e-commerce website with the use of Context Hook of React JS. A dynamic website that has simple validation to create and login user, item add to cart, delete per item, delete all item in cart and checkout function with the use of react-paypal-express-checkout. I just assume that all items has only 1 stock.',
    source: 'https://github.com/tanex143/shoes-e-commerce',
    builtwith: [
      { name: 'React JS', source: `https://reactjs.org/` },
      { name: 'Ant Design', source: `https://ant.design/` },
      { name: 'Tailwind CSS', source: `https://tailwindcss.com/` },
    ],
    project_image: `${shoesECommerce}`,
    site_link: '',
    date: 'January 2021',
  },
  {
    id: 2,
    project_name: 'TMDb Movies',
    description:
      'A dynamic movies with a glassmorphism design. I fetch all the movies data in TMDb API website using useEffect Hook of React JS. It shows what are the trending movies, upcoming movies and now playing in cinema movies. Each movie shows the details of the movie. I use framer motion for the animation.',
    source: 'https://github.com/tanex143/tmdb-movies',
    builtwith: [
      { name: 'React JS', source: `https://reactjs.org/` },
      { name: 'Ant Design', source: `https://ant.design/` },
      { name: 'Tailwind CSS', source: `https://tailwindcss.com/` },
      { name: 'Framer Motion', source: `https://www.framer.com/motion/` },
    ],
    project_image: `${tmdbMovies}`,
    site_link: '',
    date: 'December 2020',
  },
  {
    id: 3,
    project_name: 'Youtube Converter',
    description:
      'A simple responsive youtube converter using yt-download API. You will just copy the youtube URL and paste here and it will automatically convert to MP3 and MP4. You can also choose what to download.',
    source: 'https://github.com/tanex143/youtube-converter',
    builtwith: [
      { name: 'React JS', source: `https://reactjs.org/` },
      { name: 'Ant Design', source: `https://ant.design/` },
      { name: 'Tailwind CSS', source: `https://tailwindcss.com/` },
    ],
    project_image: `${youtubeConverter}`,
    site_link: '',
    date: 'November 2020',
  },
];
