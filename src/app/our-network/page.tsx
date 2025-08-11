export const metadata = {
  title: 'Our Network | Tunas Gloria',
  description: 'Explore the network of schools and partners connected to Tunas Gloria.',
};

export default function OurNetworkPage() {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/dummy-hero.jpg')" }}
      />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Network</h1>
          <p className="mt-8 text-lg md:text-xl text-white/90 leading-relaxed">
            Tunas Gloria is part of a wider network of schools, collaborating to share best practices and resources.
          </p>
        </div>
      </div>
    </section>
  );
}