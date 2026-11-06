import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://www.samimhamza.com',
  ),
  title: {
    template: '%s | Ahmad Samim Hamza',
    default: 'Ahmad Samim Hamza | Software Engineer | Applied AI',
  },
  description:
    'Portfolio of Ahmad Samim Hamza, a Software Engineer specializing in Applied AI. 5 years of experience building RAG & multi-agent systems, backend APIs, and full-stack web applications.',
  alternates: {
    types: {
      'application/rss+xml': `${
        process.env.NEXT_PUBLIC_SITE_URL || 'https://www.samimhamza.com'
      }/feed.xml`,
    },
  },
  openGraph: {
    title: 'Ahmad Samim Hamza | Software Engineer | Applied AI',
    description:
      'Portfolio of Ahmad Samim Hamza, a Software Engineer specializing in Applied AI. 5 years of experience building RAG & multi-agent systems, backend APIs, and full-stack web applications.',
    url: 'https://www.samimhamza.com',
    siteName: 'Ahmad Samim Hamza',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
