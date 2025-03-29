"use client"

import { motion } from "framer-motion"

export default function CompanyStats() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-[#fef4f3] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 leading-tight">
            <span className="bg-gradient-to-r from-[#1e2942] to-[#2a3a5f] bg-clip-text text-transparent">
              Turning Bold Product Dreams
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#ff3b30] to-[#ff5c52] bg-clip-text text-transparent">
              into Market Readiness
            </span>
            <br />
            <span className="text-[#1e2942]">With Enterprise AI Development Services</span>
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 max-w-3xl mx-auto">
            Delivering innovative solutions with cutting-edge technology since 2009
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto">
          <motion.div
            className="h-40 text-center p-6 rounded-xl bg-gradient-to-br from-white to-[#f8f9fc] shadow-sm border border-gray-100 my-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#ff3b30] my-2">400+</h2>
            <p className="text-gray-600 font-medium">PROEngineers</p>
          </motion.div>

          <motion.div
            className="h-40 text-center p-6 rounded-xl bg-gradient-to-br from-white to-[#f8f9fc] shadow-sm border border-gray-100 my-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#ff3b30] my-2">3M+</h2>
            <p className="text-gray-600 font-medium">Man Hours</p>
          </motion.div>

          <motion.div
            className="h-40 text-center p-6 rounded-xl bg-gradient-to-br from-white to-[#f8f9fc] shadow-sm border border-gray-100 my-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#ff3b30] my-2">60+</h2>
            <p className="text-gray-600 font-medium">
              Product Lifecycles Delivered 
            </p>
          </motion.div>

          <motion.div
            className="h-40 text-center p-6 rounded-xl bg-gradient-to-br from-white to-[#f8f9fc] shadow-sm border border-gray-100 my-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#ff3b30] my-2">40+</h2>
            <p className="text-gray-600 font-medium">Live Projects</p>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* <a
            href="#contact"
            className="bg-[#ff3b30] hover:bg-[#e62e24] text-white font-medium px-8 py-4 rounded-full text-lg transition-colors"
          >
            Get Launch Ready | Talk to Experts
          </a> */}
            <button className="bg-[#ff3b30] text-white text-nowrap px-8 py-3 rounded-full font-medium outline outline-1 hover:bg-white hover:text-[#ff3b30] transition-colors">
                Get Launch Ready | Talk to Experts
            </button>
        </motion.div>
      </div>

      {/* Decorative wave lines */}
      <div className="absolute top-0 right-0 w-1/2 h-full z-0 opacity-70">
        <svg viewBox="0 0 500 800" preserveAspectRatio="none" className="w-full h-full">
          <motion.path
            d="M500,0 C400,150 300,250 500,350 C700,450 600,550 500,650 C400,750 300,800 500,800"
            stroke="#ff3b30"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2 }}
          />
          <motion.path
            d="M520,0 C420,120 320,220 520,320 C720,420 620,520 520,620 C420,720 320,800 520,800"
            stroke="#ff3b30"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: 0.2 }}
          />
          <motion.path
            d="M540,0 C440,100 340,200 540,300 C740,400 640,500 540,600 C440,700 340,800 540,800"
            stroke="#3b82f6"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: 0.4 }}
          />
          <motion.path
            d="M560,0 C460,80 360,180 560,280 C760,380 660,480 560,580 C460,680 360,800 560,800"
            stroke="#3b82f6"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: 0.6 }}
          />
        </svg>
      </div>
    </section>
  )
}

