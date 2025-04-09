"use client"

import { ArrowLeft, Construction, Clock, Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function UnderDevelopmentPage() {
  const router = useRouter()

  const goBack = () => {
    router.back()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-400 to-red-600 py-20 text-white md:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm"
            >
              <Construction className="h-12 w-12" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
            >
              Page Under Development
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mx-auto mb-8 max-w-2xl text-lg text-white/90 md:text-xl"
            >
              We&apos;re working hard to bring you something amazing. This page is currently under construction and will be
              available soon.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              onClick={goBack}
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-base font-medium text-[#ff3b30] shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#ff3b30]"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mx-auto max-w-4xl rounded-2xl bg-gray-50 p-8 shadow-lg md:p-12"
          >
            <div className="mb-8 flex items-center justify-center">
              <Clock className="mr-3 h-6 w-6 text-[#ff3b30]" />
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Coming Soon</h2>
            </div>

            <p className="mb-8 text-center text-gray-600">
              We&apos;re putting the finishing touches on this page. Check back in a few days to see what we&apos;ve been working
              on!
            </p>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { label: "Days", value: "14" },
                { label: "Hours", value: "23" },
                { label: "Minutes", value: "59" },
                { label: "Seconds", value: "42" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-md"
                >
                  <span className="text-3xl font-bold text-[#ff3b30] md:text-4xl">{item.value}</span>
                  <span className="text-sm text-gray-500 md:text-base">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">What to Expect</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Here&apos;s a sneak peek at some of the features we&apos;re working on for this page.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Comprehensive Solutions",
                description: "Detailed information about our industry-specific solutions tailored to your needs.",
                delay: 0.1,
              },
              {
                title: "Interactive Case Studies",
                description: "Explore real-world examples of how our solutions have helped organizations like yours.",
                delay: 0.2,
              },
              {
                title: "Technology Showcase",
                description: "Learn about the cutting-edge technologies we use to deliver exceptional results.",
                delay: 0.3,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: feature.delay, duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl"
              >
                <div className="mb-4 h-2 w-12 rounded bg-[#ff3b30]"></div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Stay Updated</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Want to know when this page goes live? Leave your email and we&apos;ll notify you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-xl"
          >
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#ff3b30] focus:outline-none focus:ring-2 focus:ring-[#ff3b30]/50"
                  placeholder="your@email.com"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#ff3b30] px-6 py-3 text-center text-base font-medium text-white shadow-md transition-all hover:bg-[#e62e24] focus:outline-none focus:ring-2 focus:ring-[#ff3b30] focus:ring-offset-2"
              >
                Notify Me
              </button>
            </form>

            <div className="mt-8 flex flex-col space-y-4 text-center sm:flex-row sm:items-center sm:justify-center sm:space-x-6 sm:space-y-0">
              <Link href="/" className="flex items-center justify-center text-gray-600 hover:text-[#ff3b30]">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Home
              </Link>

              <div className="flex items-center justify-center text-gray-600">
                <Mail className="mr-2 h-5 w-5 text-[#ff3b30]" />
                <span>contact@example.com</span>
              </div>

              <div className="flex items-center justify-center text-gray-600">
                <Phone className="mr-2 h-5 w-5 text-[#ff3b30]" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
