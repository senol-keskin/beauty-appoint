import type { MetaFunction, LinksFunction } from '@remix-run/node'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'

import styles from '~/styles/styles.css'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }]
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
})

const queryClient = new QueryClient()

export default function App() {
  return (
    <html lang="tr">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </QueryClientProvider>
      </body>
    </html>
  )
}
