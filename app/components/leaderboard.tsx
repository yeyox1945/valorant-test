import { Player } from "../models/leaderboardResponse";
import { PlayerStats } from "./playerStats";

interface Props {
  players: Player[];
}

export function LeaderboardView({ players }: Props) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {players.map((player: Player, index: number) => (
        <PlayerStats key={`${player.puuid}-${index}`} player={player} />
      ))}
    </div>
  );
}
