import {
  Card,
  Typography
} from 'antd'
import { Post } from './api'

const {
  Paragraph,
  Text,
  Title
} = Typography

const MAX_POST_LENGTH = 300

export default function PostCard(props: Post) : JSX.Element {
  let body : string = props.body
  if (body.length > MAX_POST_LENGTH) {
    body = body.substring(0, MAX_POST_LENGTH - 3) + '...'
  }

  // TODO: What if the array is empty?
  const subrebbit : string = props.tags[0]

  return (
      <Card key={props.id}>
        <Text strong>r/{ subrebbit }</Text>
        <Text type="secondary"> • Posted by u/{ props.username }</Text>
        <Title
          style={{
            marginTop: '0px',
            paddingTop: '0px'
          }}
          level={4}
        >{ props.title }</Title>
        <Text type="secondary">Votes: { props.reactions }</Text>
        <Paragraph>{ body }</Paragraph>
      </Card>
  )
}
