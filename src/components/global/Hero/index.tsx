'use client'

interface Props {
  title: string
  subtitle: string
  img?: string            
  heightClass?: string
}

export default function Hero({
  title,
  subtitle,
  img = '/dummy-hero.jpg',
  heightClass = 'pt-36 pb-24 md:pt-44 md:pb-32',
}: Props) {
  return (
    <section className={`relative ${heightClass}`}>
      {/* dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/75 z-10" />
      {/* background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      />
      {/* content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
          <p className="mt-8 text-lg md:text-xl text-white/90 leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}