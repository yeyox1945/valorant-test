import Link from "next/link";
import { Player } from "../models/leaderboardResponse";
import { Card, List, Title, Text, Group, Avatar } from "@mantine/core";
import { IconAt, IconPhoneCall } from "@tabler/icons-react";

interface Props {
  player: Player;
}

export const PlayerStats = ({ player }: Props) => {
  return (
    <List.Item>
      <Link
        href={{
          pathname: "recent-matches",
          query: { name: player.gameName, tag: player.tagLine },
        }}
      >
        <Card radius={20}>
          <Group wrap="nowrap" gap={20}>
            <Avatar
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
              size={94}
              radius="md"
            />
            <div>
              <Group>
                <Text fz="xl" fw="bold">
                  {player.gameName}
                </Text>
                <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                  {player.tagLine}
                </Text>
              </Group>

              <Title fz="lg" fw={500} c="yellow">
                Rank: {player.leaderboardRank}
              </Title>

              {player.IsBanned && (
                <Text fz="lg" fw={500} c="red">
                  Banned
                </Text>
              )}

              <Text fz="lg" fw={500} c="orange">
                {player.IsAnonymized ? "Anonymous" : "Public"}
              </Text>

              <Text fz="lg" fw={500} c="blue">
                Tier: {player.competitiveTier}
              </Text>

              <Text fz="lg" fw={500}>
                Wins: {player.numberOfWins}
              </Text>
              <Text fz="lg" fw={500}>
                Rating: {player.rankedRating}
              </Text>
            </div>
            <div>
              <Group wrap="nowrap" gap={10} mt={3}>
                <Text fz="xs" fw="bold">
                  Card Id:
                </Text>
                <Text fz="xs" c="dimmed">
                  {player.PlayerCardID}
                </Text>
              </Group>

              <Group wrap="nowrap" gap={10} mt={5}>
                <Text fz="xs" fw="bold">
                  Title Id:
                </Text>
                <Text fz="xs" c="dimmed">
                  {player.TitleID}
                </Text>
              </Group>

              <Group wrap="nowrap" gap={10} mt={5}>
                <Text fz="xs" fw="bold">
                  Player uuid:
                </Text>
                <Text fz="xs" c="dimmed">
                  {player.puuid}
                </Text>
              </Group>
            </div>
          </Group>
        </Card>

        {/* <Card withBorder padding={20} radius={25}>
          <Title order={3}>
          Game Name: <span> {player.gameName}</span>
          </Title>
          <Title order={3}>
          Tag line:
          <span>{player.tagLine}</span>
          </Title>
          <Title order={3}>
            Leaderboard Rank: <span>{player.leaderboardRank}</span>
          </Title>
          <Title order={3}>
            Ranked Rating: <span>{player.rankedRating}</span>
          </Title>
          <Title order={3}>
            Wins: <span>{player.numberOfWins}</span>
          </Title>
          <Title order={3}>
            Tier: <span>{player.competitiveTier}</span>
          </Title>
          <Text>
            Banned <span>{player.IsBanned}</span>
          </Text>
          <Text>
            IsAnonymized: <span>{player.IsAnonymized}</span>
          </Text>
          <Text>
            PlayerCard ID: <span>{player.PlayerCardID}</span>
          </Text>
          <Text>
            Title ID: <span>{player.TitleID}</span>
          </Text>
          <Text>
            puuid: <span>{player.puuid}</span>
          </Text>
        </Card> */}
      </Link>
    </List.Item>
  );
};
