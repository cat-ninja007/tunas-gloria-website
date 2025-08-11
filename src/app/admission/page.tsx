export const metadata = {
  title: 'After School Activities | Tunas Gloria',
  description: 'Browse the variety of elective classes and after-school activities available for students at Tunas Gloria.',
};

export default function ElectiveClassPage() {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/dummy-hero.jpg')" }}
      />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">After School Activities</h1>
          <p className="mt-8 text-lg md:text-xl text-white/90 leading-relaxed">
            Our after-school activities provide students with opportunities to explore their passions and develop new skills outside of the classroom.
          </p>
        </div>
      </div>
    </section>
  );
}