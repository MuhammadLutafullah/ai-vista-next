"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoImg from "../../public/images/Logo.png";
import GetAQuoteModal from "./GetAQuoteButton";
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  
  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };
  
  const handleGetQuoteClick = (e) => {
    e.preventDefault();
    setIsQuoteModalOpen(true);
  };
  
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      url: "https://linkedin.com/company/yourcompany",
    },
    {
      name: "Twitter",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      url: "https://twitter.com/yourcompany",
    },
    {
      name: "Facebook",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      url: "https://facebook.com/yourcompany",
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.358.062-2.587.356-3.535 1.304-.977.977-1.27 2.21-1.332 3.568-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.062 1.358.355 2.591 1.332 3.568.948.948 2.177 1.242 3.535 1.304 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.358-.062 2.587-.356 3.535-1.304.977-.977 1.27-2.21 1.332-3.568.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.062-1.358-.355-2.591-1.332-3.568-.948-.948-2.177-1.242-3.535-1.304-1.28-.058-1.688-.072-4.947-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"/>
        </svg>
      ),
      url: "https://instagram.com/yourcompany",
    },
  ];

  const pageLinks = [
    { name: "Home", href: "/" },
    { name: "Success Stories", href: "/stories" },
    { name: "Get a Quote", href: "#", isModal: true },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <footer className="bg-black border-t border-white/10">
        <div className="container mx-auto px-5 md:px-10 py-12 md:py-20">
          {/* Top Section - Logo */}
          <div className="flex justify-center mb-6 md:mb-12">
            <Link href="/" className="inline-block">
              <Image
                src={logoImg}
                alt="Company Logo"
                className="h-[100px] w-[100px] object-cover"
                priority
              />
            </Link>
          </div>

          {/* Social Handles */}
          <div className="flex justify-center gap-6 md:gap-12 mb-10 md:mb-16">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00a8a8] transition-all duration-300 transform hover:scale-110"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Pages Navigation with Active Link Underline Effect - Single Line on Mobile */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-0 mb-10 md:mb-16">
            {pageLinks.map((link) => {
              const isActive = pathname === link.href && !link.isModal;
              return (
                <div key={link.name}>
                  {link.isModal ? (
                    <button
                      onClick={handleGetQuoteClick}
                      className={`relative text-sm sm:text-base md:text-lg font-medium transition-colors duration-300 pb-1.5 md:pb-2 whitespace-nowrap cursor-pointer ${
                        isActive 
                          ? "text-[#00a8a8]" 
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#00a8a8] transition-transform duration-300 ease-out origin-left ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      ></span>
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`relative text-sm sm:text-base md:text-lg font-medium transition-colors duration-300 pb-1.5 md:pb-2 whitespace-nowrap ${
                        isActive 
                          ? "text-[#00a8a8]" 
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#00a8a8] transition-transform duration-300 ease-out origin-left ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      ></span>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center pt-6 md:pt-8 border-t border-white/10">
            <p className="text-gray-500 text-xs sm:text-sm md:text-base">
              © {currentYear} Your Company Name. All rights reserved.
            </p>
          </div>
        </div>

        {/* Add global styles for the underline effect if needed */}
        <style jsx>{`
          .group-hover\\:scale-x-100:hover {
            transform: scaleX(1);
          }
        `}</style>
      </footer>
      
      {/* Modal with animations - placed outside footer */}
      <GetAQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={closeQuoteModal}
      />
    </>
  );
}