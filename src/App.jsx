import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About, Home, Products } from './components/pages';
import { Navbar } from './components/navbar';
import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" components={Home} />
          <Route exact path="/about" components={About} />
          <Route exact path="/products" components={Products} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
