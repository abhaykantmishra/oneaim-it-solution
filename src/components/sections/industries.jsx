"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

// Industry data
const industries = [
  {
    title: "Claims made easy, peace made real",
    name: "InsurTech",
    description:
      "InsurTech is revolutionizing the insurance industry by addressing challenges such as outdated processes and slow claims management. With AI, blockchain, and data analytics, it enhances efficiency, risk assessment, and customer experience.",
    bgImage: "/images/insurtech-bg.png",
    textColor: "text-[#1e2942]",
  },
  {
    title: "Making HR less 'ugh' & more 'aha!",
    name: "HRTech",
    description:
      "HRTech faces ongoing challenges with outdated processes and inefficiencies. We tackle these issues from hi-hire-retire, delivering innovative solutions that transform HR operations and drive unmatched efficiency & experience.",
    bgImage: "/images/hrtech-bg.png",
    textColor: "text-white",
  },
  {
    title: "Turning financial blah into financial yay",
    name: "FinTech",
    description:
      "FinTech faces hurdles with security, compliance, and data management. Our software engineering solutions along with Data & AI offerings address these issues, enhancing security and efficiency to drive innovation in finance.",
    bgImage: "/images/fintech-bg.png",
    textColor: "text-[#1e2942]",
  },
  {
    title: "Healthcare reimagined for everyone",
    name: "HealthTech",
    description:
      "HealthTech is transforming patient care through innovative digital solutions. Our AI-powered platforms streamline diagnostics, enhance treatment plans, and improve patient outcomes while reducing costs and administrative burden.",
    bgImage: "/images/healthtech-bg.png",
    textColor: "text-white",
  },
  {
    title: "Sustainable solutions for a greener future",
    name: "CleanTech",
    description:
      "CleanTech leverages cutting-edge technology to address environmental challenges. Our solutions optimize energy consumption, reduce carbon footprints, and enable sustainable practices across industries through smart monitoring and AI-driven insights.",
    bgImage: "/images/cleantech-bg.png",
    textColor: "text-[#1e2942]",
  },
]

export default function Industries() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [width, setWidth] = useState(0)
  const carousel = useRef(null)

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  const nextSlide = () => {
    if (currentIndex < industries.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0) // Loop back to the first slide
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(industries.length - 1) // Loop to the last slide
    }
  }

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <section className="w-full py-16 bg-[#1e2942] text-white overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-5xl mx-auto">
            Industries We Elevate With Enterprise AI Development Services
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto">
            Because these industries still have numerous unresolved problems, affecting millions of people!
          </p>
        </motion.div>

        <div className="relative my-10 overflow-x-hidden overflow-y-clip">
          <motion.div ref={carousel} className="" whileTap={{ cursor: "grabbing" }}>
            <motion.div
              className="flex mx-4 my-10"
              drag="x"
              dragConstraints={{ right: 0, left: -width-10 }}
              animate={{ x: -currentIndex * (300 + 40) }} // Card width + gap
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            >
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  className="max-w-[300px] md:max-w-[350px] bg-white rounded-3xl overflow-hidden mr-6 flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <div
                    className="h-48 p-8 flex items-center relative"
                    style={{
                      backgroundImage: `url('${industry.bgImage}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <motion.h3
                      className={`text-xl font-bold z-10 ${industry.textColor}`}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {industry.title}
                    </motion.h3>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="p-8 text-[#1e2942]">
                    <motion.div
                      className="flex items-center mb-4"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <h4 className="text-2xl font-bold">{industry.name}</h4>
                      <motion.div whileHover={{ rotate: 45 }} transition={{ duration: 0.2 }}>
                        <ArrowUpRight className="ml-2" />
                      </motion.div>
                    </motion.div>
                    <p className="text-sm">{industry.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <motion.button
              onClick={prevSlide}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <div className="flex gap-2 items-center">
              {industries.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-white/30"}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ scale: currentIndex === index ? [1, 1.2, 1] : 1 }}
                  transition={{ duration: 0.5 }}
                />
              ))}
            </div>
            <motion.button
              onClick={nextSlide}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

