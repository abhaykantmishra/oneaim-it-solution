"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import {
  BarChart3,
  Shield,
  CreditCard,
  Users,
  Database,
  Code,
  Server,
  Zap,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Settings,
  PieChart,
  Search,
  Workflow,
  Lock,
  FileText,
  TrendingUp,
  DollarSign,
  Building,
  Briefcase,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CaseStudies from "@/components/case-studies"
import FAQ from "@/components/faq"
import ContactForm from "@/components/contact-form"

// Finance & Banking Solutions Data
const financeSolutions = [
  {
    id: "digital-banking",
    title: "Digital Banking Platforms",
    icon: <Smartphone className="w-6 h-6" />,
    description:
      "Build modern, user-friendly digital banking experiences that meet the evolving expectations of today's customers. Our digital banking solutions enable financial institutions to offer seamless, secure, and personalized banking services across all devices and channels.",
    features: [
      "Omnichannel banking experiences",
      "Mobile banking applications",
      "Customer onboarding automation",
      "Account management systems",
      "Personal finance management tools",
      "Chatbots and virtual assistants",
    ],
    technologies: ["React", "Node.js", "Java", "Spring Boot", "Microservices", "Cloud Infrastructure"],
    // image: "/images/digital-banking.png",
    color: "from-blue-500 to-indigo-600",
    lightColor: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    id: "payment-processing",
    title: "Payment Processing Systems",
    icon: <CreditCard className="w-6 h-6" />,
    description:
      "Implement secure, scalable payment processing solutions that support multiple payment methods and currencies. Our payment systems ensure fast, reliable transactions while maintaining the highest security standards and compliance with industry regulations.",
    features: [
      "Real-time payment processing",
      "Multi-currency support",
      "Payment gateway integration",
      "Recurring billing systems",
      "Digital wallet integration",
      "Cross-border payment solutions",
    ],
    technologies: ["API Development", "Tokenization", "Blockchain", "Cloud Computing", "Microservices"],
    // image: "/images/payment-processing.png",
    color: "from-green-500 to-emerald-600",
    lightColor: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    id: "fraud-detection",
    title: "Fraud Detection & Security",
    icon: <Shield className="w-6 h-6" />,
    description:
      "Protect your financial institution and customers with advanced fraud detection and security solutions. Our systems use machine learning and behavioral analytics to identify suspicious activities in real-time, preventing fraud before it occurs while minimizing false positives.",
    features: [
      "Real-time fraud monitoring",
      "Behavioral analytics",
      "Machine learning-based detection",
      "Transaction monitoring systems",
      "Identity verification solutions",
      "Anti-money laundering (AML) systems",
    ],
    technologies: ["AI/ML", "Big Data", "Behavioral Analytics", "Biometrics", "Predictive Modeling"],
    // image: "/images/fraud-detection.png",
    color: "from-red-500 to-orange-500",
    lightColor: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    id: "regulatory-compliance",
    title: "Regulatory Compliance",
    icon: <FileText className="w-6 h-6" />,
    description:
      "Stay compliant with evolving financial regulations with our comprehensive compliance solutions. We help financial institutions navigate complex regulatory requirements, automate compliance processes, and maintain accurate audit trails to satisfy regulatory examinations.",
    features: [
      "KYC/AML compliance automation",
      "Regulatory reporting systems",
      "Risk management platforms",
      "Compliance monitoring dashboards",
      "Audit trail management",
      "Policy management systems",
    ],
    technologies: [
      "Workflow Automation",
      "Document Management",
      "Data Analytics",
      "Reporting Tools",
      "Cloud Solutions",
    ],
    // image: "/images/regulatory-compliance.png",
    color: "from-purple-500 to-pink-500",
    lightColor: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    id: "data-analytics",
    title: "Data Analytics & BI",
    icon: <BarChart3 className="w-6 h-6" />,
    description:
      "Transform your financial data into actionable insights with our advanced analytics and business intelligence solutions. Our data platforms help financial institutions understand customer behavior, optimize operations, manage risk, and identify new business opportunities.",
    features: [
      "Customer segmentation analytics",
      "Predictive analytics for risk",
      "Financial performance dashboards",
      "Customer behavior analysis",
      "Market trend analysis",
      "Credit scoring models",
    ],
    technologies: [
      "Big Data",
      "Machine Learning",
      "Data Visualization",
      "Predictive Analytics",
      "Cloud Data Warehouses",
    ],
    // image: "/images/data-analytics.png",
    color: "from-yellow-500 to-amber-600",
    lightColor: "bg-yellow-50",
    iconColor: "text-yellow-500",
  },
  {
    id: "wealth-management",
    title: "Wealth Management Systems",
    icon: <Briefcase className="w-6 h-6" />,
    description:
      "Deliver personalized wealth management experiences with our advanced investment platforms. Our solutions help financial advisors and wealth management firms provide tailored investment advice, automate portfolio management, and enhance client engagement through digital channels.",
    features: [
      "Robo-advisory platforms",
      "Portfolio management systems",
      "Financial planning tools",
      "Investment analytics",
      "Client relationship management",
      "Goal-based investing platforms",
    ],
    technologies: [
      "Algorithmic Trading",
      "Financial Modeling",
      "API Integration",
      "Cloud Computing",
      "Mobile Development",
    ],
    // image: "/images/wealth-management.png",
    color: "from-cyan-500 to-blue-500",
    lightColor: "bg-cyan-50",
    iconColor: "text-cyan-500",
  },
]

