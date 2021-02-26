import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About, Home, Products } from './components/pages';
import { Navbar } from './components/navbar';
import './assets/css/App.css';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/products" component={Products} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
