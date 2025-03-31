"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import {
  Cloud,
  Server,
  Database,
  Shield,
  Check,
  TrendingUp,
  Clock,
  DollarSign,
  Zap,
  Users,
  ArrowRight,
} from "lucide-react"
import FAQ from "@/components/faq"
import { Contact } from "@/components/contact-form"
import { SpecialButton } from "@/components/ui/special-button"


const services = [
  {
    id: "cloud-hosting",
    title: "Cloud Hosting",
    icon: <Cloud className="w-6 h-6" />,
    description:
      "Our cloud hosting services provide a reliable, scalable, and secure environment for your applications and websites. We leverage the latest technologies to ensure optimal performance and availability.",
    features: [
      "High-performance infrastructure with 99.9% uptime guarantee",
      "Auto-scaling capabilities to handle traffic spikes",
      "Global content delivery network for faster loading times",
      "Managed hosting with regular updates and maintenance",
      "Flexible resource allocation based on your needs",
      "Dedicated environments for development, staging, and production",
    ],
    image: "/placeholder.svg",
  },
  {
    id: "server-management",
    title: "Server Management",
    icon: <Server className="w-6 h-6" />,
    description:
      "Our server management services take the burden of infrastructure maintenance off your shoulders. We proactively monitor, maintain, and optimize your servers to ensure they run at peak performance.",
    features: [
      "24/7 server monitoring and alert systems",
      "Proactive maintenance and performance optimization",
      "Security patching and updates",
      "Resource utilization monitoring and scaling",
      "Configuration management and automation",
      "Troubleshooting and incident response",
    ],
    image: "/placeholder.svg",
  },
  {
    id: "data-backup",
    title: "Data Backup",
    icon: <Database className="w-6 h-6" />,
    description:
      "Our data backup solutions ensure your critical business information is always protected. We implement automated, secure backup processes with multiple redundancies to safeguard against data loss.",
    features: [
      "Automated daily, weekly, and monthly backups",
      "Incremental and differential backup options",
      "Geo-redundant storage across multiple locations",
      "End-to-end encryption for backup data",
      "Quick restoration capabilities with minimal downtime",
      "Retention policies customized to your requirements",
    ],
    image: "/placeholder.svg",
  },
  {
    id: "cloud-security",
    title: "Cloud Security",
    icon: <Shield className="w-6 h-6" />,
    description:
      "Our cloud security services provide comprehensive protection for your cloud environment. We implement multiple layers of security to defend against threats and ensure compliance with industry standards.",
    features: [
      "Advanced firewall and intrusion detection systems",
      "Identity and access management controls",
      "Encryption for data at rest and in transit",
      "Regular security assessments and penetration testing",
      "Compliance management for GDPR, HIPAA, SOC 2, etc.",
      "Security incident response and remediation",
    ],
    image: "/placeholder.svg",
  },
]

const benefits = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Scalability",
    description:
      "Easily scale your resources up or down based on demand, ensuring optimal performance during peak times and cost efficiency during quieter periods.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Reliability",
    description:
      "Our cloud infrastructure is designed for 99.9% uptime, with redundant systems and failover mechanisms to minimize disruptions to your business.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Security",
    description:
      "Multi-layered security approach with encryption, access controls, and continuous monitoring to protect your data from threats.",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Cost Efficiency",
    description:
      "Pay only for what you use with transparent pricing models and optimization recommendations to reduce unnecessary expenses.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Performance",
    description:
      "High-performance infrastructure with global distribution ensures fast loading times and responsive applications for users worldwide.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Expert Support",
    description:
      "24/7 access to our team of certified cloud specialists who can quickly resolve issues and provide strategic guidance.",
  },
]

const caseStudies = [
  {
    title: "E-commerce Platform Migration",
    industry: "Retail",
    description:
      "Helped a growing e-commerce business migrate from on-premises servers to a scalable cloud infrastructure, resulting in 40% faster page loads and 99.99% uptime during peak shopping seasons.",
    image: "/placeholder.svg",
  },
  {
    title: "Healthcare Data Security Overhaul",
    industry: "Healthcare",
    description:
      "Implemented comprehensive cloud security measures for a healthcare provider, ensuring HIPAA compliance and protecting sensitive patient data while improving system performance.",
    image: "/placeholder.svg",
  },
  {
    title: "Financial Services Backup Solution",
    industry: "Finance",
    description:
      "Designed an automated backup system for a financial services firm that reduced recovery time from days to hours while ensuring regulatory compliance and data integrity.",
    image: "/placeholder.svg",
  },
]

