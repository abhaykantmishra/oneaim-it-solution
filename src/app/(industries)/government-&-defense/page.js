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

// Government & Defense Solutions Data
const governmentSolutions = [
  {
    id: "secure-communications",
    title: "Secure Communication Systems",
    icon: <Radio className="w-6 h-6" />,
    description:
      "Develop robust, encrypted communication systems that protect sensitive government and defense information. Our secure communication solutions ensure confidentiality, integrity, and availability of critical data across various security classifications.",
    features: [
      "End-to-end encryption",
      "Multi-level security architecture",
      "Secure voice and video communications",
      "Cross-domain solutions",
      "Secure messaging and file transfer",
      "Emergency communication systems",
    ],
    technologies: ["Encryption", "PKI", "VPN", "HAIPE", "Secure VoIP", "Tactical Radio"],
    image: "/placeholder.svg",
    color: "from-blue-500 to-indigo-600",
    lightColor: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    id: "intelligence-surveillance",
    title: "Intelligence & Surveillance",
    icon: <Eye className="w-6 h-6" />,
    description:
      "Implement advanced intelligence gathering and surveillance systems that provide actionable insights for government and defense operations. Our solutions integrate multiple data sources and employ sophisticated analytics to enhance situational awareness and decision-making capabilities.",
    features: [
      "Multi-source intelligence fusion",
      "Real-time surveillance analytics",
      "Pattern recognition and anomaly detection",
      "Geospatial intelligence systems",
      "Signal intelligence processing",
      "Secure data collection and dissemination",
    ],
    technologies: ["AI/ML", "Computer Vision", "Big Data Analytics", "GIS", "Sensor Integration", "Edge Computing"],
    image: "/placeholder.svg",
    color: "from-green-500 to-emerald-600",
    lightColor: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Solutions",
    icon: <Shield className="w-6 h-6" />,
    description:
      "Protect critical government and defense infrastructure with comprehensive cybersecurity solutions. Our systems defend against sophisticated cyber threats, ensure compliance with security standards, and provide continuous monitoring and incident response capabilities.",
    features: [
      "Advanced threat detection and prevention",
      "Security information and event management",
      "Vulnerability assessment and management",
      "Incident response automation",
      "Zero trust architecture implementation",
      "Supply chain security assurance",
    ],
    technologies: [
      "SIEM",
      "EDR/XDR",
      "Zero Trust",
      "Threat Intelligence",
      "Penetration Testing",
      "Security Automation",
    ],
    image: "/placeholder.svg",
    color: "from-red-500 to-orange-500",
    lightColor: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    id: "mission-critical",
    title: "Mission-Critical Systems",
    icon: <Cpu className="w-6 h-6" />,
    description:
      "Develop and maintain high-reliability systems for mission-critical government and defense operations. Our solutions are engineered for exceptional performance, availability, and resilience in demanding environments and high-stakes scenarios.",
    features: [
      "High-availability architecture",
      "Fault-tolerant system design",
      "Real-time processing capabilities",
      "Disaster recovery solutions",
      "Redundant infrastructure",
      "Performance optimization",
    ],
    technologies: [
      "Distributed Systems",
      "Containerization",
      "Microservices",
      "Kubernetes",
      "Fault Tolerance",
      "Load Balancing",
    ],
    image: "/placeholder.svg",
    color: "from-purple-500 to-pink-500",
    lightColor: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    id: "digital-transformation",
    title: "Public Sector Digital Transformation",
    icon: <Building2 className="w-6 h-6" />,
    description:
      "Modernize government operations with comprehensive digital transformation solutions. Our approach combines technology innovation with process optimization to enhance citizen services, improve operational efficiency, and enable data-driven decision making across public sector organizations.",
    features: [
      "Citizen service portals",
      "Digital workflow automation",
      "Legacy system modernization",
      "Cloud migration strategies",
      "Data integration and analytics",
      "Mobile government solutions",
    ],
    technologies: [
      "Cloud Computing",
      "API Integration",
      "Workflow Automation",
      "Mobile Applications",
      "Data Analytics",
      "Legacy Modernization",
    ],
    image: "/placeholder.svg",
    color: "from-yellow-500 to-amber-600",
    lightColor: "bg-yellow-50",
    iconColor: "text-yellow-500",
  },
  {
    id: "defense-logistics",
    title: "Defense Logistics & Supply Chain",
    icon: <Network className="w-6 h-6" />,
    description:
      "Optimize defense logistics and supply chain operations with intelligent management systems. Our solutions provide end-to-end visibility, enhance resource allocation, and improve operational readiness through advanced tracking, forecasting, and inventory management capabilities.",
    features: [
      "Asset tracking and management",
      "Inventory optimization",
      "Predictive maintenance",
      "Supply chain visibility",
      "Logistics planning and simulation",
      "Secure supplier collaboration",
    ],
    technologies: ["IoT", "Blockchain", "Predictive Analytics", "RFID", "Digital Twin", "AI/ML"],
    image: "/placeholder.svg",
    color: "from-cyan-500 to-blue-500",
    lightColor: "bg-cyan-50",
    iconColor: "text-cyan-500",
  },
]

