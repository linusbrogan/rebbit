import {
  getPosts,
  Post
} from './api'
import Feed from './Feed'

export default async function Home() : Promise<JSX.Element> {
  const posts : Post[] = await getPosts()

  return (
    <Feed posts={posts} />
  )
}
