"use client"


import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, Calendar, ArrowRight, Linkedin, Twitter, Instagram, Facebook, Youtube } from "lucide-react"
// import Header from "@/components/header"

// Office locations data
const officeLocations = [
  {
    country: "California, USA",
    flag: "🇺🇸",
    address: ["5432 Geary Blvd, Unit #527", "San Francisco, CA 94121", "United States"],
    phone: "+1(989) 287-9400",
  },
  {
    country: "Texas, USA",
    flag: "🇺🇸",
    address: ["320 Decker Drive", "Irving, TX 75062", "United States"],
    phone: "+1(989) 287-9400",
  },
  {
    country: "Toronto, Canada",
    flag: "🇨🇦",
    address: ["6d-7398 Yonge St,", "1318 Thornhill,", "Ontario, Canada, L4J8J2"],
    phone: "+1(989) 287-9400",
  },
  {
    country: "Lauchringen, Germany",
    flag: "🇩🇪",
    address: ["Hohrainstrasse 16,", "79787 Lauchringen,", "Germany"],
    phone: "",
  },
  {
    country: "Lausanne, Switzerland",
    flag: "🇨🇭",
    address: ["Place Grand Saint Jean 1,", "1003 Lausanne", "Switzerland"],
    phone: "+41 44 586 2272",
  },
  {
    country: "Stockholm, Sweden",
    flag: "🇸🇪",
    address: ["Karlavägen 18,", "114 31 Stockholm", "Sweden"],
    phone: "",
  },
  {
    country: "Pretoria, South Africa",
    flag: "🇿🇦",
    address: ["5th floor, Bloukrans Building, Lynnwood", "Road, Pretoria, Gauteng, 0081, South Africa"],
    phone: "",
  },
  {
    country: "Ahmedabad, India",
    flag: "🇮🇳",
    address: ["12th & 13th Floor, B Square-1,", "Bopal - Ambli Road,", "Ahmedabad - 380054"],
    phone: "",
  },
  {
    country: "Mumbai, India",
    flag: "🇮🇳",
    address: [
      "B/305A, 3rd Floor, Kanakia Wall Street,",
      "Andheri Kurla Road, Chakala Junction,",
      "Andheri (East), Mumbai - 400093",
    ],
    phone: "",
  },
]

// Process steps
const processSteps = [
  {
    number: "01",
    title: "Introduction & Consultation",
    description:
      "We'll understand your needs and lay out the basic plan, tech stack, solution architecture, and ballpark budget along with the timeline.",
  },
  {
    number: "02",
    title: "Talk to Engineering Team",
    description:
      "Moving forward through a series of calls, our technical consultants dive deeper into product vision, its engineering, and go-to-market plan.",
  },
  {
    number: "03",
    title: "Team Collaboration Setup",
    description:
      "Following signing off, we align our engineers with your internal teams, setting up communication channels & workflows for set milestones.",
  },
]

// Available dates for consultation
const availableDates = [
  { day: "Mon", date: "07" },
  { day: "Tue", date: "08" },
  { day: "Wed", date: "09" },
  { day: "Thu", date: "10" },
  { day: "Fri", date: "11" },
]

// Time slots
const timeSlots = [
  "06:00 AM - 07:00 AM",
  "07:00 AM - 08:00 AM",
  "08:00 AM - 09:00 AM",
  "09:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "01:00 PM - 02:00 PM",
  "02:00 PM - 03:00 PM",
  "03:00 PM - 04:00 PM",
  "04:00 PM - 05:00 PM",
]

