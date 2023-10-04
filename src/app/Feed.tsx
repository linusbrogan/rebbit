"use client"

import { ConfigProvider, Layout , Space, theme} from 'antd'
import { useState } from 'react'
import { Post } from './api'
import NavBar from './NavBar'
import PostCard from './PostCard'

const {Content} = Layout;

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
            className="feed"
            direction="vertical"
            size="middle"
          >
            { props.posts.filter(matchesFilterQuery).map((post: Post) => PostCard(post)) }
          </Space>
        </Content>
      </Layout>
    </ConfigProvider>
  )
}
