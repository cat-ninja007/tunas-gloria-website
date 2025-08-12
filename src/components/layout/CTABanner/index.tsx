'use client'
import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="py-16 md:py-24 bg-yellow-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Enrol?
          </h2>
          <p className="text-gray-800 mb-8">
            Begin your child’s journey at Tunas Gloria in just a few clicks.
          </p>
          <Link
            href="/admission/registration"
            className="inline-block bg-gray-900 text-yellow-400 font-bold px-10 py-4 rounded-lg text-lg hover:bg-gray-800 transition"
          >
            Register Online Now
          </Link>
        </div>
      </div>
    </section>
  )
}