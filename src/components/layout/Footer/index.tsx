import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo/tunas-gloria-logo.png"
                alt="Tunas Gloria School"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold text-yellow-400">Tunas Gloria</h3>
                <p className="text-sm text-gray-400">Christian School</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Providing quality Christian education from Kindergarten to Senior School.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link href="/admission/registration" className="text-gray-300 hover:text-yellow-400 transition-colors">Registration</Link></li>
              <li><Link href="/academic" className="text-gray-300 hover:text-yellow-400 transition-colors">Academic Programs</Link></li>
              <li><Link href="/news" className="text-gray-300 hover:text-yellow-400 transition-colors">News & Events</Link></li>
            </ul>
          </div>

          {/* Academic Levels */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Academic Levels</h4>
            <ul className="space-y-2">
              <li><Link href="/academic/kindergarten" className="text-gray-300 hover:text-yellow-400 transition-colors">Kindergarten</Link></li>
              <li><Link href="/academic/primary" className="text-gray-300 hover:text-yellow-400 transition-colors">Primary School</Link></li>
              <li><Link href="/academic/junior" className="text-gray-300 hover:text-yellow-400 transition-colors">Junior School</Link></li>
              <li><Link href="/academic/senior" className="text-gray-300 hover:text-yellow-400 transition-colors">Senior School</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300 text-sm">Jl. Example No. 123, Jakarta</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <a href="tel:+62211234567" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">+62 21 123 4567</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <a href="mailto:info@tunasgloria.sch.id" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">info@tunasgloria.sch.id</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Tunas Gloria Christian School. All rights reserved. | 
            <Link href="/privacy" className="hover:text-yellow-400 transition-colors"> Privacy Policy</Link> | 
            <Link href="/terms" className="hover:text-yellow-400 transition-colors"> Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}