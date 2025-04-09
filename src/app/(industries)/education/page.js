"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import {
  GraduationCap,
  Shield,
  BookOpen,
  FileText,
  Search,
  Zap,
  Code,
  Database,
  Users,
  CheckCircle2,
  Layers,
  Workflow,
  Settings,
  School,
  BarChart3,
  Laptop,
  Puzzle,
  BrainCircuit,
  Clock,
} from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CaseStudies from "@/components/case-studies"
import FAQ from "@/components/faq"
import ContactForm from "@/components/contact-form"

// Education Solutions Data
const educationSolutions = [
  {
    id: "learning-management",
    title: "Learning Management Systems",
    icon: <BookOpen className="w-6 h-6" />,
    description:
      "Implement comprehensive learning management systems that streamline course delivery, enhance student engagement, and simplify administrative tasks. Our LMS solutions ensure secure access, personalized learning paths, and seamless integration with existing educational systems.",
    features: [
      "Course creation and management",
      "Student progress tracking",
      "Assessment and grading tools",
      "Interactive content delivery",
      "Learning analytics",
      "Mobile learning support",
    ],
    technologies: [
      "Cloud-based LMS",
      "SCORM/xAPI",
      "Adaptive learning",
      "Microlearning",
      "Gamification",
      "Video streaming",
    ],
    image: "/placeholder.svg",
    color: "from-blue-500 to-indigo-600",
    lightColor: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    id: "student-information",
    title: "Student Information Systems",
    icon: <GraduationCap className="w-6 h-6" />,
    description:
      "Deploy robust student information systems that centralize student data, streamline administrative processes, and enhance communication between students, parents, and educators. Our SIS solutions provide comprehensive student records management, enrollment tracking, and reporting capabilities.",
    features: [
      "Student records management",
      "Enrollment and registration",
      "Attendance tracking",
      "Grade management",
      "Transcript generation",
      "Parent/guardian portals",
    ],
    technologies: [
      "Database management",
      "API integration",
      "Workflow automation",
      "Reporting tools",
      "Mobile access",
      "Data security",
    ],
    image: "/placeholder.svg",
    color: "from-purple-500 to-pink-500",
    lightColor: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    id: "education-analytics",
    title: "Education Analytics",
    icon: <BarChart3 className="w-6 h-6" />,
    description:
      "Leverage advanced analytics to transform educational data into actionable insights. Our education analytics solutions help institutions improve student outcomes, optimize resource allocation, enhance teaching effectiveness, and drive strategic decision-making through data-driven approaches.",
    features: [
      "Student performance analytics",
      "Predictive modeling for at-risk students",
      "Resource utilization analysis",
      "Curriculum effectiveness metrics",
      "Enrollment trend forecasting",
      "Institutional performance dashboards",
    ],
    technologies: [
      "Machine Learning",
      "Predictive analytics",
      "Data visualization",
      "Big data processing",
      "Statistical modeling",
      "Natural Language Processing",
    ],
    image: "/placeholder.svg",
    color: "from-yellow-500 to-amber-600",
    lightColor: "bg-yellow-50",
    iconColor: "text-yellow-500",
  },
  {
    id: "virtual-classrooms",
    title: "Virtual Classroom Solutions",
    icon: <Laptop className="w-6 h-6" />,
    description:
      "Create engaging virtual learning environments that connect students and educators regardless of location. Our virtual classroom solutions provide interactive video conferencing, collaborative tools, and immersive learning experiences that enhance remote and hybrid education models.",
    features: [
      "HD video conferencing",
      "Interactive whiteboards",
      "Breakout rooms",
      "Screen sharing and recording",
      "Real-time collaboration tools",
      "Virtual hands-on activities",
    ],
    technologies: [
      "WebRTC",
      "Cloud infrastructure",
      "Collaborative software",
      "Video optimization",
      "Interactive content",
      "Mobile compatibility",
    ],
    image: "/placeholder.svg",
    color: "from-green-500 to-emerald-600",
    lightColor: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    id: "adaptive-learning",
    title: "Adaptive Learning Platforms",
    icon: <BrainCircuit className="w-6 h-6" />,
    description:
      "Implement personalized learning experiences with adaptive platforms that adjust to individual student needs and learning styles. Our adaptive learning solutions use AI and data analytics to create customized learning paths, provide targeted interventions, and optimize educational outcomes.",
    features: [
      "Personalized learning paths",
      "Real-time skill assessment",
      "Adaptive content delivery",
      "Mastery-based progression",
      "Targeted intervention recommendations",
      "Learning style recognition",
    ],
    technologies: [
      "Artificial Intelligence",
      "Machine Learning",
      "Cognitive modeling",
      "Content sequencing",
      "Knowledge mapping",
      "Adaptive algorithms",
    ],
    image: "/placeholder.svg",
    color: "from-red-500 to-orange-500",
    lightColor: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    id: "education-integration",
    title: "Education System Integration",
    icon: <Puzzle className="w-6 h-6" />,
    description:
      "Enable seamless data flow between educational systems with our integration solutions. We implement standards-based approaches to connect disparate systems, facilitate information sharing, and ensure that critical educational data is available when and where it's needed.",
    features: [
      "Cross-platform data exchange",
      "API-based integration",
      "Standards compliance",
      "Single sign-on implementation",
      "Data synchronization",
      "Legacy system connectivity",
    ],
    technologies: [
      "API gateways",
      "Data mapping",
      "ETL processes",
      "Identity management",
      "Middleware",
      "Microservices",
    ],
    image: "/placeholder.svg",
    color: "from-cyan-500 to-blue-500",
    lightColor: "bg-cyan-50",
    iconColor: "text-cyan-500",
  },
]

