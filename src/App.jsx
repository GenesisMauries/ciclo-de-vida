import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export default function App() {
  const formatUsername = (username) => `@${username}`
  return(
  <section className="App">
    <TwitterFollowCard username="pheralb" name="Pablo Hernandez" initialIsFollowing={false} formatUsername={formatUsername}/>
    <TwitterFollowCard username="kikobeats" name="Kiko Beats" initialIsFollowing={true} formatUsername={formatUsername}/>
    <TwitterFollowCard username="elonmusk" name="Elon Musk" initialIsFollowing={false} formatUsername={formatUsername}/>
  </section>)
}
