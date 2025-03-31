"use client"

import { motion } from "framer-motion"

export default function WhatMakesUs() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-12 gap-6">
       
          <motion.div
            className="col-span-12 md:col-span-4 lg:col-span-3 flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e2942]">
              What Makes <span className="text-[#1e2942]">oneaim,</span> <span className="text-[#ff3b30]">OneAim</span>?
            </h2>
          </motion.div>

         
          <motion.div
            className="col-span-12 md:col-span-4 lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-2xl p-8 bg-gradient-to-r from-white to-[#f0f7ff] border border-gray-100 shadow-sm h-full">
              <h3 className="text-5xl font-bold text-[#ff3b30] mb-4">03</h3>
              <p className="text-2xl font-medium text-[#1e2942]">Cross Functional Teams</p>
            </div>
          </motion.div>

         
          <motion.div
            className="col-span-12 md:col-span-4 lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="rounded-2xl p-8 bg-gradient-to-r from-white to-[#fff5f5] border border-gray-100 shadow-sm h-full">
              <h3 className="text-5xl font-bold text-[#ff3b30] mb-4">05</h3>
              <p className="text-2xl font-medium text-[#1e2942]">Product Engineering in DNA</p>
            </div>
          </motion.div>

          
          <motion.div
            className="col-span-12 md:col-span-4 lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="rounded-2xl p-8 bg-gradient-to-r from-[#fff5f5] to-white border border-gray-100 shadow-sm h-full">
              <h3 className="text-5xl font-bold text-[#ff3b30] mb-4">01</h3>
              <p className="text-2xl font-medium text-[#1e2942]">Dedicated CoE</p>
            </div>
          </motion.div>

          
          <motion.div
            className="col-span-12 md:col-span-4 lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="rounded-2xl p-8 bg-gradient-to-r from-[#fff5f5] to-white border border-gray-100 shadow-sm h-full">
              <h3 className="text-5xl font-bold text-[#ff3b30] mb-4">04</h3>
              <p className="text-2xl font-medium text-[#1e2942]">Deliver Nothing Less Than Excellence</p>
            </div>
          </motion.div>

          
          <motion.div
            className="col-span-12 md:col-span-4 lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="rounded-2xl p-8 bg-gradient-to-r from-white to-[#f0f7ff] border border-gray-100 shadow-sm h-full">
              <h3 className="text-5xl font-bold text-[#ff3b30] mb-4">06</h3>
              <p className="text-2xl font-medium text-[#1e2942]">Right Team With Cutting-Edge Tech Skills</p>
            </div>
          </motion.div>

          
          <motion.div
            className="col-span-12 md:col-span-4 lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="rounded-2xl p-8 bg-gradient-to-r from-white to-[#f0f7ff] border border-gray-100 shadow-sm h-full">
              <h3 className="text-5xl font-bold text-[#ff3b30] mb-4">02</h3>
              <p className="text-2xl font-medium text-[#1e2942]">Product Success</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}