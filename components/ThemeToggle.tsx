'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (stored) {
      setTheme(stored)
    } else {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(isDark ? 'dark' : 'light')
    }
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    
    const html = document.documentElement
    if (newTheme === 'dark') {
      html.classList.add('dark')
      html.classList.remove('light')
    } else {
      html.classList.remove('dark')
      html.classList.add('light')
    }
  }

  if (!mounted) return null

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2 rounded-lg bg-[#1A1A1A] hover:bg-gray-700 transition-colors duration-200"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-blue-600" />
      )}
    </button>
  )
}
