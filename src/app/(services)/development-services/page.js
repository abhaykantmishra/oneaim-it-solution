"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import {
  Globe,
  Code,
  Paintbrush,
  ShoppingCart,
  Share2,
  Layout,
  Database,
  Check,
  Zap,
  Clock,
  Users,
  Layers,
  Smartphone,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Send,
  ChevronDown,
  MonitorSmartphone,
  Palette,
  LineChart,
  Rocket,
  Laptop,
} from "lucide-react"
import FAQ from "@/components/faq"
import ContactForm from "@/components/contact-form"
import { SpecialButton } from "@/components/ui/special-button"

// Web services data
const services = [
  {
    id: "web-app-development",
    title: "Web App Development",
    icon: <Globe className="w-6 h-6" />,
    description:
      "We build powerful, scalable web applications that solve complex business problems. Our web apps are designed to deliver exceptional user experiences while meeting your specific business requirements.",
    features: [
      "Custom web application development tailored to your needs",
      "Progressive Web Apps (PWAs) for cross-platform functionality",
      "Real-time applications with WebSocket integration",
      "Single Page Applications (SPAs) for seamless user experiences",
      "Enterprise-grade web portals and dashboards",
      "Cloud-based web applications with scalable architecture",
    ],
    // image: "/images/web-app-development.png",
  },
  {
    id: "custom-website-development",
    title: "Custom Website Development",
    icon: <Code className="w-6 h-6" />,
    description:
      "We create custom websites that stand out from templates, perfectly aligned with your brand identity and business goals. Our websites are built with clean code, optimized for performance, and designed to convert visitors into customers.",
    features: [
      "Responsive design that works flawlessly across all devices",
      "SEO-friendly architecture and semantic markup",
      "Fast loading speeds and optimized performance",
      "Content Management Systems for easy updates",
      "Custom animations and interactive elements",
      "Accessibility compliance (WCAG standards)",
    ],
    // image: "/images/custom-website-development.png",
  },
  {
    id: "ui-ux-designing",
    title: "UI & UX Designing",
    icon: <Paintbrush className="w-6 h-6" />,
    description:
      "Our UI/UX design services focus on creating intuitive, engaging interfaces that delight users. We combine aesthetics with functionality to design digital experiences that are both beautiful and easy to use.",
    features: [
      "User research and persona development",
      "Information architecture and user flow mapping",
      "Wireframing and interactive prototyping",
      "Visual design and UI component systems",
      "Usability testing and iterative improvements",
      "Design systems for consistent brand experience",
    ],
    // image: "/images/ui-ux-designing.png",
  },
  {
    id: "ecommerce-development",
    title: "E-Commerce Development",
    icon: <ShoppingCart className="w-6 h-6" />,
    description:
      "We build robust e-commerce solutions that drive sales and provide seamless shopping experiences. Our e-commerce platforms are secure, scalable, and optimized for conversions.",
    features: [
      "Custom e-commerce website development",
      "Shopping cart and checkout optimization",
      "Payment gateway integration and security",
      "Inventory and order management systems",
      "Product catalog and search functionality",
      "Mobile-optimized shopping experiences",
    ],
    // image: "/images/ecommerce-development.png",
  },
  {
    id: "api-development",
    title: "API Development & Integration",
    icon: <Share2 className="w-6 h-6" />,
    description:
      "We develop robust APIs that connect systems and enable seamless data exchange. Our API solutions are secure, well-documented, and built to scale with your business needs.",
    features: [
      "RESTful and GraphQL API development",
      "Third-party API integration services",
      "API gateway implementation and management",
      "Microservices architecture design",
      "API documentation and developer resources",
      "API security and authentication protocols",
    ],
    // image: "/images/api-development.png",
  },
  {
    id: "frontend-development",
    title: "Front-End Development",
    icon: <Layout className="w-6 h-6" />,
    description:
      "Our front-end development services focus on creating responsive, interactive user interfaces that engage your audience. We use modern frameworks and best practices to deliver exceptional front-end experiences.",
    features: [
      "Modern JavaScript framework development (React, Vue, Angular)",
      "Responsive and adaptive layouts",
      "Cross-browser compatibility and testing",
      "Performance optimization and lazy loading",
      "State management and data flow architecture",
      "Accessibility implementation and testing",
    ],
    // image: "/images/frontend-development.png",
  },
  {
    id: "backend-development",
    title: "Back-End Development",
    icon: <Database className="w-6 h-6" />,
    description:
      "We build robust back-end systems that power your applications with reliability and performance. Our back-end solutions are secure, scalable, and designed for long-term maintainability.",
    features: [
      "Server-side application development",
      "Database design and optimization",
      "Authentication and authorization systems",
      "API development and integration",
      "Cloud infrastructure setup and management",
      "Performance monitoring and scaling solutions",
    ],
    // image: "/images/backend-development.png",
  },
]

