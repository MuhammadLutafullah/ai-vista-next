"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const projectsData = {
  all: [
    {
      id: 1,
      title: "AI-Powered Healthcare Diagnostic System",
      description: "An advanced AI system that analyzes medical images and patient data to provide accurate diagnostic recommendations. Uses deep learning algorithms trained on millions of medical records to assist doctors in early disease detection and treatment planning.",
      image: "/images/projects/healthcare-ai.jpg",
      tags: ["AI", "Healthcare", "Deep Learning"],
      liveLink: "https://healthcare-ai-demo.vercel.app",
      category: "ai"
    },
    {
      id: 2,
      title: "Autonomous Drone Navigation System",
      description: "Computer vision-based autonomous drone system for real-time obstacle avoidance and path planning. Implements reinforcement learning algorithms for efficient navigation in complex environments.",
      image: "/images/projects/drone-ai.jpg",
      tags: ["AI", "Computer Vision", "Robotics"],
      liveLink: "https://drone-ai-demo.vercel.app",
      category: "ai"
    },
    {
      id: 3,
      title: "E-Commerce Platform with AI Recommendations",
      description: "Modern e-commerce platform featuring AI-powered product recommendations, personalized shopping experiences, and intelligent search functionality. Built with Next.js, Node.js, and integrated with machine learning models.",
      image: "/images/projects/ecommerce.jpg",
      tags: ["Frontend", "Next.js", "AI"],
      liveLink: "https://ecommerce-demo.vercel.app",
      category: "frontend"
    },
    {
      id: 4,
      title: "Real-Time Chat Application",
      description: "Full-stack chat application with real-time messaging, file sharing, and video calling capabilities. Features end-to-end encryption and seamless user experience across devices.",
      image: "/images/projects/chat-app.jpg",
      tags: ["Frontend", "React", "WebSockets"],
      liveLink: "https://chat-app-demo.vercel.app",
      category: "frontend"
    },
    {
      id: 5,
      title: "Predictive Maintenance System",
      description: "IoT-based predictive maintenance system using machine learning to predict equipment failures before they occur. Reduces downtime by 40% and maintenance costs by 25%.",
      image: "/images/projects/predictive-maintenance.jpg",
      tags: ["AI", "IoT", "Predictive Analytics"],
      liveLink: "https://predictive-demo.vercel.app",
      category: "ai"
    },
    {
      id: 6,
      title: "Portfolio & Creative Agency Website",
      description: "Modern portfolio website for creative agency with smooth animations, interactive elements, and responsive design. Showcases projects and client work beautifully.",
      image: "/images/projects/portfolio.jpg",
      tags: ["Frontend", "TailwindCSS", "Framer Motion"],
      liveLink: "https://portfolio-demo.vercel.app",
      category: "frontend"
    }
  ],
  ai: [
    {
      id: 1,
      title: "AI-Powered Healthcare Diagnostic System",
      description: "An advanced AI system that analyzes medical images and patient data to provide accurate diagnostic recommendations. Uses deep learning algorithms trained on millions of medical records to assist doctors in early disease detection and treatment planning.",
      image: "/images/projects/healthcare-ai.jpg",
      tags: ["AI", "Healthcare", "Deep Learning"],
      liveLink: "https://healthcare-ai-demo.vercel.app",
      category: "ai"
    },
    {
      id: 2,
      title: "Autonomous Drone Navigation System",
      description: "Computer vision-based autonomous drone system for real-time obstacle avoidance and path planning. Implements reinforcement learning algorithms for efficient navigation in complex environments.",
      image: "/images/projects/drone-ai.jpg",
      tags: ["AI", "Computer Vision", "Robotics"],
      liveLink: "https://drone-ai-demo.vercel.app",
      category: "ai"
    },
    {
      id: 5,
      title: "Predictive Maintenance System",
      description: "IoT-based predictive maintenance system using machine learning to predict equipment failures before they occur. Reduces downtime by 40% and maintenance costs by 25%.",
      image: "/images/projects/predictive-maintenance.jpg",
      tags: ["AI", "IoT", "Predictive Analytics"],
      liveLink: "https://predictive-demo.vercel.app",
      category: "ai"
    }
  ],
  frontend: [
    {
      id: 3,
      title: "E-Commerce Platform with AI Recommendations",
      description: "Modern e-commerce platform featuring AI-powered product recommendations, personalized shopping experiences, and intelligent search functionality. Built with Next.js, Node.js, and integrated with machine learning models.",
      image: "/images/projects/ecommerce.jpg",
      tags: ["Frontend", "Next.js", "AI"],
      liveLink: "https://ecommerce-demo.vercel.app",
      category: "frontend"
    },
    {
      id: 4,
      title: "Real-Time Chat Application",
      description: "Full-stack chat application with real-time messaging, file sharing, and video calling capabilities. Features end-to-end encryption and seamless user experience across devices.",
      image: "/images/projects/chat-app.jpg",
      tags: ["Frontend", "React", "WebSockets"],
      liveLink: "https://chat-app-demo.vercel.app",
      category: "frontend"
    },
    {
      id: 6,
      title: "Portfolio & Creative Agency Website",
      description: "Modern portfolio website for creative agency with smooth animations, interactive elements, and responsive design. Showcases projects and client work beautifully.",
      image: "/images/projects/portfolio.jpg",
      tags: ["Frontend", "TailwindCSS", "Framer Motion"],
      liveLink: "https://portfolio-demo.vercel.app",
      category: "frontend"
    }
  ]
};

