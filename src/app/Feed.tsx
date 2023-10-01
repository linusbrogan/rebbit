"use client"

import { useState } from 'react'
import { Post } from './api'
import NavBar from './NavBar'
import PostCard from './PostCard'

export type FeedProps = {
  posts: Post[]
}

// Feed displays a feed of posts, filtered by its search field.
// This aligns with the assignment, to filter by title.
// Feed does the filtering itself instead of using the post search API because the API searches by body instead of title.
export default function Feed(props: FeedProps) : JSX.Element {
  const [filterQuery, setFilterQuery] = useState<string>('')

  function matchesFilterQuery(post: Post) : boolean {
    const title = post.title.toLowerCase()
    return title.includes(filterQuery.toLowerCase())
  }

  return (
    <div>
      <NavBar query={filterQuery} onQueryChange={setFilterQuery}/>
      { props.posts.filter(matchesFilterQuery).map((post: Post) => PostCard(post)) }
    </div>
  )
}
