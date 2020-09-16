import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Home from './pages/Home';
import Players from './pages/Players';
import Teams from './pages/Teams';
import { TEAMS_DATA_ENDPOINT } from './utils/apiConfig';
import './app.scss';

export interface teamDataItem {
  idTeam: string;
  strTeam: string;
  strAlternate: string;
  intFormedYear: string;
  strStadium: string;
  strWebsite: string;
  strTeamBadge: string;
}

const App: React.FC = () => {
  const [data, setData] = React.useState<teamDataItem[]>([]);

  React.useEffect(() => {
    axios
      .get(TEAMS_DATA_ENDPOINT)
      .then((res) => {
        setData(res.data.teams);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log('data', data);

  return (
    <div className="app">
      <Header />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/teams">
          <Teams teamData={data} />
        </Route>
        <Route path="/players">
          <Players />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
