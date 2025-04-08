"use client"


import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"


export default function ContactForm({ serviceOptions }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    service: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      website: "",
      service: "",
      message: "",
    })
  }

  return (
    <div className="max-w-4xl mx-auto bg-inherit">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <h3 className="text-2xl font-bold text-[#1e2942] mb-6">Contact Information</h3>

          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="bg-[#ff3b30]/10 p-3 rounded-full">
                <Phone className="w-6 h-6 text-[#ff3b30]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#1e2942]">Phone</h4>
                <a href="tel:+15551234567" className="text-lg text-[#ff3b30] hover:underline">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#ff3b30]/10 p-3 rounded-full">
                <Mail className="w-6 h-6 text-[#ff3b30]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#1e2942]">Email</h4>
                <a href="mailto:info@oneaim.com" className="text-lg text-[#ff3b30] hover:underline">
                  info@oneaim.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#ff3b30]/10 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-[#ff3b30]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#1e2942]">Office</h4>
                <p className="text-gray-600">123 Tech Park Avenue</p>
                <p className="text-gray-600">San Francisco, CA 94107</p>
              </div>
            </div>
          </div>

          <div className="bg-[#f8f9fc] p-6 rounded-xl">
            <h4 className="text-xl font-bold text-[#1e2942] mb-4">What to Expect</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-[#ff3b30]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span className="text-gray-700">30-minute consultation with an e-commerce expert</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-[#ff3b30]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span className="text-gray-700">Analysis of your current e-commerce capabilities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-[#ff3b30]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span className="text-gray-700">Customized recommendations for your business</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-[#ff3b30]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span className="text-gray-700">No obligation or pressure to sign up</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff3b30] focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff3b30] focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff3b30] focus:border-transparent outline-none transition-all"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff3b30] focus:border-transparent outline-none transition-all"
                  placeholder="Your Company"
                />
              </div>
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                Website URL
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff3b30] focus:border-transparent outline-none transition-all"
                placeholder="https://yourcompany.com"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                Service of Interest *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff3b30] focus:border-transparent outline-none transition-all"
              >
                <option value="">Select a service</option>
                {serviceOptions?.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
                <option value="other">Other / Not Sure</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Tell us about your project *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff3b30] focus:border-transparent outline-none transition-all"
                placeholder="Describe your e-commerce needs and goals..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="bg-[#ff3b30] hover:bg-[#e62e24] text-white font-medium px-8 py-4 rounded-full inline-flex items-center transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message <Send className="ml-2 w-5 h-5" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}