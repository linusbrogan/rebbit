import {
  Button,
  Card,
  Space,
  theme,
  Typography
} from 'antd'
import {
  CaretDownOutlined,
  CaretUpOutlined
} from '@ant-design/icons'
import { useMediaQuery } from 'usehooks-ts'

import { Post } from './api'

const {
  Paragraph,
  Text,
  Title
} = Typography

const MAX_POST_LENGTH = 300

export default function PostCard(props: Post) : JSX.Element {
  const isSmallScreen = useMediaQuery('(max-width: 480px)')

  const {token} = theme.useToken()
  const r = token.borderRadius

  let body : string = props.body
  if (body.length > MAX_POST_LENGTH) {
    body = body.substring(0, MAX_POST_LENGTH - 3) + '...'
  }

  // TODO: What if the array is empty?
  // None of the posts have no tags.
  const subrebbit : string = props.tags[0]

  return (
    <Space.Compact key={props.id} className="post-card">
      <Card
        className="hide-small"
        size="small"
        style={{
          textAlign: 'center',
          borderRight: 'none',
          borderRadius: `${r}px 0px 0px ${r}px`
        }}
      >
        <Space direction="vertical" size="small">
          <Button
            icon={<CaretUpOutlined />}
            shape="circle"
            style={{borderRadius:'50%'}}
          />
          <Text strong >{ props.reactions }</Text>
          <Button
            icon={<CaretDownOutlined />}
            shape="circle"
            style={{borderRadius:'50%'}}
            />
        </Space>
      </Card>
      <Card style={
        isSmallScreen ? {} : {borderRadius: `0px ${r}px ${r}px 0px`}
      }>
        <Text strong>r/{ subrebbit }</Text>
        <Text type="secondary"> • Posted by u/{ props.username }</Text>
        <Title
          style={{
            marginTop: '0px',
            paddingTop: '0px'
          }}
          level={4}
        >
          { props.title }
        </Title>
        <Paragraph>{ body }</Paragraph>
      </Card>
    </Space.Compact>
  )
}
