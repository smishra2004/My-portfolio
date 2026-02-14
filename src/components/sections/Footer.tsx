import React from "react";
import { Mail, Github, Twitter, Linkedin } from "lucide-react";

// --- CONTACT DATA ONLY ---
const contactLinks = [
  { 
    name: "Email", 
    href: "mailto:shubham.smishra2004@gmail.com", 
    icon: Mail 
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shubhammishra12/", // Replace with your actual LinkedIn URL
    icon: Linkedin
  },
  { 
    name: "GitHub", 
    href: "https://github.com/smishra2004", // Replace with your actual GitHub URL
    icon: Github 
  },
  { 
    name: "Twitter", 
    href: "https://x.com/shubham23690181", // Replace with your actual Twitter/X URL
    icon: Twitter 
  },
];

const Footer = () => {
  return (
    <footer id= "contact" className="w-full bg-[#05050A] text-white relative z-10 flex flex-col items-center justify-center">
      
      {/* TOP DIAGONAL PATTERN BORDER */}
      <div className="w-full h-4 bg-[repeating-linear-gradient(-45deg,transparent,transparent_4px,rgba(255,255,255,0.03)_4px,rgba(255,255,255,0.03)_8px)] border-y border-white/5"></div>

      {/* Extremely reduced padding (py-8) for a super slim profile */}
      <div className="w-full max-w-4xl mx-auto px-6 py-8 flex flex-col items-center gap-4">
        
        <h4 className="text-[10px] font-semibold text-gray-500 tracking-[0.2em] uppercase">
          Contact
        </h4>
        
        {/* SINGLE HORIZONTAL ROW OF LINKS */}
        <ul className="flex flex-wrap justify-center gap-8 md:gap-12">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white font-medium transition-colors group"
                >
                  <Icon size={18} className="text-gray-500 group-hover:text-white transition-colors" />
                  <span className="text-sm md:text-base">{link.name}</span>
                </a>
              </li>
            );
          })}
        </ul>

      </div>

      {/* BOTTOM DIAGONAL PATTERN BORDER */}
      <div className="w-full h-4 bg-[repeating-linear-gradient(-45deg,transparent,transparent_4px,rgba(255,255,255,0.03)_4px,rgba(255,255,255,0.03)_8px)] border-y border-white/5"></div>

    </footer>
  );
};

export default Footer;