// Platforms we support
const supportedPlatforms = [
  {
    name: "Canvas",
    icon: "/placeholder.svg",
    description: "Integrate with Canvas LMS for enhanced functionality.",
  },
  {
    name: "Blackboard",
    icon: "/placeholder.svg",
    description: "Connect with Blackboard Learn and Collaborate.",
  },
  {
    name: "Moodle",
    icon: "/placeholder.svg",
    description: "Extend and enhance Moodle-based learning environments.",
  },
  {
    name: "PowerSchool",
    icon: "/placeholder.svg",
    description: "Integrate with PowerSchool SIS and analytics.",
  },
  {
    name: "Google Classroom",
    icon: "/placeholder.svg",
    description: "Enhance Google Classroom with additional capabilities.",
  },
  {
    name: "Custom Systems",
    icon: "/placeholder.svg",
    description: "Develop for proprietary educational platforms.",
  },
]

// Benefits data
const benefits = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enhanced Data Security",
    description:
      "Implement robust security measures that protect sensitive student data while ensuring compliance with FERPA, COPPA, and other educational privacy regulations.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Operational Efficiency",
    description:
      "Streamline administrative processes, reduce manual tasks, and optimize resource allocation through intelligent automation and workflow optimization.",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Improved Learning Outcomes",
    description:
      "Enhance student achievement through personalized learning experiences, data-driven instruction, and targeted interventions based on real-time analytics.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Enhanced Engagement",
    description:
      "Deliver more interactive, accessible, and personalized educational experiences that increase student motivation and participation.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Data-Driven Insights",
    description:
      "Transform educational data into actionable intelligence that drives instructional improvements, operational efficiencies, and strategic decisions.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Time-Saving Automation",
    description:
      "Free educators and administrators from routine tasks through intelligent automation, allowing more focus on teaching and student support.",
  },
]

// Process steps
const processSteps = [
  {
    number: "01",
    title: "Discovery & Requirements Analysis",
    description:
      "We begin by understanding your educational institution's specific needs, workflows, and technical environment. We analyze existing systems, stakeholder requirements, and organizational goals to establish a solid foundation for your solution.",
    icon: <Search className="w-8 h-8" />,
  },
  {
    number: "02",
    title: "Privacy & Security Planning",
    description:
      "We develop a comprehensive security and privacy strategy aligned with educational regulations (FERPA, COPPA, etc.). This includes security controls, privacy protections, and compliance documentation to ensure your solution meets all regulatory requirements.",
    icon: <Shield className="w-8 h-8" />,
  },
  {
    number: "03",
    title: "Solution Architecture & Design",
    description:
      "Our experts design robust system architectures tailored to educational requirements. We develop technical specifications, integration frameworks, and create prototypes to validate concepts while ensuring alignment with teaching and learning needs.",
    icon: <Layers className="w-8 h-8" />,
  },
  {
    number: "04",
    title: "Secure Development & Integration",
    description:
      "Our development team builds your solution using secure coding practices and rigorous quality standards. We integrate with existing educational systems and ensure interoperability while maintaining data security and student privacy throughout.",
    icon: <Code className="w-8 h-8" />,
  },
  {
    number: "05",
    title: "Comprehensive Testing & Validation",
    description:
      "We conduct thorough testing including security assessments, performance testing, and educational validation. This includes user acceptance testing with educators and administrators, compliance verification, and validation against educational standards.",
    icon: <CheckCircle2 className="w-8 h-8" />,
  },
  {
    number: "06",
    title: "Deployment & Training",
    description:
      "We manage the secure deployment process and provide comprehensive training for faculty, staff, and administrators. Our approach includes phased implementation, go-live support, and knowledge transfer to ensure successful adoption.",
    icon: <Workflow className="w-8 h-8" />,
  },
  {
    number: "07",
    title: "Ongoing Support & Evolution",
    description:
      "Our relationship continues after deployment with ongoing support, maintenance, and continuous improvement services. We provide regular updates, compliance monitoring, and help your solution evolve with changing educational requirements and technologies.",
    icon: <Settings className="w-8 h-8" />,
  },
]

