import shoesECommerce from './images/shoes-e-commerce.jpg';
import tmdbMovies from './images/tmdb-movies.jpg';
import youtubeConverter from './images/youtube-converter.jpg';
import travella from './images/travella.jpg';
import musika from './images/musika.jpg';
import healthcare from './images/healthcare.jpg';

export const portfolioData = [
  {
    id: 6,
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
    site_link: 'https://tanex-nike-shoes-e-commerce.netlify.app',
    date: 'January 2021',
  },
  {
    id: 5,
    project_name: 'TMDb Movies',
    description:
      'A dynamic movies with a glassmorphism design. I fetch all the movies data in TMDb API website using useEffect Hook of React JS and to expose using API. It shows what are the trending movies, upcoming movies and now playing in cinema movies. Each movie shows the details of the movie. It is also responsive.sss',
    source: 'https://github.com/tanex143/tmdb-movies',
    builtwith: [
      { name: 'React JS', source: `https://reactjs.org/` },
      { name: 'Ant Design', source: `https://ant.design/` },
      { name: 'Tailwind CSS', source: `https://tailwindcss.com/` },
      { name: 'Framer Motion', source: `https://www.framer.com/motion/` },
    ],
    project_image: `${tmdbMovies}`,
    site_link: 'https://tanex-tmdb.netlify.app',
    date: 'December 2020 - January 2021',
  },
  {
    id: 4,
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
    site_link: 'https://tanex-youtube-converter.netlify.app',
    date: 'December 2020',
  },
  {
    id: 3,
    project_name: 'Online Health Care',
    description:
      'A static page using React. I practice building static page in react to familiarize the Tailwind CSS and to practice the animation library which is Framer Motion. Also, to expose in responsive web design.',
    source: 'https://github.com/tanex143/online-health-care',
    builtwith: [
      { name: 'React JS', source: `https://reactjs.org/` },
      { name: 'Ant Design', source: `https://ant.design/` },
      { name: 'Tailwind CSS', source: `https://tailwindcss.com/` },
      { name: 'Framer Motion', source: `https://www.framer.com/motion/` },
    ],
    project_image: `${healthcare}`,
    site_link: 'https://online-health-care.netlify.app',
    date: 'December 2020',
  },
  {
    id: 2,
    project_name: 'Musika Music Player',
    description:
      'A music player that has static data of music and fetch it dynamically. I make this to practice passing data through props in react. It is also responsive.',
    source: 'https://github.com/tanex143/musika-music-player',
    builtwith: [
      { name: 'React JS', source: `https://reactjs.org/` },
      { name: 'Ant Design', source: `https://ant.design/` },
      { name: 'Tailwind CSS', source: `https://tailwindcss.com/` },
    ],
    project_image: `${musika}`,
    site_link: 'https://musika-music-player.netlify.app',
    date: 'November 2020',
  },
  {
    id: 1,
    project_name: 'Travella',
    description:
      'My first React project with fetching photos in Pixabay using API and I use Tailwind CSS for CSS Framework and Ant Design Library. I use useEffect and useState Hooks of React JS. useEffect to fetch data and useState to store my data. Everytime they search, the useEffect will run again. It is also responsive.',
    source: 'https://github.com/tanex143/travella',
    builtwith: [
      { name: 'React JS', source: `https://reactjs.org/` },
      { name: 'Ant Design', source: `https://ant.design/` },
      { name: 'Tailwind CSS', source: `https://tailwindcss.com/` },
    ],
    project_image: `${travella}`,
    site_link: 'https://tanex-travella.netlify.app',
    date: 'October - November 2020',
  },
];
