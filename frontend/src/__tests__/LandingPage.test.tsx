import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { LandingPage } from '../pages/LandingPage'

describe('LandingPage', () => {
  it('renders logo and CTA', () => {
    const { container } = render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    )
    expect(screen.getByAltText('TPCC logo')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /apply online/i })).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
