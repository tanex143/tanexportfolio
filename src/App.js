import Nav from './components/nav';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Footer from './components/Footer';
import AboutMe from './components/aboutme';
import BackToTop from './components/common/backToTop';

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

      <BackToTop />
    </>
  );
};

export default App;
