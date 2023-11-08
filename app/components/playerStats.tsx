import Link from "next/link";

interface Props {
  player: Player;
}

export const PlayerStats = ({ player }: Props) => {
  return (
    <Link
      href={{
        pathname: "matches",
        query: { name: player.gameName, tag: player.tagLine },
      }}
    >
      <div
        style={{
          backgroundColor: "gray",
          padding: 10,
          margin: 10,
        }}
      >
        <h3>
          Game name: <span> {player.gameName}</span>
        </h3>
        <h3>
          Tag line:
          <span>{player.tagLine}</span>
        </h3>
        <h3>
          Leaderboard Rank: <span>{player.leaderboardRank}</span>
        </h3>
        <h3>
          Ranked Rating: <span>{player.rankedRating}</span>
        </h3>
        <h3>
          Wins: <span>{player.numberOfWins}</span>
        </h3>
        <h3>
          Tier: <span>{player.competitiveTier}</span>
        </h3>
        <h4>
          Banned <span>{player.IsBanned}</span>
        </h4>
        <h4>
          IsAnonymized: <span>{player.IsAnonymized}</span>
        </h4>
        <h4>
          PlayerCard ID: <span>{player.PlayerCardID}</span>
        </h4>
        <h4>
          Title ID: <span>{player.TitleID}</span>
        </h4>
        <h4>
          puuid: <span>{player.puuid}</span>
        </h4>
      </div>
    </Link>
  );
};