// Platforms we support
const supportedPlatforms = [
  {
    name: "FedRAMP Cloud",
    icon: "/placeholder.svg",
    description: "Deploy secure solutions on FedRAMP-authorized cloud platforms.",
  },
  {
    name: "DoD Systems",
    icon: "/placeholder.svg",
    description: "Integrate with Department of Defense networks and systems.",
  },
  {
    name: "Intelligence Platforms",
    icon: "/placeholder.svg",
    description: "Connect with intelligence community systems and frameworks.",
  },
  {
    name: "Public Sector ERP",
    icon: "/placeholder.svg",
    description: "Implement and enhance government resource planning systems.",
  },
  {
    name: "GIS Platforms",
    icon: "/placeholder.svg",
    description: "Leverage geospatial information systems for government applications.",
  },
  {
    name: "Custom Platforms",
    icon: "/placeholder.svg",
    description: "Develop bespoke platforms tailored to specific agency requirements.",
  },
]

// Benefits data
const benefits = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enhanced Security",
    description:
      "Implement robust security measures that protect sensitive government data and systems against sophisticated threats while meeting stringent compliance requirements.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Operational Efficiency",
    description:
      "Streamline government processes, reduce manual work, and optimize resource allocation through intelligent automation and workflow optimization.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Mission Effectiveness",
    description:
      "Enhance the ability to execute critical missions through improved situational awareness, faster decision-making, and more reliable systems.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Improved Citizen Services",
    description:
      "Deliver more responsive, accessible, and effective services to citizens through digital transformation and user-centered design.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Data-Driven Insights",
    description:
      "Transform government data into actionable intelligence that drives strategic decisions, identifies opportunities, and enhances operational effectiveness.",
  },
  {
    icon: <CloudCog className="w-6 h-6" />,
    title: "Technological Advantage",
    description:
      "Maintain technological superiority through the adoption of cutting-edge solutions that provide strategic and tactical advantages in defense and security operations.",
  },
]

// Process steps
const processSteps = [
  {
    number: "01",
    title: "Discovery & Requirements Analysis",
    description:
      "We begin by understanding your agency's specific mission requirements, security constraints, and operational environment. We analyze existing systems, compliance requirements, and stakeholder needs to establish a solid foundation for your solution.",
    icon: <Search className="w-8 h-8" />,
  },
  {
    number: "02",
    title: "Security & Compliance Planning",
    description:
      "We develop a comprehensive security and compliance strategy aligned with relevant standards (NIST, FISMA, FedRAMP, etc.). This includes security controls, risk assessment, and compliance documentation to ensure your solution meets all regulatory requirements.",
    icon: <Shield className="w-8 h-8" />,
  },
  {
    number: "03",
    title: "Solution Architecture & Design",
    description:
      "Our experts design robust system architectures tailored to government and defense requirements. We develop technical specifications, security frameworks, and create prototypes to validate concepts while ensuring alignment with security classifications and operational needs.",
    icon: <Layers className="w-8 h-8" />,
  },
  {
    number: "04",
    title: "Secure Development & Integration",
    description:
      "Our development team builds your solution using secure coding practices and rigorous quality standards. We integrate with existing government systems and networks while maintaining security boundaries and ensuring proper data handling across security domains.",
    icon: <Code className="w-8 h-8" />,
  },
  {
    number: "05",
    title: "Comprehensive Testing & Validation",
    description:
      "We conduct thorough testing including security assessments, performance testing under various conditions, and compliance verification. This includes penetration testing, vulnerability assessments, and validation against mission requirements and security standards.",
    icon: <CheckCircle2 className="w-8 h-8" />,
  },
  {
    number: "06",
    title: "Secure Deployment & Accreditation",
    description:
      "We manage the secure deployment process and support system accreditation requirements. Our approach includes security documentation, evidence collection for authorization packages, and coordination with authorizing officials to achieve authority to operate (ATO).",
    icon: <Workflow className="w-8 h-8" />,
  },
  {
    number: "07",
    title: "Ongoing Support & Evolution",
    description:
      "Our relationship continues after deployment with ongoing support, maintenance, and continuous improvement services. We provide regular security updates, compliance monitoring, and help your solution evolve with changing mission requirements and threat landscapes.",
    icon: <Settings className="w-8 h-8" />,
  },
]