// Education statistics
const educationStats = [
  {
    value: "38%",
    label: "Increase in Student Engagement",
    description: "Our educational platforms significantly boost student participation and motivation.",
  },
  {
    value: "45%",
    label: "Reduction in Administrative Time",
    description: "Automation dramatically improves efficiency for educational staff.",
  },
  {
    value: "99.9%",
    label: "System Uptime",
    description: "Our education solutions maintain exceptional reliability for continuous learning.",
  },
  {
    value: "3.2x",
    label: "ROI on EdTech Investment",
    description: "Our clients experience strong returns on their technology investments.",
  },
]

// Case studies data for education
const educationCaseStudies = [
  {
    title: "University LMS Implementation",
    industry: "Higher Education",
    description:
      "Implemented a comprehensive learning management system for a large university with 25,000+ students, enhancing course delivery, student engagement, and administrative efficiency. The solution included custom integrations with existing systems, mobile learning capabilities, and advanced analytics, resulting in a 38% increase in student engagement and 42% improvement in course completion rates.",
    metrics: [
      { label: "Student Engagement", value: "+38%" },
      { label: "Course Completion", value: "+42%" },
      { label: "Faculty Satisfaction", value: "4.7/5" },
    ],
    image: "/placeholder.svg",
  },
  {
    title: "K-12 District Digital Transformation",
    industry: "K-12 Education",
    description:
      "Led a comprehensive digital transformation initiative for a K-12 school district serving 15,000 students, modernizing legacy systems, implementing cloud-based services, and enhancing student and parent engagement platforms. The project reduced administrative workload by 45%, improved parent communication satisfaction from 3.1 to 4.5 out of 5, and generated annual cost savings of $1.8 million through operational efficiencies.",
    metrics: [
      { label: "Administrative Time", value: "-45%" },
      { label: "Parent Satisfaction", value: "4.5/5" },
      { label: "Annual Cost Savings", value: "$1.8M" },
    ],
    image: "/placeholder.svg",
  },
  {
    title: "Adaptive Learning Platform",
    industry: "Education Technology",
    description:
      "Developed an adaptive learning platform for a major educational publisher, enabling personalized learning experiences across K-12 mathematics curriculum. The solution incorporated AI-driven content sequencing, real-time assessment, and targeted intervention recommendations, resulting in 27% improvement in student math proficiency, 35% reduction in achievement gaps, and significant increases in student confidence and motivation.",
    metrics: [
      { label: "Math Proficiency", value: "+27%" },
      { label: "Achievement Gap", value: "-35%" },
      { label: "Student Confidence", value: "+41%" },
    ],
    image: "/placeholder.svg",
  },
]

// Education technologies
const educationTechnologies = [
  {
    category: "Learning Platforms",
    items: [
      "Learning Management Systems",
      "Virtual Classrooms",
      "Adaptive Learning",
      "Microlearning",
      "Mobile Learning",
      "Gamification",
    ],
  },
  {
    category: "Administrative Systems",
    items: [
      "Student Information Systems",
      "Enrollment Management",
      "Scheduling Solutions",
      "Resource Planning",
      "Financial Aid Systems",
      "Alumni Management",
    ],
  },
  {
    category: "Data & Analytics",
    items: [
      "Learning Analytics",
      "Predictive Modeling",
      "Student Success Metrics",
      "Institutional Research",
      "Performance Dashboards",
      "Outcomes Assessment",
    ],
  },
  {
    category: "Integration & Security",
    items: [
      "Single Sign-On",
      "Data Integration",
      "API Management",
      "Identity Management",
      "Privacy Controls",
      "Compliance Frameworks",
    ],
  },
]

