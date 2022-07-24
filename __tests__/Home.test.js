import {render, screen} from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
    it('HOME TO RENDER', () => {
        const { container } = render(<Home />)

        expect(container).toBeDefined()
    })
})