// Government statistics
const governmentStats = [
  {
    value: "99.999%",
    label: "System Availability",
    description: "Our mission-critical solutions maintain exceptional reliability for defense operations.",
  },
  {
    value: "75%",
    label: "Reduction in Processing Time",
    description: "Digital transformation dramatically improves government service delivery efficiency.",
  },
  {
    value: "90%",
    label: "Threat Detection Rate",
    description: "Advanced cybersecurity solutions identify and mitigate the vast majority of threats.",
  },
  {
    value: "4.2x",
    label: "ROI on IT Modernization",
    description: "Our government clients experience strong returns on their technology investments.",
  },
]

// Case studies data for government
const governmentCaseStudies = [
  {
    title: "Secure Communications Platform",
    industry: "Defense",
    description:
      "Developed a secure communications platform for a defense agency, enabling encrypted voice, video, and data transmission across multiple security domains. The solution incorporated advanced encryption, multi-level security architecture, and cross-domain capabilities, resulting in a 40% improvement in operational coordination while maintaining strict security requirements.",
    metrics: [
      { label: "Operational Coordination", value: "+40%" },
      { label: "Security Compliance", value: "100%" },
      { label: "Deployment Time", value: "-35%" },
    ],
    image: "/placeholder.svg"
  },
  {
    title: "Cybersecurity Operations Center",
    industry: "Federal Government",
    description:
      "Implemented a next-generation cybersecurity operations center for a federal civilian agency, integrating threat intelligence, automated incident response, and advanced analytics. The solution reduced threat detection time by 65%, increased successful threat mitigation by 78%, and provided comprehensive visibility across the agency's digital infrastructure.",
    metrics: [
      { label: "Threat Detection Time", value: "-65%" },
      { label: "Successful Mitigations", value: "+78%" },
      { label: "Security Incidents", value: "-42%" },
    ],
    image: "/placeholder.svg",
  },
  {
    title: "Digital Transformation Initiative",
    industry: "Public Sector",
    description:
      "Led a comprehensive digital transformation initiative for a state government agency, modernizing legacy systems, implementing cloud-based services, and enhancing citizen engagement platforms. The project reduced service processing time by 70%, improved citizen satisfaction scores from 3.2 to 4.7 out of 5, and generated annual cost savings of $4.2 million through operational efficiencies.",
    metrics: [
      { label: "Processing Time Reduction", value: "70%" },
      { label: "Citizen Satisfaction", value: "4.7/5" },
      { label: "Annual Cost Savings", value: "$4.2M" },
    ],
    image: "/placeholder.svg"
  },
]

// Government technologies
const governmentTechnologies = [
  {
    category: "Security Technologies",
    items: [
      "Zero Trust Architecture",
      "Multi-Level Security",
      "Cross-Domain Solutions",
      "PKI Infrastructure",
      "Secure Enclaves",
      "Threat Intelligence",
    ],
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      "FedRAMP Cloud",
      "Private Government Cloud",
      "Hybrid Infrastructure",
      "Containerization",
      "Microservices",
      "Edge Computing",
    ],
  },
  {
    category: "Data & Analytics",
    items: [
      "Big Data Processing",
      "Predictive Analytics",
      "Machine Learning",
      "Geospatial Analysis",
      "Data Fusion",
      "Real-time Analytics",
    ],
  },
  {
    category: "Integration & Interoperability",
    items: [
      "API Management",
      "Service Mesh",
      "Legacy System Integration",
      "Cross-Agency Data Sharing",
      "Secure Gateways",
      "Standardized Interfaces",
    ],
  },
]

