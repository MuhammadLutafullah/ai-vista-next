"use client";

import React, { useState } from "react";

// FAQ Data
const faqData = [
  {
    id: 1,
    question: "What AI & Machine Learning services do you offer?",
    answer:
      "We provide AI-driven solutions including predictive analytics, computer vision, natural language processing, and custom machine learning models to help businesses make smarter, data-driven decisions."
  },
  {
    id: 2,
    question: "What is included in your web development services?",
    answer:
      "Our web development services include responsive design, custom web applications, API integrations, and scalable platforms built to deliver high performance and seamless user experiences."
  },
  {
    id: 3,
    question: "How can AI automation benefit my business?",
    answer:
      "AI automation helps streamline repetitive tasks, reduce operational costs, improve efficiency, and enhance productivity by implementing intelligent workflows and automated systems."
  },
  {
    id: 4,
    question: "Do you develop mobile apps for both iOS and Android?",
    answer:
      "Yes, we build high-performance mobile applications for both iOS and Android using modern technologies like React Native and Flutter, ensuring a smooth and scalable user experience."
  },
  {
    id: 5,
    question: "What do your data science and analytics services include?",
    answer:
      "We offer data analysis, visualization, business intelligence, and big data solutions to help organizations gain actionable insights and improve decision-making processes."
  },
  {
    id: 6,
    question: "What are Edge AI computing services?",
    answer:
      "Edge AI enables real-time data processing directly on devices, reducing latency and improving speed. It is ideal for IoT systems, smart devices, and applications requiring instant decision-making."
  },
  {
    id: 7,
    question: "How do you ensure cybersecurity in your solutions?",
    answer:
      "We implement advanced security measures including threat detection, data encryption, and regular security audits to protect your systems and ensure compliance with industry standards."
  },
  {
    id: 8,
    question: "What SaaS development services do you provide?",
    answer:
      "We build scalable SaaS platforms with multi-tenant architecture, subscription management systems, and cloud integration to support business growth and ensure high availability."
  }
];

// Individual Accordion Item Component
const AccordionItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full py-4 lg:py-8 px-0 text-left focus:outline-none group"
        aria-expanded={isOpen}
      >
        <span className="text-[16px] lg:text-[22px] font-quicksand font-medium text-white group-hover:text-[#00a8a8] transition-colors duration-300 pr-3 lg:pr-6">
          {item.question}
        </span>
        <div className={`flex-shrink-0 w-7 h-7 lg:w-10 lg:h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#00a8a8] rotate-180' : 'group-hover:bg-white/20'}`}>
          <svg
            className={`w-4 h-4 lg:w-6 lg:h-6 text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      {/* Answer section with CSS transition */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-4 lg:pb-8 pr-4 lg:pr-12">
          <p className="text-[14px] lg:text-[17px] font-quicksand font-normal text-gray-300 leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

// Main FAQ Component
export default function Value() {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-otr relative bg-gradient-to-b from-black to-[#0a0a0a] py-12 lg:py-28 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(0,168,168,0.1),transparent_50%)]"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00a8a8]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#00a8a8]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-5 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-3 py-1.5 lg:px-5 lg:py-2.5 mb-4 lg:mb-8">
            <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-[#00a8a8]"></div>
            <span className="text-[#00a8a8] text-xs lg:text-sm font-medium font-quicksand uppercase tracking-wider">
              FAQ
            </span>
          </div>
          
          <h2 className="font-gendy font-normal text-[40px] lg:text-[60px] text-center max-tablet:text-[40px] text-white mb-2 lg:mb-6">
            Frequently Asked
            <span className="text-[#00a8a8]"> Questions</span>
          </h2>
          
          <p className="font-quicksand font-normal text-[14px] lg:text-[18px] w-full lg:w-[844px] text-center mx-auto text-white/80 px-4 lg:px-0">
            Find answers to common questions about our services, process, and how we can help your business grow.
          </p>
        </div>

        {/* FAQ Accordion Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-3 lg:p-8">
            {faqData.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => toggleAccordion(item.id)}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8 lg:mt-16">
            <p className="font-quicksand text-gray-400 text-[13px] lg:text-base mb-3 lg:mb-6">
              Still have questions? We're here to help!
            </p>
            <a
  href="/contact"
  className="group relative inline-flex items-center gap-2 px-9 py-2.5 lg:px-8 lg:py-4 bg-transparent border border-[#00a8a8] text-[#00a8a8] hover:text-white font-medium font-quicksand text-[14px] lg:text-base rounded-full transition-all duration-300 overflow-hidden cursor-pointer"
>
  <span className="relative z-10 flex items-center gap-2">
    Contact Us
    <svg
      className="w-4 h-4 lg:w-5 lg:h-5 relative z-10 group-hover:translate-x-1 transition-transform"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </span>
  <div className="absolute inset-0 bg-[#00a8a8] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
</a>
          </div>
        </div>
      </div>
    </section>
  );
}