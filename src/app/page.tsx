const API_BASE_URL: string = 'https://dummyjson.com';

export default async function Home() {
  const posts = await getPosts();
  return (
    <div>
      {posts.map(o => JSON.stringify(o))}
    </div>
  )
}

async function getPosts() {
  console.log(`${API_BASE_URL}/posts?limit=10`)
  const response = await fetch(`${API_BASE_URL}/posts?limit=10`)
  console.log(response);
  if (!response.ok) throw new Error('Failed to fetch posts.')
  const json = await response.json();
  return json.posts;
}
