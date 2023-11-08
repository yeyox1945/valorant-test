import {
  RingProgress,
  Text,
  SimpleGrid,
  Paper,
  Center,
  Group,
  rem,
} from "@mantine/core";
import { IconArrowDownRight, IconArrowUpRight } from "@tabler/icons-react";
import { LeaderboardResponse } from "../../models/valorant/leaderboardResponse";

const icons = {
  up: IconArrowUpRight,
  down: IconArrowDownRight,
};

interface Props {
  info: LeaderboardResponse;
}

export const GeneralInfo = ({ info }: Props) => {
  const data = [
    {
      label: "Immortal 1 threshold",
      stats: info.immortal_1_threshold,
      progress: Math.random() * 100,
      color: "red",
      icon: "up",
    },
    {
      label: "Immortal 2 threshold",
      stats: info.immortal_2_threshold,
      progress: Math.random() * 100,
      color: "purple",
      icon: "down",
    },
    {
      label: "Immortal 3 threshold",
      stats: info.immortal_3_threshold,
      progress: Math.random() * 100,
      color: "blue",
      icon: "up",
    },
    {
      label: "Last update",
      stats: info.last_update,
      progress: Math.random() * 100,
      color: "green",
      icon: "down",
    },
    {
      label: "Next update",
      stats: info.next_update,
      progress: Math.random() * 100,
      color: "yellow",
      icon: "up",
    },
    {
      label: "Radiant threshold",
      stats: info.radiant_threshold,
      progress: Math.random() * 100,
      color: "orange",
      icon: "down",
    },
    {
      label: "Total Players",
      stats: info.total_players,
      progress: Math.random() * 100,
      color: "pink",
      icon: "up",
    },
  ] as const;

  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];
    return (
      <Paper withBorder radius="md" p="xs" key={stat.label}>
        <Group>
          <RingProgress
            size={80}
            roundCaps
            thickness={8}
            sections={[{ value: stat.progress, color: stat.color }]}
            label={
              <Center>
                <Icon
                  style={{ width: rem(20), height: rem(20) }}
                  stroke={1.5}
                />
              </Center>
            }
          />

          <div>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
              {stat.label}
            </Text>
            <Text fw={700} size="xl">
              {stat.stats}
            </Text>
          </div>
        </Group>
      </Paper>
    );
  });

  return <SimpleGrid cols={{ base: 1, sm: 3 }}>{stats}</SimpleGrid>;
};
