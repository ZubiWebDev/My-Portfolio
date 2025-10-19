import React from "react";

function Footer() {
  return (
    <footer className="p-6 bg-gray-900 text-white py-20">
      <div className="container mx-auto">
        {/* Logo Left Side */}
        <div className="flex items-center mb-10">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-2xl font-extrabold shadow-lg">
            Z
          </div>
          <span className="ml-3 text-2xl font-extrabold tracking-wide">
            Zubair Dev
          </span>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4 text-center">
          <div className="flex flex-col space-y-4 text-white items-center">
            <h2 className="font-medium">Getting started</h2>
            <div className="flex flex-col space-y-2 text-sm text-white items-center">
              <a rel="noopener noreferrer" href="#">
                Installation
              </a>
              <a rel="noopener noreferrer" href="#">
                Release Notes
              </a>
              <a rel="noopener noreferrer" href="#">
                Upgrade Guide
              </a>
              <a rel="noopener noreferrer" href="#">
                Using with Preprocessors
              </a>
              <a rel="noopener noreferrer" href="#">
                Optimizing for Production
              </a>
              <a rel="noopener noreferrer" href="#">
                Browser Support
              </a>
              <a rel="noopener noreferrer" href="#">
                IntelliSense
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-4 items-center">
            <h2 className="font-medium">Core Concepts</h2>
            <div className="flex flex-col space-y-2 text-sm text-white items-center">
              <a rel="noopener noreferrer" href="#">
                Utility-First
              </a>
              <a rel="noopener noreferrer" href="#">
                Responsive Design
              </a>
              <a rel="noopener noreferrer" href="#">
                Hover, Focus, &amp; Other States
              </a>
              <a rel="noopener noreferrer" href="#">
                Dark Mode
              </a>
              <a rel="noopener noreferrer" href="#">
                Adding Base Styles
              </a>
              <a rel="noopener noreferrer" href="#">
                Extracting Components
              </a>
              <a rel="noopener noreferrer" href="#">
                Adding New Utilities
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-4 items-center">
            <h2 className="font-medium">Customization</h2>
            <div className="flex flex-col space-y-2 text-sm text-white items-center">
              <a rel="noopener noreferrer" href="#">
                Configuration
              </a>
              <a rel="noopener noreferrer" href="#">
                Theme Configuration
              </a>
              <a rel="noopener noreferrer" href="#">
                Breakpoints
              </a>
              <a rel="noopener noreferrer" href="#">
                Customizing Colors
              </a>
              <a rel="noopener noreferrer" href="#">
                Customizing Spacing
              </a>
              <a rel="noopener noreferrer" href="#">
                Configuring Variants
              </a>
              <a rel="noopener noreferrer" href="#">
                Plugins
              </a>
            </div>
          </div>

          {/* Community */}
          <div className="space-y-3">
            <h2 className="font-semibold text-lg">Community</h2>
            <div className="flex flex-col space-y-2 text-sm">
              <a
                href="https://web.whatsapp.com/"
                className="bg-green-500 text-white py-1 px-3 rounded-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              <a
                href="https://www.facebook.com/share/1GPbufaXSb/"
                className="bg-blue-600 text-white py-1 px-3 rounded-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/chzubair.official?igsh=MWptNTM3Znk1ajdqNA=="
                className="bg-pink-500 text-white py-1 px-3 rounded-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://mail.google.com/mail/u/0/#inbox"
                className="bg-red-500 text-white py-1 px-3 rounded-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gmail
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex items-center justify-center px-6 pt-12 text-sm text-white">
          <span>© Copyright 1986. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
