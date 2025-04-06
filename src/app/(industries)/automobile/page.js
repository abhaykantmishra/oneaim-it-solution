"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import {
  Car,
  Gauge,
  Settings,
  Cpu,
  Factory,
  Search,
  Shield,
  Zap,
  Code,
  LineChart,
  Users,
  CheckCircle2,
  ArrowRight,
  Repeat,
  Layers,
  PieChart,
  Workflow,
  Truck,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CaseStudies from "@/components/case-studies"
import FAQ from "@/components/faq"
import ContactForm from "@/components/contact-form"

// Automotive Solutions Data
const automotiveSolutions = [
  {
    id: "connected-vehicles",
    title: "Connected Vehicle Solutions",
    icon: <Car className="w-6 h-6" />,
    description:
      "Develop advanced connected vehicle systems that enhance driver experience, improve safety, and enable new service models. Our connected vehicle solutions integrate cutting-edge IoT technology with secure cloud platforms to create intelligent automotive experiences.",
    features: [
      "In-vehicle infotainment systems",
      "Telematics and vehicle tracking",
      "Over-the-air (OTA) update systems",
      "Driver behavior analytics",
      "Vehicle-to-everything (V2X) communication",
      "Predictive maintenance solutions",
    ],
    technologies: ["IoT", "5G", "Cloud Computing", "Edge Computing", "MQTT", "CAN Bus"],
    // image: "/images/connected-vehicles.png",
    color: "from-blue-500 to-indigo-600",
    lightColor: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    id: "manufacturing-systems",
    title: "Automotive Manufacturing Systems",
    icon: <Factory className="w-6 h-6" />,
    description:
      "Optimize your automotive manufacturing processes with intelligent systems that improve efficiency, quality, and flexibility. Our manufacturing IT solutions help automotive OEMs and suppliers streamline operations, reduce costs, and adapt to changing market demands.",
    features: [
      "Manufacturing Execution Systems (MES)",
      "Production planning and scheduling",
      "Quality management systems",
      "Supply chain visibility and management",
      "Digital twin technology for production",
      "Predictive maintenance for equipment",
    ],
    technologies: ["Industrial IoT", "AI/ML", "Digital Twin", "SCADA", "PLM", "ERP Integration"],
    // image: "/images/manufacturing-systems.png",
    color: "from-green-500 to-emerald-600",
    lightColor: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    id: "diagnostics-solutions",
    title: "Vehicle Diagnostics Solutions",
    icon: <Gauge className="w-6 h-6" />,
    description:
      "Create advanced diagnostic systems that provide real-time insights into vehicle health and performance. Our diagnostic solutions help automotive businesses identify issues quickly, reduce downtime, and improve service quality through data-driven insights.",
    features: [
      "OBD-II diagnostic systems",
      "Remote diagnostics platforms",
      "Predictive maintenance algorithms",
      "Service management integration",
      "Diagnostic data analytics",
      "Mobile diagnostic applications",
    ],
    technologies: ["OBD Protocols", "CAN Bus", "Machine Learning", "Data Analytics", "Mobile Apps", "Cloud Platforms"],
    // image: "/images/diagnostics-solutions.png",
    color: "from-red-500 to-orange-500",
    lightColor: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    id: "dealership-systems",
    title: "Dealership Management Systems",
    icon: <Store className="w-6 h-6" />,
    description:
      "Streamline dealership operations with integrated management systems that enhance customer experience, optimize inventory, and improve sales processes. Our dealership solutions provide comprehensive tools for modern automotive retail businesses.",
    features: [
      "Customer relationship management",
      "Inventory management systems",
      "Sales and F&I process automation",
      "Service department management",
      "Parts inventory and ordering systems",
      "Business intelligence and reporting",
    ],
    technologies: ["CRM", "ERP", "Cloud Computing", "Mobile Apps", "Data Analytics", "Payment Processing"],
    // image: "/images/dealership-systems.png",
    color: "from-purple-500 to-pink-500",
    lightColor: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    id: "autonomous-driving",
    title: "Autonomous Driving Technologies",
    icon: <Cpu className="w-6 h-6" />,
    description:
      "Accelerate autonomous vehicle development with advanced software solutions for perception, decision-making, and control systems. Our autonomous driving technologies help automotive innovators navigate the complex challenges of self-driving vehicle development.",
    features: [
      "Sensor fusion algorithms",
      "Computer vision systems",
      "Path planning and navigation",
      "Simulation and testing platforms",
      "HD mapping solutions",
      "Regulatory compliance frameworks",
    ],
    technologies: ["AI/ML", "Computer Vision", "LiDAR", "RADAR", "Sensor Fusion", "SLAM"],
    // image: "/images/autonomous-driving.png",
    color: "from-yellow-500 to-amber-600",
    lightColor: "bg-yellow-50",
    iconColor: "text-yellow-500",
  },
  {
    id: "fleet-management",
    title: "Fleet Management Solutions",
    icon: <Truck className="w-6 h-6" />,
    description:
      "Optimize fleet operations with comprehensive management solutions that improve efficiency, reduce costs, and enhance safety. Our fleet management systems provide real-time visibility and control over vehicle assets for commercial automotive operations.",
    features: [
      "Real-time vehicle tracking",
      "Driver performance monitoring",
      "Fuel management systems",
      "Maintenance scheduling and alerts",
      "Route optimization algorithms",
      "Compliance and reporting tools",
    ],
    technologies: ["GPS", "IoT", "Cloud Computing", "Mobile Apps", "Data Analytics", "Telematics"],
    // image: "/images/fleet-management.png",
    color: "from-cyan-500 to-blue-500",
    lightColor: "bg-cyan-50",
    iconColor: "text-cyan-500",
  },
]

