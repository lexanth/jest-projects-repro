import { render } from '@testing-library/react'
import { A } from './A'
import React from 'react'

describe('A', () => {
  it('should render', () => {
    const { container } = render(<A />)
    expect(container).toMatchSnapshot()
  })
})