// Platforms we support
const supportedPlatforms = [
  {
    name: "Temenos",
    // icon: "/images/temenos-icon.png",
    description: "Integration with Temenos core banking and digital banking solutions.",
  },
  {
    name: "Finastra",
    // icon: "/images/finastra-icon.png",
    description: "Custom development and integration with Finastra banking platforms.",
  },
  {
    name: "Mambu",
    // icon: "/images/mambu-icon.png",
    description: "Cloud-native banking solutions built on the Mambu platform.",
  },
  {
    name: "FIS",
    // icon: "/images/fis-icon.png",
    description: "Integration and customization of FIS banking and payment solutions.",
  },
  {
    name: "Fiserv",
    // icon: "/images/fiserv-icon.png",
    description: "Development and enhancement of Fiserv-based banking systems.",
  },
  {
    name: "Custom Solutions",
    // icon: "/images/custom-finance-icon.png",
    description: "Bespoke financial platforms tailored to specific business requirements.",
  },
]

// Benefits data
const benefits = [
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Enhanced Security",
    description:
      "Implement bank-grade security measures to protect sensitive financial data and transactions, ensuring customer trust and regulatory compliance.",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Regulatory Compliance",
    description:
      "Stay compliant with evolving financial regulations like GDPR, PSD2, Basel III, and AML/KYC requirements with automated compliance solutions.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Operational Efficiency",
    description:
      "Streamline operations and reduce costs through automation, digital workflows, and integrated systems that eliminate manual processes.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Enhanced Customer Experience",
    description:
      "Deliver seamless, personalized banking experiences across all digital channels, increasing customer satisfaction and loyalty.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Data-Driven Insights",
    description:
      "Leverage advanced analytics to gain actionable insights from financial data, enabling better decision-making and strategic planning.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Scalable Architecture",
    description:
      "Build systems that can scale to handle growing transaction volumes and user bases while maintaining performance and reliability.",
  },
]

// Process steps
const processSteps = [
  {
    number: "01",
    title: "Discovery & Assessment",
    description:
      "We analyze your current financial systems, identify pain points, and define clear objectives for your digital transformation journey.",
    icon: <Search className="w-8 h-8" />,
  },
  {
    number: "02",
    title: "Solution Architecture",
    description:
      "Our experts design a secure, compliant architecture tailored to your specific financial needs, ensuring scalability and integration capabilities.",
    icon: <PieChart className="w-8 h-8" />,
  },
  {
    number: "03",
    title: "Development & Integration",
    description:
      "We develop custom solutions and integrate with existing banking systems and third-party services, following financial industry best practices.",
    icon: <Code className="w-8 h-8" />,
  },
  {
    number: "04",
    title: "Security & Compliance",
    description:
      "Rigorous security testing and compliance checks ensure your solution meets all regulatory requirements and industry standards.",
    icon: <Shield className="w-8 h-8" />,
  },
  {
    number: "05",
    title: "Deployment & Training",
    description:
      "We handle the deployment process with minimal disruption and provide comprehensive training for your team to ensure successful adoption.",
    icon: <CheckCircle2 className="w-8 h-8" />,
  },
  {
    number: "06",
    title: "Ongoing Support & Evolution",
    description:
      "Our relationship continues after launch with ongoing support, maintenance, and updates to keep your financial systems secure and competitive.",
    icon: <Settings className="w-8 h-8" />,
  },
  {
    number: "07",
    title: "Continuous Improvement",
    description:
      "We continuously monitor system performance, gather user feedback, and implement enhancements to ensure your financial solutions evolve with your business.",
    icon: <Workflow className="w-8 h-8" />,
  },
]

