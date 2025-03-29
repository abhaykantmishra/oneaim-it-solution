"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    content:
      "Azilen Technologies delivered an impressive product and continues to create extensive project overviews that ensure effective collaboration. The team communicates clearly and manages the project cost-effectively. They are accessible and offer technical expertise to support a valuable partnership.",
    author: "Tom Naramore",
    position: "CEO | D3 Sports Tech",
    image: "/images/testimonial-1.png",
  },
  {
    id: 2,
    content:
      "Working with Azilen has been transformative for our business. Their AI solutions have streamlined our operations and provided valuable insights that drive our decision-making process. The team's technical expertise and commitment to excellence are unmatched.",
    author: "Sarah Johnson",
    position: "CTO | HealthTech Innovations",
    image: "/images/testimonial-2.png",
  },
  {
    id: 3,
    content:
      "Azilen's team went above and beyond our expectations. Their deep understanding of our industry challenges and ability to deliver custom solutions has given us a competitive edge. Their collaborative approach made the entire development process smooth and efficient.",
    author: "Michael Chen",
    position: "Director of Innovation | FinTech Global",
    image: "/images/testimonial-3.png",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#1e2942]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          High Fives from Our Clients: Their Feedback
        </motion.h2>

        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-[#fff5f5] rounded-2xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/4 flex justify-center">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden bg-gray-300">
                    <Image
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].author}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-3/4">
                  <p className="text-lg md:text-xl text-gray-700 mb-8">{testimonials[currentIndex].content}</p>
                  <div className="flex items-center">
                    <span className="text-[#ff3b30] text-6xl font-serif leading-none mr-4">"</span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-[#1e2942]">
                        {testimonials[currentIndex].author}
                      </h3>
                      <p className="text-gray-600">{testimonials[currentIndex].position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-end mt-6 gap-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

