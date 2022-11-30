import { render, screen } from '~/test-util'
import Index from '~/routes/index'

describe('Home', () => {
	it('renders correctly', () => {
		render(<Index />)
		expect(screen.getByText(/loading/i))
	})
})
