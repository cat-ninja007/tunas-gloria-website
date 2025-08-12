import Image from "next/image";

export const metadata = {
  title: 'About Us | Tunas Gloria',
  description: 'Learn more about the vision, mission, and values of Tunas Gloria School.',
};

export default function AboutPage() {
  return (
    <>
      {/* SECTION 1 : HERO */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero/about.jpg')" }}
        />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              About
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/90 leading-relaxed">
            Welcome to Tunas Gloria! We are dedicated to providing an education
             that focuses on academic excellence, character development, and
             spiritual growth.
            </p>
          </div>
        </div>
      </section>

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
    
    </>
  );
}