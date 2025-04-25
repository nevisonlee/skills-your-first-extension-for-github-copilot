import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Students from './pages/Students';
import Teachers from './pages/Teachers';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/students" component={Students} />
          <Route path="/teachers" component={Teachers} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;