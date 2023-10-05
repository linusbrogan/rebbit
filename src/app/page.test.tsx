import 'whatwg-fetch'
import '@testing-library/jest-dom'
import {
  render,
  screen
} from '@testing-library/react'
jest.mock('usehooks-ts')

import Home from './page'

const TITLE = 'His mother had always taught him'

// This test relies on successfully loading the posts from the network.
// TODO: Mock fetch to prevent network errors or API response changing from causing the test to fail.
describe('Home page', () => {
  it('renders a post', async () => {
    // Calling Home() directly instead of <Home /> is a hacky solution to test an async server component because render() will not accept a promise.
    render(await Home())

    expect(screen.getByText(TITLE)).toBeInTheDocument()
  })
})
