import {
  getPosts,
  Post
} from './api'
import PostCard from './PostCard'

export default async function Home() : Promise<JSX.Element>{
  const posts : Post[] = await getPosts()

  return (
    <div>
      { posts.map(post => PostCard(post)) }
    </div>
  )
}
