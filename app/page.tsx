"use client";
import { LeaderboardView } from "./components/leaderboard";
import { GeneralInfo } from "./components/generalInfo";
import { useGetLeaderboardQuery } from "../redux/api/playersApi";
import { useEffect, useState, useRef, useCallback } from "react";
import { Player } from "./models/leaderboardResponse";
import { AppShell, Center, Loader, Title } from "@mantine/core";

export default function HomePage() {
  // hooks
  const { data, error, isLoading } = useGetLeaderboardQuery(null);

  // states
  const [page, setPage] = useState(1);
  const [isLastPage, setLastPage] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [players, setPlayers] = useState<Player[]>([]);

  // refs
  const observer = useRef<IntersectionObserver>();
  const loadingElementRef = useCallback(
    (loadingElement: HTMLSpanElement) => {
      if (loadingMore) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !isLastPage) {
          setPage((prev) => prev + 1);
        }
      });
      if (loadingElement) observer.current.observe(loadingElement);
    },
    [isLastPage]
  );

  // effects
  useEffect(() => {
    setLoadingMore(true);
    const filteredPlayers = data?.players?.filter(
      (player: Player) => player.leaderboardRank <= page * 1000
    )!;
    setPlayers(filteredPlayers!);
    if (
      filteredPlayers?.length === data?.players.length &&
      data?.players.length > 0
    )
      setLastPage(true);
    setLoadingMore(false);
  }, [data, page]);

  if (isLoading) return <p>Loading....</p>;
  if (error) return <p> Something went wrong </p>;

  return (
    <AppShell padding="xl">
      <AppShell.Main>
        <GeneralInfo info={data!} />

        <Title style={{ marginTop: 40 }}>Leaderboard</Title>
        {players && <LeaderboardView players={players} />}
        {!isLoading && players && !isLastPage && (
          <Center>
            <Loader ref={loadingElementRef} />
          </Center>
        )}
      </AppShell.Main>
    </AppShell>
  );
}
