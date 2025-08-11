'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/hero-school.jpg"
        alt="Tunas Gloria School"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to{' '}
          <span className="text-yellow-400">Tunas Gloria</span>
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Nurturing Excellence, Building Character, Inspiring Futures
          through Quality Christian Education
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-white"
            asChild
          >
            <Link href="/admission/registration">Register Now</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-gray-400 hover:bg-white hover:text-gray-900"
            asChild
          >
            <Link href="/admission/visit" >Schedule Visit</Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}