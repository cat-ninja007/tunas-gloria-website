import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import Hero from "@/components/global/Hero";


export const metadata = {
  title: 'About Us | Tunas Gloria',
  description: 'Learn more about the vision, mission, and values of Tunas Gloria School.',
};

export default function AboutPage() {
  return (
    <>
      {/* SECTION 1 : HERO */}
      <Hero
        title="About"
        subtitle="Welcome to Tunas Gloria! We are dedicated to providing an education
             that focuses on academic excellence, character development, and
             spiritual growth."
        img="/hero/about.jpg"
      />
      

      {/* SECTION 2 : ABOUT US */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* text */}
            <div className="md:col-span-7 lg:col-span-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to Sekolah Dian Harapan, we provide a Christ-centered, transformative and holistic education. We believe parents are the prime educators of their children and walk alongside the school as the second home for your children.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                SDH is a network of Christian schools under the Pelita Harapan Education Foundation that offers K-12 education. Starting in 1995 in Lippo Village, SDH currently has 17 campuses throughout Indonesia, with around 14,000 students.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We welcome you to know more about SDH—please contact us, ask about what we believe and do at school. We want to provide a second home for your children.
              </p>
            </div>

            {/* image placeholder */}
            <div className="md:col-span-5 lg:col-span-4">
              <Image
                src="/dummy-hero.jpg"
                alt="About SDH"
                width={512}
                height={512}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 : HISTORY */}
      <section className="py-16 md:py-24 bg-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* image placeholder */}
            <div className="md:col-span-5 lg:col-span-4">
              <Image
                src="/dummy-hero.jpg"
                alt="SDH History"
                width={512}
                height={512}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>

            {/* text */}
            <div className="md:col-span-7 lg:col-span-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                History
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The founding members envisioned quality education for Indonesian children through three tiers: 10 international Sekolah Pelita Harapan units, 100 national Sekolah Dian Harapan units, and 1,000 subsidized Sekolah Lentera Harapan units across Indonesia.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Sekolah Dian Harapan provides holistic transformational education based on an enriched national curriculum, aiming to develop students as change agents. The word “Dian” means “an apparatus that gives off light”, envisioning SDH as a source of Hope and Light for Indonesia’s educational future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 : BIBLE VERSE */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Bible Verse About Education</h2>
          <blockquote className="text-xl md:text-2xl italic leading-relaxed">
            “Train up a child in the way he should go; even when he is old he will not depart from it.”
          </blockquote>
          <cite className="mt-4 block text-yellow-400 font-semibold">
            — Proverbs 22:6
          </cite>
        </div>
      </section>

      {/* SECTION 5 : SCHOOL IMPROVEMENT */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* image placeholder */}
            <div className="md:col-span-5 lg:col-span-4">
              <Image
                src="/dummy-hero.jpg"
                alt="School Improvement"
                width={512}
                height={512}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>

            {/* text */}
            <div className="md:col-span-7 lg:col-span-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                School Improvement
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                School improvement through people development is our core strategy. A Professional Development
                and Curriculum Enrichment (PDCE) team mentors school leaders and teachers, ensuring creative,
                context-specific excellence rooted in the big story of Christian education.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Since 2016, all SDH campuses are members of the Association of Christian Schools International
                (ACSI-Indonesia), providing external accreditation and continual strategic-improvement guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 : PDCE */}
      <section className="py-16 md:py-24 bg-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* LEFT — text + cards */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Professional Development & Curriculum Enrichment
              </h2>
              <p className="mb-8 text-gray-700">
                Sekolah Dian Harapan improves its schools through the PDCE team by developing foundational resources, conducting strategic planning, and encouraging a culture of continual growth.
              </p>

              {/* 3 small cards */}
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: '⚙️', title: 'DEVELOP', desc: 'Biblical Foundations curriculum and programs.' },
                  { icon: '🎓', title: 'CONDUCT', desc: 'Collaborative Strategic Planning aligned with Vision & Mission.' },
                  { icon: '⚛️', title: 'ENCOURAGE', desc: 'SDH to grow as a learning community in a shalom community.' },
                ].map((c) => (
                  <div key={c.title} className="bg-white p-4 rounded-xl shadow">
                    <span className="text-3xl">{c.icon}</span>
                    <h3 className="font-bold mt-2 text-gray-900">{c.title}</h3>
                    <p className="text-sm text-gray-700">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — image */}
            <div className="lg:col-span-5">
              <Image
                src="/dummy-hero.jpg"
                alt="PDCE Team in Action"
                width={640}
                height={360}
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 : CAMPUS TOUR */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Take a Short Tour of Our Campus
            </h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              Watch the video below and follow us on social media for daily updates.
            </p>
          </div>

          {/* YouTube embed */}
          <div className="aspect-video max-w-4xl mx-auto mb-10">
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Campus Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Social icons */}
          <div className="flex justify-center space-x-6">
            <a href="#" aria-label="Facebook" className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 hover:bg-yellow-500 transition">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 hover:bg-yellow-500 transition">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 hover:bg-yellow-500 transition">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="YouTube" className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 hover:bg-yellow-500 transition">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </section>
      

    
    
    </>
  );
}