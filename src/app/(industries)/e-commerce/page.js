"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import {
  ShoppingCart,
  Store,
  CreditCard,
  Truck,
  BarChart3,
  Search,
  Shield,
  Zap,
  Globe,
  Smartphone,
  Database,
  Code,
  Server,
  LineChart,
  Users,
  CheckCircle2,
  ArrowRight,
  Layers,
  Settings,
  PieChart,
  BarChart,
  Gauge,
  Workflow,
} from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CaseStudies from "@/components/case-studies"
import FAQ from "@/components/faq"
import ContactForm from "@/components/contact-form"

// E-commerce Solutions Data
const ecommerceSolutions = [
  {
    id: "custom-development",
    title: "Custom E-commerce Development",
    icon: <Code className="w-6 h-6" />,
    description:
      "Build a tailor-made e-commerce platform that perfectly aligns with your unique business requirements. Our custom development services ensure your online store stands out from the competition with distinctive features and seamless user experiences.",
    features: [
      "Bespoke e-commerce website development",
      "Custom shopping cart and checkout flows",
      "Personalized product catalog management",
      "Custom pricing and promotion engines",
      "Tailored inventory management systems",
      "Unique customer account portals",
    ],
    technologies: ["React", "Node.js", "PHP", "Python", "Java", "MongoDB", "PostgreSQL"],
    image: "/images/custom-ecommerce.png",
    color: "from-blue-500 to-indigo-600",
    lightColor: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    id: "platform-integration",
    title: "E-commerce Platform Integration",
    icon: <Layers className="w-6 h-6" />,
    description:
      "Seamlessly connect your e-commerce platform with essential business systems and third-party services. Our integration expertise ensures data flows smoothly across your entire business ecosystem, eliminating silos and enhancing operational efficiency.",
    features: [
      "ERP system integration",
      "CRM integration for customer data synchronization",
      "Payment gateway integration",
      "Shipping and fulfillment system connections",
      "Inventory management system integration",
      "Marketing automation platform connections",
    ],
    technologies: ["API Development", "Middleware Solutions", "ETL Processes", "Webhooks", "iPaaS"],
    image: "/images/platform-integration.png",
    color: "from-green-500 to-emerald-600",
    lightColor: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    id: "performance-optimization",
    title: "E-commerce Performance Optimization",
    icon: <Gauge className="w-6 h-6" />,
    description:
      "Enhance your e-commerce site's speed, responsiveness, and overall performance to provide exceptional user experiences. Our optimization services help you reduce bounce rates, increase conversions, and improve search engine rankings.",
    features: [
      "Page load speed optimization",
      "Database query optimization",
      "Image and asset optimization",
      "Caching implementation",
      "CDN configuration",
      "Server-side rendering implementation",
    ],
    technologies: ["Google PageSpeed", "Lighthouse", "WebPageTest", "Redis", "Cloudflare", "Varnish"],
    image: "/images/performance-optimization.png",
    color: "from-red-500 to-orange-500",
    lightColor: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    id: "security-solutions",
    title: "E-commerce Security Solutions",
    icon: <Shield className="w-6 h-6" />,
    description:
      "Protect your e-commerce business and customer data with comprehensive security solutions. Our security services safeguard your online store against threats, ensure compliance with regulations, and build customer trust.",
    features: [
      "PCI DSS compliance implementation",
      "Secure payment processing",
      "Data encryption and protection",
      "Fraud detection and prevention",
      "Security audits and vulnerability assessments",
      "DDoS protection and mitigation",
    ],
    technologies: ["SSL/TLS", "Tokenization", "WAF", "2FA", "OWASP", "Penetration Testing"],
    image: "/images/security-solutions.png",
    color: "from-purple-500 to-pink-500",
    lightColor: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    id: "mobile-commerce",
    title: "Mobile Commerce Solutions",
    icon: <Smartphone className="w-6 h-6" />,
    description:
      "Extend your e-commerce presence to mobile devices with responsive designs or dedicated mobile apps. Our mobile commerce solutions ensure your customers enjoy seamless shopping experiences across all devices.",
    features: [
      "Responsive e-commerce website design",
      "Progressive Web App (PWA) development",
      "Native mobile app development",
      "Mobile payment integration",
      "Push notification implementation",
      "Mobile-specific UX optimization",
    ],
    technologies: ["React Native", "Flutter", "PWA", "iOS", "Android", "AMP"],
    image: "/images/mobile-commerce.png",
    color: "from-yellow-500 to-amber-600",
    lightColor: "bg-yellow-50",
    iconColor: "text-yellow-500",
  },
  {
    id: "analytics-insights",
    title: "E-commerce Analytics & Insights",
    icon: <BarChart className="w-6 h-6" />,
    description:
      "Gain valuable insights into your e-commerce performance with advanced analytics solutions. Our data-driven approach helps you understand customer behavior, optimize marketing efforts, and make informed business decisions.",
    features: [
      "E-commerce tracking implementation",
      "Custom dashboard development",
      "Sales and conversion analytics",
      "Customer journey analysis",
      "Product performance insights",
      "Marketing channel attribution",
    ],
    technologies: ["Google Analytics", "Adobe Analytics", "Mixpanel", "Hotjar", "Tableau", "Power BI"],
    image: "/images/analytics-insights.png",
    color: "from-cyan-500 to-blue-500",
    lightColor: "bg-cyan-50",
    iconColor: "text-cyan-500",
  },
]

