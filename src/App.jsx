import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
const users = [
  {
    userName: "Kiko Beats",
    name: "kikobeats",
    isFollowing: true,
  },
  {
    userName: "pheralb",
    name: "Pablo H.",
    isFollowing: false,
  },
  {
    userName: "PacoHdezs",
    name: "Paco Hdez",
    isFollowing: true,
  },
  {
    userName: "TMChein",
    name: "Tomas",
    isFollowing: false,
  },
];
export default function App() {
  const formatUsername = (username) => `@${username}`;
  return (
    <section className="App">
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            username={userName}
            name={name}
            initialIsFollowing={isFollowing}
            formatUsername={formatUsername}
          >
            
          </TwitterFollowCard>
        ))
      }
    </section>
  );
}
