import { render } from '@testing-library/react'
import { C } from './C'
import React from 'react'

describe('C', () => {
  it('should render', () => {
    const { container } = render(<C />)
    expect(container).toMatchSnapshot()
  })
})