// Platforms we support
const supportedPlatforms = [
  {
    name: "Shopify",
    icon: "/images/shopify-icon.png",
    description: "Build and customize Shopify stores with advanced features and integrations.",
  },
  {
    name: "Magento",
    icon: "/images/magento-icon.png",
    description: "Leverage the power of Magento for enterprise-grade e-commerce solutions.",
  },
  {
    name: "WooCommerce",
    icon: "/images/woocommerce-icon.png",
    description: "Create flexible WordPress-based online stores with WooCommerce.",
  },
  {
    name: "BigCommerce",
    icon: "/images/bigcommerce-icon.png",
    description: "Develop scalable online stores with BigCommerce's robust features.",
  },
  {
    name: "Salesforce Commerce Cloud",
    icon: "/images/salesforce-icon.png",
    description: "Implement enterprise e-commerce solutions with Salesforce Commerce Cloud.",
  },
  {
    name: "Custom Solutions",
    icon: "/images/custom-icon.png",
    description: "Build bespoke e-commerce platforms tailored to unique business requirements.",
  },
]

// Benefits data
const benefits = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Increased Conversion Rates",
    description:
      "Our optimized e-commerce solutions are designed to convert more visitors into customers through streamlined checkout processes, personalized experiences, and performance improvements.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Expanded Market Reach",
    description:
      "Reach customers globally with multi-language, multi-currency, and localized shopping experiences that break down geographical barriers.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enhanced Security",
    description:
      "Protect your business and customer data with robust security measures that build trust and ensure compliance with industry regulations.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile-First Experiences",
    description:
      "Capture the growing mobile commerce market with responsive designs and native apps that provide seamless shopping experiences on any device.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Streamlined Operations",
    description:
      "Automate and integrate your e-commerce platform with business systems to reduce manual work, minimize errors, and improve efficiency.",
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Data-Driven Decisions",
    description:
      "Leverage advanced analytics to understand customer behavior, optimize product offerings, and make informed business decisions.",
  },
]

// Process steps
const processSteps = [
  {
    number: "01",
    title: "Discovery & Analysis",
    description:
      "We begin by understanding your business goals, target audience, and current e-commerce capabilities. We analyze your market, competitors, and identify opportunities for improvement.",
    icon: <Search className="w-8 h-8" />,
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description:
      "Based on our findings, we develop a comprehensive e-commerce strategy that aligns with your business objectives. We create detailed project plans, timelines, and resource allocations.",
    icon: <PieChart className="w-8 h-8" />,
  },
  {
    number: "03",
    title: "Design & Prototyping",
    description:
      "Our designers create intuitive, conversion-focused user interfaces and experiences. We develop interactive prototypes to visualize the solution before development begins.",
    icon: <Layers className="w-8 h-8" />,
  },
  {
    number: "04",
    title: "Development & Integration",
    description:
      "Our development team brings the designs to life, building robust e-commerce functionality and integrating with necessary systems and services.",
    icon: <Code className="w-8 h-8" />,
  },
  {
    number: "05",
    title: "Testing & Quality Assurance",
    description:
      "We rigorously test all aspects of your e-commerce solution to ensure it works flawlessly across devices, browsers, and user scenarios.",
    icon: <CheckCircle2 className="w-8 h-8" />,
  },
  {
    number: "06",
    title: "Deployment & Launch",
    description:
      "We handle the deployment process, ensuring your e-commerce solution launches smoothly and securely on your chosen hosting environment.",
    icon: <Workflow className="w-8 h-8" />,
  },
  {
    number: "07",
    title: "Ongoing Support & Optimization",
    description:
      "Our relationship continues after launch with ongoing support, maintenance, and performance optimization services to ensure your e-commerce success.",
    icon: <Settings className="w-8 h-8" />,
  },
]