// Platforms we support
const supportedPlatforms = [
  {
    name: "AUTOSAR",
    // icon: "/images/autosar-icon.png",
    description: "Develop standardized automotive software architectures with AUTOSAR compliance.",
  },
  {
    name: "Android Automotive",
    // icon: "/images/android-auto-icon.png",
    description: "Create immersive in-vehicle infotainment experiences with Android Automotive OS.",
  },
  {
    name: "QNX",
    // icon: "/images/qnx-icon.png",
    description: "Build secure, reliable embedded systems for critical automotive applications.",
  },
  {
    name: "AWS IoT",
    // icon: "/images/aws-iot-icon.png",
    description: "Connect vehicles to the cloud with AWS IoT for automotive solutions.",
  },
  {
    name: "Azure IoT",
    // icon: "/images/azure-iot-icon.png",
    description: "Develop scalable connected vehicle platforms with Microsoft Azure IoT.",
  },
  {
    name: "Custom Platforms",
    // icon: "/images/custom-auto-icon.png",
    description: "Build bespoke automotive platforms tailored to unique requirements.",
  },
]

// Benefits data
const benefits = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Accelerated Innovation",
    description:
      "Speed up your automotive innovation cycle with our expertise in rapid prototyping, agile development, and cutting-edge technologies.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enhanced Safety & Security",
    description:
      "Implement robust safety systems and cybersecurity measures that protect vehicles, data, and users in an increasingly connected world.",
  },
  {
    icon: <Gauge className="w-6 h-6" />,
    title: "Improved Performance",
    description:
      "Optimize vehicle systems and business operations for maximum performance, efficiency, and reliability.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Superior User Experience",
    description:
      "Create intuitive, engaging experiences for drivers, passengers, service technicians, and business users.",
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Data-Driven Insights",
    description:
      "Transform automotive data into actionable intelligence that drives business decisions and creates new revenue opportunities.",
  },
  {
    icon: <Repeat className="w-6 h-6" />,
    title: "Seamless Integration",
    description:
      "Connect automotive systems with enterprise applications, third-party services, and emerging technologies for comprehensive solutions.",
  },
]

