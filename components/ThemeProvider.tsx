'use client'

import { useEffect, useState } from 'react'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Get theme from localStorage or system preference
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null
    const isDark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
    
    const html = document.documentElement
    if (isDark) {
      html.classList.add('dark')
      html.classList.remove('light')
    } else {
      html.classList.remove('dark')
      html.classList.add('light')
    }
    setMounted(true)
  }, [])

  if (!mounted) return <>{children}</>

  return <>{children}</>
}