// Benefits data
const benefits = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Performance Optimized",
    description:
      "Our web solutions are built with performance in mind, ensuring fast loading times and smooth user experiences across all devices and connection speeds.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile-First Approach",
    description:
      "We design and develop with a mobile-first mindset, ensuring your web presence looks and functions perfectly on smartphones, tablets, and desktops.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Scalable Architecture",
    description:
      "Our solutions are built on scalable architectures that grow with your business, handling increased traffic and functionality without requiring a complete rebuild.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Timely Delivery",
    description:
      "We understand the importance of deadlines and deliver projects on time without compromising on quality or functionality.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Collaborative Process",
    description:
      "We work closely with you throughout the development process, ensuring your vision is understood and implemented at every stage.",
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Results-Driven",
    description:
      "Our web solutions are designed to achieve your business goals, whether that's increasing conversions, improving user engagement, or streamlining operations.",
  },
]

// Process steps
const processSteps = [
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Discovery & Planning",
    description:
      "We begin by understanding your business goals, target audience, and project requirements to create a comprehensive development strategy.",
  },
  {
    icon: <Paintbrush className="w-8 h-8" />,
    title: "Design & Prototyping",
    description:
      "Our designers create wireframes and interactive prototypes to visualize the user experience and interface before development begins.",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Development",
    description:
      "Our development team brings the designs to life, writing clean, efficient code and implementing all required functionality.",
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Testing & QA",
    description:
      "We rigorously test all aspects of your web solution to ensure it works flawlessly across devices, browsers, and user scenarios.",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Deployment",
    description:
      "We handle the deployment process, ensuring your web solution launches smoothly and securely on your chosen hosting environment.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Support & Optimization",
    description:
      "Our relationship continues after launch with ongoing support, maintenance, and performance optimization services.",
  },
]

// Technologies we use
const technologies = [
  {
    category: "Front-End",
    items: ["React", "Vue.js", "Angular", "Next.js", "TypeScript", "Tailwind CSS", "SASS/SCSS"],
  },
  {
    category: "Back-End",
    items: ["Node.js", "Python", "PHP", "Java", "Ruby on Rails", ".NET Core", "GraphQL"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "Elasticsearch"],
  },
  {
    category: "CMS",
    items: ["WordPress", "Shopify", "Contentful", "Strapi", "Sanity.io"],
  },
  {
    category: "DevOps",
    items: ["Docker", "Kubernetes", "AWS", "Google Cloud", "Azure", "CI/CD", "Git"],
  },
]

// Case studies data
const caseStudies = [
  {
    title: "E-commerce Platform Redesign",
    industry: "Retail",
    description:
      "Redesigned and rebuilt an e-commerce platform resulting in a 45% increase in conversion rate and 30% reduction in cart abandonment. The new mobile-first approach led to a 60% increase in mobile sales.",
    // image: "/images/case-study-web-1.png",
  },
  {
    title: "SaaS Dashboard Application",
    industry: "Technology",
    description:
      "Developed a complex SaaS dashboard application with real-time data visualization, user management, and subscription handling. The intuitive UI design reduced onboarding time by 50%.",
    // image: "/images/case-study-web-2.png",
  },
  {
    title: "Healthcare Patient Portal",
    industry: "Healthcare",
    description:
      "Built a secure patient portal allowing users to schedule appointments, access medical records, and communicate with healthcare providers. The solution improved patient engagement by 65%.",
    // image: "/images/case-study-web-3.png",
  },
]

