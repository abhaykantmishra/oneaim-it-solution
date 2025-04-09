"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Heart, Shield, Activity, FileText, Search, Zap, Code, Database, Users, CheckCircle2, Layers, Workflow, Globe, Settings, Stethoscope, Microscope, Pill, Brain, Clipboard, HospitalIcon as HospitalSquare, Dna, Clock } from 'lucide-react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CaseStudies from "@/components/case-studies"
import FAQ from "@/components/faq"
import ContactForm from "@/components/contact-form"

// Healthcare Solutions Data
const healthcareSolutions = [
  {
    id: "electronic-health-records",
    title: "Electronic Health Records",
    icon: <Clipboard className="w-6 h-6" />,
    description:
      "Implement comprehensive electronic health record systems that streamline patient data management, enhance clinical workflows, and improve care coordination. Our EHR solutions ensure data security, regulatory compliance, and seamless integration with existing healthcare systems.",
    features: [
      "Secure patient data management",
      "Clinical documentation workflows",
      "Medication management",
      "Order entry and results management",
      "Care plan development",
      "Interoperability with healthcare systems",
    ],
    technologies: ["FHIR", "HL7", "SMART on FHIR", "HIPAA-compliant storage", "Clinical decision support", "Analytics"],
    image: "/placeholder.svg",
    color: "from-teal-500 to-emerald-600",
    lightColor: "bg-teal-50",
    iconColor: "text-teal-500",
  },
  {
    id: "telehealth-solutions",
    title: "Telehealth Platforms",
    icon: <Stethoscope className="w-6 h-6" />,
    description:
      "Deploy secure, reliable telehealth platforms that connect patients with healthcare providers remotely. Our telehealth solutions enable virtual consultations, remote monitoring, and digital health services while ensuring patient privacy, data security, and seamless integration with clinical workflows.",
    features: [
      "Secure video consultations",
      "Remote patient monitoring",
      "Virtual waiting rooms",
      "Digital intake and assessment",
      "Integrated scheduling",
      "Mobile health applications",
    ],
    technologies: ["WebRTC", "HIPAA-compliant video", "Mobile health", "IoT integration", "Secure messaging", "Cloud infrastructure"],
    image: "/placeholder.svg",
    color: "from-blue-500 to-indigo-600",
    lightColor: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    id: "healthcare-analytics",
    title: "Healthcare Analytics",
    icon: <Activity className="w-6 h-6" />,
    description:
      "Leverage advanced analytics to transform healthcare data into actionable insights. Our healthcare analytics solutions help organizations improve clinical outcomes, optimize operations, enhance patient experiences, and drive strategic decision-making through data-driven approaches.",
    features: [
      "Clinical outcomes analysis",
      "Population health management",
      "Operational efficiency metrics",
      "Predictive analytics",
      "Risk stratification",
      "Performance dashboards",
    ],
    technologies: [
      "Machine Learning",
      "Predictive modeling",
      "Natural Language Processing",
      "Data visualization",
      "Big data processing",
      "HIPAA-compliant analytics",
    ],
    image: "/placeholder.svg",
    color: "from-purple-500 to-pink-500",
    lightColor: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    id: "medical-imaging",
    title: "Medical Imaging Solutions",
    icon: <Microscope className="w-6 h-6" />,
    description:
      "Implement advanced medical imaging systems that enhance diagnostic capabilities and streamline radiology workflows. Our solutions include PACS (Picture Archiving and Communication Systems), advanced visualization tools, and AI-assisted diagnostics to improve clinical decision-making.",
    features: [
      "Enterprise imaging platforms",
      "DICOM-compliant storage",
      "Advanced visualization",
      "AI-assisted diagnostics",
      "Radiology workflow optimization",
      "Cross-department image sharing",
    ],
    technologies: [
      "DICOM",
      "PACS/VNA",
      "Computer Vision",
      "Deep Learning",
      "Cloud storage",
      "Zero-footprint viewers",
    ],
    image: "/placeholder.svg",
    color: "from-red-500 to-orange-500",
    lightColor: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    id: "patient-engagement",
    title: "Patient Engagement Platforms",
    icon: <Users className="w-6 h-6" />,
    description:
      "Enhance patient engagement with comprehensive digital platforms that empower patients to actively participate in their healthcare journey. Our solutions include patient portals, mobile applications, and self-service tools that improve communication, education, and satisfaction.",
    features: [
      "Patient portals",
      "Mobile health applications",
      "Appointment scheduling",
      "Medication reminders",
      "Health education resources",
      "Secure messaging with providers",
    ],
    technologies: [
      "Mobile development",
      "User experience design",
      "Secure messaging",
      "Patient authentication",
      "Integration APIs",
      "Responsive web design",
    ],
    image: "/placeholder.svg",
    color: "from-yellow-500 to-amber-600",
    lightColor: "bg-yellow-50",
    iconColor: "text-yellow-500",
  },
  {
    id: "healthcare-interoperability",
    title: "Healthcare Interoperability",
    icon: <Dna className="w-6 h-6" />,
    description:
      "Enable seamless data exchange between healthcare systems with our interoperability solutions. We implement standards-based approaches to connect disparate systems, facilitate care coordination, and ensure that critical health information is available when and where it's needed.",
    features: [
      "Health information exchange",
      "API-based integration",
      "Standards compliance",
      "Data normalization",
      "Consent management",
      "Cross-organization sharing",
    ],
    technologies: ["FHIR", "HL7", "API gateways", "Terminology services", "Consent frameworks", "Identity management"],
    image: "/placeholder.svg",
    color: "from-cyan-500 to-blue-500",
    lightColor: "bg-cyan-50",
    iconColor: "text-cyan-500",
  },
]

