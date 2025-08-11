'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface MenuItem {
  label: string
  href?: string
  children?: MenuItem[]
}

interface MobileMenuItemProps {
  item: MenuItem
  index: number
  onClose: () => void
}

export function MobileMenuItem({ item, index, onClose }: MobileMenuItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      {item.href && !item.children ? (
        <Link
          href={item.href}
          className="block py-3 px-4 text-gray-700 hover:bg-yellow-50 rounded-lg transition-colors"
          onClick={onClose}
        >
          {item.label}
        </Link>
      ) : (
        <div>
          <button
            className="w-full flex items-center justify-between py-3 px-4 text-left text-gray-700 hover:bg-yellow-50 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{item.label}</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>
          
          {isOpen && item.children && (
            <motion.div
              className="pl-4 mt-2 space-y-1"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {item.children.map((child) => (
                <Link
                  key={child.label}
                  href={child.href!}
                  className="block py-2 px-4 text-gray-600 hover:text-yellow-600 transition-colors"
                  onClick={onClose}
                >
                  {child.label}
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      )}
    </motion.div>
  )
}