// FAQ data
const webFAQs = [
  {
    question: "How long does it typically take to develop a website or web application?",
    answer:
      "The timeline varies depending on the complexity of the project. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. During our initial consultation, we'll provide a more accurate timeline based on your specific requirements.",
  },
  {
    question: "Do you provide ongoing maintenance and support after the website is launched?",
    answer:
      "Yes, we offer various maintenance and support packages to ensure your website remains secure, up-to-date, and performing optimally. These packages can include regular updates, security monitoring, performance optimization, content updates, and technical support.",
  },
  {
    question: "How do you ensure the security of websites and web applications?",
    answer:
      "We implement multiple security measures including SSL certificates, secure authentication systems, data encryption, regular security audits, and protection against common vulnerabilities like SQL injection and XSS attacks. We also keep all software and plugins updated to patch security vulnerabilities.",
  },
  {
    question: "Can you redesign my existing website rather than building from scratch?",
    answer:
      "Absolutely. We offer website redesign services that can refresh your visual identity, improve user experience, enhance performance, and add new functionality while preserving valuable content and SEO equity from your existing site.",
  },
  {
    question: "How do you approach responsive design for different devices?",
    answer:
      "We follow a mobile-first approach, designing and developing websites that adapt seamlessly to different screen sizes and devices. We test extensively on various devices, browsers, and screen resolutions to ensure a consistent experience for all users.",
  },
  {
    question: "What content management systems (CMS) do you work with?",
    answer:
      "We work with various CMS platforms including WordPress, Shopify, Contentful, Strapi, and Sanity.io. We can recommend the best CMS for your specific needs or build a custom CMS solution if required.",
  },
  {
    question: "Do you help with SEO for new websites?",
    answer:
      "Yes, we implement SEO best practices during the development process, including proper site structure, semantic HTML, optimized page speed, mobile-friendliness, and schema markup. We can also provide more comprehensive SEO services including keyword research, content optimization, and ongoing SEO strategy.",
  },
]