// Platforms we support
const supportedPlatforms = [
  {
    name: "Epic",
    icon: "/placeholder.svg",
    description: "Integrate with Epic EHR systems and modules.",
  },
  {
    name: "Cerner",
    icon: "/placeholder.svg",
    description: "Connect with Cerner Millennium and PowerChart.",
  },
  {
    name: "Allscripts",
    icon: "/placeholder.svg",
    description: "Support for Allscripts Professional and Sunrise.",
  },
  {
    name: "MEDITECH",
    icon: "/placeholder.svg",
    description: "Integration with MEDITECH Expanse and Magic.",
  },
  {
    name: "athenahealth",
    icon: "/placeholder.svg",
    description: "Connect with athenaOne and athenaClinicals.",
  },
  {
    name: "Custom Systems",
    icon: "/placeholder.svg",
    description: "Develop for proprietary healthcare platforms.",
  },
]

// Benefits data
const benefits = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enhanced Security & Compliance",
    description:
      "Implement robust security measures that protect sensitive patient data while ensuring compliance with HIPAA, HITECH, and other healthcare regulations.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Operational Efficiency",
    description:
      "Streamline clinical and administrative workflows, reduce manual tasks, and optimize resource allocation through intelligent automation.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Improved Patient Outcomes",
    description:
      "Enhance clinical decision-making, reduce medical errors, and improve care coordination through data-driven insights and advanced analytics.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Enhanced Patient Experience",
    description:
      "Deliver more responsive, accessible, and personalized care through digital engagement tools and streamlined patient journeys.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Data-Driven Insights",
    description:
      "Transform healthcare data into actionable intelligence that drives clinical improvements, operational efficiencies, and strategic decisions.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Accelerated Innovation",
    description:
      "Rapidly deploy and scale new healthcare technologies and services to meet evolving patient needs and market demands.",
  },
]

// Process steps
const processSteps = [
  {
    number: "01",
    title: "Discovery & Requirements Analysis",
    description:
      "We begin by understanding your healthcare organization's specific clinical workflows, compliance requirements, and technical environment. We analyze existing systems, user needs, and organizational goals to establish a solid foundation for your solution.",
    icon: <Search className="w-8 h-8" />,
  },
  {
    number: "02",
    title: "Compliance & Security Planning",
    description:
      "We develop a comprehensive security and compliance strategy aligned with healthcare regulations (HIPAA, HITECH, etc.). This includes security controls, privacy protections, and compliance documentation to ensure your solution meets all regulatory requirements.",
    icon: <Shield className="w-8 h-8" />,
  },
  {
    number: "03",
    title: "Solution Architecture & Design",
    description:
      "Our experts design robust system architectures tailored to healthcare requirements. We develop technical specifications, interoperability frameworks, and create prototypes to validate concepts while ensuring alignment with clinical workflows and patient care needs.",
    icon: <Layers className="w-8 h-8" />,
  },
  {
    number: "04",
    title: "Secure Development & Integration",
    description:
      "Our development team builds your solution using secure coding practices and rigorous quality standards. We integrate with existing healthcare systems and ensure interoperability while maintaining data security and patient privacy throughout.",
    icon: <Code className="w-8 h-8" />,
  },
  {
    number: "05",
    title: "Comprehensive Testing & Validation",
    description:
      "We conduct thorough testing including security assessments, performance testing, and clinical validation. This includes user acceptance testing with clinicians, compliance verification, and validation against healthcare standards and requirements.",
    icon: <CheckCircle2 className="w-8 h-8" />,
  },
  {
    number: "06",
    title: "Deployment & Training",
    description:
      "We manage the secure deployment process and provide comprehensive training for clinical and administrative staff. Our approach includes phased implementation, go-live support, and knowledge transfer to ensure successful adoption.",
    icon: <Workflow className="w-8 h-8" />,
  },
  {
    number: "07",
    title: "Ongoing Support & Evolution",
    description:
      "Our relationship continues after deployment with ongoing support, maintenance, and continuous improvement services. We provide regular updates, compliance monitoring, and help your solution evolve with changing healthcare requirements and technologies.",
    icon: <Settings className="w-8 h-8" />,
  },
]