const cloudFAQs = [
  {
    question: "What cloud platforms do you support?",
    answer:
      "We support all major cloud platforms including AWS, Microsoft Azure, Google Cloud Platform, and IBM Cloud. Our team is certified in these platforms and can help you choose the right one for your specific business needs.",
  },
  {
    question: "How do you ensure data security in the cloud?",
    answer:
      "We implement multiple layers of security including encryption at rest and in transit, identity and access management, network security, and regular security audits. We also stay compliant with industry standards like GDPR, HIPAA, and SOC 2.",
  },
  {
    question: "Can you help migrate our existing infrastructure to the cloud?",
    answer:
      "Yes, we offer comprehensive cloud migration services. Our approach includes assessment, planning, migration execution, and post-migration optimization to ensure a smooth transition with minimal disruption to your business operations.",
  },
  {
    question: "What is your approach to cloud cost optimization?",
    answer:
      "We implement right-sizing, scheduled scaling, reserved instances, and continuous monitoring to optimize your cloud costs. Our FinOps practices ensure you get maximum value from your cloud investment while maintaining performance and reliability.",
  },
  {
    question: "Do you offer 24/7 cloud support and monitoring?",
    answer:
      "Yes, we provide round-the-clock monitoring and support for all our cloud services. Our dedicated team is always available to address any issues that may arise, ensuring your systems remain operational at all times.",
  },
  {
    question: "How do you handle cloud disaster recovery?",
    answer:
      "Our disaster recovery solutions include regular backups, multi-region deployment strategies, automated failover mechanisms, and comprehensive recovery plans. We test these systems regularly to ensure they work when you need them most.",
  },
]

