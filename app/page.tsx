import { LeaderboardView } from "./components/leaderboard";
import { GeneralInfo } from "./components/generalInfo";

async function getValorantLeaderboard() {
  const res = await fetch(
    "https://api.henrikdev.xyz/valorant/v2/leaderboard/na",
    { cache: "no-cache" }
  );

  if (!res.ok) throw new Error("Failed to fetch leaderboard");

  return res.json();
}

export default async function HomePage() {
  const data: LeaderboardResponse = await getValorantLeaderboard();

  return (
    <div>
      <GeneralInfo info={data} />
      <LeaderboardView players={data.players} />
    </div>
  );
}