// Healthcare statistics
const healthcareStats = [
  {
    value: "42%",
    label: "Reduction in Documentation Time",
    description: "Our EHR optimizations significantly reduce clinician documentation burden.",
  },
  {
    value: "68%",
    label: "Increase in Patient Engagement",
    description: "Digital patient platforms dramatically improve engagement and satisfaction.",
  },
  {
    value: "99.99%",
    label: "System Uptime",
    description: "Our healthcare solutions maintain exceptional reliability for critical care.",
  },
  {
    value: "3.5x",
    label: "ROI on Healthcare IT",
    description: "Our clients experience strong returns on their technology investments.",
  },
]

// Case studies data for healthcare
const healthcareCaseStudies = [
  {
    title: "Regional Health System EHR Optimization",
    industry: "Healthcare",
    description:
      "Implemented comprehensive EHR optimization for a 12-hospital regional health system, enhancing clinical workflows, reducing documentation time, and improving care coordination. The solution included custom clinical templates, streamlined order sets, and integrated decision support tools, resulting in a 42% reduction in documentation time and 35% improvement in clinician satisfaction scores.",
    metrics: [
      { label: "Documentation Time", value: "-42%" },
      { label: "Clinician Satisfaction", value: "+35%" },
      { label: "Order Completion Time", value: "-28%" },
    ],
    image: "/placeholder.svg"
  },
  {
    title: "Telehealth Platform Implementation",
    industry: "Healthcare",
    description:
      "Developed and deployed an enterprise telehealth platform for a large healthcare network, enabling virtual care delivery across multiple specialties. The solution included secure video consultations, remote monitoring integration, and EHR connectivity, resulting in 68% increase in patient access, 24% reduction in no-show rates, and $4.2M annual savings in operational costs.",
    metrics: [
      { label: "Patient Access", value: "+68%" },
      { label: "No-show Reduction", value: "-24%" },
      { label: "Annual Savings", value: "$4.2M" },
    ],
    image: "/placeholder.svg",
  },
  {
    title: "Healthcare Analytics Platform",
    industry: "Healthcare",
    description:
      "Implemented an advanced healthcare analytics platform for a major academic medical center, integrating clinical, operational, and financial data to drive improvements. The solution provided real-time dashboards, predictive models for patient deterioration, and population health insights, resulting in 15% reduction in readmissions, 22% improvement in resource utilization, and enhanced quality metrics across service lines.",
    metrics: [
      { label: "Readmission Reduction", value: "15%" },
      { label: "Resource Utilization", value: "+22%" },
      { label: "Quality Metrics", value: "+18%" },
    ],
    image: "/placeholder.svg"
  },
]

// Healthcare technologies
const healthcareTechnologies = [
  {
    category: "Clinical Systems",
    items: [
      "Electronic Health Records",
      "Clinical Decision Support",
      "Computerized Provider Order Entry",
      "Medication Management",
      "Clinical Documentation",
      "Care Planning Tools",
    ],
  },
  {
    category: "Interoperability",
    items: [
      "FHIR Implementation",
      "HL7 Integration",
      "API Management",
      "Health Information Exchange",
      "Terminology Services",
      "Data Normalization",
    ],
  },
  {
    category: "Data & Analytics",
    items: [
      "Clinical Analytics",
      "Population Health",
      "Predictive Modeling",
      "Natural Language Processing",
      "Machine Learning",
      "Real-time Dashboards",
    ],
  },
  {
    category: "Security & Compliance",
    items: [
      "HIPAA Compliance",
      "Identity Management",
      "Consent Management",
      "Secure Communication",
      "Audit Logging",
      "Data Encryption",
    ],
  },
]

