import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Players from './pages/Players';
import Teams from './pages/Teams';
import './app.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/teams">
          <Teams />
        </Route>
        <Route path="/players">
          <Players />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