// Process steps
const processSteps = [
  {
    number: "01",
    title: "Discovery & Analysis",
    description:
      "We begin by understanding your automotive business challenges, technical requirements, and strategic objectives. We analyze your current systems, market position, and competitive landscape.",
    icon: <Search className="w-8 h-8" />,
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description:
      "Based on our findings, we develop a comprehensive automotive IT strategy aligned with your business goals. We create detailed project plans, technology roadmaps, and resource allocations.",
    icon: <PieChart className="w-8 h-8" />,
  },
  {
    number: "03",
    title: "Design & Architecture",
    description:
      "Our experts design robust system architectures and user experiences tailored to automotive requirements. We develop technical specifications and create prototypes to validate concepts.",
    icon: <Layers className="w-8 h-8" />,
  },
  {
    number: "04",
    title: "Development & Integration",
    description:
      "Our development team builds your automotive solution using industry best practices and rigorous quality standards. We integrate with existing systems and third-party services as needed.",
    icon: <Code className="w-8 h-8" />,
  },
  {
    number: "05",
    title: "Testing & Validation",
    description:
      "We conduct comprehensive testing to ensure your automotive solution meets all functional, performance, and safety requirements. This includes security testing, compliance verification, and user acceptance testing.",
    icon: <CheckCircle2 className="w-8 h-8" />,
  },
  {
    number: "06",
    title: "Deployment & Launch",
    description:
      "We manage the deployment process, ensuring your automotive solution launches smoothly across all intended environments and user groups.",
    icon: <Workflow className="w-8 h-8" />,
  },
  {
    number: "07",
    title: "Ongoing Support & Evolution",
    description:
      "Our relationship continues after launch with ongoing support, maintenance, and continuous improvement services to ensure your automotive solution evolves with your business.",
    icon: <Settings className="w-8 h-8" />,
  },
]

// Automotive statistics
const automotiveStats = [
  {
    value: "40%",
    label: "Reduction in Development Time",
    description: "Our clients typically see significant acceleration in their automotive software development cycles.",
  },
  {
    value: "99.9%",
    label: "System Reliability",
    description: "Our automotive solutions are engineered for exceptional uptime and dependability.",
  },
  {
    value: "60%",
    label: "Maintenance Cost Reduction",
    description: "Predictive maintenance solutions dramatically reduce vehicle downtime and service costs.",
  },
  {
    value: "3.5x",
    label: "ROI on Digital Transformation",
    description: "Our automotive clients experience strong returns on their technology investments.",
  },
]

// Automotive FAQ data
const automotiveFAQs = [
  {
    question: "How do you ensure the security of connected vehicle systems?",
    answer:
      "We implement a multi-layered security approach for connected vehicle systems that includes secure communication protocols, data encryption, secure boot processes, intrusion detection systems, and regular security audits. Our solutions comply with automotive cybersecurity standards like ISO/SAE 21434 and incorporate security by design principles throughout the development lifecycle. We also provide ongoing security monitoring and update services to address emerging threats.",
  },
  {
    question: "Can you integrate with existing automotive systems and platforms?",
    answer:
      "Yes, we specialize in integrating with existing automotive systems and platforms. Our team has experience working with various OEM platforms, dealer management systems, telematics solutions, and manufacturing systems. We use industry-standard protocols and develop custom adapters when necessary to ensure seamless integration. Our approach minimizes disruption to your operations while enhancing functionality through strategic integration points.",
  },
  {
    question: "What experience do you have with autonomous vehicle technologies?",
    answer:
      "Our team includes specialists in autonomous vehicle technologies with experience in developing perception systems, decision-making algorithms, control systems, and simulation environments. We've worked on ADAS features, sensor fusion solutions, HD mapping applications, and testing platforms for autonomous capabilities. While we typically partner with automotive companies on specific components rather than complete autonomous systems, our expertise helps accelerate development and solve complex technical challenges in the autonomous driving space.",
  },
  {
    question: "How do you handle compliance with automotive industry regulations and standards?",
    answer:
      "Regulatory compliance is integrated into our development process from the beginning. We maintain expertise in key automotive standards including ISO 26262 for functional safety, AUTOSAR for software architecture, WP.29 for cybersecurity, and regional regulations affecting connected and autonomous vehicles. Our quality management system incorporates compliance verification at multiple stages, and we provide documentation packages to support certification efforts. We also stay current with evolving regulations to ensure your automotive solutions remain compliant.",
  },
  {
    question: "What is your approach to scaling automotive IoT solutions?",
    answer:
      "We design automotive IoT solutions with scalability as a foundational principle. This includes using cloud-native architectures, implementing efficient data processing pipelines, and designing for variable loads. Our approach typically involves microservices architectures, containerization, and automated scaling capabilities. We also implement data lifecycle management strategies to handle the large volumes of data generated by connected vehicle fleets while maintaining performance and controlling costs as your deployment grows.",
  },
  {
    question: "Do you provide ongoing support and maintenance for automotive solutions?",
    answer:
      "Yes, we offer comprehensive support and maintenance services tailored to the unique requirements of automotive solutions. This includes 24/7 monitoring for critical systems, regular software updates, security patches, performance optimization, and technical support. We provide service level agreements (SLAs) with response times appropriate for the criticality of different systems. For connected vehicle platforms, we also offer over-the-air (OTA) update management to ensure vehicle software remains current and secure throughout its lifecycle.",
  },
  {
    question: "How do you approach data privacy in automotive solutions?",
    answer:
      "Data privacy is a critical consideration in our automotive solutions. We implement privacy by design principles, conducting privacy impact assessments during the design phase to identify and mitigate risks. Our solutions incorporate data minimization, purpose limitation, and user consent mechanisms. We ensure compliance with relevant data protection regulations like GDPR, CCPA, and automotive-specific privacy frameworks. We also provide transparent data governance tools that give both businesses and end users appropriate control over how automotive data is collected, used, and shared.",
  },
]