// Government FAQ data
const governmentFAQs = [
  {
    question: "How do you handle security clearances and classified projects?",
    answer:
      "We maintain a team of cleared personnel with various levels of security clearances to support classified projects. Our facilities include secure areas that meet government standards for handling classified information, including SCIFs (Sensitive Compartmented Information Facilities) where required. We follow all relevant security protocols for classified information handling, and our processes are designed to maintain proper separation between classified and unclassified information. For projects requiring classified work, we establish dedicated project teams with appropriate clearances and implement need-to-know protocols. We also coordinate with government security officers to ensure compliance with all applicable security requirements and reporting procedures throughout the project lifecycle.",
  },
  {
    question: "What experience do you have with government compliance frameworks?",
    answer:
      "We have extensive experience with government compliance frameworks including NIST SP 800-53, FISMA, FedRAMP, CMMC, RMF, and agency-specific requirements. Our team includes certified security professionals familiar with the assessment and authorization process for federal systems. We maintain documented processes for implementing security controls, preparing authorization packages, and supporting continuous monitoring requirements. Our solutions are designed with compliance in mind from the beginning, incorporating security controls as foundational elements rather than afterthoughts.",
  },
  {
    question: "Can you integrate with existing government systems and networks?",
    answer:
      "Yes, we specialize in integrating with existing government systems and networks. Our team has experience working with various government platforms including DoD networks, intelligence community systems, federal civilian agency environments, and state/local government infrastructures. We understand the unique challenges of government IT environments, including legacy systems, strict security boundaries, and complex approval processes. We use a combination of standard interfaces, custom adapters, and secure gateways to enable interoperability while maintaining security controls and data protections required in government environments.",
  },
  {
    question: "How do you approach security in government and defense solutions?",
    answer:
      "We implement a defense-in-depth security approach for government and defense solutions, with security integrated throughout the development lifecycle. This begins with threat modeling and security requirements analysis, continues through secure architecture design and development practices, and extends to comprehensive security testing and continuous monitoring. We adhere to relevant security standards like NIST 800-53, implement zero trust principles where appropriate, and design systems to operate in contested environments. For defense systems, we incorporate additional security measures specific to military requirements, including cross-domain solutions and tactical considerations for deployed environments.",
  },
  {
    question: "What is your approach to handling sensitive but unclassified (SBU) data?",
    answer:
      "For sensitive but unclassified (SBU) data, we implement appropriate safeguards based on the specific data types and applicable regulations. This includes categories like CUI (Controlled Unclassified Information), FOUO (For Official Use Only), and other sensitive data types. We apply the principle of least privilege for access controls, implement encryption for data at rest and in transit, maintain detailed audit logs, and ensure proper data handling procedures are followed. Our solutions comply with relevant standards like NIST SP 800-171 for CUI protection, and we provide training to ensure all team members understand proper handling procedures for different data sensitivity levels.",
  },
  {
    question: "Do you provide solutions that work in disconnected or low-bandwidth environments?",
    answer:
      "Yes, we design solutions specifically for disconnected, intermittent, and limited bandwidth (DIL) environments common in defense and field operations. Our approach includes local processing capabilities, efficient data synchronization when connectivity is available, prioritized transmission of critical information, and graceful degradation of functionality based on available bandwidth. We employ techniques like data compression, differential synchronization, and edge computing to maximize functionality in constrained environments. For defense applications, we also consider electromagnetic spectrum constraints and tactical communication limitations in our designs.",
  },
  {
    question: "How do you support the Authority to Operate (ATO) process?",
    answer:
      "We provide comprehensive support for the Authority to Operate (ATO) process, including preparation of all required documentation for security assessment and authorization packages. This includes system security plans (SSP), security assessment reports (SAR), plans of action and milestones (POA&M), and other artifacts required by the authorizing agency. Our team works closely with government security personnel to address questions, provide evidence of security control implementation, support security control assessments, and remediate any identified issues. We have experience with various authorization frameworks including RMF, FedRAMP, and agency-specific processes, and can tailor our approach to meet your specific authorization requirements.",
  },
]

