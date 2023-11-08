"use client";
import { useGetRecentMatchesQuery } from "@/redux/api/playersApi";
import { Team } from "../models/matchesFromPlayerResponse";

interface Query {
  name: string;
  tag: string;
}

export default function PlayerPage({ searchParams }: { searchParams: Query }) {
  const { data, isLoading, isError } = useGetRecentMatchesQuery({
    playerName: searchParams.name,
    tag: searchParams.tag,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <div>
      {data!.data.map((match) => {
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