function Store(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2V7" />
      <path d="M18 12v0a2 2 0 0 1-2-2V7" />
      <path d="M14 7v3a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2V7" />
      <path d="M10 12v0a2 2 0 0 1-2-2V7" />
      <path d="M6 7v3a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2V7" />
    </svg>
  )
}

export default function AutomotiveSolutionsPage() {
  const [activeSolution, setActiveSolution] = useState(automotiveSolutions[0].id)

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

  // Case studies data for automotive
  const automotiveCaseStudies = [
    {
      title: "Connected Fleet Management Platform",
      industry: "Commercial Transportation",
      description:
        "Developed a comprehensive fleet management platform for a leading logistics company, integrating real-time vehicle tracking, predictive maintenance, driver behavior analysis, and route optimization. The solution reduced fuel costs by 15%, maintenance expenses by 22%, and improved on-time deliveries by 18%.",
      metrics: [
        { label: "Fuel Cost Reduction", value: "15%" },
        { label: "Maintenance Savings", value: "22%" },
        { label: "On-time Delivery Improvement", value: "18%" },
      ],
      // image: "/images/case-study-fleet.png",
    },
    {
      title: "Automotive Manufacturing Execution System",
      industry: "Automotive OEM",
      description:
        "Implemented a next-generation Manufacturing Execution System (MES) for a global automotive manufacturer, connecting production lines, quality control systems, and supply chain management. The solution increased production efficiency by 27%, reduced quality defects by 32%, and improved inventory accuracy to 99.8%.",
      metrics: [
        { label: "Production Efficiency Gain", value: "27%" },
        { label: "Quality Defect Reduction", value: "32%" },
        { label: "Inventory Accuracy", value: "99.8%" },
      ],
      // image: "/images/case-study-manufacturing.png",
    },
    {
      title: "Advanced Dealer Management Platform",
      industry: "Automotive Retail",
      description:
        "Created an integrated dealer management platform for a network of 50+ dealerships, unifying sales, service, inventory, and customer management functions. The cloud-based solution provided real-time business intelligence, streamlined operations, and enhanced customer experience, resulting in a 24% increase in service department efficiency and 15% growth in sales conversion rates.",
      metrics: [
        { label: "Service Efficiency Increase", value: "24%" },
        { label: "Sales Conversion Growth", value: "15%" },
        { label: "Customer Satisfaction Score", value: "4.8/5" },
      ],
      // image: "/images/case-study-dealer.png",
    },
  ]

  // Counter animation for stats section
  const [counters, setCounters] = useState({
    developmentTime: 0,
    reliability: 0,
    maintenanceCost: 0,
    roi: 0,
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
                <span className="text-white">Accelerate Your</span>
                <br />
                <span className="bg-gradient-to-r from-[#ff3b30] to-[#ff5c52] bg-clip-text text-transparent">
                  Automotive Innovation
                </span>
                <br />
                <span className="text-white">With Advanced IT Solutions</span>
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto pb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                From connected vehicles and autonomous technologies to manufacturing systems and dealership solutions,
                we provide comprehensive IT services to drive the future of automotive innovation.
              </motion.p>
              <motion.div
                className="flex flex-wrap justify-center gap-4 md:my-10"
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

          {/* Automotive icons overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/30 to-transparent py-6">
            <div className="container mx-auto px-4">
              <div className="flex justify-center gap-8 md:gap-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-center"
                >
                  <Car className="w-8 h-8 mx-auto mb-2 text-[#ff3b30]" />
                  <p className="text-sm text-gray-300">Connected Vehicles</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-center"
                >
                  <Factory className="w-8 h-8 mx-auto mb-2 text-[#ff3b30]" />
                  <p className="text-sm text-gray-300">Manufacturing</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-center hidden md:block"
                >
                  <Gauge className="w-8 h-8 mx-auto mb-2 text-[#ff3b30]" />
                  <p className="text-sm text-gray-300">Diagnostics</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="text-center hidden md:block"
                >
                  <Cpu className="w-8 h-8 mx-auto mb-2 text-[#ff3b30]" />
                  <p className="text-sm text-gray-300">Autonomous</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="text-center hidden lg:block"
                >
                  <Truck className="w-8 h-8 mx-auto mb-2 text-[#ff3b30]" />
                  <p className="text-sm text-gray-300">Fleet Management</p>
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
                Comprehensive Automotive IT Solutions
              </h2>
              <p className="text-lg text-gray-600">
                In today&apos;s rapidly evolving automotive landscape, technology is the driving force behind innovation,
                efficiency, and competitive advantage. Our specialized automotive IT solutions help manufacturers,
                suppliers, dealerships, and fleet operators navigate the digital transformation journey.
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
                    <Settings className="w-6 h-6 text-[#ff3b30]" />
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
                  <h3 className="text-xl font-bold text-[#1e2942] mb-2">Automotive Expertise</h3>
                  <p className="text-gray-600">
                    Specialized engineers and consultants with deep industry knowledge and experience
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
                  <h3 className="text-xl font-bold text-[#1e2942] mb-2">Future-Ready</h3>
                  <p className="text-gray-600">
                    Solutions designed to adapt to emerging technologies and evolving industry standards
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
                      Why Your Automotive Business Needs Specialized IT Solutions
                    </h3>
                    <p className="text-gray-600 mb-6">
                      The automotive industry is undergoing a profound digital transformation, driven by connected
                      vehicles, autonomous technologies, electrification, and changing consumer expectations. To thrive
                      in this evolving landscape, automotive businesses need specialized IT solutions that address
                      industry-specific challenges.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                        </span>
                        <span className="text-gray-700">
                          <strong>Complex Systems Integration:</strong> Connect vehicle systems, manufacturing
                          processes, and business operations
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                        </span>
                        <span className="text-gray-700">
                          <strong>Safety & Compliance:</strong> Meet rigorous industry standards and regulatory
                          requirements
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                        </span>
                        <span className="text-gray-700">
                          <strong>Data Management:</strong> Process and analyze massive volumes of vehicle and
                          operational data
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                        </span>
                        <span className="text-gray-700">
                          <strong>Innovation Acceleration:</strong> Rapidly develop and deploy new automotive
                          technologies
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
                        src={"placeholder.svg" || "/images/automotive-overview.png"}
                        alt="Automotive IT Solutions"
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
              <h2 className="text-3xl md:text-5xl font-bold text-[#1e2942] mb-6">Our Automotive IT Solutions</h2>
              <p className="text-lg text-gray-600">
                We offer a comprehensive suite of automotive IT solutions designed to address every aspect of the
                industry, from vehicle technology to manufacturing and retail operations.
              </p>
            </motion.div>

            <Tabs defaultValue={automotiveSolutions[0].id} className="max-w-5xl mx-auto">
              <motion.div
                className="bg-[#fff5f5] rounded-full p-2 flex flex-row justify-center "
                initial={{ opacity: 0, y: 20 }}
                animate={isSolutionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <TabsList  className="w-full h-full flex md:flex-row flex-wrap justify-center gap-2 bg-[#fff5f5] rounded-full">
                  {automotiveSolutions.map((solution, index) => (
                    <TabsTrigger
                      key={solution.id}
                      value={solution.id}
                      className="px-6 py-3 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:text-black data-[state=active]:shadow-md"
                      style={{
                        backgroundImage: `var(--state-active, none)`,
                        "--state-active": `linear-gradient(to right, ${
                          solution.id === "connected-vehicles"
                            ? "var(--blue-500), var(--indigo-600)"
                            : solution.id === "manufacturing-systems"
                              ? "var(--green-500), var(--emerald-600)"
                              : solution.id === "diagnostics-solutions"
                                ? "var(--red-500), var(--orange-500)"
                                : solution.id === "dealership-systems"
                                  ? "var(--purple-500), var(--pink-500)"
                                  : solution.id === "autonomous-driving"
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

              {automotiveSolutions.map((solution) => (
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
                            solution.id === "connected-vehicles"
                              ? "var(--blue-500), var(--indigo-600)"
                              : solution.id === "manufacturing-systems"
                                ? "var(--green-500), var(--emerald-600)"
                                : solution.id === "diagnostics-solutions"
                                  ? "var(--red-500), var(--orange-500)"
                                  : solution.id === "dealership-systems"
                                    ? "var(--purple-500), var(--pink-500)"
                                    : solution.id === "autonomous-driving"
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
              <h2 className="text-3xl md:text-5xl font-bold text-[#1e2942] mb-6">Automotive Platforms We Support</h2>
              <p className="text-lg text-gray-600">
                We have expertise across major automotive platforms and technologies, allowing us to implement the best
                solution for your specific requirements.
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
              <h3 className="text-2xl font-bold mb-4">Need Expertise in a Specific Automotive Platform?</h3>
              <p className="text-lg mb-6">
                Our automotive technology experts can help you evaluate, implement, or integrate with the platforms that
                best fit your business requirements and innovation goals.
              </p>
              <motion.button
                className="bg-[#ff3b30] hover:bg-[#e62e24] text-white font-medium px-8 py-3 rounded-full inline-flex items-center transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discuss Your Platform Needs <ArrowRight className="ml-2 w-5 h-5" />
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
                Benefits of Our Automotive IT Solutions
              </h2>
              <p className="text-lg text-gray-600">
                Our comprehensive automotive IT solutions deliver tangible benefits that drive innovation, enhance
                efficiency, and create competitive advantages for your business.
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
              <h2 className="text-3xl md:text-5xl font-bold text-[#1e2942] mb-6">Our Automotive Development Process</h2>
              <p className="text-lg text-gray-600">
                We follow a structured, collaborative approach to automotive technology development that ensures
                quality, compliance, and successful outcomes for every project.
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Automotive Success by the Numbers</h2>
              <p className="text-lg text-gray-300">
                Our automotive IT solutions deliver measurable results that drive business growth and technological
                advancement.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {automotiveStats.map((stat, index) => (
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
              <h2 className="text-3xl md:text-5xl font-bold text-[#1e2942] mb-6">Automotive Success Stories</h2>
              <p className="text-lg text-gray-600">
                Explore how our automotive IT solutions have helped businesses like yours achieve remarkable results and
                drive innovation.
              </p>
            </motion.div>

            <CaseStudies caseStudies={automotiveCaseStudies} />
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
                Automotive Technologies We Work With
              </h2>
              <p className="text-lg text-gray-600">
                We leverage the latest technologies and frameworks to build modern, secure, and high-performance
                automotive solutions.
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
                    <Car className="w-6 h-6 mr-2 text-[#ff3b30]" /> Vehicle Technologies
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">CAN, LIN, FlexRay, MOST</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">AUTOSAR, QNX, Android Automotive</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">OBD-II, UDS, DoIP</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">V2X, DSRC, C-V2X</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">Telematics, GPS, 5G Connectivity</span>
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
                    <Cpu className="w-6 h-6 mr-2 text-[#ff3b30]" /> Software & Computing
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">C, C++, Java, Python, Rust</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">CUDA, TensorFlow, PyTorch</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">ROS, MATLAB, Simulink</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">Edge Computing, Cloud Computing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">Computer Vision, Machine Learning</span>
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
                    <Factory className="w-6 h-6 mr-2 text-[#ff3b30]" /> Manufacturing & Business
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">MES, PLM, ERP Systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">Industrial IoT, SCADA</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">Digital Twin Technology</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">DMS, CRM, Inventory Management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                      </span>
                      <span className="text-gray-700">Business Intelligence, Analytics</span>
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
                <h3 className="text-2xl font-bold mb-4">Need Expertise in Specific Automotive Technologies?</h3>
                <p className="text-lg mb-6">
                  Our team stays at the forefront of automotive technology trends and can help you implement the right
                  solutions for your specific challenges and innovation goals.
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
              <h2 className="text-3xl md:text-5xl font-bold text-[#1e2942] mb-6">
                Our Automotive Integration Partners
              </h2>
              <p className="text-lg text-gray-600">
                We integrate with leading automotive systems and platforms to provide comprehensive solutions for your
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
                  <h3 className="text-lg font-bold text-[#1e2942] mb-4">OEM Systems</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>BMW ConnectedDrive</li>
                    <li>Mercedes-Benz MBUX</li>
                    <li>Tesla Vehicle API</li>
                    <li>Toyota SmartConnect</li>
                    <li>Ford SYNC</li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-[#f8f9fc] p-6 rounded-xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-bold text-[#1e2942] mb-4">Telematics Platforms</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Geotab</li>
                    <li>Verizon Connect</li>
                    <li>Samsara</li>
                    <li>Trimble</li>
                    <li>Omnitracs</li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-[#f8f9fc] p-6 rounded-xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-bold text-[#1e2942] mb-4">Manufacturing Systems</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Siemens Teamcenter</li>
                    <li>Dassault DELMIA</li>
                    <li>PTC Windchill</li>
                    <li>SAP Manufacturing</li>
                    <li>Oracle Manufacturing</li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-[#f8f9fc] p-6 rounded-xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-bold text-[#1e2942] mb-4">Dealership Systems</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>CDK Global</li>
                    <li>Reynolds & Reynolds</li>
                    <li>Dealertrack</li>
                    <li>DealerSocket</li>
                    <li>Tekion</li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-[#f8f9fc] p-6 rounded-xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-bold text-[#1e2942] mb-4">Diagnostic Tools</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Bosch Diagnostics</li>
                    <li>Snap-on</li>
                    <li>Autel</li>
                    <li>Launch Tech</li>
                    <li>OBDeleven</li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-[#f8f9fc] p-6 rounded-xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-bold text-[#1e2942] mb-4">Cloud Platforms</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>AWS IoT</li>
                    <li>Microsoft Azure IoT</li>
                    <li>Google Cloud IoT</li>
                    <li>IBM Watson IoT</li>
                    <li>Oracle IoT Cloud</li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-[#f8f9fc] p-6 rounded-xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-bold text-[#1e2942] mb-4">Navigation & Mapping</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>HERE Technologies</li>
                    <li>TomTom</li>
                    <li>Mapbox</li>
                    <li>Google Maps</li>
                    <li>Waze</li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-[#f8f9fc] p-6 rounded-xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-lg font-bold text-[#1e2942] mb-4">Payment Systems</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Stripe</li>
                    <li>PayPal</li>
                    <li>Square</li>
                    <li>Authorize.net</li>
                    <li>Braintree</li>
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
                Frequently Asked Questions About Automotive IT Solutions
              </h2>
              <p className="text-lg text-gray-600">
                Find answers to common questions about our automotive IT services and how we can help your business
                innovate and grow.
              </p>
            </motion.div>

            <FAQ faqs={automotiveFAQs} />
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Accelerate Your Automotive Innovation?</h2>
              <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
                Let&apos;s create automotive technology solutions that drive growth, enhance experiences, and give you a
                competitive edge in the rapidly evolving automotive landscape.
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
                Let&apos;s Discuss Your Automotive Project
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below to schedule a free consultation with one of our automotive technology experts.
              </p>
            </motion.div>

            <ContactForm serviceOptions={automotiveSolutions.map((solution) => solution.title)} />
          </div>
        </section>

      </main>
    </>
  )
}