// E-commerce statistics
const ecommerceStats = [
  {
    value: "22%",
    label: "Average Conversion Rate Increase",
    description: "Our clients typically see a significant boost in their conversion rates after implementation.",
  },
  {
    value: "45%",
    label: "Mobile Traffic Growth",
    description: "Mobile-optimized e-commerce solutions drive substantial increases in mobile user engagement.",
  },
  {
    value: "3.2x",
    label: "ROI on E-commerce Investment",
    description: "Our clients experience strong returns on their e-commerce technology investments.",
  },
  {
    value: "99.9%",
    label: "Platform Uptime",
    description: "Our solutions are built for reliability, ensuring your store is always available to customers.",
  },
]

// E-commerce FAQ data
const ecommerceFAQs = [
  {
    question: "How long does it take to develop a custom e-commerce solution?",
    answer:
      "The timeline for developing a custom e-commerce solution varies depending on the complexity and scope of the project. A basic e-commerce website might take 2-3 months, while a complex, feature-rich platform could take 4-6 months or more. During our initial consultation, we'll provide a more accurate timeline based on your specific requirements and business needs.",
  },
  {
    question: "Can you migrate my existing online store to a new platform?",
    answer:
      "Yes, we specialize in e-commerce platform migrations. Our team has extensive experience migrating stores between different platforms while preserving product data, customer information, order history, SEO rankings, and other critical elements. We follow a structured migration process to minimize disruption to your business and ensure a smooth transition to the new platform.",
  },
  {
    question: "How do you ensure the security of e-commerce websites?",
    answer:
      "We implement multiple security measures including SSL certificates, PCI DSS compliance, secure payment processing, data encryption, regular security audits, and protection against common vulnerabilities. We also stay updated on the latest security threats and best practices to ensure your e-commerce platform remains secure against evolving risks.",
  },
  {
    question: "What payment gateways do you integrate with?",
    answer:
      "We integrate with all major payment gateways including Stripe, PayPal, Square, Authorize.net, Braintree, Amazon Pay, Apple Pay, Google Pay, and many others. We can also integrate with region-specific payment providers and alternative payment methods based on your target market and business requirements.",
  },
  {
    question: "Can you help with SEO for my e-commerce store?",
    answer:
      "Absolutely. We implement e-commerce SEO best practices including optimized product pages, proper URL structures, schema markup, fast loading speeds, mobile optimization, and more. We can also provide ongoing SEO services to improve your store's visibility in search engines and drive organic traffic.",
  },
  {
    question: "Do you provide ongoing maintenance and support after launch?",
    answer:
      "Yes, we offer various maintenance and support packages to ensure your e-commerce platform remains secure, up-to-date, and performing optimally. These packages can include regular updates, security monitoring, performance optimization, content updates, and technical support with different response time options based on your needs.",
  },
  {
    question: "How do you handle scalability for growing e-commerce businesses?",
    answer:
      "We design e-commerce solutions with scalability in mind from the beginning. This includes using cloud infrastructure that can scale with traffic demands, implementing efficient database designs, utilizing caching strategies, and creating modular architectures that can grow with your business. We also conduct regular performance testing to identify and address potential bottlenecks before they impact your customers.",
  },
]

