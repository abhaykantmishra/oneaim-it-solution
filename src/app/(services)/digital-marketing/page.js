"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image from "next/image"
import {
  Facebook,
  Instagram,
  Search,
  BarChart3,
  TrendingUp,
  Target,
  Users,
  LineChart,
  PieChart,
  Zap,
  Globe,
  ArrowRight,
  CheckCircle2,
  XCircle,
  ChevronDown,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import Link from "next/link"

// Digital Marketing Services Data
const marketingServices = [
  {
    id: "meta-ads",
    title: "Meta Ads",
    icon: <Facebook className="w-6 h-6" />,
    des:"Leverage the power of Facebook, Instagram, and the entire Meta ecosystem to reach your target audience",
    description:
      "Leverage the power of Facebook, Instagram, and the entire Meta ecosystem to reach your target audience with precision. Our Meta Ads services help you create compelling campaigns that drive engagement, leads, and sales.",
    features: [
      "Audience targeting and segmentation",
      "Custom ad creative development",
      "Campaign strategy and optimization",
      "Retargeting campaigns",
      "Conversion tracking and analytics",
      "A/B testing and performance optimization",
    ],
    platforms: ["Facebook", "Instagram", "Messenger", "Audience Network"],
    // image: "/images/meta-ads.png",
    color: "from-blue-500 to-indigo-600",
    lightColor: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    id: "google-ads",
    title: "Google Ads",
    icon: <Search className="w-6 h-6" />,
    des:"Capture high-intent traffic and appear at the top of search results with our Google Ads services",
    description:
      "Capture high-intent traffic and appear at the top of search results with our Google Ads services. We create and manage campaigns that target users actively searching for your products or services, maximizing your ROI.",
    features: [
      "Keyword research and selection",
      "Ad copy creation and testing",
      "Landing page optimization",
      "Bid management and budget allocation",
      "Quality score improvement",
      "Performance tracking and reporting",
    ],
    platforms: ["Search", "Display", "Shopping", "Video", "App"],
    // image: "/images/google-ads.png",
    color: "from-red-500 to-orange-500",
    lightColor: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    id: "seo",
    title: "SEO",
    icon: <BarChart3 className="w-6 h-6" />,
    des:"Improve your organic visibility and drive sustainable traffic to your website with our comprehensive SEO services",
    description:
      "Improve your organic visibility and drive sustainable traffic to your website with our comprehensive SEO services. We implement proven strategies to help you rank higher in search results and attract qualified visitors.",
    features: [
      "Technical SEO audits and optimization",
      "On-page SEO implementation",
      "Content strategy and creation",
      "Link building and outreach",
      "Local SEO for businesses",
      "Rank tracking and reporting",
    ],
    platforms: ["Google", "Bing", "Yahoo", "DuckDuckGo"],
    // image: "/images/seo.png",
    color: "from-green-500 to-emerald-600",
    lightColor: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    id: "social-media",
    title: "Social Media",
    icon: <Instagram className="w-6 h-6" />,
    des:"Build your brand presence and engage with your audience through strategic social media marketing.",
    description:
      "Build your brand presence and engage with your audience through strategic social media marketing. We help you create and execute a social media strategy that aligns with your business goals and resonates with your target audience.",
    features: [
      "Social media strategy development",
      "Content creation and curation",
      "Community management and engagement",
      "Influencer partnership management",
      "Social listening and reputation management",
      "Performance analysis and optimization",
    ],
    platforms: ["Instagram", "Twitter", "LinkedIn", "TikTok", "Pinterest"],
    // image: "/images/social-media.png",
    color: "from-purple-500 to-pink-500",
    lightColor: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    id: "content-marketing",
    title: "Content Marketing",
    icon: <MessageSquare className="w-6 h-6" />,
    des:"Attract, engage, and convert your target audience with valuable and relevant content",
    description:
      "Attract, engage, and convert your target audience with valuable and relevant content. Our content marketing services help you tell your brand story, establish authority in your industry, and drive meaningful actions from your audience.",
    features: [
      "Content strategy development",
      "Blog and article writing",
      "Ebook and whitepaper creation",
      "Infographic and visual content design",
      "Video content production",
      "Content distribution and promotion",
    ],
    platforms: ["Blogs", "Email", "Social Media", "Video", "Podcasts"],
    // image: "/images/content-marketing.png",
    color: "from-yellow-500 to-amber-600",
    lightColor: "bg-yellow-50",
    iconColor: "text-yellow-500",
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    icon: <Mail className="w-6 h-6" />,
    des:"Nurture leads and drive conversions with personalized email marketing campaigns.",
    description:
      "Nurture leads and drive conversions with personalized email marketing campaigns. We help you build and segment your email list, create compelling email content, and automate your email marketing for maximum impact.",
    features: [
      "Email list building and segmentation",
      "Email template design",
      "Automated email sequence creation",
      "A/B testing of subject lines and content",
      "Deliverability optimization",
      "Performance tracking and analysis",
    ],
    platforms: ["Mailchimp", "HubSpot", "ActiveCampaign", "Klaviyo", "SendGrid"],
    // image: "/images/email-marketing.png",
    color: "from-cyan-500 to-blue-500",
    lightColor: "bg-cyan-50",
    iconColor: "text-cyan-500",
  },
]

// Benefits data
const benefits = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Targeted Reach",
    description:
      "Reach the right audience at the right time with precision targeting based on demographics, interests, behaviors, and search intent.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Measurable Results",
    description:
      "Track and measure the performance of your campaigns in real-time, allowing for data-driven decisions and continuous optimization.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Increased Brand Awareness",
    description:
      "Build and strengthen your brand presence across multiple digital channels, increasing recognition and recall among your target audience.",
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Higher Conversion Rates",
    description:
      "Convert more visitors into leads and customers through optimized landing pages, compelling calls-to-action, and strategic retargeting.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Cost Efficiency",
    description:
      "Maximize your marketing budget with cost-effective digital strategies that deliver higher ROI compared to traditional marketing channels.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Reach",
    description:
      "Expand your market reach beyond geographical boundaries and connect with potential customers around the world.",
  },
]

