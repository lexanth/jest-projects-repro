import { render } from '@testing-library/react'
import { B } from './B'
import React from 'react'

describe('B', () => {
  it('should render', () => {
    const { container } = render(<B />)
    expect(container).toMatchSnapshot()
  })
})
