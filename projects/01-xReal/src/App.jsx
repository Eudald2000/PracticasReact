import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true
    },
    {
      userName: 'IbaiLlanos',
      name: 'Ibai.',
      isFollowing: false
    },
    {
      userName: 'DjMaRiiO',
      name: 'Dj Mario',
      isFollowing: true
    }
  ]

export function App() {
    return (
        <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
    )
}