// Finance statistics
const financeStats = [
  {
    value: "99.99%",
    label: "Uptime for Critical Financial Systems",
    description: "Our financial solutions maintain exceptional reliability for mission-critical operations.",
  },
  {
    value: "60%",
    label: "Reduction in Operational Costs",
    description: "Financial institutions typically see significant cost savings through automation and digitization.",
  },
  {
    value: "3x",
    label: "Faster Customer Onboarding",
    description: "Digital onboarding solutions dramatically reduce the time to acquire new customers.",
  },
  {
    value: "85%",
    label: "Reduction in Fraud Incidents",
    description: "Our advanced fraud detection systems significantly reduce financial fraud and associated losses.",
  },
]

// Finance FAQ data
const financeFAQs = [
  {
    question: "How do you ensure the security of financial applications?",
    answer:
      "We implement multiple layers of security including encryption, multi-factor authentication, secure coding practices, regular penetration testing, and compliance with financial security standards like PCI DSS. Our security approach is comprehensive and proactive, with continuous monitoring for potential vulnerabilities and regular security updates to address emerging threats.",
  },
  {
    question: "Can you integrate with our existing core banking systems?",
    answer:
      "Yes, we specialize in integrating with existing core banking systems, payment processors, and third-party financial services. We have experience with major banking platforms like Temenos, Finastra, FIS, and Fiserv, as well as custom legacy systems. Our integration approach minimizes disruption to your operations while enabling modern digital capabilities.",
  },
  {
    question: "How do you handle regulatory compliance requirements?",
    answer:
      "We have deep expertise in financial regulations including GDPR, PSD2, Basel III, AML, KYC, and regional banking regulations. Our development process incorporates compliance requirements from the start, and we provide documentation and audit trails to support regulatory examinations. We also stay updated on evolving regulations to ensure your systems remain compliant.",
  },
  {
    question: "What technologies do you use for financial solutions?",
    answer:
      "We use a range of technologies depending on your specific needs, including Java, .NET, Python, and Node.js for backend systems; React, Angular, and Vue for frontend applications; and specialized financial libraries and frameworks. For data analytics, we employ technologies like Hadoop, Spark, and TensorFlow for advanced financial modeling and risk assessment.",
  },
  {
    question: "How long does it typically take to implement a digital banking solution?",
    answer:
      "Implementation timelines vary based on complexity, but typically range from 3-6 months for focused solutions to 12-18 months for comprehensive digital transformation projects. We use an agile approach to deliver value incrementally, allowing you to see results and gather feedback throughout the development process.",
  },
  {
    question: "Do you provide support after the solution is implemented?",
    answer:
      "Yes, we offer comprehensive support and maintenance services including 24/7 monitoring, regular updates, security patches, performance optimization, and ongoing enhancements. We also provide training for your team and can establish a dedicated support team for critical financial systems.",
  },
  {
    question: "How do you ensure data privacy in financial applications?",
    answer:
      "Data privacy is paramount in financial applications. We implement strict data protection measures including data encryption at rest and in transit, role-based access controls, data masking for sensitive information, secure data storage practices, and comprehensive audit logging. We also ensure compliance with relevant data privacy regulations like GDPR and CCPA.",
  },
]

