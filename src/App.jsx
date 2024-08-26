import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export default function App() {
  const formatUsername = (username) => `@${username}`;
  return (
    <section className="App">
      <TwitterFollowCard
        username="midudev"
        name="Miguel Duran"
        isFollowing={true}
        formatUsername={formatUsername}
      />
      <TwitterFollowCard
        username="pheralb"
        name="Pablo Hernandez"
        isFollowing={false}
        formatUsername={formatUsername}
      />
      <TwitterFollowCard
        username="kikobeats"
        name="Kiko Beats"
        isFollowing={true}
        formatUsername={formatUsername}
      />
      <TwitterFollowCard
        username="elonmusk"
        name="Elon Musk"
        isFollowing={false}
        formatUsername={formatUsername}
      />
    </section>
  );
}
