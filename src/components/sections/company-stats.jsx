"use client"

import { motion } from "framer-motion"
import FlowingLinesSVG from "../ui/flowing-lines"
import Link from "next/link"

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
          <Link href="/contact">
          <button className="bg-[#ff3b30] text-white text-nowrap px-8 py-3 rounded-full font-medium outline outline-1 hover:bg-white hover:text-[#ff3b30] transition-colors">
              Get Launch Ready | Talk to Experts
          </button>
          </Link>
        </motion.div>
      </div>

      <div className="absolute top-0 right-0 h-full z-0 opacity-50 overflow-hidden">
        {/* <img 
          src="/images/lines.avif"
        /> */}
      </div>
    </section>
  )
}

