const API_BASE_URL: string = 'https://dummyjson.com'

type APIPost = {
  id: number
  title: string
  body: string
  userId: number
  tags: string[]
  reactions: number
}

export type Post = APIPost & {username: string}

export async function getPosts() : Promise<Post[]> {
  const response = await fetch(`${API_BASE_URL}/posts?limit=10`)
  if (!response.ok) throw new Error('Failed to fetch posts.')
  const json = await response.json()
  const posts : APIPost[] = json.posts
  for (let post of posts) {
    (<Post>post).username = await getUsername(post.userId)
  }
  return <Post[]>posts
}

export async function getUsername(id: number): Promise<string> {
  const response = await fetch(`${API_BASE_URL}/users/${id}`)
  if (!response.ok) throw new Error('Failed to fetch username.')
  const json = await response.json()
  return json.username
}