// Process steps
const processSteps = [
  {
    number: "01",
    title: "Discovery & Analysis",
    description:
      "We begin by understanding your business goals, target audience, and current digital presence. We conduct a comprehensive analysis of your market, competitors, and existing marketing efforts.",
    icon: <Search className="w-8 h-8" />,
  },
  {
    number: "02",
    title: "Strategy Development",
    description:
      "Based on our findings, we develop a customized digital marketing strategy that aligns with your business objectives and targets your ideal customers through the most effective channels.",
    icon: <PieChart className="w-8 h-8" />,
  },
  {
    number: "03",
    title: "Campaign Creation",
    description:
      "Our team creates compelling ad creative, content, and campaigns designed to engage your audience and drive the desired actions, whether that's website visits, lead generation, or sales.",
    icon: <MessageSquare className="w-8 h-8" />,
  },
  {
    number: "04",
    title: "Launch & Optimization",
    description:
      "We launch your campaigns across selected platforms and continuously monitor performance, making data-driven adjustments to optimize results and maximize your return on investment.",
    icon: <TrendingUp className="w-8 h-8" />,
  },
  {
    number: "05",
    title: "Analysis & Reporting",
    description:
      "We provide regular, detailed reports on campaign performance, key metrics, and insights. These reports help you understand the impact of your digital marketing efforts and inform future strategies.",
    icon: <BarChart3 className="w-8 h-8" />,
  },
]

