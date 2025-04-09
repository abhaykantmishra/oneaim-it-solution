'use client'

import { motion } from "framer-motion"
import { ChevronDown, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import FAQ from "@/components/faq"

export default function FAQClientPage() {
  return (
    <main className="min-h-screen ">

      {/* Hero Section */}
      <section className=" relative bg-gradient-to-r from-red-400 to-red-600 py-40 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Find answers to common questions about our services, processes, and technologies
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Search Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Input 
                type="text" 
                placeholder="Search for answers..." 
                className="pl-12 py-6 text-lg rounded-xl shadow-sm"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#ff3b30] hover:bg-[#e0352b] text-white">
                Search
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1e2942] mb-4">Browse by Category</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Select a category to find the answers you&apos;re looking for
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {faqCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 text-center cursor-pointer mx-3 my-4 border border-1 border-red-500"
              >
                <div className="w-16 h-16 bg-[#fff0f0] rounded-full flex items-center justify-center mx-auto mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1e2942] mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Link href={`#${category.id}`} className="text-[#ff3b30] font-medium hover:underline">
                  View Questions
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* General Questions */}
      <section id="general" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1e2942] mb-4">General Questions</h2>
            <div className="w-20 h-1 bg-[#ff3b30]"></div>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <FAQ faqs={generalFaqs} />
          </div>
        </div>
      </section>
      
      {/* Services Questions */}
      <section id="services" className="py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1e2942] mb-4">Services & Solutions</h2>
            <div className="w-20 h-1 bg-[#ff3b30]"></div>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <FAQ faqs={servicesFaqs} />
          </div>
        </div>
      </section>
      
      {/* Technical Questions */}
      <section id="technical" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1e2942] mb-4">Technical Questions</h2>
            <div className="w-20 h-1 bg-[#ff3b30]"></div>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <FAQ faqs={technicalFaqs} />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-red-700 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Our team is ready to help you with any additional questions you may have about our services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
              <Button className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto">
                Contact Us
              </Button>
              </Link>
              <Link href="/contact">
              <Button variant="outline" className="border-white text-black hover:bg-white/10 text-lg px-8 py-6 h-auto">
                Schedule a Demo
              </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
    </main>
  )
}

// FAQ Categories
const faqCategories = [
  {
    id: "general",
    title: "General Information",
    description: "Basic questions about our company and services",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ff3b30]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  },
  {
    id: "services",
    title: "Services & Solutions",
    description: "Questions about our specific offerings and solutions",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ff3b30]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  },
  {
    id: "technical",
    title: "Technical Questions",
    description: "Technical details about our implementation and technologies",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ff3b30]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  },
  {
    id: "process",
    title: "Process & Methodology",
    description: "How we work and deliver our services",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ff3b30]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  },
  {
    id: "pricing",
    title: "Pricing & Billing",
    description: "Questions about costs, contracts, and payment",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ff3b30]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  },
  {
    id: "support",
    title: "Support & Maintenance",
    description: "Post-deployment support and ongoing services",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ff3b30]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  }
]

// General FAQs
const generalFaqs = [
  {
    question: "What services does your company offer?",
    answer: "We offer a comprehensive range of enterprise AI and technology services including cloud solutions, web development, digital marketing, e-commerce solutions, automotive solutions, government and defense solutions, and finance and banking solutions. Our services are tailored to meet the specific needs of each industry and client."
  },
  {
    question: "How experienced is your team?",
    answer: "Our team consists of highly skilled professionals with an average of 8+ years of experience in their respective fields. We have experts in software development, cloud architecture, AI/ML, cybersecurity, UX/UI design, and project management. Our team members hold certifications from major technology providers and have worked with clients across various industries."
  },
  {
    question: "Do you work with clients internationally?",
    answer: "Yes, we work with clients globally. Our team operates across multiple time zones to ensure seamless communication and project delivery regardless of your location. We have experience navigating international regulations and requirements for technology implementations."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We specialize in several key industries including e-commerce, automotive, government and defense, finance and banking, healthcare, manufacturing, and retail. Our industry-specific expertise allows us to deliver solutions that address the unique challenges and requirements of each sector."
  },
  {
    question: "How do you ensure the quality of your deliverables?",
    answer: "We maintain rigorous quality assurance processes throughout the development lifecycle. This includes code reviews, automated testing, security audits, performance testing, and user acceptance testing. We follow industry best practices and standards to ensure our deliverables meet the highest quality benchmarks."
  }
]

// Services FAQs
const servicesFaqs = [
  {
    question: "What cloud platforms do you support?",
    answer: "We support all major cloud platforms including AWS, Microsoft Azure, Google Cloud Platform, and IBM Cloud. Our team is certified in these platforms and can help with cloud migration, optimization, infrastructure as code, serverless architectures, and hybrid cloud solutions."
  },
  {
    question: "What technologies do you use for web development?",
    answer: "We use a range of modern technologies for web development including React, Angular, Vue.js, Node.js, .NET Core, Python, and PHP. Our approach is technology-agnostic, and we select the best tools based on your specific requirements, scalability needs, and long-term maintenance considerations."
  },
  {
    question: "Can you help with AI and machine learning implementation?",
    answer: "Yes, we offer comprehensive AI and machine learning services. This includes natural language processing, computer vision, predictive analytics, recommendation systems, and custom AI model development. We can help with data preparation, model training, deployment, and ongoing optimization."
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: "Yes, we offer flexible maintenance and support packages tailored to your needs. This includes 24/7 monitoring, regular updates and patches, performance optimization, security monitoring, and technical support. We can establish SLAs that align with your business requirements."
  },
  {
    question: "Can you integrate with our existing systems?",
    answer: "Absolutely. We specialize in system integration and can connect your new solutions with existing systems, databases, and third-party services. We use API-first approaches, middleware solutions, and custom connectors to ensure seamless data flow across your technology ecosystem."
  }
]

// Technical FAQs
const technicalFaqs = [
  {
    question: "What development methodologies do you follow?",
    answer: "We primarily follow Agile methodologies (Scrum and Kanban) to ensure iterative development, regular feedback, and flexibility. For certain projects, we may use hybrid approaches that incorporate elements of traditional project management when appropriate. Our focus is always on delivering value early and adapting to changing requirements."
  },
  {
    question: "How do you handle data security and privacy?",
    answer: "We implement comprehensive security measures including encryption (in transit and at rest), secure authentication, authorization controls, regular security audits, and vulnerability testing. We comply with relevant regulations such as GDPR, CCPA, HIPAA, and industry-specific requirements. Our development processes include security by design principles."
  },
  {
    question: "What is your approach to scalability?",
    answer: "We design solutions with scalability in mind from the beginning. This includes using microservices architectures, containerization, auto-scaling infrastructure, distributed databases, and efficient caching strategies. We conduct load testing to ensure systems can handle growth and peak demands."
  },
  {
    question: "Do you provide documentation for your solutions?",
    answer: "Yes, we provide comprehensive documentation for all our solutions. This includes technical documentation, API documentation, user guides, administration manuals, and knowledge transfer sessions. Our goal is to ensure your team can effectively use, maintain, and extend the solutions we deliver."
  },
  {
    question: "How do you handle project delays or scope changes?",
    answer: "We maintain transparent communication throughout the project. If delays are anticipated, we proactively inform clients and work on mitigation strategies. For scope changes, we follow a formal change request process to assess impact on timeline, resources, and budget before implementation. Our agile approach allows us to accommodate reasonable changes while maintaining project integrity."
  }
]
