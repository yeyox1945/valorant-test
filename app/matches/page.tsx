import {
  MatchesResponse,
  Blue,
  Team,
} from "../models/matchesFromPlayerResponse";

const getRecentMatches = async (name: string, tag: string) => {
  const res = await fetch(
    `https://api.henrikdev.xyz/valorant/v3/matches/na/${name}/${tag}`,
    { cache: "no-cache" }
  );

  if (!res.ok) throw new Error("Failed to fetch matches");

  return res.json();
};

interface Query {
  name: string;
  tag: string;
}

export default async function PlayerPage({
  searchParams,
}: {
  searchParams: Query;
}) {
  const data: MatchesResponse = await getRecentMatches(
    searchParams.name,
    searchParams.tag
  );

  return (
    <div>
      {data.data.map((match) => {
        const playerMatchInfo = match.players.all_players.find(
          (player) => player.name === searchParams.name
        );

        return (
          <div
            key={match.metadata.matchid}
            style={{
              padding: 20,
              margin: 10,
            }}
          >
            <img src={playerMatchInfo?.assets.card.small} />
            <h2>{match.metadata.map} </h2>
            <h2>
              {" "}
              {match.teams.blue.has_won && playerMatchInfo?.team === Team.Blue
                ? "Won"
                : "Lost"}
            </h2>
            <h2>
              {" "}
              {playerMatchInfo?.stats.kills} / {playerMatchInfo?.stats.deaths} /{" "}
              {playerMatchInfo?.stats.assists}{" "}
            </h2>
            <h2>{match.metadata.game_start_patched} </h2>
            <h2>{match.metadata.game_length} </h2>
            <h2>{playerMatchInfo?.character} </h2>
            <img src={playerMatchInfo?.assets.agent.small} />
          </div>
        );
      })}
    </div>
  );
}
