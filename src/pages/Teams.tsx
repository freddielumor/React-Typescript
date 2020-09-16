import * as React from 'react';
import { teamDataItem } from '../App';
import TeamCard from '../components/TeamCard';

interface ITeamProps {
  teamData: teamDataItem[];
}

const Teams: React.FC<ITeamProps> = ({ teamData }) => {
  return (
    <>
      <h1>TEAMS</h1>
      {teamData.map(({ idTeam, strTeam, strAlternate, intFormedYear, strStadium, strWebsite, strTeamBadge }) => {
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
