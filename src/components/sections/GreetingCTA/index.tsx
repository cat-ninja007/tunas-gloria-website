'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function GreetingCTA() {
  return (
    <section className="py-16 md:py-24 bg-yellow-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* 👋 Greeting */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Message from <span className="text-yellow-600">the Head of School</span>
            </h2>

            <blockquote className="text-gray-700 italic leading-relaxed">
              <p>
                Welcome to our school, <strong>Tunas Gloria</strong>!
              </p>
              <p className="mt-3">
                It is my deepest desire that our school be a place where we not only pursue
                academic excellence but also grow in faith and character. Our goal is to see
                every student flourish, equipped with the knowledge and values to make a
                positive impact on the world.
              </p>
              <p className="mt-3">
                May God bless our entire Tunas Gloria community as we learn and grow together.
              </p>
              <footer className="mt-6 text-right not-italic font-semibold text-gray-800">
                — Nouvi Selpiyanri Rihi<br />
                <span className="text-base font-normal">Head of School</span>
              </footer>
            </blockquote>
          </motion.div>

          {/* 📞 Contact Badge */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-yellow-400 text-gray-900 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl"
          >
            <h3 className="text-2xl font-bold">Contact Us</h3>

            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span>
                  Jl. H.R. Koroh No.172 A, Sikumana,<br />
                  Kec. Maulafa,, Kupang, NTT
                </span>
              </p>

              <p className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0" />
                <a
                  href="mailto:admission.sdhkupang@sdh.or.id"
                  className="hover:underline"
                >
                  admission.tunasglorita@mail.sch.id
                </a>
              </p>

              <p className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0" />
                <a href="tel:+6281236768045" className="hover:underline">
                  +62 830 820 523
                </a>
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-block bg-gray-900 text-yellow-400 font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Send a Message
            </Link>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}