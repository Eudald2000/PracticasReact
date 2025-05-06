import "./App.css";
import { TwitterFollowCard } from "./TwiterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Miguel Angel Duran",
    initialIsFollowing: true,
  },
  {
    userName: "iibai",
    name: "Ibai Llanos",
    initialIsFollowing: false,
  },
  {
    userName: "eudald",
    name: "Eudald Bosch",
    initialIsFollowing: true,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map((user) => {
        const {
          userName: username,
          name: fullName,
          initialIsFollowing: isFollowing,
        } = user;
        return (
          <TwitterFollowCard
            key={username}
            userName={username}
            name={fullName}
            initialIsFollowing={isFollowing}
          >
            {fullName}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