const tabs = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI Projects" },
  { id: "frontend", label: "Frontend Projects" }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const currentProjects = projectsData[activeTab] || projectsData.all;

  return (
    <section className="bg-gradient-to-b from-black to-[#0a0a0a] py-12 tablet4:py-14 tablet3:py-16 tablet2:py-18 tablet:py-20 laptop:py-24">
      <div className="container mx-auto px-4 tablet3:px-5 tablet:px-6 laptop:px-8 desktop:px-10">
        {/* Section Header */}
         <div className="flex justify-center pb-3">
             <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-3 py-1.5 lg:px-5 lg:py-2.5 mb-4 lg:mb-8">
            <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-[#00a8a8]"></div>
            <span className="text-[#00a8a8] text-xs lg:text-sm font-medium font-quicksand uppercase tracking-wider">
              All Projects
            </span>
          </div>
          </div>
        <div className="text-center mb-8 tablet4:mb-10 tablet3:mb-12 tablet2:mb-14 tablet:mb-16 laptop:mb-20">
          <h2 className="font-gendy text-3xl tablet3:text-4xl tablet:text-5xl laptop:text-6xl text-white mb-2 tablet:mb-3 laptop:mb-4">
            PROJECTS
          </h2>
          <p className="font-quicksand text-gray-400 text-sm tablet3:text-base tablet:text-lg max-w-2xl mx-auto">
            We bring results. Our clients are proof.
          </p>
        </div>

        {/* Navigation Tabs - Reordered */}
        <div className="flex flex-wrap justify-center gap-1.5 tablet4:gap-2 tablet3:gap-2.5 tablet2:gap-3 tablet:gap-4 mb-10 tablet4:mb-12 tablet3:mb-14 tablet2:mb-16 tablet:mb-20">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 tablet4:px-5 tablet3:px-6 tablet2:px-7 tablet:px-8 py-2 tablet4:py-2.5 tablet3:py-3 rounded-full font-medium transition-all duration-300 text-xs tablet4:text-sm tablet3:text-base ${
                activeTab === tab.id
                  ? "bg-[#00a8a8] text-white shadow-lg shadow-[#00a8a8]/25"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid - Responsive columns with custom breakpoints */}
        <div className="grid grid-cols-1 tablet2:grid-cols-2 laptop:grid-cols-3 gap-5 tablet4:gap-6 tablet3:gap-7 tablet2:gap-8">
          {currentProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-[#00a8a8]/50 transition-all duration-500 hover:transform hover:scale-[1.02] flex flex-col h-full"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image Placeholder */}
              <div className="relative h-40 tablet4:h-44 tablet3:h-48 tablet2:h-52 tablet:h-56 overflow-hidden bg-gradient-to-br from-[#00a8a8]/20 to-[#008a8a]/20 flex-shrink-0">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-10 h-10 tablet4:w-11 tablet4:h-11 tablet3:w-12 tablet3:h-12 tablet2:w-13 tablet2:h-13 tablet:w-14 tablet:h-14 text-white/30 mx-auto mb-1 tablet4:mb-1.5 tablet3:mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h14a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-white/40 text-[10px] tablet4:text-xs tablet3:text-sm">Project Preview</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Project Content */}
              <div className="p-4 tablet4:p-5 tablet3:p-6 flex flex-col flex-grow">
                <h3 className="font-gendy text-base tablet4:text-lg tablet3:text-xl text-white mb-2 tablet4:mb-2.5 tablet3:mb-3 line-clamp-2 min-h-[48px] tablet4:min-h-[52px] tablet3:min-h-[56px] tablet2:min-h-[60px]">
                  {project.title}
                </h3>
                <p className="font-quicksand text-gray-400 text-[11px] tablet4:text-xs tablet3:text-sm leading-relaxed mb-3 tablet4:mb-3.5 tablet3:mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 tablet4:gap-1.5 tablet3:gap-2 mb-3 tablet4:mb-3.5 tablet3:mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-1.5 tablet4:px-2 tablet3:px-3 py-0.5 tablet4:py-1 bg-white/10 rounded-full text-[9px] tablet4:text-[10px] tablet3:text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/10 mt-auto">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#00a8a8] hover:text-white font-medium transition-all duration-300 text-[11px] tablet4:text-xs tablet3:text-sm group-hover:gap-1.5 tablet4:group-hover:gap-2"
                  >
                    View Project
                    <svg className="w-3 h-3 tablet4:w-3.5 tablet4:h-3.5 tablet3:w-4 tablet3:h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  
                </div>
              </div>

              {/* Animated Border on Hover */}
              <div className={`absolute inset-0 border-2 border-[#00a8a8] rounded-2xl pointer-events-none transition-all duration-500 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}