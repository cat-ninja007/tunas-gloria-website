'use client'

import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { MobileMenuItem } from './MobileMenuItem'

interface MenuItem {
  label: string
  href?: string
  children?: MenuItem[]
}

interface MobileMenuProps {
  items: MenuItem[]
  onClose: () => void
}

export function MobileMenu({ items, onClose}: MobileMenuProps) {
  return(
    <>
      <motion.div
        className='fixed inset-0 bg-black/50 z-50 md:hidden'
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
        onClick={onClose}
      />

      <motion.div
        className='fixed right-0 top-0 h-full w-80 bg-white shadow-xl z-50 md:hidden overflow-y-auto'
        initial={{ x: '100%'}}
        animate={{ x: 0}}
        exit={{ x: '100%'}}
        transition={{ type: 'tween', duration: 0.3 }}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className='text-lg font-semibold'>Menu</h2>
          <button
            onClick={onClose}
            className='p-2 hover:bg-gray-100 rounded-full'
          >
            <X className='h-5 w-5'/>
          </button>
        </div>

        <nav className='p-4'>
          {items.map((item, index) => (
            <MobileMenuItem 
              key={item.label} 
              item={item}
              index={index}
              onClose={onClose} 
            />
          ))}
        </nav>
      </motion.div>
    </>
  )
}