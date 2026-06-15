import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OM AI — বাংলার কণ্ঠ',
  description:
    'Miracle Code™ — Think Beyond Time. Live Beyond Limits. বাংলা ভাষায় AI-র শক্তি।',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bn">
      <body style={{ background: '#050505', minHeight: '100vh' }}>
        {children}
      </body>
    </html>
  )
}
