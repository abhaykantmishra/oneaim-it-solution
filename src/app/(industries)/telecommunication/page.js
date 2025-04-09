"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import {
  Building2,
  Shield,
  Lock,
  FileText,
  Search,
  Zap,
  Code,
  Database,
  Users,
  CheckCircle2,
  Layers,
  Workflow,
  Globe,
  Settings,
  Radio,
  Eye,
  Cpu,
  Network,
  CloudCog,
  HardDrive,
} from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CaseStudies from "@/components/case-studies"
import FAQ from "@/components/faq"
import ContactForm from "@/components/contact-form"


const telecomSolutions = [
  {
    id: "network-infrastructure",
    title: "Next-Gen Network Infrastructure",
    icon: <Radio className="w-6 h-6" />,
    description:
      "Build high-performance and scalable telecom infrastructure. Our solutions support 5G, fiber optics, and core network enhancements to enable fast, reliable connectivity across urban and rural areas.",
    features: [
      "5G and 6G readiness",
      "Fiber optic deployment",
      "Core & edge network optimization",
      "Carrier-grade routers & switches",
      "Low-latency architecture",
      "Dynamic traffic management",
    ],
    technologies: ["SDN", "NFV", "5G", "MIMO", "Optical Networking", "Edge Computing"],
    image: "/placeholder.svg",
    color: "from-blue-500 to-indigo-600",
    lightColor: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    id: "iot-connectivity",
    title: "IoT & M2M Connectivity",
    icon: <Eye className="w-6 h-6" />,
    description:
      "Enable seamless machine-to-machine communication with secure, scalable IoT networks. We provide frameworks to support smart devices, industrial sensors, and intelligent network management.",
    features: [
      "Massive device connectivity",
      "Remote device management",
      "Low-power wide-area networks",
      "Secure over-the-air updates",
      "Real-time telemetry & monitoring",
      "Edge AI for smart decisions",
    ],
    technologies: ["NB-IoT", "LTE-M", "MQTT", "LoRaWAN", "Edge AI", "Device Twin"],
    image: "/placeholder.svg",
    color: "from-green-500 to-emerald-600",
    lightColor: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    id: "network-security",
    title: "Telecom Network Security",
    icon: <Shield className="w-6 h-6" />,
    description:
      "Safeguard telecom infrastructure from evolving cyber threats. Our security solutions provide real-time monitoring, incident response, and regulatory compliance for telecom operators.",
    features: [
      "Threat detection & prevention",
      "Network segmentation",
      "DDoS protection",
      "Zero-trust access models",
      "Compliance with telecom regulations",
      "24/7 SOC operations",
    ],
    technologies: [
      "SIEM",
      "Firewall/NAT",
      "Zero Trust",
      "Endpoint Security",
      "TLS/SSL Inspection",
      "Threat Intelligence",
    ],
    image: "/placeholder.svg",
    color: "from-red-500 to-orange-500",
    lightColor: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    id: "oss-bss",
    title: "OSS/BSS Transformation",
    icon: <Cpu className="w-6 h-6" />,
    description:
      "Modernize telecom business operations with advanced OSS/BSS platforms. We help telecom providers accelerate service delivery, automate billing, and improve customer experience.",
    features: [
      "Digital billing systems",
      "Customer relationship management",
      "Real-time service provisioning",
      "Product catalog management",
      "Automated ticketing & workflows",
      "Analytics & reporting",
    ],
    technologies: [
      "Microservices",
      "CRM APIs",
      "Service Orchestration",
      "Cloud-native OSS/BSS",
      "AI/ML Insights",
      "Business Rule Engines",
    ],
    image: "/placeholder.svg",
    color: "from-purple-500 to-pink-500",
    lightColor: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    id: "telecom-ai",
    title: "AI-Driven Network Operations",
    icon: <Building2 className="w-6 h-6" />,
    description:
      "Leverage AI and automation for proactive telecom operations. Our solutions improve uptime, detect anomalies, and optimize resource allocation across your telecom stack.",
    features: [
      "Predictive maintenance",
      "Self-healing networks",
      "Traffic forecasting",
      "Anomaly detection",
      "QoS optimization",
      "AI-based ticket resolution",
    ],
    technologies: [
      "AI/ML",
      "AIOps",
      "Anomaly Detection",
      "Network Slicing",
      "Telemetry",
      "Closed-loop Automation",
    ],
    image: "/placeholder.svg",
    color: "from-yellow-500 to-amber-600",
    lightColor: "bg-yellow-50",
    iconColor: "text-yellow-500",
  },
  {
    id: "customer-experience",
    title: "Customer Experience Platforms",
    icon: <Network className="w-6 h-6" />,
    description:
      "Deliver superior telecom customer experiences through personalized services, omnichannel engagement, and advanced analytics that track satisfaction and reduce churn.",
    features: [
      "Unified customer view",
      "Real-time support systems",
      "Churn prediction & analytics",
      "AI chatbots & virtual agents",
      "Personalized service offers",
      "Omnichannel communication",
    ],
    technologies: ["CDP", "NLP", "Chatbots", "Voice AI", "CX Analytics", "Customer Journey Mapping"],
    image: "/placeholder.svg",
    color: "from-cyan-500 to-blue-500",
    lightColor: "bg-cyan-50",
    iconColor: "text-cyan-500",
  },
]

