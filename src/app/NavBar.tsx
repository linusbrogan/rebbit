
import { ChangeEvent } from 'react'
import Image from 'next/image'
import {
  Input,
  Space,
  Typography
} from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const { Title } = Typography

export type NavBarProps = {
  query: string
  onQueryChange: (query: string) => void
}

export default function NavBar(props: NavBarProps) {
  function handleSearchInput(event: ChangeEvent<HTMLInputElement>): void {
    props.onQueryChange(event.currentTarget.value)
  }

  return (
    <Space
      className="navbar"
      direction="horizontal"
      size="large"
    >
      <Image
        src="/logo.png"
        alt="Rebbit Logo"
        width={40}
        height={40}
        priority
      />
      <Title>Rebbit</Title>
      <Input
        className="navbar-search-box"
        onChange={handleSearchInput}
        placeholder="Search"
        size="large"
        suffix={<SearchOutlined />}
      />
    </Space>
  )
}
