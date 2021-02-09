import Nav from './components/nav';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Services from './components/services';
import Contact from './components/contact';
import Portfolio from './pages/portfolio';
import Footer from './components/Footer';
import AboutMe from './components/aboutme';
import BackToTop from './components/common/backToTop';

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Nav />

      <Switch>
        <Route path='/' exact>
          <Home />
          <Services />
          <Contact />
        </Route>
        <Route path='/portfolio' exact>
          <Portfolio />
        </Route>
        <Route path='/aboutme' exact>
          <AboutMe />
        </Route>
      </Switch>

      <Footer />

      <BackToTop />
    </div>
  );
};

export default App;
