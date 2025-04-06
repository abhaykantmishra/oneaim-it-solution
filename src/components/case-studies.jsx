"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"


export default function CaseStudies({ caseStudies }) {
  return (
    <div className="max-w-6xl mx-auto">
      {caseStudies.map((study, index) => (
        <motion.div
          key={index}
          className={`bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg mb-12 relative overflow-hidden ${
            index % 2 === 0 ? "md:ml-12" : "md:mr-12"
          }`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4 flex items-center justify-center">
              <div className="rounded-xl overflow-hidden shadow-md">
                <Image
                  src={study.image || "/placeholder.svg?height=300&width=300"}
                  alt={study.title}
                  width={300}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:col-span-8">
              <div className="mb-4">
                <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-1 rounded">
                  {study.industry}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
              <p className="text-gray-600 mb-6">{study.description}</p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {study.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-indigo-600">{metric.value}</p>
                    <p className="text-sm text-gray-500">{metric.label}</p>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors font-medium"
              >
                Read full case study <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-bl-full -z-10 opacity-70"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-100 to-red-100 rounded-tr-full -z-10 opacity-70"></div>
        </motion.div>
      ))}
    </div>
  )
}