// src/hooks/useHeaderScroll.ts
import { useState, useEffect } from 'react'

export function useHeaderScroll() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return {
    isScrolled,
    textColor: isScrolled ? 'text-gray-800' : 'text-yellow-400',
    subTitleColor: isScrolled ? 'text-gray-700' : 'text-white/80',
    bgColor: isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
  }
}