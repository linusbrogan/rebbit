import {
  getPosts,
  Post
} from './api'

export default async function Home() {
  const posts : Post[] = await getPosts()

  return (
    <div>
      {posts.map(o => JSON.stringify(o))}
    </div>
  )
}