export default function FinanceBankingSolutionsPage() {
  const [activeSolution, setActiveSolution] = useState(financeSolutions[0].id)

  const heroRef = useRef(null)
  const solutionsRef = useRef(null)
  const platformsRef = useRef(null)
  const benefitsRef = useRef(null)
  const processRef = useRef(null)
  const statsRef = useRef(null)
  const caseStudiesRef = useRef(null)
  const faqRef = useRef(null)
  const contactRef = useRef(null)

  const isSolutionsInView = useInView(solutionsRef, { once: false, amount: 0.2 })
  const isPlatformsInView = useInView(platformsRef, { once: false, amount: 0.2 })
  const isBenefitsInView = useInView(benefitsRef, { once: false, amount: 0.2 })
  const isProcessInView = useInView(processRef, { once: false, amount: 0.2 })
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.2 })
  const isCaseStudiesInView = useInView(caseStudiesRef, { once: false, amount: 0.2 })

  // Case studies data for finance
  const financeCaseStudies = [
    {
      title: "Digital Transformation for Regional Bank",
      industry: "Banking",
      description:
        "Implemented a comprehensive digital banking platform for a regional bank, including mobile banking, online account opening, and personalized financial insights. The solution resulted in a 40% increase in customer satisfaction and a 25% reduction in operational costs.",
      metrics: [
        { label: "Customer Satisfaction Increase", value: "40%" },
        { label: "Operational Cost Reduction", value: "25%" },
        { label: "Digital Adoption Rate", value: "78%" },
      ],
      // image: "/images/case-study-bank.png",
    },
    {
      title: "Fraud Detection System for Payment Provider",
      industry: "Payments",
      description:
        "Developed an AI-powered fraud detection system for a major payment provider, using machine learning to identify suspicious transactions in real-time. The system reduced fraud incidents by 78% while maintaining a false positive rate below 0.5%, saving millions in potential losses.",
      metrics: [
        { label: "Fraud Reduction", value: "78%" },
        { label: "False Positive Rate", value: "<0.5%" },
        { label: "ROI", value: "12x" },
      ],
      // image: "/images/case-study-payment.png",
    },
    {
      title: "Wealth Management Platform for Investment Firm",
      industry: "Wealth Management",
      description:
        "Created a comprehensive wealth management platform with robo-advisory capabilities, portfolio management tools, and client engagement features. The platform increased client assets under management by 45% within the first year and reduced advisor administrative time by 60%.",
      metrics: [
        { label: "AUM Growth", value: "45%" },
        { label: "Advisor Efficiency Improvement", value: "60%" },
        { label: "Client Retention Rate", value: "96%" },
      ],
      // image: "/images/case-study-wealth.png",
    },
  ]

  // Counter animation for stats section
  const [counters, setCounters] = useState({
    uptime: 0,
    operationalCosts: 0,
    onboarding: 0,
    fraudReduction: 0,
  })

  return (
    <>
      <main className="pt-20">
        {/* Hero Section with Animated Elements */}
        <section
          ref={heroRef}
          className="w-full min-h-[91vh] py-16 md:py-32 bg-gradient-to-br from-[#1e2942] via-[#2a3a5f] to-[#364a7c] text-white relative overflow-hidden"
        >
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-5xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-white">Transforming</span>
                <br />
                <span className="bg-gradient-to-r from-[#ff3b30] to-[#ff5c52] bg-clip-text text-transparent">
                  Finance & Banking
                </span>
                <br />
                <span className="text-white">With Innovative IT Solutions</span>
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                From digital banking platforms to advanced fraud detection, regulatory compliance, and data analytics,
                we provide secure and innovative IT solutions for the financial services industry.
              </motion.p>
              <motion.div
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <a
                  href="#contact"
                  className="bg-[#ff3b30] hover:bg-[#e62e24] text-white font-medium px-8 py-4 rounded-full text-lg transition-all"
                >
                  Get a Free Consultation
                </a>
                <a
                  href="#solutions"
                  className="bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-4 rounded-full text-lg transition-all backdrop-blur-sm"
                >
                  Explore Our Solutions
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Animated background elements */}
          <div className="absolute inset-0 z-0">
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-[#ff3b30]/20 to-[#ff5c52]/20 opacity-60 blur-3xl"
              animate={{
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 opacity-60 blur-3xl"
              animate={{
                x: [0, -30, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute top-2/3 right-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-60 blur-3xl"
              animate={{
                x: [0, 40, 0],
                y: [0, -40, 0],
              }}
              transition={{
                duration: 9,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          </div>

          {/* Finance icons overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/30 to-transparent py-6">
            <div className="container mx-auto px-4">
              <div className="flex justify-center gap-8 md:gap-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-center"
                >
                  <Building className="w-8 h-8 mx-auto mb-2 text-[#ff3b30]" />
                  <p className="text-sm text-gray-300">Banking</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-center"
                >
                  <CreditCard className="w-8 h-8 mx-auto mb-2 text-[#ff3b30]" />
                  <p className="text-sm text-gray-300">Payments</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-center hidden md:block"
                >
                  <Shield className="w-8 h-8 mx-auto mb-2 text-[#ff3b30]" />
                  <p className="text-sm text-gray-300">Security</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="text-center hidden md:block"
                >
                  <BarChart3 className="w-8 h-8 mx-auto mb-2 text-[#ff3b30]" />
                  <p className="text-sm text-gray-300">Analytics</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="text-center hidden lg:block"
                >
                  <DollarSign className="w-8 h-8 mx-auto mb-2 text-[#ff3b30]" />
                  <p className="text-sm text-gray-300">Investments</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-[#1e2942] mb-6">
                Comprehensive Finance & Banking IT Solutions
              </h2>
              <p className="text-lg text-gray-600">
                In today&apos;s rapidly evolving financial landscape, institutions need robust, secure, and innovative
                technology solutions to stay competitive, meet regulatory requirements, and exceed customer
                expectations.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  className="bg-[#f8f9fc] p-6 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-[#ff3b30]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                    <Lock className="w-6 h-6 text-[#ff3b30]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e2942] mb-2">Bank-Grade Security</h3>
                  <p className="text-gray-600">
                    Multi-layered security measures to protect sensitive financial data and transactions
                  </p>
                </motion.div>
                <motion.div
                  className="bg-[#f8f9fc] p-6 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-[#ff3b30]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                    <FileText className="w-6 h-6 text-[#ff3b30]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e2942] mb-2">Regulatory Compliance</h3>
                  <p className="text-gray-600">
                    Solutions designed to meet GDPR, PSD2, Basel III, and other financial regulations
                  </p>
                </motion.div>
                <motion.div
                  className="bg-[#f8f9fc] p-6 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-[#ff3b30]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                    <TrendingUp className="w-6 h-6 text-[#ff3b30]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e2942] mb-2">Digital Innovation</h3>
                  <p className="text-gray-600">
                    Cutting-edge technologies to transform customer experiences and operational efficiency
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <motion.div
                className="bg-gradient-to-br from-[#f8f9fc] to-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#1e2942] mb-4">
                      Why Financial Institutions Need Specialized IT Solutions
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Financial institutions face unique challenges in today&apos;s digital landscape, including stringent
                      regulatory requirements, sophisticated security threats, and rapidly evolving customer
                      expectations. Generic IT solutions simply cannot address these specialized needs effectively.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                        </span>
                        <span className="text-gray-700">
                          <strong>Security Challenges:</strong> Protection against cyber threats, fraud, and data
                          breaches
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                        </span>
                        <span className="text-gray-700">
                          <strong>Regulatory Compliance:</strong> Meeting complex and evolving financial regulations
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                        </span>
                        <span className="text-gray-700">
                          <strong>Legacy System Integration:</strong> Connecting modern solutions with existing
                          infrastructure
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                        </span>
                        <span className="text-gray-700">
                          <strong>Digital Transformation:</strong> Meeting customer demands for seamless digital
                          experiences
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative">
                    <motion.div
                      className="rounded-xl overflow-hidden shadow-lg"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <Image
                        src={'/placeholder.svg' || "/images/finance-overview.png"}
                        alt="Finance & Banking IT Solutions"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                    </motion.div>
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#ff3b30]/10 rounded-full -z-10"></div>
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full -z-10"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Solutions Section with Tabs */}
        <section id="solutions" ref={solutionsRef} className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isSolutionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-[#1e2942] mb-6">Our Finance & Banking IT Solutions</h2>
              <p className="text-lg text-gray-600">
                We offer a comprehensive suite of IT solutions designed to address the unique challenges faced by
                financial institutions, from digital banking and payments to security, compliance, and analytics.
              </p>
            </motion.div>

            <Tabs defaultValue={financeSolutions[0].id} className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isSolutionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <TabsList className="w-full h-full flex md:flex-row flex-wrap justify-center gap-2 bg-[#fff5f5] rounded-full">
                  {financeSolutions.map((solution, index) => (
                    <TabsTrigger
                      key={solution.id}
                      value={solution.id}
                      className="px-6 py-3 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:text-black data-[state=active]:shadow-md"
                      style={{
                        backgroundImage: `var(--state-active, none)`,
                        "--state-active": `linear-gradient(to right, ${
                          solution.id === "digital-banking"
                            ? "var(--blue-500), var(--indigo-600)"
                            : solution.id === "payment-processing"
                              ? "var(--green-500), var(--emerald-600)"
                              : solution.id === "fraud-detection"
                                ? "var(--red-500), var(--orange-500)"
                                : solution.id === "regulatory-compliance"
                                  ? "var(--purple-500), var(--pink-500)"
                                  : solution.id === "data-analytics"
                                    ? "var(--yellow-500), var(--amber-600)"
                                    : "var(--cyan-500), var(--blue-500)"
                        })`,
                      }}
                      onClick={() => setActiveSolution(solution.id)}
                    >
                      <span className="flex items-center gap-2">
                        {solution.icon}
                        <span className="hidden md:inline">{solution.title}</span>
                        <span className="md:hidden">{solution.title.split(" ")[0]}</span>
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </motion.div>

              {financeSolutions.map((solution) => (
                <TabsContent key={solution.id} value={solution.id} className="mt-0">
                  <motion.div
                    className="grid md:grid-cols-2 gap-8 items-center"
                    initial={{ opacity: 0, x: 0 }}
                    animate={isSolutionsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  >
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#1e2942]">{solution.title}</h3>
                      <p className="text-base mb-6 text-gray-700">{solution.description}</p>

                      <h4 className="text-lg font-semibold text-[#1e2942] mb-4">Key Features:</h4>
                      <ul className="space-y-3 mb-8">
                        {solution.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            animate={isSolutionsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                          >
                            <span className={`${solution.lightColor} p-1 rounded-full mt-0.5`}>
                              <CheckCircle2 className={`w-4 h-4 ${solution.iconColor}`} />
                            </span>
                            <span className="text-gray-700">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-[#1e2942] mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {solution.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className={`${solution.lightColor} ${solution.iconColor} px-3 py-1 rounded-full text-sm font-medium`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <motion.button
                        className={`bg-gradient-to-r text-white px-8 py-3 rounded-full font-medium transition-all`}
                        style={{
                          backgroundImage: `linear-gradient(to right, ${
                            solution.id === "digital-banking"
                              ? "var(--blue-500), var(--indigo-600)"
                              : solution.id === "payment-processing"
                                ? "var(--green-500), var(--emerald-600)"
                                : solution.id === "fraud-detection"
                                  ? "var(--red-500), var(--orange-500)"
                                  : solution.id === "regulatory-compliance"
                                    ? "var(--purple-500), var(--pink-500)"
                                    : solution.id === "data-analytics"
                                      ? "var(--yellow-500), var(--amber-600)"
                                      : "var(--cyan-500), var(--blue-500)"
                          })`,
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More About {solution.title}
                      </motion.button>
                    </div>

                    <motion.div
                      className="relative rounded-2xl overflow-hidden shadow-xl"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isSolutionsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.7, delay: 0.5 }}
                    >
                      <div
                        className={`bg-gradient-to-br ${solution.color} p-8 flex items-center justify-center h-full min-h-[400px]`}
                      >
                        <Image
                          src={solution.image || "/placeholder.svg"}
                          alt={solution.title}
                          width={400}
                          height={400}
                          className="max-w-full h-auto rounded-lg"
                        />
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full"></div>
                      <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/10 rounded-full"></div>
                    </motion.div>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Platforms We Support Section */}
        <section ref={platformsRef} className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isPlatformsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-[#1e2942] mb-6">Financial Platforms We Support</h2>
              <p className="text-lg text-gray-600">
                We have expertise across all major financial platforms, allowing us to recommend and implement the best
                solution for your specific business needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {supportedPlatforms.map((platform, index) => (
                <motion.div
                  key={index}
                  className="bg-[#f8f9fc] p-6 rounded-xl text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isPlatformsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 relative">
                    <Image
                      src={platform.icon || "/placeholder.svg"}
                      alt={platform.name}
                      width={64}
                      height={64}
                      className="w-full h-auto"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#1e2942] mb-2">{platform.name}</h3>
                  <p className="text-sm text-gray-600">{platform.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="max-w-4xl mx-auto mt-16 bg-gradient-to-br from-[#1e2942] to-[#2a3a5f] rounded-2xl p-8 text-white text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isPlatformsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">Not Sure Which Financial Platform Is Right for You?</h3>
              <p className="text-lg mb-6">
                Our financial technology experts can help you evaluate your options and choose the platform that best
                fits your institution&apos;s requirements, budget, and growth plans.
              </p>
              <motion.button
                className="bg-[#ff3b30] hover:bg-[#e62e24] text-white font-medium px-8 py-3 rounded-full inline-flex items-center transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Platform Recommendation <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section ref={benefitsRef} className="w-full py-16 md:py-24 bg-[#f8f9fc]">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-[#1e2942] mb-6">
                Benefits of Our Finance & Banking IT Solutions
              </h2>
              <p className="text-lg text-gray-600">
                Our comprehensive financial technology solutions deliver tangible benefits that drive business growth,
                enhance security, ensure compliance, and improve operational efficiency.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isBenefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="bg-[#ff3b30]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <div className="text-[#ff3b30]">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-[#1e2942] mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section ref={processRef} className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-[#1e2942] mb-6">
                Our Financial Technology Development Process
              </h2>
              <p className="text-lg text-gray-600">
                We follow a structured, collaborative approach to financial technology development that ensures
                security, compliance, and successful outcomes for every project.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col md:flex-row gap-6 mb-12 relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {/* Timeline line */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-10 top-20 bottom-0 w-0.5 bg-gradient-to-b from-[#ff3b30] to-[#ff5c52] hidden md:block"></div>
                  )}

                  {/* Step number and icon */}
                  <div className="flex-shrink-0 z-10">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#ff3b30] to-[#ff5c52] flex items-center justify-center text-white shadow-lg">
                      {step.icon}
                    </div>
                  </div>

                  {/* Step content */}
                  <div className="bg-[#f8f9fc] rounded-2xl p-8 shadow-sm border border-gray-100 flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-bold text-[#ff3b30]">{step.number}</span>
                      <h3 className="text-xl font-bold text-[#1e2942]">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section
          ref={statsRef}
          className="w-full py-16 md:py-24 bg-gradient-to-br from-[#1e2942] to-[#2a3a5f] text-white"
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Financial Technology Success by the Numbers</h2>
              <p className="text-lg text-gray-300">
                Our finance and banking IT solutions deliver measurable results that drive business growth and success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {financeStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <h3 className="text-4xl md:text-5xl font-bold text-[#ff3b30] mb-4">{stat.value}</h3>
                  <p className="text-xl font-semibold mb-2">{stat.label}</p>
                  <p className="text-gray-300 text-sm">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section ref={caseStudiesRef} className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isCaseStudiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-[#1e2942] mb-6">
                Financial Technology Success Stories
              </h2>
              <p className="text-lg text-gray-600">
                Explore how our finance and banking IT solutions have helped institutions like yours achieve remarkable
                results.
              </p>
            </motion.div>

            <CaseStudies caseStudies={financeCaseStudies} />
          </div>
        </section>

        {/* Technologies Section */}
        <section className="w-full py-16 md:py-24 bg-[#f8f9fc]">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-[#1e2942] mb-6">
                Financial Technologies We Work With
              </h2>
              <p className="text-lg text-gray-600">
                We leverage the latest technologies and frameworks to build secure, compliant, and high-performance
                financial solutions.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h3 className="text-xl font-bold text-[#1e2942] mb-6 flex items-center">
                    <Code className="w-6 h-6 mr-2 text-[#ff3b30]" /> Backend Technologies
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">Java, Spring Boot, Hibernate</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">.NET Core, C#, Entity Framework</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">Node.js, Express, NestJS</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">Python, Django, Flask</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">GraphQL, REST APIs</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-xl font-bold text-[#1e2942] mb-6 flex items-center">
                    <Database className="w-6 h-6 mr-2 text-[#ff3b30]" /> Data & Analytics
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">Oracle, SQL Server, PostgreSQL</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">MongoDB, Redis, Elasticsearch</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">Hadoop, Spark, Kafka</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">TensorFlow, PyTorch, scikit-learn</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">Tableau, Power BI, Looker</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-[#1e2942] mb-6 flex items-center">
                    <Server className="w-6 h-6 mr-2 text-[#ff3b30]" /> Security & Infrastructure
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">AWS, Azure, Google Cloud</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">Docker, Kubernetes, Terraform</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">OAuth, OpenID Connect, SAML</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">PKI, HSM, Encryption Technologies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">CI/CD, GitLab, GitHub Actions</span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              <motion.div
                className="mt-12 bg-gradient-to-br from-[#1e2942] to-[#2a3a5f] p-8 rounded-2xl text-white text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold mb-4">Need a Custom Financial Technology Stack?</h3>
                <p className="text-lg mb-6">
                  We tailor our technology choices to your specific business requirements, ensuring the best security,
                  compliance, performance, and scalability for your financial institution.
                </p>
                <motion.button
                  className="bg-[#ff3b30] hover:bg-[#e62e24] text-white font-medium px-8 py-3 rounded-full inline-flex items-center transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discuss Your Technology Needs <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Integration Partners Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-[#1e2942] mb-6">Our Financial Integration Partners</h2>
              <p className="text-lg text-gray-600">
                We integrate with leading financial services and platforms to provide comprehensive solutions for your
                institution.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <motion.div
                  className="bg-[#f8f9fc] p-6 rounded-xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-bold text-[#1e2942] mb-4">Payment Gateways</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Stripe</li>
                    <li>PayPal</li>
                    <li>Adyen</li>
                    <li>Worldpay</li>
                    <li>Braintree</li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-[#f8f9fc] p-6 rounded-xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-bold text-[#1e2942] mb-4">Core Banking Systems</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Temenos</li>
                    <li>Finastra</li>
                    <li>FIS</li>
                    <li>Mambu</li>
                    <li>Fiserv</li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-[#f8f9fc] p-6 rounded-xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-bold text-[#1e2942] mb-4">KYC/AML Providers</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Jumio</li>
                    <li>Onfido</li>
                    <li>ComplyAdvantage</li>
                    <li>Trulioo</li>
                    <li>LexisNexis</li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-[#f8f9fc] p-6 rounded-xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-bold text-[#1e2942] mb-4">Data & Analytics</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Tableau</li>
                    <li>Power BI</li>
                    <li>Looker</li>
                    <li>Snowflake</li>
                    <li>Databricks</li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-[#f8f9fc] p-6 rounded-xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-bold text-[#1e2942] mb-4">Fraud Prevention</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Feedzai</li>
                    <li>NICE Actimize</li>
                    <li>Forter</li>
                    <li>Sift</li>
                    <li>Kount</li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-[#f8f9fc] p-6 rounded-xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-bold text-[#1e2942] mb-4">Wealth Management</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Refinitiv</li>
                    <li>BlackRock Aladdin</li>
                    <li>Morningstar</li>
                    <li>SS&C Advent</li>
                    <li>Envestnet</li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-[#f8f9fc] p-6 rounded-xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-bold text-[#1e2942] mb-4">Regulatory Reporting</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>AxiomSL</li>
                    <li>Wolters Kluwer</li>
                    <li>Moody&apos;s Analytics</li>
                    <li>Bloomberg</li>
                    <li>Confluence</li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-[#f8f9fc] p-6 rounded-xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-bold text-[#1e2942] mb-4">Open Banking</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Plaid</li>
                    <li>Tink</li>
                    <li>TrueLayer</li>
                    <li>Yapily</li>
                    <li>Token</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section ref={faqRef} className="w-full py-16 md:py-24 bg-[#f8f9fc]">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-[#1e2942] mb-6">
                Frequently Asked Questions About Financial IT Solutions
              </h2>
              <p className="text-lg text-gray-600">
                Find answers to common questions about our finance and banking IT services and how we can help your
                institution thrive in the digital age.
              </p>
            </motion.div>

            <FAQ faqs={financeFAQs} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-[#1e2942] to-[#2a3a5f] text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Financial Institution?</h2>
              <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
                Let&apos;s create secure, compliant, and innovative financial technology solutions that drive growth, enhance
                customer experiences, and give you a competitive edge in the digital age.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="#contact"
                  className="bg-[#ff3b30] hover:bg-[#e62e24] text-white font-medium px-12 py-4 rounded-full inline-flex items-center transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get a Free Consultation
                </motion.a>
                <motion.a
                  href="#"
                  className="bg-white/10 hover:bg-white/20 text-white font-medium px-12 py-4 rounded-full inline-flex items-center transition-colors backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Our Case Studies
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" ref={contactRef} className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-[#1e2942] mb-6">
                Let&apos;s Discuss Your Financial Technology Project
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below to schedule a free consultation with one of our financial technology experts.
              </p>
            </motion.div>

            <ContactForm serviceOptions={financeSolutions.map((solution) => solution.title)} />
          </div>
        </section>

      </main>
    </>
  )
}