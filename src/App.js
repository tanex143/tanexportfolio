import Nav from './components/nav';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Footer from './components/Footer';

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
      </Switch>

      <Footer />
    </>
  );
};

export default App;