// Healthcare FAQ data
const healthcareFAQs = [
  {
    question: "How do you ensure HIPAA compliance in your healthcare solutions?",
    answer:
      "We implement a comprehensive approach to HIPAA compliance that addresses all aspects of the regulation. This includes technical safeguards such as encryption for data at rest and in transit, access controls based on role-based permissions, audit logging of all PHI access, and secure authentication mechanisms. We also implement physical safeguards for our infrastructure and administrative safeguards through policies and procedures. Our development process incorporates privacy by design principles, and we conduct regular security assessments and penetration testing. Additionally, we provide Business Associate Agreements (BAAs) and maintain documentation to support our clients' compliance efforts, including security risk analyses and incident response plans.",
  },
  {
    question: "Can your solutions integrate with our existing EHR system?",
    answer:
      "Yes, our healthcare solutions are designed with interoperability as a core principle. We have experience integrating with all major EHR systems including Epic, Cerner, Allscripts, MEDITECH, athenahealth, and many others. We utilize healthcare standards like HL7, FHIR, and DICOM to ensure seamless data exchange. Our integration approaches include API-based connectivity, direct database integration where appropriate, interface engines, and middleware solutions. We can implement real-time integrations for critical workflows and batch processing for larger data sets. Our team works closely with your IT department and EHR vendor to ensure proper connectivity while maintaining system performance and data integrity.",
  },
  {
    question: "How do you approach clinician adoption and training for new healthcare technology?",
    answer:
      "We recognize that clinician adoption is critical to the success of any healthcare technology implementation. Our approach begins with involving clinical stakeholders early in the design process to ensure the solution aligns with their workflows and needs. We employ a multi-faceted training strategy that includes role-based training programs, super-user development, hands-on workshops, and just-in-time learning resources. We create customized training materials including quick reference guides, video tutorials, and simulation environments. Our implementation includes a phased approach with adequate support during go-live, including at-the-elbow support from clinical specialists. We also establish feedback mechanisms to continuously improve the system based on user experience, and we measure adoption metrics to identify areas needing additional support.",
  },
  {
    question: "What experience do you have with healthcare data analytics and population health?",
    answer:
      "We have extensive experience implementing healthcare analytics and population health solutions across various healthcare settings. Our expertise includes developing clinical data warehouses that aggregate data from multiple sources, implementing risk stratification models to identify high-risk patients, creating dashboards for quality measures and regulatory reporting, and developing predictive models for clinical outcomes. We've worked with organizations to implement care gap analyses, patient outreach programs, and chronic disease management solutions. Our analytics solutions support value-based care initiatives by providing insights into cost, quality, and utilization patterns. We employ healthcare-specific data models that understand the complexities of clinical data and ensure that analytics are clinically relevant and actionable for care teams.",
  },
  {
    question: "How do you handle patient consent and data sharing in your solutions?",
    answer:
      "We implement comprehensive consent management capabilities that respect patient preferences while enabling appropriate data sharing for care coordination. Our solutions include granular consent models that allow patients to specify which data elements can be shared and with whom. We support both opt-in and opt-out models depending on regulatory requirements and organizational preferences. Our systems maintain detailed audit trails of all consent decisions and data access events. We implement technical safeguards to enforce consent directives throughout the data lifecycle, including integration with identity management systems for proper authentication and authorization. Our solutions also support dynamic consent models where patients can modify their preferences over time, and we ensure that these changes are propagated appropriately across connected systems.",
  },
  {
    question: "What security measures do you implement for telehealth and remote care solutions?",
    answer:
      "Our telehealth and remote care solutions incorporate multiple layers of security to protect patient data and ensure privacy during virtual care delivery. We implement end-to-end encryption for all video and audio communications, secure authentication for both patients and providers, and session controls that prevent unauthorized access. Our mobile applications employ device-level security features and secure storage for any locally cached data. For remote monitoring solutions, we implement secure device registration, encrypted data transmission, and validation of data integrity. We conduct regular security assessments specifically focused on telehealth workflows and remote access scenarios. Our solutions also include privacy features such as virtual waiting rooms, session notifications, and the ability for patients to control camera and microphone access during consultations.",
  },
  {
    question: "How do you support healthcare organizations in achieving regulatory compliance?",
    answer:
      "We provide comprehensive support for healthcare regulatory compliance across multiple frameworks including HIPAA, HITECH, 21st Century Cures Act, and state-specific requirements. Our solutions include built-in compliance features such as audit logging, access controls, data encryption, and breach notification capabilities. We assist with documentation requirements including security risk analyses, policies and procedures, and system security plans. For interoperability requirements, we implement standards-based approaches that align with information blocking rules and patient access provisions. Our quality reporting solutions support regulatory submissions for programs like MIPS, Promoting Interoperability, and quality measure reporting. We stay current with evolving regulations and proactively update our solutions to address new requirements, providing our clients with guidance on implementation approaches and compliance strategies.",
  },
]

