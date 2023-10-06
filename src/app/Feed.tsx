"use client"

import {
  Card,
  ConfigProvider,
  Layout,
  Space,
  theme
} from 'antd'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import {
  getPosts,
  Post
} from './api'
import NavBar from './NavBar'
import PostCard from './PostCard'

const {Content} = Layout

export type FeedProps = {
  posts: Post[]
}

export default function Feed(props: FeedProps) : JSX.Element {
  // Feed displays a feed of posts, filtered by its search field.
  // This aligns with the assignment, to filter by title.
  // Feed does the filtering itself instead of using the post search API because the API searches by body instead of title.
  const [filterQuery, setFilterQuery] = useState<string>('')

  function matchesFilterQuery(post: Post) : boolean {
    const title = post.title.toLowerCase()
    return title.includes(filterQuery.toLowerCase())
  }

  const [posts, setPosts] = useState<Post[]>(props.posts)
  const [hasMorePosts, setHasMorePosts] = useState<boolean>(true)

  async function getNextPosts() {
    const newPosts = await getPosts(posts.length)
    if (newPosts.length == 0) setHasMorePosts(false)
    setPosts([...posts, ...newPosts])
  }

  return (
      // TODO: move the ConfigProvider up, ideally to layout.tsx
      // Rendering on the server requires special configuration, so I put it in the first client component, for now.
      <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          borderRadius: 4,
          colorPrimary: '#00b96b'
        }
      }}
    >
      <Layout>
        <NavBar query={filterQuery} onQueryChange={setFilterQuery}/>
        <Content className="flex-center">
          <Space
            direction="vertical"
            size="middle"
            style={{
              flexGrow: 1,
              maxWidth: 1000
            }}
          >
            {
              posts
                .filter(matchesFilterQuery)
                .map(
                  (post: Post) => <PostCard
                    key={post.id}
                    post={post}
                  />
                )
            }
            <InfiniteScroll
              dataLength={posts.length}
              next={getNextPosts}
              hasMore={hasMorePosts}
              loader={<Card loading />}
            >
              {/*
                The infinite scrolling list of posts is supposed to go here.
                But the InfiniteScroll component breaks the styles, so it's empty.
                It works well enough.
              */}
            </InfiniteScroll>
          </Space>
        </Content>
      </Layout>
    </ConfigProvider>
  )
}
