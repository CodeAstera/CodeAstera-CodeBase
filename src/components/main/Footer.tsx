
import React from "react";
import { MailCheck,PhoneIncoming,MessageCircleMore } from "lucide-react";
import Link from "next/link";

// import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className=" pt-12 pb-8 overflow-clip">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div className="flex w-full justify-end">
          <div className="max-w-60">
            <h3 className="text-xl font-bold mb-4">Code Astera</h3>
            <p className="text-gray-300">
              A premier platform for website development and design.
            </p>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <div>
            <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/become-a-partner/for-consultants"
                  className="text-gray-300 hover:text-white transition flex gap-2"
                >
                  <MailCheck/>
                  <p className="text-md">hey@codeastera.com</p>
                </Link>
              </li>
              <li>
              <Link
                  href="/become-a-partner/for-consultants"
                  className="text-gray-300 hover:text-white transition flex gap-2"
                >
                  <PhoneIncoming/>
                  <p className="text-md">+91-9999999999</p>
                </Link>
              </li>
              <li>
              <Link
                  href="/become-a-partner/for-consultants"
                  className="text-gray-300 hover:text-white transition flex gap-2"
                >
                  <MessageCircleMore/>
                  <p className="text-md">+91-9999999999</p>
                </Link>
              </li>
            </ul>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
            </div>
          </div>
        </div>
        

        <div className=" w-full flex mt-12 items-center justify-center   ">
          <h1 className=" text-center text-3xl md:text-5xl lg:text-[10rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-900 select-none">
            CODE ASTERA
          </h1>
        </div>
      
        <div className="relative mt-1 h-0.5 bg-gradient-to-r from-transparent from-5% via-white/70 to-transparent to-95%" >

        {/* <div className=" h-12 w-full bg-gradient-to-t  from-blue-300 to-90%   to-transparent z-0"></div> */}
        <div
      className="absolute -top-36 w-full h-36 rotate-180"
      style={{
        background: `linear-gradient(to right, rgba(173, 216, 250, 0.5), rgba(135, 206, 255, 0.5), rgba(100, 178, 255, 0.5), rgba(65, 155, 255, 0.5), rgba(30, 144, 255, 0.5))`,
        WebkitMaskImage: `radial-gradient(ellipse at top, black, transparent 60%)`,
        maskImage: `radial-gradient(ellipse at top, black, transparent 60%)`,
      }}
    ></div>
    
        </div>
        <div className=" pt-8  text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} CodeAstera. All rights reserved.
          </p>
        </div>
    
      </div>
    </footer>

    
  );
}
