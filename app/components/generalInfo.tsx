interface Props {
  info: LeaderboardResponse;
}

export const GeneralInfo = ({ info }: Props) => {
  return (
    <div>
      <h2>
        total players: <span>{info.total_players}</span>
      </h2>
      <h2>
        radiant threshold: <span>{info.radiant_threshold}</span>
      </h2>
      <h2>
        immortal 1 threshold: <span>{info.immortal_1_threshold}</span>
      </h2>
      <h2>
        immortal 2 threshold: <span>{info.immortal_2_threshold}</span>
      </h2>
      <h2>
        immortal 3 threshold: <span>{info.immortal_2_threshold}</span>
      </h2>
      <h2>
        radiant threshold: <span>{info.immortal_3_threshold}</span>
      </h2>
      <h2>
        last update: <span>{info.last_update}</span>
      </h2>
      <h2>
        next update: <span>{info.next_update}</span>
      </h2>
    </div>
  );
};
