import type { RenderOptions } from '@testing-library/react'

import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
		},
	},
	logger: {
		log: console.log,
		warn: console.warn,
		error: process.env.NODE_ENV === 'test' ? () => {} : console.error,
	},
})

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
	render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'
export { customRender as render }