export default function CloudServicesPage() {
  const [activeService, setActiveService] = useState(services[0].id)
  const [activeTab, setActiveTab] = useState("cloud-hosting")
  const [openFAQIndex, setOpenFAQIndex] = useState(null)

  const currentService = services.find((service) => service.id === activeService)


  const toggleQuestion = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index)
  }

  return (
    <>
      <main className="">
        {/* Hero */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-[#1e2942] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-5xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 leading-tight">
                <span className="text-white">Enterprise-Grade</span>
                <br />
                <span className="bg-gradient-to-r from-[#ff3b30] to-[#ff5c52] bg-clip-text text-transparent">
                  Cloud Services
                </span>
                <br />
                <span className="text-white">For Modern Businesses</span>
              </h1>
              <p className="text-lg md:text-xl text-center text-gray-300 max-w-3xl mx-auto">
                Secure, scalable, and reliable cloud solutions tailored to your business needs. From hosting to
                security, we've got you covered.
              </p>
            </motion.div>

            <motion.div
              className="flex justify-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SpecialButton isTransparent={true} textClassName={"text-lg"}>Schedule a Cloud Consultation</SpecialButton>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <motion.div
                className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-2">Cloud Hosting</h3>
                <p className="text-gray-300 text-sm">Reliable infrastructure for your applications</p>
              </motion.div>

              <motion.div
                className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-2">Server Management</h3>
                <p className="text-gray-300 text-sm">Proactive monitoring and maintenance</p>
              </motion.div>

              <motion.div
                className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-2">Data Backup</h3>
                <p className="text-gray-300 text-sm">Secure and automated backup solutions</p>
              </motion.div>

              <motion.div
                className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-2">Cloud Security</h3>
                <p className="text-gray-300 text-sm">Advanced protection for your data</p>
              </motion.div>
            </div>
          </div>

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

        {/* Overview */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e2942] mb-6">
                Comprehensive Cloud Solutions for Your Business
              </h2>
              <p className="text-lg text-gray-600">
                At OneAim, we deliver end-to-end cloud services designed to optimize your operations, enhance security,
                and drive innovation. Our expert team ensures your cloud infrastructure is reliable, scalable, and
                cost-effective.
              </p>
            </motion.div>

            {/* Services */}
            <div className="max-w-min mx-auto mb-16">
              <motion.div
                className="bg-[#fff5f5] rounded-full p-2 flex flex-row justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {services.map((service) => (
                  <motion.button
                    key={service.id}
                    onClick={() => setActiveTab(service.id)}
                    className={`px-6 py-3 rounded-full text-sm md:text-base transition-all duration-300 ${
                      activeTab === service.id ? "bg-white text-[#1e2942] shadow-sm" : "text-[#1e2942]"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <p className="text-nowrap">
                    {service.title}
                    </p>
                  </motion.button>
                ))}
              </motion.div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {services.map(
                  (service) =>
                    service.id === activeTab && (
                      <div key={service.id} className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
                        <motion.div
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#1e2942]">{service.title}</h3>
                          <p className="text-base mb-6 text-[#1e2942]">{service.description}</p>

                          <h4 className="text-lg font-semibold text-[#1e2942] mb-4">Key Features:</h4>
                          <ul className="space-y-3 mb-8">
                            {service.features.map((feature, index) => (
                              <motion.li
                                key={index}
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                              >
                                <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                                  <Check className="w-4 h-4 text-[#ff3b30]" />
                                </span>
                                <span className="text-gray-700">{feature}</span>
                              </motion.li>
                            ))}
                          </ul>

                          <motion.button
                            className="bg-[#ff3b30] text-white px-8 py-3 rounded-full font-medium hover:bg-[#e62e24] transition-colors"
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(255, 59, 48, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Learn More About {service.title}
                          </motion.button>
                        </motion.div>

                        <motion.div
                          className="relative rounded-2xl overflow-hidden shadow-lg"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <div className="bg-gradient-to-br from-[#1e2942] to-[#2a3a5f] p-8 flex items-center justify-center h-full min-h-[400px]">
                            <Image
                              src={service.image || "/placeholder.svg?height=400&width=400"}
                              alt={service.title}
                              width={400}
                              height={400}
                              className="max-w-full h-auto rounded-lg"
                            />
                          </div>

                          {/* Decorative elements */}
                          <div className="absolute top-4 right-4 w-16 h-16 bg-[#ff3b30]/10 rounded-full"></div>
                          <div className="absolute bottom-4 left-4 w-24 h-24 bg-[#3b82f6]/10 rounded-full"></div>
                        </motion.div>
                      </div>
                    ),
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Benefits */}
        <section className="w-full py-16 md:py-24 bg-[#f8f9fc]">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e2942] mb-6">Why Choose Our Cloud Services</h2>
              <p className="text-lg text-gray-600">
                Our cloud solutions are designed to provide tangible benefits to your business, from improved
                performance to enhanced security and cost savings.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className={`p-8 rounded-2xl shadow-sm border border-gray-100 outline outline-1 outline-blue-400 ${
                    index % 3 === 0
                      ? "bg-gradient-to-br from-white to-[#f0f7ff]"
                      : index % 3 === 1
                        ? "bg-gradient-to-br from-white to-[#fff5f5]"
                        : "bg-gradient-to-br from-white to-[#f5f5ff]"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <div
                    className={`p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6 ${
                      index % 3 === 0 ? "bg-[#3b82f6]/10" : index % 3 === 1 ? "bg-[#ff3b30]/10" : "bg-[#8b5cf6]/10"
                    }`}
                  >
                    <div
                      className={`${
                        index % 3 === 0 ? "text-[#3b82f6]" : index % 3 === 1 ? "text-[#ff3b30]" : "text-[#8b5cf6]"
                      }`}
                    >
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#1e2942] mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-[#1e2942] text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16 "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Success Stories</h2>
              <p className="text-lg text-gray-300">
                See how our cloud services have helped businesses across industries overcome challenges and achieve
                their goals.
              </p>
            </motion.div>

            <div className="relative max-w-6xl mx-auto">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  className={`bg-white max-w-5xl text-[#1e2942] p-8 rounded-2xl shadow-lg mb-8 ${
                    index % 2 === 0 ? "ml-0 md:ml-12 lg:ml-24" : "mr-0 md:mr-12 lg:mr-24"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.3)" }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <div className="rounded-lg overflow-hidden">
                        <Image
                          src={study.image || "/placeholder.svg?height=200&width=300"}
                          alt={study.title}
                          width={300}
                          height={200}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <div className="mb-4">
                        <span className="bg-[#ff3b30] text-white text-xs font-medium px-2.5 py-1 rounded">
                          {study.industry}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-4">{study.title}</h3>
                      <p className="text-gray-600 mb-6">{study.description}</p>
                      <a
                        href="#"
                        className="inline-flex items-center text-[#ff3b30] hover:text-[#ff5c52] transition-colors"
                      >
                        Read full case study <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Decorative elements */}
              <div className="absolute top-1/4 left-0 w-24 h-24 bg-[#ff3b30]/20 rounded-full -z-10"></div>
              <div className="absolute bottom-1/4 right-0 w-32 h-32 bg-[#3b82f6]/20 rounded-full -z-10"></div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQ title={"Frequently Asked Questions About Cloud Services"}
          description={"Find answers to common questions about our cloud services offerings and how we can help your business leverage the power of the cloud."}
          faqs={cloudFAQs}
        />

        {/* Contact */}
        <Contact title={"Get in Touch"} description={"description"} />

      </main>
    </>
  )
}