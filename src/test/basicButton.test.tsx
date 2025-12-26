import { render, screen } from '@testing-library/react'
import { it, describe, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'

export function LoginBox() {
  const [username, setUsername] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <div>
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={() => setSubmitted(true)}>Submit</button>

      {submitted && <p>Hello, {username}</p>}
    </div>
  )
}

describe('Full testing LoginBox component', () => {
  it('Not Greeting in first render', () => {
    render(<LoginBox />)

    expect(screen.queryByText(/hello/i)).toBeNull()
  })
  it('Username can be right', async () => {
    render(<LoginBox />)
    const user = userEvent.setup()
    const input = screen.getByPlaceholderText(/username/i)

    await user.type(input, 'Alkhan')

    expect(screen.queryByText(/hello/i)).toBeNull()
    expect((input as HTMLInputElement).value).toBe('Alkhan')
  })
  it('When click submit release greeting', async () => {
    render(<LoginBox />)
    const user = userEvent.setup()
    const input = screen.getByPlaceholderText(/username/i)
    const button = screen.getByRole("button",{name:/submit/i})
    await user.type(input, 'Alkhan')
    await user.click(button)
 })
})
