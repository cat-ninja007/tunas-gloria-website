'use client'
import Image from 'next/image'
import { SectionData } from '@/data/academicSections'

type Props = SectionData & {
  reverse?: boolean
  bg?: string
}

export default function SectionTwoCol({
  title,
  content,
  imgSrc,
  imgAlt,
  reverse = false,
  bg = 'bg-white',
}: Props) {
  return (
    <section className={`py-16 md:py-24 ${bg}`}>
      <div
        className={`flex flex-col md:flex-row items-center justify-center gap-12 ${
          reverse ? 'md:flex-row-reverse' : ''
        }`}
      >
        {/* SQUARE IMAGE */}
        <div className="w-[320px] h-[320px] shrink-0">
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={320}
            height={320}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        {/* TEXT */}
        <div className="w-[420px]">
          {title && (
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
          )}
          <div
            className="text-gray-700 leading-relaxed whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br />') }}
          />
        </div>
      </div>
    </section>
  )
}