export default function EcommerceSolutionsPage() {
  const [activeSolution, setActiveSolution] = useState(ecommerceSolutions[0].id)

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

  // Case studies data for e-commerce
  const ecommerceCaseStudies = [
    {
      title: "Luxury Fashion Retailer Platform Overhaul",
      industry: "Fashion Retail",
      description:
        "Redesigned and rebuilt a high-end fashion retailer's e-commerce platform, implementing advanced product visualization, personalized recommendations, and seamless omnichannel experiences. The new platform resulted in a 78% increase in mobile conversions and 45% higher average order value.",
      metrics: [
        { label: "Mobile Conversion Increase", value: "78%" },
        { label: "Average Order Value Growth", value: "45%" },
        { label: "Page Load Speed Improvement", value: "65%" },
      ],
      image: "/images/case-study-fashion.png",
    },
    {
      title: "B2B Wholesale Platform Integration",
      industry: "Manufacturing",
      description:
        "Developed a comprehensive B2B e-commerce solution for a manufacturing company, integrating with their ERP, CRM, and inventory management systems. The platform streamlined ordering processes for distributors and reduced order processing time by 85%, while increasing order accuracy to 99.8%.",
      metrics: [
        { label: "Order Processing Time Reduction", value: "85%" },
        { label: "Order Accuracy", value: "99.8%" },
        { label: "Distributor Adoption Rate", value: "94%" },
      ],
      image: "/images/case-study-b2b.png",
    },
    {
      title: "Multi-vendor Marketplace Launch",
      industry: "Retail",
      description:
        "Built a scalable multi-vendor marketplace for a retail company, enabling them to expand their product offerings without inventory investment. The platform included vendor onboarding, commission management, and integrated fulfillment. Within 6 months, the marketplace grew to 150+ vendors and increased revenue by 120%.",
      metrics: [
        { label: "Vendor Growth", value: "150+" },
        { label: "Revenue Increase", value: "120%" },
        { label: "Product Catalog Expansion", value: "10x" },
      ],
      image: "/images/case-study-marketplace.png",
    },
  ]

  // Counter animation for stats section
  const [counters, setCounters] = useState({
    conversionRate: 0,
    mobileTraffic: 0,
    roi: 0,
    uptime: 0,
  })

  return (
    <>
      <main className="pt-20">
        {/* Hero Section with Animated Elements */}
        <section
          ref={heroRef}
          className="w-full py-16 md:py-32 bg-gradient-to-br from-[#1e2942] via-[#2a3a5f] to-[#364a7c] text-white relative overflow-hidden"
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
                <span className="text-white">Transform Your</span>
                <br />
                <span className="bg-gradient-to-r from-[#ff3b30] to-[#ff5c52] bg-clip-text text-transparent">
                  E-commerce Business
                </span>
                <br />
                <span className="text-white">With Cutting-Edge IT Solutions</span>
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                From custom development to platform integration, performance optimization, and security solutions, we
                provide comprehensive IT services to help your e-commerce business thrive in the digital marketplace.
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

          {/* E-commerce icons overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/30 to-transparent py-6">
            <div className="container mx-auto px-4">
              <div className="flex justify-center gap-8 md:gap-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-center"
                >
                  <ShoppingCart className="w-8 h-8 mx-auto mb-2 text-[#ff3b30]" />
                  <p className="text-sm text-gray-300">Online Stores</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-center"
                >
                  <CreditCard className="w-8 h-8 mx-auto mb-2 text-[#ff3b30]" />
                  <p className="text-sm text-gray-300">Payment Systems</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-center hidden md:block"
                >
                  <Truck className="w-8 h-8 mx-auto mb-2 text-[#ff3b30]" />
                  <p className="text-sm text-gray-300">Fulfillment</p>
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
                  <Store className="w-8 h-8 mx-auto mb-2 text-[#ff3b30]" />
                  <p className="text-sm text-gray-300">Omnichannel</p>
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
                Comprehensive E-commerce IT Solutions
              </h2>
              <p className="text-lg text-gray-600">
                In today's competitive digital marketplace, your e-commerce platform needs to be more than just a
                website. It needs to be a powerful sales engine that delivers exceptional customer experiences,
                integrates seamlessly with your business systems, and scales with your growth.
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
                    <Store className="w-6 h-6 text-[#ff3b30]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e2942] mb-2">End-to-End Solutions</h3>
                  <p className="text-gray-600">
                    From strategy and design to development, integration, and ongoing optimization
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
                    <Users className="w-6 h-6 text-[#ff3b30]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e2942] mb-2">Expert Team</h3>
                  <p className="text-gray-600">
                    Specialized e-commerce developers, designers, and strategists with proven experience
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
                    <Zap className="w-6 h-6 text-[#ff3b30]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e2942] mb-2">Results-Driven</h3>
                  <p className="text-gray-600">
                    Focus on measurable outcomes like conversion rates, performance, and ROI
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
                      Why Your E-commerce Business Needs Specialized IT Solutions
                    </h3>
                    <p className="text-gray-600 mb-6">
                      E-commerce businesses face unique technical challenges that require specialized solutions. From
                      handling high-volume transactions and managing complex product catalogs to ensuring security and
                      integrating with multiple systems, e-commerce platforms demand expertise beyond general web
                      development.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                        </span>
                        <span className="text-gray-700">
                          <strong>Complex Integrations:</strong> Connect with payment gateways, shipping providers, ERP
                          systems, and more
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                        </span>
                        <span className="text-gray-700">
                          <strong>Performance Demands:</strong> Handle traffic spikes and maintain fast load times
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                        </span>
                        <span className="text-gray-700">
                          <strong>Security Requirements:</strong> Protect customer data and comply with regulations
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                        </span>
                        <span className="text-gray-700">
                          <strong>Scalability Needs:</strong> Grow your platform alongside your business
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
                        src="/images/ecommerce-overview.png"
                        alt="E-commerce IT Solutions"
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
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our E-commerce IT Solutions</h2>
              <p className="text-lg text-gray-600">
                We offer a comprehensive suite of e-commerce IT solutions designed to address every aspect of your
                online business, from development and integration to optimization and security.
              </p>
            </motion.div>

            <Tabs defaultValue={ecommerceSolutions[0].id} className="max-w-6xl mx-auto">
              <motion.div
              className="bg-[#fff5f5] rounded-full p-2 flex flex-row justify-center "
                initial={{ opacity: 0, y: 20 }}
                animate={isSolutionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <TabsList className="w-full h-full flex md:flex-row flex-wrap justify-center gap-2 bg-[#fff5f5] rounded-full">
                  {ecommerceSolutions.map((solution, index) => (
                    <TabsTrigger
                      key={solution.id}
                      value={solution.id}
                      className="px-6 py-3 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:text-black data-[state=active]:shadow-md"
                      style={{
                        backgroundImage: `var(--state-active, none)`,
                        "--state-active": `linear-gradient(to right, ${
                          solution.id === "custom-development"
                            ? "var(--blue-500), var(--indigo-600)"
                            : solution.id === "platform-integration"
                              ? "var(--green-500), var(--emerald-600)"
                              : solution.id === "performance-optimization"
                                ? "var(--red-500), var(--orange-500)"
                                : solution.id === "security-solutions"
                                  ? "var(--purple-500), var(--pink-500)"
                                  : solution.id === "mobile-commerce"
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

              {ecommerceSolutions.map((solution) => (
                <TabsContent key={solution.id} value={solution.id} className="mt-2 md:mt-4 mx-4">
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
                            solution.id === "custom-development"
                              ? "var(--blue-500), var(--indigo-600)"
                              : solution.id === "platform-integration"
                                ? "var(--green-500), var(--emerald-600)"
                                : solution.id === "performance-optimization"
                                  ? "var(--red-500), var(--orange-500)"
                                  : solution.id === "security-solutions"
                                    ? "var(--purple-500), var(--pink-500)"
                                    : solution.id === "mobile-commerce"
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
                          src={solution.image || "/placeholder.svg?height=400&width=400"}
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
              <h2 className="text-3xl md:text-5xl font-bold text-[#1e2942] mb-6">E-commerce Platforms We Support</h2>
              <p className="text-lg text-gray-600">
                We have expertise across all major e-commerce platforms, allowing us to recommend and implement the best
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
                      src={platform.icon || "/placeholder.svg?height=64&width=64"}
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
              <h3 className="text-2xl font-bold mb-4">Not Sure Which Platform Is Right for You?</h3>
              <p className="text-lg mb-6">
                Our e-commerce experts can help you evaluate your options and choose the platform that best fits your
                business requirements, budget, and growth plans.
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
                Benefits of Our E-commerce IT Solutions
              </h2>
              <p className="text-lg text-gray-600">
                Our comprehensive e-commerce IT solutions deliver tangible benefits that drive business growth, enhance
                customer experiences, and improve operational efficiency.
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
              <h2 className="text-3xl md:text-5xl font-bold text-[#1e2942] mb-6">Our E-commerce Development Process</h2>
              <p className="text-lg text-gray-600">
                We follow a structured, collaborative approach to e-commerce development that ensures quality,
                transparency, and successful outcomes for every project.
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6">E-commerce Success by the Numbers</h2>
              <p className="text-lg text-gray-300">
                Our e-commerce IT solutions deliver measurable results that drive business growth and success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {ecommerceStats.map((stat, index) => (
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
              <h2 className="text-3xl md:text-5xl font-bold text-[#1e2942] mb-6">E-commerce Success Stories</h2>
              <p className="text-lg text-gray-600">
                Explore how our e-commerce IT solutions have helped businesses like yours achieve remarkable results.
              </p>
            </motion.div>

            <CaseStudies caseStudies={ecommerceCaseStudies} />
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
                E-commerce Technologies We Work With
              </h2>
              <p className="text-lg text-gray-600">
                We leverage the latest technologies and frameworks to build modern, scalable, and high-performance
                e-commerce solutions.
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
                    <Code className="w-6 h-6 mr-2 text-[#ff3b30]" /> Frontend Technologies
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">React, Vue.js, Angular</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">Next.js, Nuxt.js, Gatsby</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">Progressive Web Apps (PWA)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">Tailwind CSS, Material UI, Bootstrap</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">TypeScript, JavaScript</span>
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
                    <Server className="w-6 h-6 mr-2 text-[#ff3b30]" /> Backend Technologies
                  </h3>
                  <ul className="space-y-3">
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
                      <span className="text-gray-700">PHP, Laravel, Symfony</span>
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
                      <span className="text-gray-700">Java, Spring Boot</span>
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
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-[#1e2942] mb-6 flex items-center">
                    <Database className="w-6 h-6 mr-2 text-[#ff3b30]" /> Database & Infrastructure
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">MySQL, PostgreSQL, MongoDB</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">Redis, Elasticsearch</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">AWS, Google Cloud, Azure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">Docker, Kubernetes</span>
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
                <h3 className="text-2xl font-bold mb-4">Need a Custom Technology Stack?</h3>
                <p className="text-lg mb-6">
                  We tailor our technology choices to your specific business requirements, ensuring the best
                  performance, scalability, and maintainability for your e-commerce platform.
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
              <h2 className="text-3xl md:text-5xl font-bold text-[#1e2942] mb-6">Our Integration Partners</h2>
              <p className="text-lg text-gray-600">
                We integrate with leading e-commerce services and platforms to provide comprehensive solutions for your
                business.
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
                    <li>Square</li>
                    <li>Authorize.net</li>
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
                  <h3 className="text-lg font-bold text-[#1e2942] mb-4">Shipping & Fulfillment</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>ShipStation</li>
                    <li>ShipBob</li>
                    <li>FedEx</li>
                    <li>UPS</li>
                    <li>USPS</li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-[#f8f9fc] p-6 rounded-xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-bold text-[#1e2942] mb-4">ERP Systems</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>SAP</li>
                    <li>Oracle NetSuite</li>
                    <li>Microsoft Dynamics</li>
                    <li>Odoo</li>
                    <li>Epicor</li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-[#f8f9fc] p-6 rounded-xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-bold text-[#1e2942] mb-4">Marketing Tools</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Mailchimp</li>
                    <li>HubSpot</li>
                    <li>Klaviyo</li>
                    <li>Google Analytics</li>
                    <li>Facebook Pixel</li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-[#f8f9fc] p-6 rounded-xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-bold text-[#1e2942] mb-4">CRM Systems</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Salesforce</li>
                    <li>Zoho CRM</li>
                    <li>HubSpot CRM</li>
                    <li>Microsoft Dynamics</li>
                    <li>Zendesk</li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-[#f8f9fc] p-6 rounded-xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-bold text-[#1e2942] mb-4">Inventory Management</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>TradeGecko</li>
                    <li>Cin7</li>
                    <li>Fishbowl</li>
                    <li>Ordoro</li>
                    <li>Stitch Labs</li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-[#f8f9fc] p-6 rounded-xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-bold text-[#1e2942] mb-4">Accounting Software</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>QuickBooks</li>
                    <li>Xero</li>
                    <li>FreshBooks</li>
                    <li>Sage</li>
                    <li>Wave</li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-[#f8f9fc] p-6 rounded-xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-bold text-[#1e2942] mb-4">Customer Support</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Zendesk</li>
                    <li>Intercom</li>
                    <li>Freshdesk</li>
                    <li>Help Scout</li>
                    <li>Gorgias</li>
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
                Frequently Asked Questions About E-commerce IT Solutions
              </h2>
              <p className="text-lg text-gray-600">
                Find answers to common questions about our e-commerce IT services and how we can help your business grow
                online.
              </p>
            </motion.div>

            <FAQ faqs={ecommerceFAQs} />
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your E-commerce Business?</h2>
              <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
                Let's create an e-commerce solution that drives growth, enhances customer experiences, and gives you a
                competitive edge in the digital marketplace.
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
                Let's Discuss Your E-commerce Project
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below to schedule a free consultation with one of our e-commerce experts.
              </p>
            </motion.div>

            <ContactForm serviceOptions={ecommerceSolutions.map((solution) => solution.title)} />
          </div>
        </section>

      </main>
    </>
  )
}