'use client'

import Section from '@/components/section'
import { newsItems } from '@/lib/newsData'

export const NewsSection = () => {
  return (
    <section id="news" className="bg-white">
      {/* Hero Subsection */}
      <div className="bg-fermi-gradient py-24 px-6 text-[#124f99]">
        <div className="min-h-[12rem] sm:min-h-[16rem] flex items-end justify-start pl-4 text-left">
          <div className="pb-4">
            <h1 className="text-[24px] sm:text-[40px] md:text-[52px] font-bold uppercase tracking-tight font-montserrat leading-tight text-center sm:text-left">
              Latest At Fermi Energy
            </h1>
            <p className="italic text-[20px] font-inter text-[#3C83AC] leading-relaxed mt-0">
              Stay informed about our breakthroughs, media highlights and milestones
            </p>
          </div>
        </div>
      </div>

      {/* News Grid Subsection */}
      <Section className="bg-[#E8F3FD] py-16 pl-16 pr-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white hover:bg-[#0A3161] p-5 rounded-xl transition-all duration-300 group shadow-sm transform hover:scale-[1.02] flex flex-col min-h-[300px]"
            >
              <h2 className="text-xl font-semibold font-montserrat text-black group-hover:text-white text-left">
  {item.title}
</h2>

              <p className="text-xs italic font-inter text-gray-700 group-hover:text-white mt-2">
                {item.date}
              </p>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs italic font-montserrat text-[#b69898] group-hover:text-[#0F96CF] inline-block mt-auto transition-colors duration-300 tracking-wide text-left"
                >
                  Read More →
                </a>
              )}
            </div>
          ))}
        </div>
      </Section>
    </section>
  )
}