const telecomPlatforms = [
  {
    name: "5G Core Platforms",
    icon: "/placeholder.svg",
    description: "Deploy scalable solutions on 5G Standalone and Non-Standalone cores.",
  },
  {
    name: "OSS/BSS Systems",
    icon: "/placeholder.svg",
    description: "Integrate seamlessly with industry-leading OSS and BSS platforms.",
  },
  {
    name: "Telecom Cloud (Telco Cloud)",
    icon: "/placeholder.svg",
    description: "Utilize carrier-grade cloud platforms for flexibility and resilience.",
  },
  {
    name: "SD-WAN & NFV",
    icon: "/placeholder.svg",
    description: "Enable agile networking with software-defined WAN and network functions virtualization.",
  },
  {
    name: "IoT Device Management",
    icon: "/placeholder.svg",
    description: "Manage millions of connected devices efficiently and securely.",
  },
  {
    name: "Customer Engagement Platforms",
    icon: "/placeholder.svg",
    description: "Deliver personalized interactions using omnichannel communication systems.",
  },
]



// Benefits data
const telecomBenefits = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Network Security",
    description:
      "Ensure robust protection against cyber threats and unauthorized access across voice, data, and IoT networks through proactive security architectures and monitoring systems.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Faster Connectivity",
    description:
      "Deliver ultra-low latency and high-speed connectivity through 5G deployment, fiber optics, and advanced wireless technologies.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Coverage",
    description:
      "Expand coverage and provide seamless cross-border connectivity through satellite networks, edge infrastructure, and multi-region cloud platforms.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Enhanced User Experience",
    description:
      "Optimize user experience with intelligent traffic management, self-healing networks, and AI-powered service personalization.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Actionable Insights",
    description:
      "Leverage real-time network analytics, customer behavior tracking, and churn prediction to make strategic decisions and boost ARPU.",
  },
  {
    icon: <CloudCog className="w-6 h-6" />,
    title: "Innovation & Automation",
    description:
      "Accelerate innovation using AI/ML, SDN/NFV, and cloud-native architectures that automate operations and reduce time-to-market.",
  },
]