export default function WebServicesPage() {
  const [activeService, setActiveService] = useState(services[0].id)
  const [activeTab, setActiveTab] = useState("web-app-development")
  const [openFAQIndex, setOpenFAQIndex] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    service: "Web App Development",
  })

  const currentService = services.find((service) => service.id === activeService)

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
      message: "",
      service: "Web App Development",
    })
  }

  const toggleQuestion = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index)
  }

  return (
    <>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-[#1e2942] text-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="max-w-5xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 leading-tight">
                <span className="text-white">Transforming Ideas into</span>
                <br />
                <span className="bg-gradient-to-r from-[#ff3b30] to-[#ff5c52] bg-clip-text text-transparent">
                  Powerful Web Solutions
                </span>
                <br />
                <span className="text-white">For Modern Businesses</span>
              </h1>
              <p className="text-lg md:text-xl text-center text-gray-300 max-w-3xl mx-auto">
                From stunning websites to complex web applications, we deliver end-to-end web development services that
                drive growth and transform user experiences.
              </p>
            </motion.div>

            <motion.div
              className="flex justify-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SpecialButton isTransparent={true} textClassName={"text-lg"}>Start your Web Project</SpecialButton>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <motion.div
                className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <MonitorSmartphone className="w-8 h-8 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Responsive Design</h3>
                <p className="text-gray-300 text-sm">Perfect on every device</p>
              </motion.div>

              <motion.div
                className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Zap className="w-8 h-8 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Performance</h3>
                <p className="text-gray-300 text-sm">Lightning-fast load times</p>
              </motion.div>

              <motion.div
                className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Palette className="w-8 h-8 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Beautiful UI</h3>
                <p className="text-gray-300 text-sm">Stunning visual experiences</p>
              </motion.div>

              <motion.div
                className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Code className="w-8 h-8 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Clean Code</h3>
                <p className="text-gray-300 text-sm">Maintainable & scalable</p>
              </motion.div>
            </div>
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

        {/* Services Overview Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e2942] mb-6">
                Comprehensive Web Development Services
              </h2>
              <p className="text-lg text-gray-600">
                From concept to deployment, we offer end-to-end web development services designed to create exceptional
                digital experiences that drive business growth and user engagement.
              </p>
            </motion.div>

            {/* Tabs - Styled like the screenshot */}
            <div className="max-w-5xl mx-auto mb-16">
              <motion.div
                className="bg-[#fff5f5] rounded-full p-2 flex flex-wrap justify-center"
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
                    {service.title}
                  </motion.button>
                ))}
              </motion.div>
            </div>

            {/* Service Content Based on Active Tab */}
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

                          {/* <motion.button
                            className="bg-[#ff3b30] text-white px-8 py-3 rounded-full font-medium hover:bg-[#e62e24] transition-colors"
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(255, 59, 48, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Learn More About {service.title}
                          </motion.button> */}
                          <SpecialButton textClassName={"text-base"}>
                            Learn More About {service.title}
                          </SpecialButton>
                        </motion.div>

                        <motion.div
                          className="relative rounded-2xl overflow-hidden shadow-lg"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <div className="bg-gradient-to-br from-[#1e2942] to-[#2a3a5f] p-8 flex items-center justify-center h-full min-h-[400px]">
                            <Image
                              src={service.image || "/placeholder.svg"}
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

        {/* Our Process Section */}
        <section className="w-full py-16 md:py-24 bg-[#f8f9fc]">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e2942] mb-6">Our Web Development Process</h2>
              <p className="text-lg text-gray-600">
                We follow a structured, collaborative approach to web development that ensures quality, transparency,
                and successful outcomes for every project.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-6xl mx-auto">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-400 h-full">
                    <div className="absolute -top-6 left-8 bg-[#1e2942] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                      {index + 1}
                    </div>
                    <div className="pt-6">
                      <div className="mb-4 text-[#ff3b30]">{step.icon}</div>
                      <h3 className="text-xl font-bold text-[#1e2942] mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e2942] mb-6">Technologies We Use</h2>
              <p className="text-lg text-gray-600">
                We leverage the latest technologies and frameworks to build modern, scalable, and high-performance web
                solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-white to-[#f8f9fc] p-6 rounded-2xl shadow-sm border border-[#ff3b30]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <h3 className="text-xl font-bold text-[#1e2942] mb-4">{tech.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200 text-[#1e2942]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-16 md:py-24 bg-[#f8f9fc]">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e2942] mb-6">Why Choose Our Web Services</h2>
              <p className="text-lg text-gray-600">
                Our web development approach is designed to deliver exceptional results that drive business growth and
                user satisfaction.
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

        {/* Featured Work Section */}
        <section className="w-full py-16 md:py-24 bg-[#1e2942] text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Work</h2>
              <p className="text-lg text-gray-300">
                Explore some of our recent web development projects and the results we&apos;ve achieved for our clients.
              </p>
            </motion.div>

            <div className="relative max-w-6xl mx-auto">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  className={`bg-white text-[#1e2942] p-8 rounded-2xl shadow-lg mb-8 ${
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
                          src={study.image || "/placeholder.svg"}
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
                        View case study <ArrowRight className="w-4 h-4 ml-2" />
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

        {/* Devices Showcase Section */}
        <section className="w-full py-16 md:py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e2942] mb-6">Responsive Across All Devices</h2>
              <p className="text-lg text-gray-600">
                Our web solutions are meticulously designed and developed to provide a seamless experience across all
                devices and screen sizes.
              </p>
            </motion.div>

            <motion.div
              className="relative max-w-6xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="hidden md:block"
                >
                  <div className="bg-[#f8f9fc] p-4 rounded-3xl shadow-lg border border-[#ff3b30]">
                    <div className="bg-white rounded-2xl overflow-hidden">
                      <Smartphone className="w-full h-auto text-gray-300" />
                      <div className="p-4">
                        <div className="h-4 bg-gray-200 rounded-full w-3/4 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded-full w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="md:transform md:scale-125 z-10"
                >
                  <div className="bg-[#f8f9fc] p-4 rounded-3xl shadow-lg border border-blue-400">
                    <div className="bg-white rounded-2xl overflow-hidden">
                      <Laptop className="w-full h-auto text-gray-300" />
                      <div className="p-4">
                        <div className="h-5 bg-gray-200 rounded-full w-3/4 mb-3"></div>
                        <div className="h-4 bg-gray-200 rounded-full w-full mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded-full w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="hidden md:block"
                >
                  <div className="bg-[#f8f9fc] p-4 rounded-3xl shadow-lg border border-[#ff3b30]">
                    <div className="bg-white rounded-2xl overflow-hidden">
                      <MonitorSmartphone className="w-full h-auto text-gray-300" />
                      <div className="p-4">
                        <div className="h-4 bg-gray-200 rounded-full w-1/2 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded-full w-3/4"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-10 left-1/4 w-64 h-4 bg-gradient-to-r from-transparent via-[#ff3b30]/20 to-transparent rounded-full blur-md"></div>
              <div className="absolute -bottom-10 right-1/4 w-64 h-4 bg-gradient-to-r from-transparent via-[#3b82f6]/20 to-transparent rounded-full blur-md"></div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-16 md:py-24 bg-[#f8f9fc]">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-[#1e2942] mb-6">
                Frequently Asked Questions About Web Solutions
              </h2>
              <p className="text-lg text-gray-600">
                Find answers to common questions about our cloud services and how we can help your business develop & scale
                online.
              </p>
            </motion.div>

            <FAQ faqs={webFAQs} />
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="w-full py-12 md:py-20 font-serif">
          <div className="max-w-3xl mx-auto px-4 py-5">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-4xl font-medium  text-[#1e2942] mb-4">
                Let&apos;s Discuss Your Project
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below to schedule a free consultation with one of our development experts.
              </p>
            </motion.div>

            <ContactForm serviceOptions={services.map((solution) => solution.title)} />
          </div>
        </section>

      </main>
    </>
  )
}