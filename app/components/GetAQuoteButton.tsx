"use client";

import React, { useState, useEffect } from "react";

// Budget options
const budgetOptions = [
  { value: "", label: "Select budget range" },
  { value: "$10,000 - $25,000", label: "$10,000 - $25,000" },
  { value: "$25,000 - $50,000", label: "$25,000 - $50,000" },
  { value: "$50,000 - $100,000", label: "$50,000 - $100,000" },
  { value: "$100,000 - $200,000", label: "$100,000 - $200,000" },
  { value: "$200,000 - $500,000", label: "$200,000 - $500,000" },
  { value: "$500,000 or above", label: "$500,000 or above" },
  { value: "Request Budget Guidance", label: "Request Budget Guidance" },
];

// Service options
const serviceOptions = [
  "Select a service",
  "Enterprise Software Solutions",
  "Dedicated Development Team",
  "Mobile App Development",
  "Web App Development",
  "Data Services",
  "UI/UX Design",
  "DevOps & Cloud Services",
  "Quality Assurance & Testing",
  "Artificial Intelligence & Machine Learning",
  "Cybersecurity Services",
  "E-Commerce Development",
  "SaaS Development",
  "IT Consulting",
  "Digital Transformation",
  "Cloud Migration Services",
  "Blockchain Development",
  "IoT Solutions",
];

export default function GetAQuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setAnimateIn(true);
    } else {
      setAnimateIn(false);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log("Quote request submitted:", formData);
      setSubmitStatus("success");
      setIsSubmitting(false);
      
      setTimeout(() => {
        setSubmitStatus(null);
        onClose();
        setFormData({
          name: "",
          email: "",
          service: "",
          budget: "",
          phone: "",
          company: "",
          message: "",
        });
      }, 2000);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Overlay with fade animation */}
      <div 
        className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-all duration-500 ease-out ${
          animateIn ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      
      {/* Modal Content with slide-up and scale animation */}
      <div 
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-black rounded-2xl border border-white/10 shadow-2xl transition-all duration-500 ease-out ${
          animateIn 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-10 scale-95'
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#0a0a0a] to-black border-b border-white/10 px-6 py-5 md:px-8 md:py-6 z-10">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-gendy text-2xl md:text-3xl text-white mb-2">
                Get a Quote
              </h2>
              <p className="font-quicksand text-gray-400 text-sm md:text-base">
                Tell us about your project. We'll be in touch soon.
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all duration-300"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="group">
                <label htmlFor="name" className="block text-white font-medium mb-1.5 md:mb-2 text-sm md:text-base">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm md:text-base placeholder-gray-500 focus:outline-none focus:border-[#00a8a8] focus:ring-2 focus:ring-[#00a8a8]/20 transition-all duration-300 group-hover:bg-white/10"
                  placeholder="Your full name"
                />
              </div>
              <div className="group">
                <label htmlFor="email" className="block text-white font-medium mb-1.5 md:mb-2 text-sm md:text-base">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm md:text-base placeholder-gray-500 focus:outline-none focus:border-[#00a8a8] focus:ring-2 focus:ring-[#00a8a8]/20 transition-all duration-300 group-hover:bg-white/10"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Service and Budget Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="group">
                <label htmlFor="service" className="block text-white font-medium mb-1.5 md:mb-2 text-sm md:text-base">
                  Which Service Are You Interested In? *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm md:text-base focus:outline-none focus:border-[#00a8a8] focus:ring-2 focus:ring-[#00a8a8]/20 transition-all duration-300 cursor-pointer group-hover:bg-white/10"
                >
                  {serviceOptions.map((option) => (
                    <option key={option} value={option === "Select a service" ? "" : option} className="bg-black text-white">
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="group">
                <label htmlFor="budget" className="block text-white font-medium mb-1.5 md:mb-2 text-sm md:text-base">
                  Request Budget Guidance *
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm md:text-base focus:outline-none focus:border-[#00a8a8] focus:ring-2 focus:ring-[#00a8a8]/20 transition-all duration-300 cursor-pointer group-hover:bg-white/10"
                >
                  {budgetOptions.map((option) => (
                    <option key={option.value} value={option.value} className="bg-black text-white">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Phone and Company Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="group">
                <label htmlFor="phone" className="block text-white font-medium mb-1.5 md:mb-2 text-sm md:text-base">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm md:text-base placeholder-gray-500 focus:outline-none focus:border-[#00a8a8] focus:ring-2 focus:ring-[#00a8a8]/20 transition-all duration-300 group-hover:bg-white/10"
                  placeholder="+92 323 4563720"
                />
              </div>
              <div className="group">
                <label htmlFor="company" className="block text-white font-medium mb-1.5 md:mb-2 text-sm md:text-base">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm md:text-base placeholder-gray-500 focus:outline-none focus:border-[#00a8a8] focus:ring-2 focus:ring-[#00a8a8]/20 transition-all duration-300 group-hover:bg-white/10"
                  placeholder="Your company"
                />
              </div>
            </div>

            {/* Message */}
            <div className="group">
              <label htmlFor="message" className="block text-white font-medium mb-1.5 md:mb-2 text-sm md:text-base">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm md:text-base placeholder-gray-500 focus:outline-none focus:border-[#00a8a8] focus:ring-2 focus:ring-[#00a8a8]/20 transition-all duration-300 resize-none group-hover:bg-white/10"
                placeholder="Tell us about your project requirements..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 md:py-4 bg-gradient-to-r from-[#00a8a8] to-[#008a8a] hover:from-[#008a8a] hover:to-[#006868] text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm md:text-base shadow-lg hover:shadow-[#00a8a8]/25"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Submit Quote Request"
              )}
            </button>

            {/* Success Message */}
            {submitStatus === "success" && (
              <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-center animate-fade-in">
                <p className="text-green-400 text-sm">Thank you! We'll contact you within 24 hours.</p>
              </div>
            )}
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}