// Process steps
const telecomProcessSteps = [
  {
    number: "01",
    title: "Network Assessment & Planning",
    description:
      "Analyze current infrastructure, capacity, and performance metrics to identify bottlenecks and plan network upgrades tailored for scalability and 5G-readiness.",
    icon: <Search className="w-8 h-8" />,
  },
  {
    number: "02",
    title: "Security Framework Implementation",
    description:
      "Design and implement security layers including DDoS protection, firewalls, and end-to-end encryption for data in transit and at rest.",
    icon: <Shield className="w-8 h-8" />,
  },
  {
    number: "03",
    title: "Architecture Design",
    description:
      "Craft high-availability, software-defined architectures using NFV/SDN, edge computing, and scalable core networks to support growing demand.",
    icon: <Layers className="w-8 h-8" />,
  },
  {
    number: "04",
    title: "Service Integration & Orchestration",
    description:
      "Seamlessly integrate OSS/BSS systems, customer portals, and multi-vendor environments with intelligent orchestration and automation.",
    icon: <Code className="w-8 h-8" />,
  },
  {
    number: "05",
    title: "Testing & Performance Validation",
    description:
      "Perform rigorous testing including throughput, QoS, latency analysis, and failover simulation to validate performance under peak loads.",
    icon: <CheckCircle2 className="w-8 h-8" />,
  },
  {
    number: "06",
    title: "Deployment & Rollout",
    description:
      "Execute secure rollout of new services across regions with phased deployment, zero-downtime migrations, and customer communication strategies.",
    icon: <Workflow className="w-8 h-8" />,
  },
  {
    number: "07",
    title: "Monitoring & Continuous Optimization",
    description:
      "Monitor networks in real time using AI-driven insights for anomaly detection, predictive maintenance, and SLA compliance.",
    icon: <Settings className="w-8 h-8" />,
  },
]



// Government statistics
const telecomStats = [
  {
    value: "99.999%",
    label: "Network Uptime",
    description: "Carrier-grade availability with fault-tolerant architectures and proactive incident resolution.",
  },
  {
    value: "70%",
    label: "Reduced Operational Costs",
    description: "Achieved through virtualization, intelligent automation, and cloud-native transformation.",
  },
  {
    value: "80%",
    label: "Faster Service Provisioning",
    description: "Enabled by orchestration tools and digital onboarding processes.",
  },
  {
    value: "5x",
    label: "Customer Experience Boost",
    description: "Through hyper-personalized services, self-service apps, and real-time issue resolution.",
  },
]



// Case studies data for government
const telecomCaseStudies = [
  {
    title: "5G Core Network Modernization",
    industry: "Telecommunications",
    description:
      "Helped a Tier-1 telecom operator transition from legacy systems to a cloud-native 5G core with dynamic slicing, MEC, and AI-based network orchestration. Resulted in 55% OPEX savings and 80% faster rollout of new services.",
    metrics: [
      { label: "OPEX Reduction", value: "-55%" },
      { label: "Service Launch Speed", value: "+80%" },
      { label: "Latency Improvement", value: "-38%" },
    ],
    image: "/placeholder.svg"
  },
  {
    title: "Customer Churn Prediction & Retention",
    industry: "Telecom Analytics",
    description:
      "Built an AI-powered churn prediction engine for a regional telecom operator using behavioral data, usage trends, and social media signals, achieving a 93% accuracy and reducing churn rate by 40%.",
    metrics: [
      { label: "Prediction Accuracy", value: "93%" },
      { label: "Churn Reduction", value: "-40%" },
      { label: "Customer Lifetime Value", value: "+35%" },
    ],
    image: "/placeholder.svg",
  },
  {
    title: "Unified Communications as a Service (UCaaS)",
    industry: "Enterprise Telecom",
    description:
      "Developed a secure UCaaS platform integrating voice, video, chat, and conferencing for large enterprises. Reduced IT overhead by 60% and improved collaboration and productivity by 3x.",
    metrics: [
      { label: "IT Overhead Reduction", value: "-60%" },
      { label: "Collaboration Improvement", value: "3x" },
      { label: "Deployment Time", value: "-45%" },
    ],
    image: "/placeholder.svg"
  },
]


const telecomTechnologies = [
  {
    category: "Core Network & Connectivity",
    items: [
      "5G Standalone & Non-Standalone",
      "Fiber Optic Infrastructure",
      "Edge Computing",
      "Private LTE Networks",
      "Carrier Aggregation",
      "MIMO & Beamforming",
    ],
  },
  {
    category: "Cloud & Virtualization",
    items: [
      "NFV (Network Functions Virtualization)",
      "SDN (Software Defined Networking)",
      "Containerized Core",
      "Telco Cloud",
      "Multi-access Edge Cloud (MEC)",
      "Kubernetes for Network Functions",
    ],
  },
  {
    category: "Security & Identity",
    items: [
      "SIM-Based Authentication",
      "Zero Trust Networks",
      "SS7/Diameter Protection",
      "DDoS Mitigation",
      "eSIM/Remote SIM Provisioning",
      "End-to-End Encryption",
    ],
  },
  {
    category: "Analytics & AI",
    items: [
      "Churn Prediction",
      "Network Optimization",
      "Customer Experience Management (CEM)",
      "Fraud Detection",
      "Real-Time Billing Analytics",
      "Predictive Maintenance",
    ],
  },
]


