"use client";
import { LeaderboardView } from "./components/leaderboard";
import { GeneralInfo } from "./components/generalInfo";
import { useGetLeaderboardQuery } from "../redux/api/playersApi";
import { useEffect, useState, useRef, useCallback } from "react";
import { Player } from "./models/leaderboardResponse";
import { Loader } from "@mantine/core";

export default function HomePage() {
  const { data, error, isLoading } = useGetLeaderboardQuery(null);

  const [page, setPage] = useState(1);
  const [isLastPage, setLastPage] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [players, setPlayers] = useState<Player[]>([]);

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

  useEffect(() => {
    setLoadingMore(true);
    setPlayers(
      data?.players?.filter(
        (player: Player) => player.leaderboardRank <= page * 1000
      )!
    );
    setLoadingMore(false);
  }, [data, page]);

  if (isLoading) return <p>Loading....</p>;
  if (error) return <p> Something went wrong </p>;

  return (
    <div>
      <GeneralInfo info={data} />
      {players && <LeaderboardView players={players} />}
      {!isLoading && players && !isLastPage && (
        <Loader ref={loadingElementRef} />
      )}
    </div>
  );
}
