import * as React from 'react';
import dataFetch from '../utils/dataFetch';
import { TEAMS_DATA_ENDPOINT } from '../utils/apiConfig';
import TeamCard from '../components/TeamCard';

interface ITeamProps {}

const Teams: React.FC<ITeamProps> = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    dataFetch(TEAMS_DATA_ENDPOINT).then((res) => {
      setData(res.teams);
    });
  }, []);

  return (
    <>
      <h1>TEAMS</h1>
      {data.map(({ idTeam, strTeam, strAlternate, intFormedYear, strStadium, strWebsite, strTeamBadge }) => {
        return (
          <TeamCard
            key={idTeam}
            name={strTeam}
            nickname={strAlternate}
            formed={intFormedYear}
            stadium={strStadium}
            website={strWebsite}
            badge={strTeamBadge}
          />
        );
      })}
    </>
  );
};

export default Teams;
