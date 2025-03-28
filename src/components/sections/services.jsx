"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const tabs = ["Gen AI", "DevOps", "CloudOps", "Data Engineering", "Product Lifecycle", "Enterprise App"]

const tabContent = {
  "Gen AI": {
    title: "Transforming Business with Generative AI",
    description:
      "Our Gen AI solutions leverage cutting-edge artificial intelligence to generate new content, ideas, and solutions. From natural language processing to image generation, our AI services help businesses automate creative processes, enhance customer experiences, and drive innovation across all departments.",
    features: [
      { id: "01", title: "Natural Language Processing", icon: "/images/icon.png" },
      { id: "02", title: "Image & Content Generation", icon: "/images/icon.png" },
      { id: "03", title: "Predictive Analytics", icon: "/images/icon.png" },
      { id: "04", title: "AI Model Training & Deployment", icon: "/images/icon.png" },
    ],
  },
  DevOps: {
    title: "Streamlining Development with DevOps Excellence",
    description:
      "Our DevOps practices bridge the gap between development and operations, creating a seamless pipeline for software delivery. By automating workflows, implementing continuous integration and delivery, and fostering collaboration, we help organizations release high-quality software faster and more reliably.",
    features: [
      { id: "01", title: "CI/CD Pipeline Automation", icon: "/images/icon.png" },
      { id: "02", title: "Infrastructure as Code", icon: "/images/icon.png" },
      { id: "03", title: "Monitoring & Observability", icon: "/images/icon.png" },
      { id: "04", title: "Container Orchestration", icon: "/images/icon.png" },
    ],
  },
  CloudOps: {
    title: "Enabling Seamless Operations with Precision and Agility",
    description:
      "Mastering cloud operations goes beyond routine management: it's about creating a strategic advantage. Our CloudOps services are crafted with a deep understanding of your unique operational challenges, focusing on delivering tailored solutions that balance agility, security, and efficiency. Whether it's automating workflows to reduce manual tasks, fine-tuning your infrastructure for cost-effectiveness, or ensuring compliance with industry standards, our hands-on approach ensures your cloud operations run seamlessly and scale effortlessly.",
    features: [
      { id: "01", title: "Cloud Infrastructure Management", icon: "/images/icon.png" },
      { id: "02", title: "Cloud Cost Management", icon: "/images/icon.png" },
      { id: "03", title: "Cloud Monitoring & Performance Manage", icon: "/images/icon.png" },
      { id: "04", title: "Cloud Automation & Orchestration", icon: "/images/icon.png" },
    ],
  },
  "Data Engineering": {
    title: "Building Robust Data Foundations",
    description:
      "Our Data Engineering services transform raw data into valuable business insights. We design and implement scalable data pipelines, data lakes, and warehousing solutions that enable organizations to harness the full potential of their data assets, supporting informed decision-making and advanced analytics initiatives.",
    features: [
      { id: "01", title: "Data Pipeline Development", icon: "/images/icon.png" },
      { id: "02", title: "Data Warehousing", icon: "/images/icon.png" },
      { id: "03", title: "Big Data Processing", icon: "/images/icon.png" },
      { id: "04", title: "Data Governance & Quality", icon: "/images/icon.png" },
    ],
  },
  "Product Lifecycle": {
    title: "Managing Products from Concept to Retirement",
    description:
      "Our Product Lifecycle Management services provide end-to-end support for your product journey. From initial concept and design to development, deployment, maintenance, and eventual retirement, we ensure each phase is optimized for success, reducing time-to-market and maximizing return on investment.",
    features: [
      { id: "01", title: "Product Strategy & Roadmapping", icon: "/images/icon.png" },
      { id: "02", title: "Agile Development", icon: "/images/icon.png" },
      { id: "03", title: "Quality Assurance", icon: "/images/icon.png" },
      { id: "04", title: "Product Analytics", icon: "/images/icon.png" },
    ],
  },
  "Enterprise App": {
    title: "Building Powerful Enterprise Applications",
    description:
      "Our Enterprise Application services deliver custom, scalable solutions designed to address your organization's specific challenges. We develop robust, secure, and user-friendly applications that integrate seamlessly with your existing systems, automating complex processes and enhancing operational efficiency across your enterprise.",
    features: [
      { id: "01", title: "Custom Application Development", icon: "/images/icon.png" },
      { id: "02", title: "Legacy System Modernization", icon: "/images/icon.png" },
      { id: "03", title: "Enterprise Integration", icon: "/images/icon.png" },
      { id: "04", title: "Mobile Enterprise Solutions", icon: "/images/icon.png" },
    ],
  },
}

export default function Services() {
  const [activeTab, setActiveTab] = useState("Gen AI")

  return (
    <section className="w-full py-16 bg-white min-h-[90vh]">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#1e2942]">
          Crafted by Talent, Perfected in Services
        </h2>

        {/* Tabs */}
        <div className="flex flex-row justify-center">
        <div className="flex flex-row max-w-min justify-center gap-2 mb-12 py-2 px-2 bg-[#ffe5e5] rounded-full overflow-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full text-sm md:text-base transition-all duration-300 ${
                activeTab === tab ? "bg-[#fff5f5]" : "bg-[#ffe5e5] text-[#1e2942] hover:bg-[#fff5f5]"
              }`}
            >
              <p className="text-nowrap">{tab}</p>
            </button>
          ))}
        </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#1e2942]">{tabContent[activeTab].title}</h3>
              <p className="text-base mb-6 text-[#1e2942]">{tabContent[activeTab].description}</p>
              <button className="bg-[#ff3b30] text-white px-8 py-3 rounded-full font-medium outline outline-1 hover:bg-white hover:text-[#ff3b30] transition-colors">
                Know More
              </button>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative h-[400px]">
                {tabContent[activeTab].features.map((feature, index) => (
                  <div
                    key={feature.id}
                    className="absolute"
                    style={{
                      top: index === 0 ? "10%" : index === 1 ? "70%" : index === 2 ? "10%" : "70%",
                      left: index === 0 || index === 1 ? "10%" : "60%",
                    }}
                  >
                    <div className="bg-[#f5f7ff] p-4 rounded-lg shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                          <img src={feature.image || "/next.svg"} alt={feature?.title} width={24} height={24} />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{feature.title}</p>
                        </div>
                      </div>
                    </div>


                    <div
                      className="absolute text-4xl font-bold text-[#dbe1f6]"
                      style={{ top: "-30px", left: index % 2 === 0 ? "-22px" : "22px" }}
                    >
                      {feature.id}
                    </div>

                  </div>
                ))}

                <svg className="absolute inset-0 w-full h-full z-20" viewBox="0 0 400 400">
                  <path
                    d="M100,100 C150,50 250,50 300,100 C350,150 350,250 300,300 C250,350 150,350 100,300 C50,250 50,150 100,100"
                    fill="none"
                    stroke="#e5e7f2"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

