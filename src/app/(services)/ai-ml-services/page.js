"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

export default function AiMlServices() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % cards.length);

  const cards = [
    {
      title: "Custom AI Development",
      description: "We build tailored AI solutions to meet your business needs, leveraging advanced algorithms and deep learning techniques.",
      points: ["Bespoke AI models", "Seamless system integration", "Optimized for performance"],
      imageUrl: "/assest/download.jpeg",
    },
    {
      title: "AI Game Development",
      description: "Transform gaming with AI-powered NPCs, procedural content generation, and adaptive gameplay mechanics.",
      points: ["AI-driven NPC behaviors", "Enhanced player experiences", "Real-time adaptive AI"],
      imageUrl: "/assest/deepL.jpeg",
    },
    {
      title: "AI Chatbot Development",
      description: "Enhance customer interactions with AI-driven chatbots that understand and respond intelligently.",
      points: ["Conversational AI", "Multi-channel integration", "Personalized responses"],
      imageUrl: "/assest/download.jpeg",
    },
    {
      title: "Custom ML Development",
      description: "Tailored machine learning solutions for data-driven decision-making and predictive analytics.",
      points: ["Scalable ML models", "Data-driven automation", "Continuous learning capabilities"],
      imageUrl: "/assest/deepL.jpeg",
    },
    {
      title: "AI Software Development",
      description: "Develop AI-powered software solutions that streamline operations and boost efficiency.",
      points: ["Custom AI applications", "Seamless workflow automation", "Cloud-based AI solutions"],
      imageUrl: "/next.svg",
    },
    {
      title: "Predictive Analytics",
      description: "Utilize AI to forecast trends, optimize strategies, and drive smarter business decisions.",
      points: ["Data pattern recognition", "Market trend analysis", "Proactive decision-making"],
      imageUrl: "/assest/deepL.jpeg",
    },
    {
      title: "Deep Learning Services",
      description: "Implement cutting-edge deep learning solutions for image recognition, NLP, and AI automation.",
      points: ["Advanced neural networks", "AI-driven insights", "Automated feature extraction"],
      imageUrl: "/assest/download.jpeg",
    },
    {
      title: "AI Consultancy Services",
      description: "Expert AI consulting to help businesses integrate and scale AI-powered solutions effectively.",
      points: ["Strategic AI planning", "Enterprise AI adoption", "Ongoing support & optimization"],
      imageUrl: "/assest/deepL.jpeg",
    },
  ];

  const checklistItems = [
    "Business Alignment",
    "Data Readiness",
    "Drift Mitigation",
    "Scalability",
    "Security & Compliance",
    "Ethical AI",
    "Performance Optimization",
    "Integration Readiness",
    "Explainability & Transparency",
    "Failsafe Mechanisms",
    "Human Oversight",
    "Cost Efficiency",
  ];

  const featureCards = [
    {
      title: "Data-Driven Insights",
      bg: "bg-rose-50",
      icon: (
        <svg className="h-10 w-10 text-red-700 hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6M5 20h14a2 2 0 002-2V7a2 2 0 00-.586-1.414l-5-5A2 2 0 0014 0H5a2 2 0 00-2 2v16a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Adaptive Intelligence",
      bg: "bg-indigo-50",
      icon: (
        <svg className="h-10 w-10 text-red-700 hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M10 20l-4-4 4-4m-4 4v4m0-8v4" />
        </svg>
      ),
    },
    {
      title: "Hyper-Personalization",
      bg: "bg-rose-50",
      icon: (
        <svg className="h-10 w-10 text-red-700 hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Intelligent Automation",
      bg: "bg-indigo-50",
      icon: (
        <svg className="h-10 w-10 text-red-700 hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0m2-2V5a2 2 0 10-4 0v10a2 2 0 114 0m2 4h.01M13 9a2 2 0 104 0V5a2 2 0 10-4 0v4z" />
        </svg>
      ),
    },
    {
      title: "Enhanced Efficiency",
      bg: "bg-rose-50",
      icon: (
        <svg className="h-10 w-10 text-red-700 hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Competitive Edge",
      bg: "bg-indigo-50",
      icon: (
        <svg className="h-10 w-10 text-red-700 hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4H9l4-4 4 4h-3zM4 4h16v2H4zm0 14h16v2H4z" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Software Development Services</h1>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Empowering Business Operations at Scale with AI Brilliance</h2>
            <p className="text-lg text-gray-600 mb-8">
              Many still see AI through an outdated lens, while AI itself has evolved dramatically. Beyond chatbots and pattern recognition, it now adapts, learns, and delivers unimaginable value.
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full text-lg">
              Talk to AI Consultants
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-2">
              <img src="/assest/heroImage.jpg" alt="AI Concept" className="w-full rounded-lg shadow-lg" />
            </div>
            <p className="text-sm text-gray-500 italic text-center mt-4 col-span-1 md:col-span-2">
              &qout;But with AI shaping the horizon, the sky was never the same shade of blue again.&qout;
            </p>
          </div>
        </div>
      </section>

      {/* Logo Ticker */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
            <motion.div
              className="flex gap-14 flex-none pr-14"
              animate={{ translateX: "-50%" }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear", repeatType: "loop" }}
            >
              {["AI.png", "deep.png", "deep2.png", "deep3.png", "M.jpeg", "ml.png"].map((img, i) =>
                [...Array(2)].map((_, j) => (
                  <Image key={i * 10 + j} src={`/assest/${img}`} alt="logo" width={70} height={70} />
                ))
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">Why AI & Data Matter?</h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-500 mx-auto">
            The smartest way to work with AI is to ask where it fits and how to gain the most from it. That&apos;s where we step in.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((card, i) => (
            <div key={i} className={`${card.bg} rounded-lg p-6 text-center transition hover:shadow-lg`}>
              {card.icon}
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{card.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* AI Service Suite Carousel */}
      <section className="relative flex flex-col items-center h-screen bg-rose-50 overflow-hidden py-10">
        <h2 className="text-black text-3xl font-bold mb-6">Our AI Service Suite</h2>
        <div className="relative w-full max-w-3xl h-[480px] flex justify-center items-center">
          {cards.map((card, index) => {
            const offset = (index - currentIndex + cards.length) % cards.length;
            let scale = offset === 0 ? 1 : 0.85;
            let opacity = Math.abs(offset) > 2 ? 0 : 1;
            let xTranslate = (offset - (offset > cards.length / 2 ? cards.length : 0)) * 120;

            return (
              <motion.div key={index} className="absolute w-80 h-[420px] bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
                initial={{ x: xTranslate, scale, opacity }}
                animate={{ x: xTranslate, scale, opacity }}
                transition={{ duration: 0.5 }}
                style={{ zIndex: offset === 0 ? 10 : 5 }}
              >
                <img src={card.imageUrl} alt={card.title} className="w-full h-40 object-cover rounded-md" />
                <h3 className="mt-4 text-lg font-bold">{card.title}</h3>
                <p className="mt-2 text-sm text-gray-700">{card.description}</p>
                <ul className="mt-3 text-xs text-gray-600 text-left list-disc pl-5">
                  {card.points.map((point, idx) => <li key={idx}>{point}</li>)}
                </ul>
              </motion.div>
            );
          })}
        </div>
        <button onClick={goToPrevious} className="absolute left-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-200">◀</button>
        <button onClick={goToNext} className="absolute right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-200">▶</button>
      </section>

      {/* Checklist + Use Cases */}
      <section className="relative bg-cover bg-center px-6 text-black py-12 bg-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center">Ensuring <span className="text-red-500">AI Excellence</span></h2>
        <p className="text-lg md:text-xl text-center mt-2 text-red-400">With Our Comprehensive Checklist</p>
        <div className="flex flex-wrap justify-center gap-4 mt-6 max-w-3xl mx-auto">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex items-center bg-gray-800/80 text-white px-4 py-2 rounded-lg shadow-md">
              <span className="text-red-500 text-lg mr-2">✔</span> {item}
            </div>
          ))}
        </div>
        <div className="bg-indigo-50 p-8 mt-12 rounded-xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">High-Impact Use Cases of Our AI Software Development Services</h2>
          <p className="text-lg text-gray-600 mb-8">
            From autonomous systems to AI-driven decision-making, our solutions drive innovation, efficiency, and transformation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "AI-Augmented Decision-Making",
                content: "Empower complex decision-making in finance, healthcare, policy-making, and more.",
              },
              {
                title: "Autonomous & Self-Learning Systems",
                content: "AI-driven automation in robotics, vehicles, and IT infrastructure.",
              },
              {
                title: "Agentic AI for Problem-Solving",
                content: "Deploy autonomous AI agents for real-time decision-making and adaptability.",
              },
              {
                title: "AI for Scientific Discovery & Innovation",
                content: "Boost breakthroughs in drug discovery, climate modeling, and space exploration.",
              },
            ].map((useCase, idx) => (
              <div key={idx} className={`p-6 rounded-lg shadow-md ${idx % 2 === 0 ? "bg-white" : "bg-rose-50"}`}>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
