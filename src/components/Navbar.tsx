"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-14 md:h-[52px] flex items-center px-4 md:px-7 bg-white/80 backdrop-blur-xl border-b border-gray-200">
      <Link href="/" className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-tight text-gray-900 md:mr-10">
        <svg
          className="w-5 h-5 md:w-6 md:h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="12" fill="#1E1E1E"/>
          <path d="M7.41382 14.4951C7.84607 15.2055 8.46183 15.7914 9.2015 16.1961C9.94117 16.6009 10.7797 16.849 11.6359 16.8437L11.6539 15.6232C11.0136 15.6272 10.3866 15.4702 9.83345 15.1676C9.28033 14.8649 8.81986 14.4267 8.49663 13.8955L7.41382 14.4951Z" fill="white"/>
          <path d="M11.6335 7.14718C10.9616 7.1136 10.29 7.21992 9.66131 7.45942C9.03261 7.69892 8.4605 8.06637 7.98121 8.53849C7.50192 9.01062 7.1259 9.57714 6.87696 10.2022C6.62803 10.8272 6.51161 11.4971 6.53507 12.1695L7.75973 12.1267C7.74219 11.6239 7.82925 11.123 8.0154 10.6556C8.20155 10.1882 8.48274 9.76454 8.84115 9.41149C9.19957 9.05843 9.62739 8.78365 10.0975 8.60455C10.5677 8.42546 11.0699 8.34595 11.5724 8.37106L11.6335 7.14718Z" fill="white"/>
          <rect x="6.69238" y="10.9366" width="4.89713" height="1.22428" fill="white"/>
          <rect x="10.5182" y="10.9366" width="1.14777" height="3.13723" fill="white"/>
          <path d="M10.4418 7.87613C10.4418 7.47467 10.7672 7.14922 11.1687 7.14922H11.6661V9.59778H10.4418V7.87613Z" fill="white"/>
          <path d="M12.5288 7.15685C13.7718 7.22876 14.9397 7.77509 15.7916 8.68309C16.6435 9.5911 17.1144 10.7915 17.1069 12.0365C17.0995 13.2816 16.6145 14.4763 15.7518 15.3741C14.8892 16.2719 13.753 16.8043 12.5093 16.8614L12.4913 15.6372C13.4214 15.5945 14.2231 15.1964 14.8682 14.5251C15.5133 13.8537 15.876 12.9603 15.8816 12.0292C15.8871 11.0982 15.535 10.2005 14.898 9.52154C14.2609 8.84253 13.4258 8.43398 12.4963 8.38021L12.5288 7.15685Z" fill="white"/>
          <path d="M12.4777 7.14825V7.14825C13.1539 7.14825 13.702 7.69638 13.702 8.37253V14.0866H12.4777V7.14825Z" fill="white"/>
        </svg>
        <span className="hidden sm:inline">Sakshee Durshettiwar</span>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center gap-0.5 flex-1">
        <button className="px-3 py-1.5 text-[13px] text-gray-400 hover:bg-gray-100 rounded-md transition-colors">
          Work
        </button>
        <button className="px-3 py-1.5 text-[13px] text-gray-400 hover:bg-gray-100 rounded-md transition-colors">
          About
        </button>
        <button className="px-3 py-1.5 text-[13px] text-gray-400 hover:bg-gray-100 rounded-md transition-colors">
          Skills
        </button>
        <a
          href="/resume.pdf"
          download="Sakshee Durshettiwar_Resume.pdf"
          className="px-3 py-1.5 text-[13px] text-gray-400 hover:bg-gray-100 rounded-md transition-colors"
        >
          Resume ↗
        </a>
        <a
          href="https://www.linkedin.com/in/sakshee-durshettiwar-product-designer/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 text-[13px] text-gray-400 hover:bg-gray-100 rounded-md transition-colors"
        >
          LinkedIn ↗
        </a>
      </div>

      {/* Desktop CTA */}
      <div className="hidden lg:flex items-center gap-2 ml-auto">
        <span className="text-[13px] text-gray-400">saksheedurshettiwar@gmail.com</span>
        <button className="px-3.5 py-1.5 bg-gray-900 text-white text-[13px] font-medium rounded-md">
          Get in touch
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden ml-auto p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-14 left-0 right-0 bg-white border-b border-gray-200 shadow-lg lg:hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              <button className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md text-left">
                Work
              </button>
              <button className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md text-left">
                About
              </button>
              <button className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md text-left">
                Skills
              </button>
              <a href="/resume.pdf" download="Sakshee Durshettiwar_Resume.pdf" className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                Resume ↗
              </a>
              <a 
                href="https://www.linkedin.com/in/sakshee-durshettiwar-product-designer/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
              >
                LinkedIn ↗
              </a>
              <hr className="my-2" />
              <a 
                href="mailto:saksheedurshettiwar@gmail.com"
                className="px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-md text-center"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
