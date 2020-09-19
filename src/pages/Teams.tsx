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
    <div className="page">
      <h1 className="page__title">TEAMS</h1>

      <div className="page__content">
        {data.map(({ idTeam, strTeam, intFormedYear, strStadium, strWebsite, strTeamBadge }) => {
          return (
            <TeamCard
              key={idTeam}
              name={strTeam}
              formed={intFormedYear}
              stadium={strStadium}
              website={strWebsite}
              badge={strTeamBadge}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Teams;