// Case studies data
const caseStudies = [
  {
    title: "E-commerce Revenue Growth",
    industry: "Retail",
    description:
      "Implemented a comprehensive digital marketing strategy for an e-commerce retailer, including Google Shopping ads, Meta retargeting, and SEO. Resulted in a 215% increase in online revenue and 180% growth in ROAS (Return on Ad Spend) within 6 months.",
    metrics: [
      { label: "Revenue Increase", value: "215%" },
      { label: "ROAS Improvement", value: "180%" },
      { label: "Conversion Rate", value: "4.8%" },
    ],
    // image: "/images/case-study-ecommerce.png",
  },
  {
    title: "B2B Lead Generation Campaign",
    industry: "SaaS",
    description:
      "Developed and executed a multi-channel lead generation campaign for a B2B SaaS company, focusing on LinkedIn Ads, Google Search, and content marketing. Generated 430+ qualified leads in the first quarter, resulting in 28 new enterprise clients.",
    metrics: [
      { label: "Qualified Leads", value: "430+" },
      { label: "Cost Per Lead", value: "-42%" },
      { label: "New Clients", value: "28" },
    ],
    // image: "/images/case-study-b2b.png",
  },
  {
    title: "Local Business Visibility Boost",
    industry: "Healthcare",
    description:
      "Implemented local SEO and Google Business Profile optimization for a healthcare provider with multiple locations. Achieved first-page rankings for 45 high-value keywords and increased organic traffic by 320%, resulting in a 75% increase in appointment bookings.",
    metrics: [
      { label: "Keyword Rankings", value: "45" },
      { label: "Organic Traffic", value: "+320%" },
      { label: "Appointment Bookings", value: "+75%" },
    ],
    // image: "/images/case-study-local.png",
  },
]

