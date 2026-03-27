"use client";

import React, { useState } from "react";

// FAQ Data
const faqData = [
  {
    id: 1,
    question: "What services does your company offer?",
    answer: "We offer end-to-end digital solutions including web development, mobile app development, UI/UX design, cloud computing, AI/ML integration, e-commerce solutions, and IT consulting services tailored to your business needs."
  },
  {
    id: 2,
    question: "How long does it take to develop a website or app?",
    answer: "Timelines vary based on project complexity. A simple website takes 2-4 weeks, while complex web applications or mobile apps typically take 3-6 months. We provide detailed timelines during the discovery phase."
  },
  {
    id: 3,
    question: "What is your development process?",
    answer: "We follow an agile methodology: Discovery & Planning → Design & Prototyping → Development → Testing & QA → Deployment → Maintenance & Support. You'll have regular updates throughout."
  },
  {
    id: 4,
    question: "Do you provide post-launch support?",
    answer: "Yes, we offer comprehensive post-launch support including bug fixes, performance monitoring, security updates, feature enhancements, and 24/7 technical support with our maintenance packages."
  },
  {
    id: 5,
    question: "What technologies do you specialize in?",
    answer: "We specialize in React, Next.js, Node.js, Python, Django, Laravel, React Native, Flutter, AWS, Azure, and modern databases like PostgreSQL and MongoDB."
  },
  {
    id: 6,
    question: "How much does it cost to build a website?",
    answer: "Costs vary based on features and complexity. Basic websites start at $2,000, while custom web applications range from $10,000 to $50,000+. Contact us for a free consultation and quote."
  },
  {
    id: 7,
    question: "Can you help with SEO and digital marketing?",
    answer: "Absolutely! We build SEO-optimized websites and offer digital marketing services including content strategy, social media management, PPC campaigns, and analytics tracking to boost your online presence."
  },
  {
    id: 8,
    question: "Do you work with startups and small businesses?",
    answer: "Yes, we specialize in helping startups and small businesses. We offer flexible engagement models, scalable solutions, and affordable packages designed to fit startup budgets and growth needs."
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