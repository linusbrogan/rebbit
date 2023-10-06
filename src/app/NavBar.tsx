
import { ChangeEvent } from 'react'
import Image from 'next/image'
import {
  Input,
  Layout,
  Space,
  theme,
  Typography
} from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const { Header } = Layout
const { Title } = Typography

export type NavBarProps = {
  query: string
  onQueryChange: (query: string) => void
}

export default function NavBar(props: NavBarProps) {
  const {token} = theme.useToken()
  const backgroundColor = token.colorBgContainer
  const outlineColor = token.colorFillSecondary

  function handleSearchInput(event: ChangeEvent<HTMLInputElement>): void {
    props.onQueryChange(event.currentTarget.value)
  }

  return (
    <Header
      style={{
        backgroundColor,
        borderBottom: `1px solid ${outlineColor}`,
        marginBottom: 20,
        paddingLeft: 20,
        position: 'sticky',
        top: 0,
        zIndex: 1
      }}
    >
      <Space
        direction="horizontal"
        size="large"
      >
        <Image
          style={{
            // Header is 64px tall, and the logo is 40px, so vertically aligning it leaves 0.5*(64px-40px)=12px above.
            marginTop: 0.5*(64-40)
          }}
          src="/logo.png"
          alt="Rebbit Logo"
          width={40}
          height={40}
          priority
        />
        <Title
          className="hide-small inline"
        >
          Rebbit
        </Title>
        <Input
          onChange={handleSearchInput}
          placeholder="Search Rebbit"
          prefix={<SearchOutlined />}
          size="large"
          style={{
            borderRadius: 20,
            maxWidth: 200,
            verticalAlign: 'super'
          }}
        />
      </Space>
    </Header>
  )
}
