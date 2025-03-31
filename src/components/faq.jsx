"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"


export default function FAQ({ title, description, faqs }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full py-16 md:py-24 bg-[#f8f9fc]" id="faq">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e2942] mb-6">{title}</h2>
          <p className="text-lg text-gray-600">{description}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className={`w-full text-left p-6 rounded-xl flex justify-between items-center transition-all ${
                  openIndex === index ? "bg-white shadow-md" : "bg-white hover:bg-gray-50"
                }`}
              >
                <h3 className="text-lg md:text-xl font-semibold text-[#1e2942]">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-[#1e2942] transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 bg-white rounded-b-xl border-t border-gray-100">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

