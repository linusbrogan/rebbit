import 'whatwg-fetch'
import '@testing-library/jest-dom'
import {
  fireEvent,
  render,
  screen
} from '@testing-library/react'

import apiResponse from '../../apiResponse.json'
import Feed from './Feed'

const TITLE_1 = 'His mother had always taught him'
const TITLE_2 = 'He was an expert but not in a discipline'

describe('Feed', () => {
  it('shows all posts before searching', () => {
    render(<Feed posts={apiResponse.posts} />)

    expect(screen.getByText(TITLE_1)).toBeInTheDocument()
    expect(screen.getByText(TITLE_2)).toBeInTheDocument()
  })

  it('filters by search query', async () => {
    render(<Feed posts={apiResponse.posts} />)

    const search = screen.getByPlaceholderText('Search Rebbit')
    fireEvent.change(search, {target: {value: 'expert'}})
    expect(screen.queryAllByText(TITLE_1)).toHaveLength(0)
    expect(screen.getByText(TITLE_2)).toBeInTheDocument()
  })
})
