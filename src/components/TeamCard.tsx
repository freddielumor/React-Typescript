import React from "react";

type TeamCardProps = {
  name: string;
  nickname: string;
  formed: string;
  stadium: string;
  website: string;
  badge: string;
};

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  nickname,
  formed,
  stadium,
  website,
  badge,
}) => {
  return (
    <div className="teamCard">
      <div className="teamCard__inner">
        <img className="teamCard__badge" src={badge} alt="badge" />
        <hr className="postCard__divider" />
        <h4 className="teamCard__name">{name}</h4>
        <p className="postCard__nickname">{formed}</p>
        <p className="postCard__formed">{formed}</p>
        <p className="postCard__stadium">{stadium}</p>
        <a className="postCard__website" href={website}>
          {website}
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