// Government FAQ data
const TelecomFAQs = [
  {
    question: "How do you handle security clearances and classified telecommunications projects?",
    answer:
      "We maintain a dedicated team with active security clearances across various levels to support classified telecommunications initiatives. Our infrastructure includes secure telecom labs and SCIF-compliant zones for working on sensitive communication systems. For classified telecom projects, we ensure all equipment and transmission pathways meet federal standards. We enforce strict separation between classified and unclassified networks, and collaborate with government security officials to ensure our telecom solutions are fully compliant with classified information handling protocols.",
  },
  {
    question: "What experience do you have with telecom-related government compliance frameworks?",
    answer:
      "Our telecom solutions are designed in compliance with government frameworks such as NIST SP 800-53, NIST SP 800-171, FISMA, FedRAMP, and CMMC. We’ve worked on secure telecom infrastructure projects requiring adherence to the Risk Management Framework (RMF) and specific agency telecom standards. Our engineers and cybersecurity experts implement and document telecom-specific security controls, secure data transmission protocols, and encryption standards to ensure full lifecycle compliance.",
  },
  {
    question: "Can you integrate your telecom solutions with existing government communication networks?",
    answer:
      "Yes, we specialize in integrating modern telecom systems with existing government networks including DoD communications, first responder systems, and legacy PSTN or VoIP networks. We understand the challenges of hybrid telecom environments and implement secure interconnection points, protocol converters, and compliant encryption to ensure interoperability. Our experience spans LTE/5G, tactical radio, satellite communications, and secure VoIP systems in government deployments.",
  },
  {
    question: "How do you approach security in government and defense telecom solutions?",
    answer:
      "We implement defense-in-depth strategies specific to telecom networks, including end-to-end encryption, secure signaling protocols (like SIP-TLS and SRTP), and network segmentation. We follow NIST 800-series standards and design for resilience against telecom-specific threats such as spoofing, jamming, and interception. Our telecom solutions also include network behavior monitoring and threat intelligence integration for proactive defense across the entire communications stack.",
  },
  {
    question: "What is your approach to handling sensitive but unclassified (SBU) telecom data?",
    answer:
      "For telecom-related SBU data such as Controlled Unclassified Information (CUI) in call records or network configurations, we enforce strict access control, encrypted storage and transmission, and detailed audit logging. We implement compliance with NIST SP 800-171 and FOUO guidelines, ensuring telecom metadata and signaling information are safeguarded. Our teams are trained in secure telecom data handling, especially in environments where confidentiality, availability, and integrity are mission-critical.",
  },
  {
    question: "Do you provide telecom solutions that work in disconnected or low-bandwidth environments?",
    answer:
      "Yes, we develop telecom solutions optimized for DIL (Disconnected, Intermittent, Low-bandwidth) conditions, such as tactical field operations, remote command posts, and disaster response. Our systems leverage edge computing, adaptive codecs, bandwidth prioritization, and satellite fallback to ensure communication continuity. We design lightweight communication protocols and implement data buffering and compression to maintain voice and data connectivity under extreme constraints.",
  },
  {
    question: "How do you support the Authority to Operate (ATO) process for telecom systems?",
    answer:
      "We support telecom systems through the full ATO lifecycle, including preparation of telecom-specific SSPs, SARs, and POA&Ms. Our documentation covers secure network design, radio frequency (RF) protections, encryption key management, and telecom endpoint hardening. We work closely with accrediting authorities to address concerns specific to telecommunications infrastructure and ensure full alignment with frameworks such as RMF and FedRAMP for cloud-integrated telecom solutions.",
  },
];