// Timezones
const timezones = ["EST", "CST", "MST", "PST", "GMT", "CET", "IST"]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    message: "",
    selectedDate: "09", // Default to Wednesday
    selectedTime: timeSlots[3], // Default to 9-10 AM
    selectedTimezone: timezones[0], // Default to EST
  })

  const [selectedDateIndex, setSelectedDateIndex] = useState(2) // Default to Wednesday (index 2)
  const currentMonth = "Apr 2025" // This would normally be dynamic

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleDateSelect = (date, index) => {
    setFormData((prev) => ({ ...prev, selectedDate: date }))
    setSelectedDateIndex(index)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 bg-[#1e2942] text-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Get in Touch With Our Team</h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Whether you have a question about our services, need a custom quote, or want to discuss your project,
                our team is ready to help you build something amazing.
              </p>
            </motion.div>
          </div>

          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-full h-full z-0 opacity-20">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#ff3b30" stopOpacity="0.7" />
                </linearGradient>
              </defs>
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grad1)" />
              <path d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" fill="#3b82f6" opacity="0.3" />
              <path d="M0,70 Q25,50 50,70 T100,70 L100,100 L0,100 Z" fill="#ff3b30" opacity="0.3" />
            </svg>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
              {/* Contact Form */}
              <div className="lg:col-span-7">
                <motion.div
                  className="bg-[#fff5f5] rounded-3xl p-8 md:p-12"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold text-[#1e2942] mb-8">
                    Let's Connect for Successful Product Journey
                  </h2>

                  <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#1e2942] mb-4">
                      Share your business challenge. We might have already cracked it what you're struggling with!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      For any career related inquiries, please email us at careers@oneaim.com.
                    </p>
                    <div className="border-t border-gray-200 my-6"></div>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-[#1e2942] mb-4">Tell us about you & your company</h3>

                      <div className="mb-6">
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Your Full Name*"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1e2942] focus:border-transparent outline-none transition-all"
                        />
                        <p className="text-xs text-gray-500 mt-1">0 of 30 max characters</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email*"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1e2942] focus:border-transparent outline-none transition-all"
                          />
                        </div>
                        <div>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number*"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1e2942] focus:border-transparent outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company Name*"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1e2942] focus:border-transparent outline-none transition-all"
                          />
                          <p className="text-xs text-gray-500 mt-1">0 of 30 max characters</p>
                        </div>
                        <div>
                          <input
                            type="url"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            placeholder="Website Link*"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1e2942] focus:border-transparent outline-none transition-all"
                          />
                          <p className="text-xs text-gray-500 mt-1">0 of 30 max characters</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 my-6"></div>

                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-[#1e2942] mb-4">Tell us more about your project</h3>

                      <div className="mb-6">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="How can We Help?*"
                          required
                          rows={6}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1e2942] focus:border-transparent outline-none transition-all"
                        ></textarea>
                        <p className="text-xs text-gray-500 mt-1">0 of 500 max characters</p>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 my-6"></div>

                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-[#1e2942] mb-4">
                        Book a call with our tech expert to get a free consultation.
                      </h3>

                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <Calendar className="w-5 h-5 text-[#ff3b30] mr-2" />
                            <span className="font-medium">{currentMonth}</span>
                          </div>
                          <div className="flex gap-2">
                            <button type="button" className="p-2 rounded-full hover:bg-gray-100">
                              <ArrowRight className="w-4 h-4 transform rotate-180" />
                            </button>
                            <button type="button" className="p-2 rounded-full hover:bg-gray-100">
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <div className="grid grid-cols-5 gap-3 mb-6">
                          {availableDates.map((date, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => handleDateSelect(date.date, index)}
                              className={`p-4 rounded-xl text-center transition-all ${
                                selectedDateIndex === index ? "bg-[#1e2942] text-white" : "bg-white hover:bg-gray-100"
                              }`}
                            >
                              <div className="text-sm font-medium">{date.day}</div>
                              <div className="text-xl font-bold">{date.date}</div>
                            </button>
                          ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <select
                              name="selectedTimezone"
                              value={formData.selectedTimezone}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1e2942] focus:border-transparent outline-none transition-all appearance-none"
                            >
                              {timezones.map((timezone, index) => (
                                <option key={index} value={timezone}>
                                  {timezone}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <select
                              name="selectedTime"
                              value={formData.selectedTime}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1e2942] focus:border-transparent outline-none transition-all appearance-none"
                            >
                              {timeSlots.map((slot, index) => (
                                <option key={index} value={slot}>
                                  {slot}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      className="bg-[#ff3b30] hover:bg-[#e62e24] text-white font-medium px-12 py-4 rounded-full inline-flex items-center transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Submit
                    </motion.button>
                  </form>
                </motion.div>
              </div>

              {/* Process Steps */}
              <div className="lg:col-span-5">
                <motion.div
                  className="bg-white rounded-3xl p-8 md:p-12"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold text-[#1e2942] mb-8">What's next?</h2>

                  <div className="space-y-8">
                    {processSteps.map((step, index) => (
                      <motion.div
                        key={index}
                        className="bg-[#f8f9fc] rounded-2xl p-6 relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-[#ff3b30] font-bold text-xl">{step.number}</div>
                          <div>
                            <h3 className="text-xl font-bold text-[#1e2942] mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                          </div>
                        </div>
                        {index < processSteps.length - 1 && (
                          <div className="absolute left-6 bottom-0 w-px h-8 bg-[#ff3b30]/20 transform translate-y-full"></div>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#1e2942] mb-6">Our Contact Details</h2>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-[#1e2942]/10 p-3 rounded-full">
                          <Phone className="w-5 h-5 text-[#1e2942]" />
                        </div>
                        <div>
                          <h4 className="text-gray-600">USA Phone Number</h4>
                          <a href="tel:+19892879400" className="text-xl font-semibold text-[#ff3b30] hover:underline">
                            +1 (989) 287-9400
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-[#1e2942]/10 p-3 rounded-full">
                          <Phone className="w-5 h-5 text-[#1e2942]" />
                        </div>
                        <div>
                          <h4 className="text-gray-600">EU Phone Number</h4>
                          <a href="tel:+41445862272" className="text-xl font-semibold text-[#ff3b30] hover:underline">
                            +41 44 586 22 72
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-[#1e2942]/10 p-3 rounded-full">
                          <Mail className="w-5 h-5 text-[#1e2942]" />
                        </div>
                        <div>
                          <h4 className="text-gray-600">Business Inquiries</h4>
                          <a
                            href="mailto:info@oneaim.com"
                            className="text-xl font-semibold text-[#ff3b30] hover:underline"
                          >
                            info@oneaim.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-[#1e2942]/10 p-3 rounded-full">
                          <Mail className="w-5 h-5 text-[#1e2942]" />
                        </div>
                        <div>
                          <h4 className="text-gray-600">Career Inquiries</h4>
                          <a
                            href="mailto:careers@oneaim.com"
                            className="text-xl font-semibold text-[#ff3b30] hover:underline"
                          >
                            careers@oneaim.com
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="mt-12">
                      <h3 className="text-xl font-bold text-[#1e2942] mb-4">Follow Us</h3>
                      <div className="flex gap-4">
                        <a
                          href="#"
                          className="bg-[#f8f9fc] p-3 rounded-full hover:bg-[#1e2942] hover:text-white transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                          href="#"
                          className="bg-[#f8f9fc] p-3 rounded-full hover:bg-[#1e2942] hover:text-white transition-colors"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                        <a
                          href="#"
                          className="bg-[#f8f9fc] p-3 rounded-full hover:bg-[#1e2942] hover:text-white transition-colors"
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                        <a
                          href="#"
                          className="bg-[#f8f9fc] p-3 rounded-full hover:bg-[#1e2942] hover:text-white transition-colors"
                        >
                          <Facebook className="w-5 h-5" />
                        </a>
                        <a
                          href="#"
                          className="bg-[#f8f9fc] p-3 rounded-full hover:bg-[#1e2942] hover:text-white transition-colors"
                        >
                          <Youtube className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations Section */}
        {/* <section className="w-full py-16 md:py-24 bg-[#f8f9fc]">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e2942] mb-6">Our Offices</h2>
              <p className="text-lg text-gray-600">
                With offices around the globe, we're ready to serve you wherever you are.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border border-gray-200 rounded-3xl overflow-hidden">
                {officeLocations.map((office, index) => (
                  <motion.div
                    key={index}
                    className="p-6 border-b border-r border-gray-200 bg-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{office.flag}</span>
                      <h3 className="text-xl font-semibold text-[#1e2942]">{office.country}</h3>
                    </div>

                    <div className="mb-4">
                      {office.address.map((line, i) => (
                        <p key={i} className="text-gray-600">
                          {line}
                        </p>
                      ))}
                    </div>

                    {office.phone && (
                      <a href={`tel:${office.phone}`} className="text-[#ff3b30] font-medium hover:underline">
                        {office.phone}
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* FAQ Section */}
        <section className="w-full py-16 md:py-24 bg-[#f8f9fc]">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e2942] mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">Find answers to common questions about working with us.</p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                <motion.div
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <button className="w-full flex justify-between items-center p-6 text-left">
                    <h3 className="text-lg font-semibold text-[#1e2942]">
                      How quickly can you start working on my project?
                    </h3>
                    <span className="text-[#ff3b30] text-xl">+</span>
                  </button>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">
                      We can typically begin work within 1-2 weeks of finalizing project details and agreements. For
                      urgent projects, we may be able to expedite this timeline. During our initial consultation, we'll
                      discuss your timeline requirements and provide a specific start date.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <button className="w-full flex justify-between items-center p-6 text-left">
                    <h3 className="text-lg font-semibold text-[#1e2942]">
                      What information do you need to provide a quote?
                    </h3>
                    <span className="text-[#ff3b30] text-xl">+</span>
                  </button>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">
                      To provide an accurate quote, we need to understand your project scope, timeline, technical
                      requirements, and business objectives. The more details you can share, the more precise our
                      estimate will be. Our initial consultation is designed to gather this information systematically.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <button className="w-full flex justify-between items-center p-6 text-left">
                    <h3 className="text-lg font-semibold text-[#1e2942]">How do you handle project communication?</h3>
                    <span className="text-[#ff3b30] text-xl">+</span>
                  </button>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">
                      We establish clear communication channels at the project outset, typically using tools like Slack,
                      Microsoft Teams, or your preferred platform. We schedule regular progress meetings, provide weekly
                      updates, and ensure your dedicated project manager is readily available to address any questions
                      or concerns.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <button className="w-full flex justify-between items-center p-6 text-left">
                    <h3 className="text-lg font-semibold text-[#1e2942]">
                      Do you offer post-launch support and maintenance?
                    </h3>
                    <span className="text-[#ff3b30] text-xl">+</span>
                  </button>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">
                      Yes, we offer comprehensive post-launch support and maintenance packages tailored to your needs.
                      These can include regular updates, security monitoring, performance optimization, feature
                      enhancements, and technical support with various response time options.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 bg-[#1e2942] text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
                Let's collaborate to build innovative solutions that drive your business forward. Our team of experts is
                ready to turn your vision into reality.
              </p>
              <motion.a
                href="#"
                className="bg-[#ff3b30] hover:bg-[#e62e24] text-white font-medium px-12 py-4 rounded-full inline-flex items-center transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* <ChatButton /> */}
      </main>
    </>
  )
}