// Education FAQ data
const educationFAQs = [
  {
    question: "How do you ensure student data privacy and compliance with regulations?",
    answer:
      "We implement a comprehensive approach to student data privacy that addresses all aspects of relevant regulations including FERPA, COPPA, and state-specific privacy laws. This includes technical safeguards such as encryption for data at rest and in transit, role-based access controls, comprehensive audit logging, and secure authentication mechanisms. We implement data minimization principles to collect only necessary information, and we provide clear data retention and deletion policies. Our development process incorporates privacy by design principles, and we conduct regular security assessments. We also provide documentation to support compliance efforts, including privacy impact assessments, data processing agreements, and incident response plans tailored to educational institutions.",
  },
  {
    question: "Can your solutions integrate with our existing educational systems?",
    answer:
      "Yes, our education solutions are designed with interoperability as a core principle. We have experience integrating with all major learning management systems (Canvas, Blackboard, Moodle, D2L), student information systems (PowerSchool, Infinite Campus, Skyward), and other educational platforms. We utilize education data standards like OneRoster, LTI, and Common Education Data Standards (CEDS) to ensure seamless data exchange. Our integration approaches include API-based connectivity, data synchronization tools, and middleware solutions. We can implement real-time integrations for critical workflows and batch processing for larger data sets. Our team works closely with your IT department to ensure proper connectivity while maintaining system performance and data integrity.",
  },
  {
    question: "How do you approach faculty and staff training for new educational technology?",
    answer:
      "We recognize that educator adoption is critical to the success of any educational technology implementation. Our approach begins with involving faculty and staff early in the design process to ensure the solution aligns with their teaching methods and administrative needs. We employ a multi-faceted training strategy that includes role-based training programs, train-the-trainer models, hands-on workshops, and just-in-time learning resources. We create customized training materials including quick reference guides, video tutorials, and simulation environments. Our implementation includes a phased approach with adequate support during go-live, including dedicated support for key stakeholders. We also establish feedback mechanisms to continuously improve the system based on user experience, and we measure adoption metrics to identify areas needing additional support.",
  },
  {
    question: "What experience do you have with learning analytics and student success initiatives?",
    answer:
      "We have extensive experience implementing learning analytics and student success solutions across K-12 and higher education institutions. Our expertise includes developing data warehouses that aggregate information from multiple educational systems, implementing early alert systems to identify at-risk students, creating dashboards for learning outcomes assessment and accreditation reporting, and developing predictive models for student retention and completion. We've worked with institutions to implement intervention management systems, student success platforms, and comprehensive analytics solutions that provide insights into student engagement, performance, and progression. Our analytics solutions support data-informed decision making by providing actionable insights for educators, advisors, and administrators while respecting student privacy and data security requirements.",
  },
  {
    question: "How do your solutions support accessibility and inclusive learning?",
    answer:
      "We prioritize accessibility and inclusive design in all our educational solutions to ensure equitable access for all learners. Our development process incorporates WCAG 2.1 AA standards and follows Universal Design for Learning (UDL) principles. We implement features such as screen reader compatibility, keyboard navigation, captioning for multimedia content, text-to-speech capabilities, and adjustable text sizing and contrast. Our solutions support multiple means of engagement, representation, and expression to accommodate diverse learning styles and needs. We conduct accessibility testing with assistive technologies and involve users with disabilities in our design and testing processes. We also provide accessibility documentation including Voluntary Product Accessibility Templates (VPATs) and guidance for educators on creating accessible content within our platforms.",
  },
  {
    question: "How do your solutions support remote and hybrid learning models?",
    answer:
      "Our educational solutions are designed to support flexible learning environments including remote, hybrid, and traditional models. We implement cloud-based architectures that provide secure access from any location and device, synchronous and asynchronous communication tools that facilitate interaction regardless of physical location, and content delivery systems that work effectively in various bandwidth conditions. Our solutions include features like offline access with synchronization, recorded sessions for asynchronous learning, collaborative tools for remote group work, and virtual labs and simulations for hands-on learning experiences. We also incorporate analytics specifically designed to monitor engagement and participation in remote settings, helping educators identify and support students who may be struggling in non-traditional learning environments.",
  },
  {
    question: "How do you measure the impact and ROI of educational technology implementations?",
    answer:
      "We employ a comprehensive approach to measuring educational technology impact that aligns with institutional goals and educational outcomes. Before implementation, we work with stakeholders to establish clear success metrics and baseline measurements. These typically include quantitative measures like student performance indicators, engagement metrics, time savings, and cost reductions, as well as qualitative measures like user satisfaction and perceived effectiveness. We implement analytics capabilities that track these metrics over time and provide dashboards for monitoring progress. Our assessment approach considers both direct impacts (e.g., improved learning outcomes) and indirect benefits (e.g., increased institutional capacity, enhanced reputation). We conduct regular reviews with stakeholders to evaluate ROI and identify opportunities for optimization, and we provide detailed reports that demonstrate the value realized from the technology investment.",
  },
]

