import * as React from 'react';
import './TeamCard.scss';

type TeamCardProps = {
  name: string;
  formed: string;
  stadium: string;
  website: string;
  badge: string;
};

const TeamCard: React.FC<TeamCardProps> = ({ name, formed, stadium, website, badge }) => {
  return (
    <div className="teamCard">
      <div className="teamCard__inner">
        <div className="teamCard__badge">
          <img src={badge} alt="badge" />
        </div>
        <hr className="postCard__divider" />
        <h4 className="teamCard__name">{name}</h4>
        <p className="postCard__formed">Formed: {formed}</p>
        <p className="postCard__stadium">Stadium: {stadium}</p>
        <a className="postCard__website" href={`https://${website}`}>
          {website}
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
