'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface MenuItem {
  label: string
  href?: string
  children?: MenuItem[]
}

interface DesktopMenuProps {
  items: MenuItem[]
  isScrolled: boolean
}

export function DesktopMenu({ items, isScrolled }: DesktopMenuProps) {
  return (
    <nav className="hidden md:flex items-center space-x-1">
      {items.map((item, index) => (
        <MenuItem key={item.label} item={item} index={index} isScrolled={isScrolled} />
      ))}
    </nav>
  )
}

function MenuItem({ item, index, isScrolled }: { item: MenuItem; index: number, isScrolled: boolean }) {
  const [isOpen, setIsOpen] = useState(false)
  const textColor = isScrolled ? 'text-gray-700' : 'text-white'

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      onMouseEnter={() => item.children && setIsOpen(true)}
      onMouseLeave={() => item.children && setIsOpen(false)}
    >
      {item.href && !item.children ? (
        <Link
          href={item.href}
          className={`px-4 py-2 ${textColor} hover:text-yellow-600 transition-colors duration-200`}
        >
          {item.label}
        </Link>
      ) : (
        <button className={`px-4 py-2 ${textColor} hover:text-yellow-600 transition-colors duration-200 flex items-center space-x-1`}>
          <span>{item.label}</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      )}

      <AnimatePresence>
        {isOpen && item.children && (
          <motion.div
            className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {item.children.map((child) => (
              <Link
                key={child.label}
                href={child.href!}
                className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
              >
                {child.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}