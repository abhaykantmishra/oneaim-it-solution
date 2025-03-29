"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const resources = [
  {
    id: 1,
    title: "Reverse ETL: Operationalizing Data for Real-Time Business Decisions",
    // image: "/images/resource-1.png",
    date: "Mar 27, 2025",
  },
  {
    id: 2,
    title: "The HR Prompt Handbook: 200+ Prompts For ChatGPT/Gemini and Your Own or Private LLMs",
    // image: "/images/resource-2.png",
    date: "Mar 27, 2025",
  },
  {
    id: 3,
    title: "Leveraging Generative AI for Advanced Anti-Money Laundering and Fraud Detection",
    // image: "/images/resource-3.png",
    date: "Mar 07, 2025",
  },
  {
    id: 4,
    title: "Edge Computing in Green IoT: Reducing Energy Use in Data Processing",
    // image: "/images/resource-4.png",
    date: "Dec 13, 2024",
  },
]

export default function Resources() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          className="text-3xl md:text-4xl font-medium text-center mb-10 text-[#1e2942]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          The Edge of Innovation: Discover &apos;What&apos;s Next&apos;
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              className="md:h-80 bg-[#f8f9fc] rounded-3xl p-3 mx-2 flex flex-col md:flex-row gap-6 items-center outline outline-1 outline-blue-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-full md:w-1/3">
                <Image
                  src={resource.image || "/placeholder.svg"}
                  alt={resource.title}
                  width={300}
                  height={300}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-lg md:text-xl text-[#1e2942] mb-4">{resource.title}</h3>
                <div className="flex items-center mb-6">
                  <span className="inline-flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 rounded-full bg-[#ff3b30] mr-2"></span>
                    {resource.date}
                  </span>
                </div>
                <button className="bg-[#ff3b30] text-white px-8 py-3 rounded-full font-medium outline outline-1 hover:bg-white hover:text-[#ff3b30] transition-colors">
                    DOWNLOAD NOW
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

