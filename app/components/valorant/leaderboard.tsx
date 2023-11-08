import { List } from "@mantine/core";
import { Player } from "../../models/valorant/leaderboardResponse";
import { PlayerStats } from "./playerStats";

interface Props {
  players: Player[];
}

export function LeaderboardView({ players }: Props) {
  return (
    <List spacing={"xl"} style={{ marginTop: 20, marginBottom: 20 }}>
      {players.map((player: Player, index: number) => (
        <PlayerStats key={`${player.puuid}-${index}`} player={player} />
      ))}
    </List>
  );
}
