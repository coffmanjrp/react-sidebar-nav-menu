import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  About,
  Home,
  Messages,
  Products,
  Support,
  Team,
} from './components/pages';
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
          <Route exact path="/team" component={Team} />
          <Route exact path="/messages" component={Messages} />
          <Route exact path="/support" component={Support} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