export default function GovernmentDefenseSolutionsPage() {
  const [activeSolution, setActiveSolution] = useState(governmentSolutions[0].id)

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
                <span className="text-white">Secure & Resilient</span>
                <br />
                <span className="bg-gradient-to-r from-[#ff3b30] to-[#ff5c52] bg-clip-text text-transparent">
                  Government & Defense
                </span>
                <br />
                <span className="text-white">IT Solutions</span>
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                From secure communications and cybersecurity to intelligence systems and mission-critical applications,
                we provide comprehensive IT services designed for the unique requirements of government and defense
                organizations.
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

          {/* Government icons overlay */}
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
                  <p className="text-sm text-gray-300">Cybersecurity</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-center"
                >
                  <Radio className="w-8 h-8 mx-auto mb-2 text-[#ff3b30]" />
                  <p className="text-sm text-gray-300">Communications</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-center hidden md:block"
                >
                  <Eye className="w-8 h-8 mx-auto mb-2 text-[#ff3b30]" />
                  <p className="text-sm text-gray-300">Intelligence</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="text-center hidden md:block"
                >
                  <Building2 className="w-8 h-8 mx-auto mb-2 text-[#ff3b30]" />
                  <p className="text-sm text-gray-300">Public Sector</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="text-center hidden lg:block"
                >
                  <Network className="w-8 h-8 mx-auto mb-2 text-[#ff3b30]" />
                  <p className="text-sm text-gray-300">Logistics</p>
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
                Comprehensive Government & Defense IT Solutions
              </h2>
              <p className="text-lg text-gray-600">
                In today&apos;s complex security landscape, government and defense organizations require specialized
                technology solutions that meet stringent security requirements while enabling mission success. Our
                solutions are designed specifically for the unique challenges and compliance requirements of public
                sector and defense environments.
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
                  <h3 className="text-xl font-bold text-[#1e2942] mb-2">Security-First Design</h3>
                  <p className="text-gray-600">
                    Solutions built with security as a foundational element, not an afterthought
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
                  <h3 className="text-xl font-bold text-[#1e2942] mb-2">Compliance Expertise</h3>
                  <p className="text-gray-600">
                    Deep understanding of government standards and regulatory requirements
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
                  <h3 className="text-xl font-bold text-[#1e2942] mb-2">Mission Resilience</h3>
                  <p className="text-gray-600">
                    Reliable systems designed to operate in challenging and contested environments
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
                      Why Government & Defense Organizations Need Specialized IT Solutions
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Government and defense organizations face unique challenges that require specialized technology
                      solutions. From stringent security requirements and complex compliance frameworks to the need for
                      interoperability with legacy systems and operation in contested environments, these organizations
                      require IT systems specifically designed to address their mission-critical needs.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                        </span>
                        <span className="text-gray-700">
                          <strong>Security & Compliance:</strong> Meet stringent security requirements and complex
                          regulatory frameworks
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                        </span>
                        <span className="text-gray-700">
                          <strong>Mission Assurance:</strong> Ensure reliable operation in challenging and contested
                          environments
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                        </span>
                        <span className="text-gray-700">
                          <strong>Legacy Integration:</strong> Connect modern systems with existing government
                          infrastructure
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-[#ff3b30]/10 p-1 rounded-full mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-[#ff3b30]" />
                        </span>
                        <span className="text-gray-700">
                          <strong>Specialized Requirements:</strong> Address unique operational needs and security
                          classifications
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
                        src="/placeholder.svg"
                        alt="Government & Defense IT Solutions"
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
                Our Government & Defense IT Solutions
              </h2>
              <p className="text-lg text-gray-600">
                We offer a comprehensive suite of IT solutions designed to address the unique challenges and security
                requirements of government and defense organizations.
              </p>
            </motion.div>

            <Tabs defaultValue={governmentSolutions[0].id} className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isSolutionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <TabsList className="w-full h-full flex md:flex-row flex-wrap justify-center gap-2 bg-[#fff5f5] rounded-full">
                  {governmentSolutions.map((solution) => (
                    <TabsTrigger
                      key={solution.id}
                      value={solution.id}
                      className="px-6 py-3 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:text-black data-[state=active]:shadow-md"
                      style={{
                        backgroundImage: `var(--state-active, none)`,
                        "--state-active": `linear-gradient(to right, ${
                          solution.id === "secure-communications"
                            ? "var(--blue-500), var(--indigo-600)"
                            : solution.id === "intelligence-surveillance"
                              ? "var(--green-500), var(--emerald-600)"
                              : solution.id === "cybersecurity"
                                ? "var(--red-500), var(--orange-500)"
                                : solution.id === "mission-critical"
                                  ? "var(--purple-500), var(--pink-500)"
                                  : solution.id === "digital-transformation"
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

              {governmentSolutions.map((solution) => (
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
                            solution.id === "secure-communications"
                              ? "var(--blue-500), var(--indigo-600)"
                              : solution.id === "intelligence-surveillance"
                                ? "var(--green-500), var(--emerald-600)"
                                : solution.id === "cybersecurity"
                                  ? "var(--red-500), var(--orange-500)"
                                  : solution.id === "mission-critical"
                                    ? "var(--purple-500), var(--pink-500)"
                                    : solution.id === "digital-transformation"
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
              <h2 className="text-3xl md:text-5xl font-bold text-[#1e2942] mb-6">Platforms We Support</h2>
              <p className="text-lg text-gray-600">
                We have extensive experience integrating with and developing for a wide range of government and defense
                platforms, ensuring seamless interoperability and compliance with platform-specific requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {supportedPlatforms.map((platform, index) => (
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
                Benefits of Our Government & Defense Solutions
              </h2>
              <p className="text-lg text-gray-600">
                Our specialized solutions deliver significant advantages for government and defense organizations,
                enhancing security, efficiency, and mission effectiveness.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
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
              <h2 className="text-3xl md:text-5xl font-bold text-[#1e2942] mb-6">Our Process</h2>
              <p className="text-lg text-gray-600">
                We follow a comprehensive, security-focused process tailored specifically for government and defense
                projects, ensuring compliance, security, and mission success at every stage.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              {processSteps.map((step, index) => (
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
                    {index < processSteps.length - 1 && (
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Government & Defense Impact</h2>
              <p className="text-lg text-gray-300">
                Our solutions deliver measurable results for government and defense organizations, enhancing security,
                efficiency, and mission effectiveness.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {governmentStats.map((stat, index) => (
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
              <h2 className="text-3xl md:text-5xl font-bold text-[#1e2942] mb-6">Government & Defense Case Studies</h2>
              <p className="text-lg text-gray-600">
                Explore how our solutions have helped government and defense organizations overcome challenges, enhance
                security, and achieve mission success.
              </p>
            </motion.div>

            <CaseStudies caseStudies={governmentCaseStudies} />
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
                We employ cutting-edge technologies specifically suited for government and defense applications,
                ensuring security, compliance, and mission effectiveness.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {governmentTechnologies.map((techCategory, index) => (
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
        <section ref={faqRef} className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-[#1e2942] mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Find answers to common questions about our government and defense IT solutions.
              </p>
            </motion.div>

            <FAQ faqs={governmentFAQs} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-[#1e2942] via-[#2a3a5f] to-[#364a7c] text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Enhance Your Government IT Capabilities?</h2>
              <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
                Contact us today to discuss your specific requirements and discover how our specialized government and
                defense IT solutions can help your organization achieve its mission objectives securely and efficiently.
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
                Get in touch with our government and defense solutions team to discuss your specific requirements and
                how we can help secure your mission-critical systems.
              </p>
            </motion.div>

            <ContactForm
              serviceOptions={[
                "Secure Communication Systems",
                "Intelligence & Surveillance",
                "Cybersecurity Solutions",
                "Mission-Critical Systems",
                "Public Sector Digital Transformation",
                "Defense Logistics & Supply Chain",
                "Other Government & Defense Solutions",
              ]}
            />
          </div>
        </section>
      </main>
    </>
  )
}