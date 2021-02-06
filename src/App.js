import Nav from './components/nav';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Footer from './components/Footer';
import AboutMe from './components/aboutme';
import { BackTop } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <>
      <Nav />

      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/portfolio' exact>
          <Portfolio />
        </Route>
        <Route path='/aboutme' exact>
          <AboutMe />
        </Route>
      </Switch>

      <Footer />
      <BackTop>
        <button className='bg-white text-violet-500 font-semibold p-2 rounded cursor-pointer focus:outline-none hover:text-black transition-all duration-500 ease-out'>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </BackTop>
    </>
  );
};

export default App;
