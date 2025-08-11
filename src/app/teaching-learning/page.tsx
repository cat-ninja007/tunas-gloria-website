export const metadata = {
  title: 'Teaching & Learning | Tunas Gloria',
  description: 'An overview of the academic programs, philosophy, and educational approach at Tunas Gloria School.',
};

export default function TeachingLearningPage() {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/dummy-hero.jpg')" }}
      />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Teaching & Learning</h1>
          <p className="mt-8 text-lg md:text-xl text-white/90 leading-relaxed">
            Our educational philosophy is centered on fostering a love for learning in a dynamic and supportive environment.
          </p>
        </div>
      </div>
    </section>
  );
}