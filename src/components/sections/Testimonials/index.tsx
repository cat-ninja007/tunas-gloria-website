'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    quote:
      'My time at Tunas Gloria prepared me not just for college, but for life. The focus on character and community helped me build a foundation of integrity that I carry with me every day.',
    author: 'Ariel Santoso',
    program: 'University Student',
    img: '/alumni/alumni-1.png',
  },
  {
    id: 2,
    quote:
      'The teachers at Tunas Gloria were incredibly supportive and truly cared about my growth. They were always willing to go the extra mile to make sure I understood the material and felt confident.',
    author: 'Citra Dewi',
    program: 'High-School Graduate',
    img: '/alumni/alumni-2.png',
  },
  {
    id: 3,
    quote:
      'Tunas Gloria felt like a second family. The friendships I made and the values I learned there have stuck with me long after graduation. It’s more than just a school; it’s a community.',
    author: 'Fajar Nugroho',
    program: 'Alumni (Class of 2021)',
    img: '/alumni/alumni-3.png',
  },
  {
    id: 4,
    quote:
      'The balance between a challenging academic curriculum and spiritual guidance at Tunas Gloria is what makes it so special. I was able to excel academically while also deepening my personal faith.',
    author: 'Imanuel Magwe',
    program: 'Young Professional',
    img: '/alumni/alumni-4.png',
  },
  {
    id: 5,
    quote:
      'I\'m so grateful for the education I received at Tunas Gloria. The school equipped me with critical thinking skills and a compassionate heart, which has been invaluable in my career.',
    author: 'Dani Wicaksono',
    program: 'University Graduate',
    img: '/alumni/alumni-5.png',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  
  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our <span className="text-yellow-500">Community</span> Says
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* left/right arrows */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-10 z-10 p-2 bg-yellow-400 rounded-full text-gray-900 hover:bg-yellow-500 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-10 z-10 p-2 bg-yellow-400 rounded-full text-gray-900 hover:bg-yellow-500 transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* testimonial card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-12 gap-6 md:gap-10 items-center"
            >
              {/* image */}
              <div className="md:col-span-4 flex justify-center">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src={testimonials[index].img}
                    alt={testimonials[index].author}
                    width={192}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* text */}
              <div className="md:col-span-8">
                <blockquote className="text-gray-700 leading-relaxed mb-4">
                  &ldquo;{testimonials[index].quote}&rdquo;
                </blockquote>
                <div className="mt-4">
                  <p className="font-semibold text-gray-900 text-lg">
                    {testimonials[index].author}
                  </p>
                  <p className="text-sm text-yellow-600">
                    {testimonials[index].program}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}