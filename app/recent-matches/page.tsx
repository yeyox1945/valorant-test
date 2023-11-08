"use client";
import { useGetRecentMatchesQuery } from "@/redux/api/playersApi";
import { Team } from "../models/valorant/matchesFromPlayerResponse";
import MatchStats from "../components/valorant/matchStats";
import { Title } from "@mantine/core";

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
      <Title> Matches from {searchParams.name} </Title>
      {data!.data.map((match) => {
        return (
          <MatchStats
            key={match.metadata.matchid}
            match={match}
            playerName={searchParams.name}
          />
        );
      })}
    </div>
  );
}
