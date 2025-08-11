'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { MobileMenu } from './MobileMenu'
import { DesktopMenu } from './DesktopMenu'
import { useHeaderScroll } from '@/hooks/useHeaderScroll'

const navigationItems = [
  {
    label: 'About',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Our History', href: '/about/history' },
      { label: 'Our Network', href: '/about/network' },
      { label: 'Our Campuses', href: '/about/campuses' },
    ],
  },
  {
    label: 'Admission',
    children: [
      { label: 'Registration', href: '/admission/registration' },
      { label: 'Visit SDH', href: '/admission/visit' },
    ],
  },
  {
    label: 'Teaching & Learning',
    children: [
      { label: 'Academic Overview', href: '/academic' },
      { label: 'Kindergarten', href: '/academic/kindergarten' },
      { label: 'Primary School', href: '/academic/primary' },
      { label: 'Junior School', href: '/academic/junior' },
      { label: 'Senior School', href: '/academic/senior' },
      { label: 'Elective Class', href: '/academic/elective' },
    ],
  },
  {
    label: 'Community in Action',
    href: '/community',
  },
  {
    label: 'News & Event',
    href: '/news',
  },
  {
    label: 'Our Voices',
    href: '/voices',
  },
]

export function Header() {
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isScrolled, textColor, subTitleColor, bgColor } = useHeaderScroll()




  return (
    <>
      <motion.header
        
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${bgColor}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center py-4">
            {/* Logo and Navigation Container */}
            <div className="flex flex-col items-center space-y-4">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center space-x-3"
              >
                <Image
                  src="/logo/tunas-gloria-logo.png"
                  alt="Tunas Gloria School"
                  width={60}
                  height={60}
                  className="rounded-full"
                  priority
                />
                <div>
                  <h1 className={`text-2xl font-bold transition-colors duration-300 ${textColor}`}>Tunas Gloria</h1>
                  <p className={`text-sm transition-colors duration-300 ${subTitleColor}`}>Christian School</p>
                </div>
              </motion.div>

              {/* Desktop Navigation */}
              <DesktopMenu items={navigationItems} isScrolled={isScrolled} />
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden absolute right-4 top-1/2 -translate-y-1/2"
              onClick={() => setIsMobileMenuOpen(true)}
              whileTap={{ scale: 0.95 }}
            >
              <Menu className="h-6 w-6" />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            items={navigationItems}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}