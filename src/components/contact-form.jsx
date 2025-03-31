import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import {
Mail,
Phone,
MapPin,
Send,
} from "lucide-react"

export function Contact({title, description}){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        service: "Cloud Hosting",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
      }
    
      const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          service: "Cloud Hosting",
        })
      }

    return (
        <>
        <section className="w-full py-16 md:py-24 bg-[#f8f9fc]" id="contact">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e2942] mb-6">{title}</h2>
              <p className="text-lg text-gray-600">
                {description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-sm p-8"
              >
                <h3 className="text-2xl font-bold text-[#1e2942] mb-6">Contact Information</h3>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#1e2942]/10 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-[#1e2942]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1e2942]">Email</h4>
                      <p className="text-gray-600">info@oneaim.com</p>
                      <p className="text-gray-600">support@oneaim.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#1e2942]/10 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-[#1e2942]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1e2942]">Phone</h4>
                      <p className="text-gray-600">+91 0000000000</p>
                      <p className="text-gray-600">+91 0000000000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#1e2942]/10 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-[#1e2942]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1e2942]">Office</h4>
                      <p className="text-gray-600">XYZ</p>
                      <p className="text-gray-600">ABC</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1e2942] text-white p-8 rounded-2xl">
                  <h4 className="text-xl font-bold mb-4">Business Hours</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p>24/7 Technical Support Available for Enterprise Clients</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-sm p-8"
              >
                <h3 className="text-2xl font-bold text-[#1e2942] mb-6">Send Us a Message</h3>

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
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1e2942] focus:border-transparent outline-none transition-all"
                        placeholder="Name"
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
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1e2942] focus:border-transparent outline-none transition-all"
                        placeholder="email@example.com"
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
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1e2942] focus:border-transparent outline-none transition-all"
                        placeholder="+91 0000000000"
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
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1e2942] focus:border-transparent outline-none transition-all"
                        placeholder="Your Company"
                      />
                    </div>
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1e2942] focus:border-transparent outline-none transition-all"
                    >
                      <option value="Cloud Hosting">Cloud Hosting</option>
                      <option value="Server Management">Server Management</option>
                      <option value="Data Backup">Data Backup</option>
                      <option value="Cloud Security">Cloud Security</option>  
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1e2942] focus:border-transparent outline-none transition-all"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="bg-[#ff3b30] hover:bg-[#e62e24] text-white font-medium px-8 py-4 rounded-full inline-flex items-center transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Message <Send className="w-4 h-4 ml-2" />
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
        </>
    )
}