"use client"

import { motion } from "framer-motion"

const employeeQuotes = [
  {
    quote: "This is very employee-friendly company.",
    position: "Senior Software Engineer II",
  },
  {
    quote: "Work Life balance is good.",
    position: "DevOps Engineer",
  },
  {
    quote: "Have good policies to benefit people.",
    position: "Software Quality Manager",
  },
  {
    quote: "They have realistic expectations from employees.",
    position: "Associate Software Engineer",
  },
]

export default function CompanyCulture() {
  return (
    <section className="w-full my-10 bg-white">
      <div className="bg-[#d8e5fa] py-4 md:py-10 rounded-3xl mx-auto px-4 max-w-7xl">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
          <motion.div
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {employeeQuotes.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg px-4 py-1 mb-2 shadow-sm relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  left: index % 2 === 0 ? "0" : "10%",
                  maxWidth: "90%",
                }}
              >
                <p className="text-[#1e2942]">{item.quote}</p>
                <p className="text-sm text-gray-500 mt-1">{item.position}</p>
              </motion.div>
            ))}
            <div className="font-serif absolute right-0 top-1/2 transform -translate-y-1/2 text-[#ffdddd] text-9xl">
              &quot;
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl md:text-2xl text-[#1e2942] mb-2 font-serif">
              A people-first culture thrives on valuing individuals above all else.
            </h2>
            <p className="text-gray-600 my-4 text-sm" 
              style={{fontSize:16}}
            >
              At OneAim Technologies, our people-first culture thrives by valuing every individual and embracing
              diversity. We support our team with wellness initiatives and ensure every voice is heard. By prioritizing
              people and their well-being, we create a vibrant environment where everyone can grow and succeed together.
            </p>
            <div className="flex md:block justify-center">
            <button className="bg-[#ff3b30] text-white text-nowrap px-8 py-3 rounded-full font-medium outline outline-1 hover:bg-white hover:text-[#ff3b30] transition-colors">
                Explore Vibrant Life @ OneAim
            </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}