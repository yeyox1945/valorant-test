import { Datum, Team } from "../models/matchesFromPlayerResponse";
import { Card, Avatar, Text, Group } from "@mantine/core";
import { toHHMMSS } from "../utils/timeFormatter";

interface Props {
  match: Datum;
  playerName: string;
}

export default function MatchStats({ match, playerName }: Props) {
  const playerMatchInfo = match.players.all_players.find(
    (player) => player.name === playerName
  );

  const stats = [
    { value: match.metadata.map, label: "Map" },
    {
      value:
        match.teams.blue.has_won && playerMatchInfo?.team === Team.Blue
          ? "Won"
          : "Lost",
      label: "Match",
    },
    {
      value: toHHMMSS(match.metadata.game_length),
      label: "Duration",
    },
  ];

  const kda = [
    { value: playerMatchInfo?.stats.kills, label: "Kills", color: "green" },
    { value: playerMatchInfo?.stats.deaths, label: "Deaths", color: "red" },
    {
      value: playerMatchInfo?.stats.assists,
      label: "Assists",
      color: "yellow",
    },
  ];

  const items = (items: any) =>
    items.map((stat: any) => (
      <div key={stat.label}>
        <Text ta="center" fz="lg" fw={500} c={stat.color}>
          {stat.value}
        </Text>
        <Text ta="center" fz="sm" c="dimmed" lh={1}>
          {stat.label}
        </Text>
      </div>
    ));

  return (
    <Card withBorder padding="xl" radius="md" w={500} style={{ margin: 20 }}>
      <Card.Section
        h={200}
        style={{
          backgroundImage: `url(${playerMatchInfo?.assets.agent.killfeed})`,
          backgroundSize: "cover",
        }}
      />
      <Avatar
        src={playerMatchInfo?.assets.card.small}
        size={80}
        radius={80}
        mx="auto"
        mt={-30}
      />
      <Text ta="center" fz="lg" fw={500} mt="sm">
        {playerName}
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        {playerMatchInfo?.character}
      </Text>
      <Group mt="md" justify="center" gap={30}>
        {items(stats)}
      </Group>
      <br />
      <Group mt="md" justify="center" gap={30}>
        {items(kda)}
      </Group>
      <br />
      <Text ta="center" fz="lg" fw={500}>
        {match.metadata.game_start_patched}
      </Text>
      <Text ta="center" fz="sm" c="dimmed" lh={1}>
        Started At
      </Text>
    </Card>
  );
}