export default function EducationSolutionsPage() {
  const [activeSolution, setActiveSolution] = useState(educationSolutions[0].id)

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
          className="w-full min-h-[91vh] py-16 md:py-32 bg-gradient-to-br from-[#2e1065] via-[#4c1d95] to-[#6d28d9] text-white relative overflow-hidden"
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
                <span className="text-white">Transformative & Engaging</span>
                <br />
                <span className="bg-gradient-to-r from-[#a78bfa] to-[#c4b5fd] bg-clip-text text-transparent">
                  Education
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
                From learning management systems and student information systems to education analytics and virtual
                classrooms, we provide comprehensive IT services designed for the unique requirements of modern
                educational institutions.
              </motion.p>
              <motion.div
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <a
                  href="#contact"
                  className="bg-[#a78bfa] hover:bg-[#8b5cf6] text-white font-medium px-8 py-4 rounded-full text-lg transition-all"
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
              className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-[#a78bfa]/20 to-[#c4b5fd]/20 opacity-60 blur-3xl"
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
              className="absolute top-2/3 right-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-pink-500/20 to-rose-500/20 opacity-60 blur-3xl"
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

          {/* Education icons overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/30 to-transparent py-6">
            <div className="container mx-auto px-4">
              <div className="flex justify-center gap-8 md:gap-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-center"
                >
                  <BookOpen className="w-8 h-8 mx-auto mb-2 text-[#a78bfa]" />
                  <p className="text-sm text-gray-300">LMS</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-center"
                >
                  <GraduationCap className="w-8 h-8 mx-auto mb-2 text-[#a78bfa]" />
                  <p className="text-sm text-gray-300">SIS</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-center hidden md:block"
                >
                  <BarChart3 className="w-8 h-8 mx-auto mb-2 text-[#a78bfa]" />
                  <p className="text-sm text-gray-300">Analytics</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="text-center hidden md:block"
                >
                  <Laptop className="w-8 h-8 mx-auto mb-2 text-[#a78bfa]" />
                  <p className="text-sm text-gray-300">Virtual Learning</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="text-center hidden lg:block"
                >
                  <BrainCircuit className="w-8 h-8 mx-auto mb-2 text-[#a78bfa]" />
                  <p className="text-sm text-gray-300">Adaptive Learning</p>
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
              <h2 className="text-3xl md:text-5xl font-bold text-[#2e1065] mb-6">
                Comprehensive Education IT Solutions
              </h2>
              <p className="text-lg text-gray-600">
                In today&apos;s evolving educational landscape, institutions require specialized technology solutions
                that enhance teaching and learning, ensure data privacy, and optimize administrative operations. Our
                solutions are designed specifically for the unique challenges of modern educational environments.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  className="bg-[#f8f9fc] p-6 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-[#a78bfa]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                    <Shield className="w-6 h-6 text-[#a78bfa]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2e1065] mb-2">Security-First Design</h3>
                  <p className="text-gray-600">
                    Solutions built with security and FERPA compliance as foundational elements
                  </p>
                </motion.div>
                <motion.div
                  className="bg-[#f8f9fc] p-6 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-[#a78bfa]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                    <FileText className="w-6 h-6 text-[#a78bfa]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2e1065] mb-2">Educational Expertise</h3>
                  <p className="text-gray-600">
                    Deep understanding of teaching, learning, and administrative workflows
                  </p>
                </motion.div>
                <motion.div
                  className="bg-[#f8f9fc] p-6 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-[#a78bfa]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                    <School className="w-6 h-6 text-[#a78bfa]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2e1065] mb-2">Learning Continuity</h3>
                  <p className="text-gray-600">
                    Reliable systems designed to support continuous educational delivery
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
                    <h3 className="text-2xl md:text-3xl font-bold text-[#2e1065] mb-4">
                      Why Educational Institutions Need Specialized IT Solutions
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Educational institutions face unique challenges that require specialized technology solutions. From
                      student data privacy regulations and complex learning environments to the need for accessibility
                      and engagement, schools and universities require IT systems specifically designed to address their
                      educational and administrative needs.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="bg-[#a78bfa]/10 p-1 rounded-full mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-[#a78bfa]" />
                        </span>
                        <span className="text-gray-700">
                          <strong>Privacy & Compliance:</strong> Meet FERPA, COPPA, and other educational data
                          regulations
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-[#a78bfa]/10 p-1 rounded-full mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-[#a78bfa]" />
                        </span>
                        <span className="text-gray-700">
                          <strong>Learning Environments:</strong> Support diverse teaching and learning modalities
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-[#a78bfa]/10 p-1 rounded-full mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-[#a78bfa]" />
                        </span>
                        <span className="text-gray-700">
                          <strong>Interoperability:</strong> Connect disparate systems for unified educational
                          experiences
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-[#a78bfa]/10 p-1 rounded-full mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-[#a78bfa]" />
                        </span>
                        <span className="text-gray-700">
                          <strong>Accessibility:</strong> Ensure equitable access to educational resources for all
                          learners
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
                        alt="Education IT Solutions"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                    </motion.div>
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#a78bfa]/10 rounded-full -z-10"></div>
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-500/10 rounded-full -z-10"></div>
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
              <h2 className="text-3xl md:text-5xl font-bold text-[#2e1065] mb-6">
                Our Education IT Solutions
              </h2>
              <p className="text-lg text-gray-600">
                We offer a comprehensive suite of IT solutions designed to address the unique challenges and regulatory
                requirements of modern educational institutions.
              </p>
            </motion.div>

            <Tabs defaultValue={educationSolutions[0].id} className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isSolutionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <TabsList className="w-full h-full flex md:flex-row flex-wrap justify-center gap-2 bg-[#f5f3ff] rounded-full">
                  {educationSolutions.map((solution) => (
                    <TabsTrigger
                      key={solution.id}
                      value={solution.id}
                      className="px-6 py-3 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:text-black data-[state=active]:shadow-md"
                      style={{
                        backgroundImage: `var(--state-active, none)`,
                        "--state-active": `linear-gradient(to right, ${
                          solution.id === "learning-management"
                            ? "var(--blue-500), var(--indigo-600)"
                            : solution.id === "student-information"
                              ? "var(--purple-500), var(--pink-500)"
                              : solution.id === "education-analytics"
                                ? "var(--yellow-500), var(--amber-600)"
                                : solution.id === "virtual-classrooms"
                                  ? "var(--green-500), var(--emerald-600)"
                                  : solution.id === "adaptive-learning"
                                    ? "var(--red-500), var(--orange-500)"
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

              {educationSolutions.map((solution) => (
                <TabsContent key={solution.id} value={solution.id} className="mt-2 md:mt-4 mx-4">
                  <motion.div
                    className="grid md:grid-cols-2 gap-8 items-center"
                    initial={{ opacity: 0, x: 0 }}
                    animate={isSolutionsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  >
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#2e1065]">{solution.title}</h3>
                      <p className="text-base mb-6 text-gray-700">{solution.description}</p>

                      <h4 className="text-lg font-semibold text-[#2e1065] mb-4">Key Features:</h4>
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
                        <h4 className="text-lg font-semibold text-[#2e1065] mb-3">Technologies:</h4>
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
                            solution.id === "learning-management"
                              ? "var(--blue-500), var(--indigo-600)"
                              : solution.id === "student-information"
                                ? "var(--purple-500), var(--pink-500)"
                                : solution.id === "education-analytics"
                                  ? "var(--yellow-500), var(--amber-600)"
                                  : solution.id === "virtual-classrooms"
                                    ? "var(--green-500), var(--emerald-600)"
                                    : solution.id === "adaptive-learning"
                                      ? "var(--red-500), var(--orange-500)"
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
              <h2 className="text-3xl md:text-5xl font-bold text-[#2e1065] mb-6">Platforms We Support</h2>
              <p className="text-lg text-gray-600">
                We have extensive experience integrating with and developing for a wide range of educational platforms,
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
                  <h3 className="text-lg font-semibold text-[#2e1065] mb-2">{platform.name}</h3>
                  <p className="text-sm text-gray-600">{platform.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section ref={benefitsRef} className="w-full py-16 md:py-24 bg-[#f5f3ff]">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-[#2e1065] mb-6">
                Benefits of Our Education Solutions
              </h2>
              <p className="text-lg text-gray-600">
                Our specialized solutions deliver significant advantages for educational institutions, enhancing teaching
                and learning, operational efficiency, and student outcomes.
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
                  <div className="bg-[#a78bfa]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#2e1065] mb-4">{benefit.title}</h3>
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
              <h2 className="text-3xl md:text-5xl font-bold text-[#2e1065] mb-6">Our Process</h2>
              <p className="text-lg text-gray-600">
                We follow a comprehensive, security-focused process tailored specifically for educational projects,
                ensuring compliance, stakeholder validation, and successful implementation at every stage.
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
                    <div className="bg-[#a78bfa] text-white text-xl font-bold rounded-full w-14 h-14 flex items-center justify-center shrink-0">
                      {step.number}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="w-0.5 bg-gray-200 h-full mt-4 mb-4 md:h-24"></div>
                    )}
                  </div>

                  {/* Step content */}
                  <div className="bg-[#f5f3ff] rounded-xl p-6 md:p-8 flex-1">
                    <div className="flex items-start gap-4">
                      <div className="bg-white p-3 rounded-full shadow-sm hidden md:flex">{step.icon}</div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#2e1065] mb-3">{step.title}</h3>
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
        <section ref={statsRef} className="w-full py-16 md:py-24 bg-[#2e1065] text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Education Impact</h2>
              <p className="text-lg text-gray-300">
                Our solutions deliver measurable results for educational institutions, enhancing student outcomes,
                operational efficiency, and teaching effectiveness.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {educationStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <p className="text-4xl md:text-5xl font-bold text-[#a78bfa] mb-4">{stat.value}</p>
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
              <h2 className="text-3xl md:text-5xl font-bold text-[#2e1065] mb-6">Education Case Studies</h2>
              <p className="text-lg text-gray-600">
                Explore how our solutions have helped educational institutions overcome challenges, enhance teaching and
                learning, and achieve operational excellence.
              </p>
            </motion.div>

            <CaseStudies caseStudies={educationCaseStudies} />
          </div>
        </section>

        {/* Technologies Section */}
        <section className="w-full py-16 md:py-24 bg-[#f5f3ff]">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-[#2e1065] mb-6">Technologies We Leverage</h2>
              <p className="text-lg text-gray-600">
                We employ cutting-edge technologies specifically suited for educational applications, ensuring security,
                compliance, and pedagogical effectiveness.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {educationTechnologies.map((techCategory, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <h3 className="text-xl font-bold text-[#2e1065] mb-4">{techCategory.category}</h3>
                  <ul className="space-y-2">
                    {techCategory.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className="bg-[#a78bfa]/10 p-1 rounded-full mt-0.5">
                          <CheckCircle2 className="w-3 h-3 text-[#a78bfa]" />
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
              <h2 className="text-3xl md:text-5xl font-bold text-[#2e1065] mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Find answers to common questions about our education IT solutions.
              </p>
            </motion.div>

            <FAQ faqs={educationFAQs} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-[#2e1065] via-[#4c1d95] to-[#6d28d9] text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Educational Technology?</h2>
              <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
                Contact us today to discuss your specific requirements and discover how our specialized education IT
                solutions can help your institution enhance teaching and learning, improve efficiency, and ensure
                compliance.
              </p>
              <motion.a
                href="#contact"
                className="bg-[#a78bfa] hover:bg-[#8b5cf6] text-white font-medium px-8 py-4 rounded-full text-lg inline-block transition-colors"
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
                <h2 className="text-3xl md:text-5xl font-bold text-[#1a4d5c] mb-6">Contact Us</h2>
                <p className="text-lg text-gray-600">
                  Get in touch with our healthcare solutions team to discuss your specific requirements and
                  how we can help transform your healthcare IT systems.
                </p>
              </motion.div>
  
              <ContactForm
                serviceOptions={educationSolutions.map((sol) => sol.title)}
              />
            </div>
          </section>
    </main>
    </>
  );
}
                