export default function TelecommunicationPage() {
  const [activeSolution, setActiveSolution] = useState(telecomSolutions[0].id)

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
        <span className="text-white">Secure & Scalable</span>
        <br />
        <span className="bg-gradient-to-r from-[#ff3b30] to-[#ff5c52] bg-clip-text text-transparent">
          Telecom Infrastructure
        </span>
        <br />
        <span className="text-white">for Government & Defense</span>
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        From mission-critical communications and secure network architectures to spectrum management and field-ready telecom systems,
        we deliver advanced solutions tailored to the unique operational demands of government, defense, and intelligence organizations.
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
          Explore Telecom Solutions
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

  {/* Telecom icons overlay */}
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/30 to-transparent py-6">
    <div className="container mx-auto px-4">
      <div className="flex justify-center gap-8 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Shield className="w-8 h-8 mx-auto mb-2 text-[#ff3b30]" />
          <p className="text-sm text-gray-300">Network Security</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center"
        >
          <Radio className="w-8 h-8 mx-auto mb-2 text-[#ff3b30]" />
          <p className="text-sm text-gray-300">Tactical Communications</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center hidden md:block"
        >
          <Eye className="w-8 h-8 mx-auto mb-2 text-[#ff3b30]" />
          <p className="text-sm text-gray-300">Surveillance Systems</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="text-center hidden md:block"
        >
          <Building2 className="w-8 h-8 mx-auto mb-2 text-[#ff3b30]" />
          <p className="text-sm text-gray-300">Public Infrastructure</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center hidden lg:block"
        >
          <Network className="w-8 h-8 mx-auto mb-2 text-[#ff3b30]" />
          <p className="text-sm text-gray-300">5G & Spectrum</p>
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
        Scalable IT Solutions for the Telecommunications Industry
      </h2>
      <p className="text-lg text-gray-600">
        In a hyperconnected world, telecom providers need robust, scalable, and secure IT systems to support 5G, IoT,
        and edge computing. Our solutions are tailored to meet the high performance and compliance demands of the telecom
        ecosystem.
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
          <h3 className="text-xl font-bold text-[#1e2942] mb-2">Secure Network Architecture</h3>
          <p className="text-gray-600">
            Future-proof networks with end-to-end encryption and zero-trust frameworks
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
            Ensure adherence to telecom industry standards such as GDPR, CCPA, and TRAI
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
            <HardDrive className="w-6 h-6 text-[#ff3b30]" />
          </div>
          <h3 className="text-xl font-bold text-[#1e2942] mb-2">High Availability Infrastructure</h3>
          <p className="text-gray-600">
            Deliver uninterrupted services with resilient cloud and edge deployments
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
              Why Telecom Providers Need Advanced IT Solutions
            </h3>
            <p className="text-gray-600 mb-6">
              As data demand surges and technologies like 5G, IoT, and AI reshape communication, telecom operators
              must modernize their IT ecosystems. Our telecom-focused solutions drive operational efficiency,
              enhance security, and support network innovation.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                </span>
                <span className="text-gray-700">
                  <strong>Next-Gen Network Support:</strong> Enable 5G, VoIP, and fiber deployments with intelligent infrastructure
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                </span>
                <span className="text-gray-700">
                  <strong>Cybersecurity Resilience:</strong> Protect critical communication systems from evolving threats
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                </span>
                <span className="text-gray-700">
                  <strong>Scalable Infrastructure:</strong> Adapt to growing demand with modular, cloud-native platforms
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                </span>
                <span className="text-gray-700">
                  <strong>Seamless Legacy Integration:</strong> Modernize without disruption to existing networks and OSS/BSS systems
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
                src="/telecom-illustration.svg" // replace this with your actual telecom-related image path
                alt="Telecom IT Solutions"
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
      <h2 className="text-3xl md:text-5xl font-bold text-[#1e2942] mb-6">
        Our Telecommunication IT Solutions
      </h2>
      <p className="text-lg text-gray-600">
        Empowering telecom providers with scalable, secure, and next-gen IT solutions that enable faster connectivity, 
        better customer experiences, and streamlined operations.
      </p>
    </motion.div>

    <Tabs defaultValue={telecomSolutions[0].id} className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isSolutionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <TabsList className="w-full h-full flex md:flex-row flex-wrap justify-center gap-2 bg-[#fff5f5] rounded-full">
          {telecomSolutions.map((solution) => (
            <TabsTrigger
              key={solution.id}
              value={solution.id}
              className="px-6 py-3 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:text-black data-[state=active]:shadow-md"
              style={{
                backgroundImage: `var(--state-active, none)`,
                "--state-active": `linear-gradient(to right, ${
                  solution.id === "network-optimization"
                    ? "var(--blue-500), var(--indigo-600)"
                    : solution.id === "customer-experience"
                      ? "var(--green-500), var(--emerald-600)"
                      : solution.id === "iot-connectivity"
                        ? "var(--red-500), var(--orange-500)"
                        : solution.id === "5g-solutions"
                          ? "var(--purple-500), var(--pink-500)"
                          : solution.id === "cloud-telecom"
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

      {telecomSolutions.map((solution) => (
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
                    solution.id === "network-optimization"
                      ? "var(--blue-500), var(--indigo-600)"
                      : solution.id === "customer-experience"
                        ? "var(--green-500), var(--emerald-600)"
                        : solution.id === "iot-connectivity"
                          ? "var(--red-500), var(--orange-500)"
                          : solution.id === "5g-solutions"
                            ? "var(--purple-500), var(--pink-500)"
                            : solution.id === "cloud-telecom"
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
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full" />
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/10 rounded-full" />
            </motion.div>
          </motion.div>
        </TabsContent>
      ))}
    </Tabs>
  </div>
</section>


        {/* Platforms Section */}
        <section ref={platformsRef} className="w-full py-16 md:py-24 bg-white">
  <div className="container mx-auto px-4">
    <motion.div
      className="max-w-3xl mx-auto text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={isPlatformsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-5xl font-bold text-[#1e2942] mb-6">Telecom Platforms We Support</h2>
      <p className="text-lg text-gray-600">
        We empower telecom providers with platform-specific integration and development expertise, supporting the most
        advanced network architectures, OSS/BSS systems, and emerging communication technologies.
      </p>
    </motion.div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
      {telecomPlatforms.map((platform, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={isPlatformsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="w-16 h-16 mb-4 relative">
            <Image
              src={platform.icon || "/placeholder.svg"}
              alt={platform.name}
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          <h3 className="text-lg font-semibold text-[#1e2942] mb-2">{platform.name}</h3>
          <p className="text-sm text-gray-600">{platform.description}</p>
        </motion.div>
      ))}
    </div>
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
        Benefits of Our Telecom Solutions
      </h2>
      <p className="text-lg text-gray-600">
        Our telecom-specific solutions drive network innovation, reduce operational overhead, and enhance customer satisfaction across modern communication ecosystems.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {telecomBenefits.map((benefit, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={isBenefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="bg-[#ff3b30]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
            {benefit.icon}
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
      <h2 className="text-3xl md:text-5xl font-bold text-[#1e2942] mb-6">Our Telecom Development Process</h2>
      <p className="text-lg text-gray-600">
        We follow a structured, future-ready process tailored to the needs of telecom operators and service providers — ensuring scalability, network resilience, and service excellence across the development lifecycle.
      </p>
    </motion.div>

    <div className="max-w-5xl mx-auto">
      {telecomProcessSteps.map((step, index) => (
        <motion.div
          key={index}
          className="flex flex-col md:flex-row gap-6 mb-12 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
        >
          {/* Step number and connector line */}
          <div className="flex flex-col items-center">
            <div className="bg-[#ff3b30] text-white text-xl font-bold rounded-full w-14 h-14 flex items-center justify-center shrink-0">
              {step.number}
            </div>
            {index < telecomProcessSteps.length - 1 && (
              <div className="w-0.5 bg-gray-200 h-full mt-4 mb-4 md:h-24"></div>
            )}
          </div>

          {/* Step content */}
          <div className="bg-[#f8f9fc] rounded-xl p-6 md:p-8 flex-1">
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-full shadow-sm hidden md:flex">{step.icon}</div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1e2942] mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


        {/* Stats Section */}
        <section ref={statsRef} className="w-full py-16 md:py-24 bg-[#1e2942] text-white">
  <div className="container mx-auto px-4">
    <motion.div
      className="max-w-3xl mx-auto text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-6">Telecom Impact & Innovation</h2>
      <p className="text-lg text-gray-300">
        Our telecom solutions empower service providers to scale faster, reduce latency, and boost customer satisfaction — driving digital transformation across networks.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {telecomStats.map((stat, index) => (
        <motion.div
          key={index}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <p className="text-4xl md:text-5xl font-bold text-[#ff3b30] mb-4">{stat.value}</p>
          <h3 className="text-xl font-semibold mb-3">{stat.label}</h3>
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
      <h2 className="text-3xl md:text-5xl font-bold text-[#1e2942] mb-6">Telecom Case Studies</h2>
      <p className="text-lg text-gray-600">
        See how our telecom expertise has transformed networks, improved operational efficiency, and helped leading telecom clients stay ahead in the digital race.
      </p>
    </motion.div>

    <CaseStudies caseStudies={telecomCaseStudies} />
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
      <h2 className="text-3xl md:text-5xl font-bold text-[#1e2942] mb-6">Technologies We Leverage</h2>
      <p className="text-lg text-gray-600">
        We utilize advanced and scalable technologies tailored for the telecom sector — driving innovation, performance, and seamless connectivity for millions.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {telecomTechnologies.map((techCategory, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <h3 className="text-xl font-bold text-[#1e2942] mb-4">{techCategory.category}</h3>
          <ul className="space-y-2">
            {techCategory.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-start gap-2">
                <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                  <CheckCircle2 className="w-3 h-3 text-[#ff3b30]" />
                </span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </div>
</section>


        {/* FAQ Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-[#1e2942] via-[#2a3a5f] to-[#364a7c] text-white">
  <div className="container mx-auto px-4">
    <motion.div
      className="max-w-4xl mx-auto text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Telecom Infrastructure?</h2>
      <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
        Reach out today to explore how our telecom technology and services can boost connectivity, enhance scalability, and deliver reliable performance to your network operations.
      </p>
      <motion.a
        href="#contact"
        className="bg-[#ff3b30] hover:bg-[#e62e24] text-white font-medium px-8 py-4 rounded-full text-lg inline-block transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Schedule a Consultation
      </motion.a>
    </motion.div>
  </div>
</section>

{/* Contact Section */}
<section id="contact" ref={contactRef} className="w-full py-16 md:py-24 bg-white">
  <div className="container mx-auto px-4">
    <motion.div
      className="max-w-3xl mx-auto text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-5xl font-bold text-[#1e2942] mb-6">Contact Us</h2>
      <p className="text-lg text-gray-600">
        Get in touch with our telecom experts to discuss your project goals, infrastructure needs, and how we can help modernize your communications landscape.
      </p>
    </motion.div>

    <ContactForm
      serviceOptions={[
        "5G Infrastructure Deployment",
        "Network Optimization & Automation",
        "Telecom Cloud Solutions",
        "OSS/BSS Transformation",
        "IoT & Edge Connectivity",
        "Cybersecurity for Telcos",
        "Other Telecom Services",
      ]}
    />
  </div>
</section>

{/* FAQ Section */}
<section className="w-full py-16 md:py-24 bg-[#f8f9fc]">
  <div className="container mx-auto px-4">
    <motion.div
      className="max-w-3xl mx-auto text-center mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-5xl font-bold text-[#1e2942] mb-6">Frequently Asked Questions</h2>
      <p className="text-lg text-gray-600">
        Find answers to common questions about our telecom capabilities, technology stack, implementation process, and support.
      </p>
    </motion.div>

    <FAQ faqs={TelecomFAQs} />
  </div>
</section>

      </main>
    </>
  )
}