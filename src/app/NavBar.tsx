import { ChangeEvent } from 'react'

export type NavBarProps = {
  query: string
  onQueryChange: (query: string) => void
}

export default function NavBar(props: NavBarProps) {
  function handleSearchInput(event: ChangeEvent<HTMLInputElement>) {
    props.onQueryChange(event.currentTarget.value)
  }

  return (
    <nav>
      <h1>Rebbit</h1>
      <span>Home</span>
      <input type="text" placeholder="Search" onChange={handleSearchInput} />
    </nav>
  )
}