export default function HealthcareSolutionsPage() {
  const [activeSolution, setActiveSolution] = useState(healthcareSolutions[0].id)

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
          className="w-full min-h-[91vh] py-16 md:py-32 bg-gradient-to-br from-[#1a4d5c] via-[#206676] to-[#2a8494] text-white relative overflow-hidden"
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
                <span className="text-white">Innovative & Secure</span>
                <br />
                <span className="bg-gradient-to-r from-[#4ade80] to-[#22c55e] bg-clip-text text-transparent">
                  Healthcare
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
                From electronic health records and telehealth to healthcare analytics and patient engagement, we provide
                comprehensive IT services designed for the unique requirements of modern healthcare organizations.
              </motion.p>
              <motion.div
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <a
                  href="#contact"
                  className="bg-[#4ade80] hover:bg-[#22c55e] text-gray-900 font-medium px-8 py-4 rounded-full text-lg transition-all"
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
              className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-[#4ade80]/20 to-[#22c55e]/20 opacity-60 blur-3xl"
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
              className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 opacity-60 blur-3xl"
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
              className="absolute top-2/3 right-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-60 blur-3xl"
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

          {/* Healthcare icons overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/30 to-transparent py-6">
            <div className="container mx-auto px-4">
              <div className="flex justify-center gap-8 md:gap-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-center"
                >
                  <Clipboard className="w-8 h-8 mx-auto mb-2 text-[#4ade80]" />
                  <p className="text-sm text-gray-300">EHR Systems</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-center"
                >
                  <Stethoscope className="w-8 h-8 mx-auto mb-2 text-[#4ade80]" />
                  <p className="text-sm text-gray-300">Telehealth</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-center hidden md:block"
                >
                  <Activity className="w-8 h-8 mx-auto mb-2 text-[#4ade80]" />
                  <p className="text-sm text-gray-300">Analytics</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="text-center hidden md:block"
                >
                  <Users className="w-8 h-8 mx-auto mb-2 text-[#4ade80]" />
                  <p className="text-sm text-gray-300">Patient Engagement</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="text-center hidden lg:block"
                >
                  <Dna className="w-8 h-8 mx-auto mb-2 text-[#4ade80]" />
                  <p className="text-sm text-gray-300">Interoperability</p>
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
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a4d5c] mb-6">
                Comprehensive Healthcare IT Solutions
              </h2>
              <p className="text-lg text-gray-600">
                In today&apos;s complex healthcare landscape, organizations require specialized technology solutions that
                enhance patient care, ensure regulatory compliance, and optimize clinical operations. Our solutions are
                designed specifically for the unique challenges of modern healthcare environments.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  className="bg-[#f8f9fc] p-6 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-[#4ade80]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                    <Shield className="w-6 h-6 text-[#4ade80]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a4d5c] mb-2">Security-First Design</h3>
                  <p className="text-gray-600">
                    Solutions built with security and HIPAA compliance as foundational elements
                  </p>
                </motion.div>
                <motion.div
                  className="bg-[#f8f9fc] p-6 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-[#4ade80]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                    <FileText className="w-6 h-6 text-[#4ade80]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a4d5c] mb-2">Clinical Expertise</h3>
                  <p className="text-gray-600">
                    Deep understanding of healthcare workflows and clinical requirements
                  </p>
                </motion.div>
                <motion.div
                  className="bg-[#f8f9fc] p-6 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-[#4ade80]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                    <HospitalSquare className="w-6 h-6 text-[#4ade80]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a4d5c] mb-2">Care Continuity</h3>
                  <p className="text-gray-600">
                    Reliable systems designed to support continuous patient care delivery
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
                    <h3 className="text-2xl md:text-3xl font-bold text-[#1a4d5c] mb-4">
                      Why Healthcare Organizations Need Specialized IT Solutions
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Healthcare organizations face unique challenges that require specialized technology solutions. From
                      stringent privacy regulations and complex clinical workflows to the need for interoperability and
                      patient engagement, healthcare providers require IT systems specifically designed to address their
                      mission-critical needs.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="bg-[#4ade80]/10 p-1 rounded-full mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                        </span>
                        <span className="text-gray-700">
                          <strong>Privacy & Compliance:</strong> Meet HIPAA requirements and protect sensitive patient
                          data
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-[#4ade80]/10 p-1 rounded-full mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                        </span>
                        <span className="text-gray-700">
                          <strong>Clinical Workflows:</strong> Support complex care delivery processes and
                          documentation
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-[#4ade80]/10 p-1 rounded-full mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                        </span>
                        <span className="text-gray-700">
                          <strong>Interoperability:</strong> Connect disparate systems for coordinated care delivery
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-[#4ade80]/10 p-1 rounded-full mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                        </span>
                        <span className="text-gray-700">
                          <strong>Patient Engagement:</strong> Empower patients with secure access to their health
                          information
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
                        alt="Healthcare IT Solutions"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                    </motion.div>
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#4ade80]/10 rounded-full -z-10"></div>
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-500/10 rounded-full -z-10"></div>
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
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a4d5c] mb-6">
                Our Healthcare IT Solutions
              </h2>
              <p className="text-lg text-gray-600">
                We offer a comprehensive suite of IT solutions designed to address the unique challenges and regulatory
                requirements of modern healthcare organizations.
              </p>
            </motion.div>

            <Tabs defaultValue={healthcareSolutions[0].id} className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isSolutionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <TabsList className="w-full h-full flex md:flex-row flex-wrap justify-center gap-2 bg-[#f0fdf4] rounded-full">
                  {healthcareSolutions.map((solution) => (
                    <TabsTrigger
                      key={solution.id}
                      value={solution.id}
                      className="px-6 py-3 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:text-black data-[state=active]:shadow-md"
                      style={{
                        backgroundImage: `var(--state-active, none)`,
                        "--state-active": `linear-gradient(to right, ${
                          solution.id === "electronic-health-records"
                            ? "var(--teal-500), var(--emerald-600)"
                            : solution.id === "telehealth-solutions"
                              ? "var(--blue-500), var(--indigo-600)"
                              : solution.id === "healthcare-analytics"
                                ? "var(--purple-500), var(--pink-500)"
                                : solution.id === "medical-imaging"
                                  ? "var(--red-500), var(--orange-500)"
                                  : solution.id === "patient-engagement"
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

              {healthcareSolutions.map((solution) => (
                <TabsContent key={solution.id} value={solution.id} className="mt-2 md:mt-4 mx-4">
                  <motion.div
                    className="grid md:grid-cols-2 gap-8 items-center"
                    initial={{ opacity: 0, x: 0 }}
                    animate={isSolutionsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  >
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#1a4d5c]">{solution.title}</h3>
                      <p className="text-base mb-6 text-gray-700">{solution.description}</p>

                      <h4 className="text-lg font-semibold text-[#1a4d5c] mb-4">Key Features:</h4>
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
                        <h4 className="text-lg font-semibold text-[#1a4d5c] mb-3">Technologies:</h4>
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
                            solution.id === "electronic-health-records"
                              ? "var(--teal-500), var(--emerald-600)"
                              : solution.id === "telehealth-solutions"
                                ? "var(--blue-500), var(--indigo-600)"
                                : solution.id === "healthcare-analytics"
                                  ? "var(--purple-500), var(--pink-500)"
                                  : solution.id === "medical-imaging"
                                    ? "var(--red-500), var(--orange-500)"
                                    : solution.id === "patient-engagement"
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
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a4d5c] mb-6">Platforms We Support</h2>
              <p className="text-lg text-gray-600">
                We have extensive experience integrating with and developing for a wide range of healthcare platforms,
                ensuring seamless interoperability and compliance with platform-specific requirements.
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
                  <h3 className="text-lg font-semibold text-[#1a4d5c] mb-2">{platform.name}</h3>
                  <p className="text-sm text-gray-600">{platform.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section ref={benefitsRef} className="w-full py-16 md:py-24 bg-[#f0fdf4]">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a4d5c] mb-6">
                Benefits of Our Healthcare Solutions
              </h2>
              <p className="text-lg text-gray-600">
                Our specialized solutions deliver significant advantages for healthcare organizations, enhancing patient
                care, operational efficiency, and regulatory compliance.
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
                  <div className="bg-[#4ade80]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1a4d5c] mb-4">{benefit.title}</h3>
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
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a4d5c] mb-6">Our Process</h2>
              <p className="text-lg text-gray-600">
                We follow a comprehensive, security-focused process tailored specifically for healthcare projects,
                ensuring compliance, clinical validation, and successful implementation at every stage.
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
                    <div className="bg-[#4ade80] text-white text-xl font-bold rounded-full w-14 h-14 flex items-center justify-center shrink-0">
                      {step.number}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="w-0.5 bg-gray-200 h-full mt-4 mb-4 md:h-24"></div>
                    )}
                  </div>

                  {/* Step content */}
                  <div className="bg-[#f0fdf4] rounded-xl p-6 md:p-8 flex-1">
                    <div className="flex items-start gap-4">
                      <div className="bg-white p-3 rounded-full shadow-sm hidden md:flex">{step.icon}</div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#1a4d5c] mb-3">{step.title}</h3>
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
        <section ref={statsRef} className="w-full py-16 md:py-24 bg-[#1a4d5c] text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Healthcare Impact</h2>
              <p className="text-lg text-gray-300">
                Our solutions deliver measurable results for healthcare organizations, enhancing clinical outcomes,
                operational efficiency, and patient satisfaction.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {healthcareStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <p className="text-4xl md:text-5xl font-bold text-[#4ade80] mb-4">{stat.value}</p>
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
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a4d5c] mb-6">Healthcare Case Studies</h2>
              <p className="text-lg text-gray-600">
                Explore how our solutions have helped healthcare organizations overcome challenges, enhance patient care,
                and achieve operational excellence.
              </p>
            </motion.div>

            <CaseStudies caseStudies={healthcareCaseStudies} />
          </div>
        </section>

        {/* Technologies Section */}
        <section className="w-full py-16 md:py-24 bg-[#f0fdf4]">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a4d5c] mb-6">Technologies We Leverage</h2>
              <p className="text-lg text-gray-600">
                We employ cutting-edge technologies specifically suited for healthcare applications, ensuring security,
                compliance, and clinical effectiveness.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {healthcareTechnologies.map((techCategory, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <h3 className="text-xl font-bold text-[#1a4d5c] mb-4">{techCategory.category}</h3>
                  <ul className="space-y-2">
                    {techCategory.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className="bg-[#4ade80]/10 p-1 rounded-full mt-0.5">
                          <CheckCircle2 className="w-3 h-3 text-[#4ade80]" />
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
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a4d5c] mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Find answers to common questions about our healthcare IT solutions.
              </p>
            </motion.div>

            <FAQ faqs={healthcareFAQs} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-[#1a4d5c] via-[#206676] to-[#2a8494] text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Healthcare IT?</h2>
              <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
                Contact us today to discuss your specific requirements and discover how our specialized healthcare IT
                solutions can help your organization improve patient care, enhance efficiency, and ensure compliance.
              </p>
              <motion.a
                href="#contact"
                className="bg-[#4ade80] hover:bg-[#22c55e] text-gray-900 font-medium px-8 py-4 rounded-full text-lg inline-block transition-colors"
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
          {/* <div className="container mx-auto px-4"> */}
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a4d5c] mb-6">Contact Us</h2>
              <p className="text-lg text-gray-600">
                Get in touch with our healthcare solutions team to discuss your specific requirements and
                how we can help transform your healthcare IT systems.
              </p>
            </motion.div>

            <ContactForm
              serviceOptions={[
                "Electronic Health Records",
                "Telehealth Platforms",
                "Healthcare Analytics",
                "Medical Imaging Solutions",
                "Patient Engagement Platforms",
                "Healthcare Interoperability",
                "Other Healthcare Solutions",
              ]}
            />
          </div>
        </section>
      </main>
    </>
  );
}