// Pricing packages
const pricingPackages = [
  {
    title: "Starter",
    price: "$1,500",
    period: "per month",
    description: "Perfect for small businesses looking to establish their digital presence",
    features: [
      { included: true, text: "Google Ads Management (up to $5k monthly spend)" },
      { included: true, text: "Meta Ads Management (up to $3k monthly spend)" },
      { included: true, text: "Basic SEO Optimization" },
      { included: true, text: "Monthly Performance Reports" },
      { included: false, text: "Content Creation" },
      { included: false, text: "Conversion Rate Optimization" },
      { included: false, text: "Custom Dashboard" },
      { included: false, text: "Dedicated Account Manager" },
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    title: "Growth",
    price: "$3,500",
    period: "per month",
    description: "Ideal for growing businesses ready to scale their digital marketing efforts",
    features: [
      { included: true, text: "Google Ads Management (up to $15k monthly spend)" },
      { included: true, text: "Meta Ads Management (up to $10k monthly spend)" },
      { included: true, text: "Comprehensive SEO Strategy" },
      { included: true, text: "Weekly Performance Reports" },
      { included: true, text: "Content Creation (4 pieces per month)" },
      { included: true, text: "Conversion Rate Optimization" },
      { included: false, text: "Custom Dashboard" },
      { included: false, text: "Dedicated Account Manager" },
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    title: "Enterprise",
    price: "$7,500+",
    period: "per month",
    description: "Comprehensive solution for established businesses with aggressive growth goals",
    features: [
      { included: true, text: "Google Ads Management (unlimited spend)" },
      { included: true, text: "Meta Ads Management (unlimited spend)" },
      { included: true, text: "Advanced SEO Strategy & Implementation" },
      { included: true, text: "Real-time Performance Dashboard" },
      { included: true, text: "Content Creation (10+ pieces per month)" },
      { included: true, text: "Conversion Rate Optimization" },
      { included: true, text: "Custom Dashboard" },
      { included: true, text: "Dedicated Account Manager" },
    ],
    cta: "Contact Us",
    popular: false,
  },
]

// FAQ data
const marketingFAQs = [
  {
    question: "How long does it take to see results from digital marketing?",
    answer:
      "The timeline for seeing results varies depending on the channels and strategies used. Paid advertising like Google Ads and Meta Ads can generate results almost immediately, while SEO typically takes 3-6 months to show significant improvements. Content marketing and social media marketing generally take 2-3 months to gain traction. We provide realistic timelines based on your specific goals and chosen strategies.",
  },
  {
    question: "How do you measure the success of digital marketing campaigns?",
    answer:
      "We measure success using key performance indicators (KPIs) aligned with your business goals. These may include website traffic, conversion rates, lead generation, cost per acquisition, return on ad spend (ROAS), engagement metrics, and ultimately, revenue growth. We provide regular reports with these metrics and insights on campaign performance.",
  },
  {
    question: "What budget do I need for effective digital marketing?",
    answer:
      "Digital marketing budgets vary widely based on your industry, competition, goals, and chosen channels. We work with clients across various budget ranges and can develop strategies that maximize your return on investment regardless of your budget size. We typically recommend starting with a minimum budget that allows for meaningful testing and optimization, then scaling up based on performance.",
  },
  {
    question: "Do you offer contracts or is it month-to-month?",
    answer:
      "We offer both options. For most services, we recommend a minimum 3-month commitment to allow enough time for strategy implementation and optimization. However, we also offer month-to-month arrangements for certain services. Our goal is to earn your business through results, not lock you into long-term contracts.",
  },
  {
    question: "How often will I receive reports on my campaigns?",
    answer:
      "Reporting frequency depends on your package and preferences. Typically, we provide monthly comprehensive reports with detailed analysis and insights. For more active campaigns or higher-tier packages, we offer weekly reports. All clients have access to a dashboard where they can view real-time performance metrics. We also schedule regular check-in calls to discuss performance and strategy.",
  },
  {
    question: "Can you work with my existing website or do I need a new one?",
    answer:
      "We can work with your existing website, though we'll conduct an initial assessment to determine if it meets the requirements for effective digital marketing. If we identify significant issues that could hinder campaign performance (such as slow loading times, poor mobile experience, or conversion obstacles), we'll recommend improvements. We can either implement these changes or work with your web development team.",
  },
]

// ROI Calculator initial values
const initialValues = {
  monthlyBudget: 5000,
  averageOrderValue: 100,
  conversionRate: 2,
}

export default function DigitalMarketingPage() {
  const [activeService, setActiveService] = useState(marketingServices[0].id)
  const [openFAQIndex, setOpenFAQIndex] = useState(null)
  const [calculatorValues, setCalculatorValues] = useState(initialValues)
  const [isCalculatorVisible, setIsCalculatorVisible] = useState(false)

  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const benefitsRef = useRef(null)
  const processRef = useRef(null)
  const caseStudiesRef = useRef(null)
  const analyticsRef = useRef(null)
  const pricingRef = useRef(null)
  const calculatorRef = useRef(null)
  const faqRef = useRef(null)

  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 0.1], [0, -50])

  const isServicesInView = useInView(servicesRef, { once: false, amount: 0.2 })
  const isBenefitsInView = useInView(benefitsRef, { once: false, amount: 0.2 })
  const isProcessInView = useInView(processRef, { once: false, amount: 0.2 })
  const isCaseStudiesInView = useInView(caseStudiesRef, { once: false, amount: 0.2 })
  const isAnalyticsInView = useInView(analyticsRef, { once: false, amount: 0.2 })
  const isPricingInView = useInView(pricingRef, { once: false, amount: 0.2 })
  const isCalculatorInView = useInView(calculatorRef, { once: false, amount: 0.2 })

  const toggleQuestion = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index)
  }

  const handleCalculatorChange = (field, value) => {
    setCalculatorValues((prev) => ({ ...prev, [field]: value }))
  }

  // Calculate estimated results
  const calculateResults = () => {
    const { monthlyBudget, averageOrderValue, conversionRate } = calculatorValues
    const clicks = monthlyBudget / 2 // Assuming $2 average CPC
    const conversions = (clicks * conversionRate) / 100
    const revenue = conversions * averageOrderValue
    const roi = ((revenue - monthlyBudget) / monthlyBudget) * 100

    return {
      clicks: Math.round(clicks),
      conversions: Math.round(conversions),
      revenue: Math.round(revenue),
      roi: Math.round(roi),
    }
  }

  const results = calculateResults()

  // Counter animation for analytics section
  const [counters, setCounters] = useState({
    campaigns: 0,
    impressions: 0,
    clicks: 0,
    conversions: 0,
  })

  useEffect(() => {
    if (isAnalyticsInView) {
      const interval = setInterval(() => {
        setCounters((prev) => ({
          campaigns: prev.campaigns < 500 ? prev.campaigns + 5 : 500,
          impressions: prev.impressions < 10 ? prev.impressions + 0.1 : 10,
          clicks: prev.clicks < 250 ? prev.clicks + 2.5 : 250,
          conversions: prev.conversions < 15 ? prev.conversions + 0.15 : 15,
        }))
      }, 20)

      return () => clearInterval(interval)
    }
  }, [isAnalyticsInView])

  return (
    <>
      <main className="pt-20">
        {/* Hero Section with Parallax Effect */}
        <section
          ref={heroRef}
          className="w-full py-10 md:py-20 bg-[#1e2942] text-white relative overflow-hidden"
        >
          <div className="container mx-auto px-4 relative z-10">
            <motion.div className="max-w-5xl mx-auto text-center" style={{ opacity: heroOpacity, y: heroY }}>
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-white">Drive Growth with</span>
                <br />
                <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                  Strategic Digital Marketing
                </span>
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Elevate your brand&apos;s online presence with data-driven digital marketing strategies that deliver
                measurable results. From paid advertising to organic growth, we&apos;ve got you covered.
              </motion.p>
              <motion.div
                className="flex flex-wrap justify-center gap-4 my-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link
                  href="#contact"
                  className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-medium px-8 py-4 rounded-full text-lg transition-all"
                >
                  Get a Free Strategy Session
                </Link>
                <Link
                  href="#services"
                  className="bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-4 rounded-full text-lg transition-all backdrop-blur-sm"
                >
                  Explore Our Services
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Animated background elements */}
          <div className="absolute inset-0 z-0">
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-3xl"
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
              className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 opacity-20 blur-3xl"
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
              className="absolute top-2/3 right-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-green-500 to-teal-500 opacity-20 blur-3xl"
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

          {/* Stats overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/30 to-transparent py-10">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <p className="text-3xl md:text-4xl font-bold text-white">500+</p>
                  <p className="text-gray-300">Successful Campaigns</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <p className="text-3xl md:text-4xl font-bold text-white">10M+</p>
                  <p className="text-gray-300">Monthly Impressions</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <p className="text-3xl md:text-4xl font-bold text-white">250K+</p>
                  <p className="text-gray-300">Monthly Clicks</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  <p className="text-3xl md:text-4xl font-bold text-white">15K+</p>
                  <p className="text-gray-300">Monthly Conversions</p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Services  */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto my-20">
            {
              marketingServices.map((service,index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm">{service.des}</p>
                </motion.div>
              ))
            }
          </div>

        </section>

        {/* Services Section with Tabs */}
        <section id="services" ref={servicesRef} className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Comprehensive Digital Marketing Services
              </h2>
              <p className="text-lg text-gray-600">
                From paid advertising to organic growth strategies, we offer a full suite of digital marketing services
                designed to help you achieve your business goals.
              </p>
            </motion.div>

            <Tabs defaultValue={marketingServices[0].id} className="max-w-6xl mx-auto">
              <motion.div
                className="bg-[#fff5f5] rounded-full p-2 flex flex-row justify-center "
                initial={{ opacity: 0, y: 20 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <TabsList className="w-full h-full flex md:flex-row flex-wrap justify-center gap-2 bg-[#fff5f5] rounded-full">
                  {marketingServices.map((service, index) => (
                    <TabsTrigger
                      key={service.id}
                      value={service.id}
                      className="px-6 py-3 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:text-black data-[state=active]:shadow-md"
                      onClick={() => setActiveService(service.id)}
                    >
                      <span className="flex items-center gap-2">
                        {service.icon}
                        {service.title}
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </motion.div>

              {marketingServices.map((service) => (
                <TabsContent key={service.id} value={service.id} className="md:mt-5 md:mx-5">
                  <motion.div
                    className="grid md:grid-cols-2 gap-8 items-center"
                    initial={{ opacity: 0, x: 0 }}
                    animate={isServicesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  >
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">{service.title}</h3>
                      <p className="text-base mb-6 text-gray-700">{service.description}</p>

                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            animate={isServicesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                          >
                            <span className={`${service.lightColor} p-1 rounded-full mt-0.5`}>
                              <CheckCircle2 className={`w-4 h-4 ${service.iconColor}`} />
                            </span>
                            <span className="text-gray-700">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Platforms:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.platforms.map((platform, index) => (
                            <span
                              key={index}
                              className={`${service.lightColor} ${service.iconColor} px-3 py-1 rounded-full text-sm font-medium`}
                            >
                              {platform}
                            </span>
                          ))}
                        </div>
                      </div>

                      <motion.button
                        className={`bg-gradient-to-r text-white px-8 py-3 rounded-full font-medium transition-all`}
                        style={{
                          backgroundImage: `linear-gradient(to right, ${
                            service.id === "meta-ads"
                              ? "var(--blue-500), var(--indigo-600)"
                              : service.id === "google-ads"
                                ? "var(--red-500), var(--orange-500)"
                                : service.id === "seo"
                                  ? "var(--green-500), var(--emerald-600)"
                                  : service.id === "social-media"
                                    ? "var(--purple-500), var(--pink-500)"
                                    : service.id === "content-marketing"
                                      ? "var(--yellow-500), var(--amber-600)"
                                      : "var(--cyan-500), var(--blue-500)"
                          })`,
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More About {service.title}
                      </motion.button>
                    </div>

                    <motion.div
                      className="relative rounded-2xl overflow-hidden shadow-xl"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isServicesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.7, delay: 0.5 }}
                    >
                      <div
                        className={`bg-gradient-to-br ${service.color} p-8 flex items-center justify-center h-full min-h-[400px]`}
                      >
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
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

        {/* Benefits Section with Staggered Animation */}
        <section ref={benefitsRef} className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isBenefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Why Digital Marketing Matters</h2>
              <p className="text-lg text-gray-600">
                In today&apos;s digital-first world, a strategic online presence is essential for business growth. Here&apos;s how
                our digital marketing services can benefit your business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-md border border-gray-100"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isBenefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <div className="text-indigo-600">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section with Timeline */}
        <section ref={processRef} className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Digital Marketing Process</h2>
              <p className="text-lg text-gray-600">
                We follow a proven, data-driven approach to create and execute digital marketing strategies that deliver
                measurable results.
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
                    <div className="absolute left-10 top-20 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500 hidden md:block"></div>
                  )}

                  {/* Step number and icon */}
                  <div className="flex-shrink-0 z-10">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                      {step.icon}
                    </div>
                  </div>

                  {/* Step content */}
                  <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100 flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-bold text-indigo-600">{step.number}</span>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Dashboard Section */}
        <section
          ref={analyticsRef}
          className="w-full py-16 md:py-24 bg-gradient-to-br from-gray-900 to-indigo-900 text-white"
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isAnalyticsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Data-Driven Results</h2>
              <p className="text-lg text-gray-300">
                We believe in transparency and measurable outcomes. Our comprehensive analytics and reporting give you
                full visibility into your campaign performance.
              </p>
            </motion.div>

            <motion.div
              className="max-w-6xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isAnalyticsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="text-center">
                  <h3 className="text-lg font-medium text-gray-300 mb-2">Active Campaigns</h3>
                  <p className="text-4xl font-bold">{Math.round(counters.campaigns)}</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-medium text-gray-300 mb-2">Impressions (M)</h3>
                  <p className="text-4xl font-bold">{counters.impressions.toFixed(1)}</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-medium text-gray-300 mb-2">Clicks (K)</h3>
                  <p className="text-4xl font-bold">{Math.round(counters.clicks)}</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-medium text-gray-300 mb-2">Conversions (K)</h3>
                  <p className="text-4xl font-bold">{counters.conversions.toFixed(1)}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Campaign Performance</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Google Ads</span>
                        <span>78%</span>
                      </div>
                      <Progress
                        value={78}
                        className="h-2 bg-white/20"
                        indicatorClassName="bg-gradient-to-r from-red-500 to-orange-500"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Meta Ads</span>
                        <span>65%</span>
                      </div>
                      <Progress
                        value={65}
                        className="h-2 bg-white/20"
                        indicatorClassName="bg-gradient-to-r from-blue-500 to-indigo-500"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>SEO</span>
                        <span>82%</span>
                      </div>
                      <Progress
                        value={82}
                        className="h-2 bg-white/20"
                        indicatorClassName="bg-gradient-to-r from-green-500 to-emerald-500"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Social Media</span>
                        <span>71%</span>
                      </div>
                      <Progress
                        value={71}
                        className="h-2 bg-white/20"
                        indicatorClassName="bg-gradient-to-r from-purple-500 to-pink-500"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Traffic Sources</h3>
                  <div className="h-64 bg-white/5 rounded-lg p-4 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4 w-full">
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto rounded-full border-8 border-indigo-500 flex items-center justify-center">
                          <span className="text-2xl font-bold">42%</span>
                        </div>
                        <p className="mt-2">Paid Search</p>
                      </div>
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto rounded-full border-8 border-purple-500 flex items-center justify-center">
                          <span className="text-2xl font-bold">28%</span>
                        </div>
                        <p className="mt-2">Organic Search</p>
                      </div>
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto rounded-full border-8 border-pink-500 flex items-center justify-center">
                          <span className="text-2xl font-bold">18%</span>
                        </div>
                        <p className="mt-2">Social Media</p>
                      </div>
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto rounded-full border-8 border-blue-500 flex items-center justify-center">
                          <span className="text-2xl font-bold">12%</span>
                        </div>
                        <p className="mt-2">Direct</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
              <p className="text-lg text-gray-600">
                See how our digital marketing strategies have helped businesses like yours achieve remarkable results.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg mb-12 relative overflow-hidden ${
                    index % 2 === 0 ? "md:ml-12" : "md:mr-12"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isCaseStudiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-4 flex items-center justify-center">
                      <div className="rounded-xl overflow-hidden shadow-md">
                        <Image
                          src={study.image || "/placeholder.svg"}
                          alt={study.title}
                          width={300}
                          height={300}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-8">
                      <div className="mb-4">
                        <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-1 rounded">
                          {study.industry}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                      <p className="text-gray-600 mb-6">{study.description}</p>

                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {study.metrics.map((metric, idx) => (
                          <div key={idx} className="bg-gray-50 p-4 rounded-lg text-center">
                            <p className="text-2xl font-bold text-indigo-600">{metric.value}</p>
                            <p className="text-sm text-gray-500">{metric.label}</p>
                          </div>
                        ))}
                      </div>

                      <a
                        href="#"
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors font-medium"
                      >
                        Read full case study <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-bl-full -z-10 opacity-70"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-100 to-red-100 rounded-tr-full -z-10 opacity-70"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Calculator Section */}
        <section ref={calculatorRef} className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isCalculatorInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Calculate Your Potential ROI</h2>
              <p className="text-lg text-gray-600">
                Use our interactive calculator to estimate the potential return on investment for your digital marketing
                campaigns.
              </p>
            </motion.div>

            <motion.div
              className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={isCalculatorInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Input Your Numbers</h3>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Ad Budget (USD)</label>
                      <div className="mb-2">
                        <Slider
                          defaultValue={[5000]}
                          min={1000}
                          max={50000}
                          step={500}
                          onValueChange={(value) => handleCalculatorChange("monthlyBudget", value[0])}
                        />
                      </div>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>$1,000</span>
                        <span>${calculatorValues.monthlyBudget.toLocaleString()}</span>
                        <span>$50,000</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Average Order Value (USD)</label>
                      <div className="mb-2">
                        <Slider
                          defaultValue={[100]}
                          min={10}
                          max={1000}
                          step={10}
                          onValueChange={(value) => handleCalculatorChange("averageOrderValue", value[0])}
                        />
                      </div>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>$10</span>
                        <span>${calculatorValues.averageOrderValue.toLocaleString()}</span>
                        <span>$1,000</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Conversion Rate (%)</label>
                      <div className="mb-2">
                        <Slider
                          defaultValue={[2]}
                          min={0.1}
                          max={10}
                          step={0.1}
                          onValueChange={(value) => handleCalculatorChange("conversionRate", value[0])}
                        />
                      </div>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>0.1%</span>
                        <span>{calculatorValues.conversionRate.toFixed(1)}%</span>
                        <span>10%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Estimated Results</h3>

                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Estimated Clicks</span>
                        <span className="text-xl font-bold text-gray-900">{results.clicks.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Estimated Conversions</span>
                        <span className="text-xl font-bold text-gray-900">{results.conversions.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Estimated Revenue</span>
                        <span className="text-xl font-bold text-gray-900">${results.revenue.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-4 shadow-sm text-white">
                      <div className="flex justify-between items-center">
                        <span>Estimated ROI</span>
                        <span className="text-2xl font-bold">{results.roi}%</span>
                      </div>
                    </div>

                    <div className="text-sm text-gray-500 italic">
                      Note: These are estimates based on industry averages. Actual results may vary based on your
                      specific business, industry, and market conditions.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section ref={faqRef} className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Find answers to common questions about our digital marketing services and how we can help your business
                grow.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {marketingFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className={`w-full text-left p-6 rounded-xl flex justify-between items-center transition-all ${
                      openFAQIndex === index ? "bg-white shadow-md" : "bg-white hover:bg-gray-50"
                    }`}
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-700 transition-transform ${
                        openFAQIndex === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFAQIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-6 bg-white rounded-b-xl border-t border-gray-100">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="w-full py-16 md:py-24 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Grow Your Business?</h2>
              <p className="text-lg text-indigo-100 mb-10 max-w-3xl mx-auto">
                Let&apos;s create a digital marketing strategy tailored to your business goals. Our team of experts is ready
                to help you reach your target audience and drive measurable results.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="#contact"
                  className="bg-white text-indigo-600 hover:bg-indigo-50 font-medium px-12 py-4 rounded-full inline-flex items-center transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get a Free Strategy Session
                </motion.a>
                <motion.a
                  href="#"
                  className="bg-indigo-500 hover:bg-indigo-400 text-white font-medium px-12 py-4 rounded-full inline-flex items-center transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Our Case Studies
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section> */}

        {/* Contact Form Section */}
        <section id="contact" className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Let&apos;s Talk About Your Goals</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below to schedule a free strategy session with one of our digital marketing experts.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-indigo-100 p-3 rounded-full">
                        <Phone className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Phone</h4>
                        <a href="tel:+15551234567" className="text-lg text-indigo-600 hover:underline">
                          +1 (555) 123-4567
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-indigo-100 p-3 rounded-full">
                        <Mail className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <a href="mailto:marketing@oneaim.com" className="text-lg text-indigo-600 hover:underline">
                          marketing@oneaim.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5" />
                        <span>30-minute strategy session with an expert</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5" />
                        <span>Analysis of your current digital presence</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5" />
                        <span>Customized recommendations for your business</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5" />
                        <span>No obligation or pressure to sign up</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Service of Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select a service</option>
                        {marketingServices.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.title}
                          </option>
                        ))}
                        <option value="all">All Services / Not Sure</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Tell us about your goals *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                        placeholder="What are you looking to achieve with digital marketing?"
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium px-8 py-4 rounded-full inline-flex items-center transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Schedule My Free Strategy Session
                    </motion.button>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}