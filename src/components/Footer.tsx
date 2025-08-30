import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mallikarjun-poojari-5b5756357/",
      label: "LinkedIn",
      color: "hover:text-blue-500"
    },
    {
      icon: Github,
      href: "https://github.com/mallikarjunpoojari",
      label: "GitHub",
      color: "hover:text-gray-600"
    },
    {
      icon: Mail,
      href: "mailto:Mallikarjunpoojari661@gmail.com",
      label: "Email",
      color: "hover:text-red-500"
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="portfolio-container">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-2">Mallikarjun Poojari</h3>
            <p className="text-primary-foreground/70 text-sm">
              Data Scientist & Software Developer
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center md:justify-center">
            <div className="flex gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-primary-foreground/70 transition-all duration-300 hover:scale-110 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/70 text-sm flex items-center justify-center md:justify-end gap-1">
              Made with <Heart className="h-4 w-4 text-red-400 fill-current" /> by Mallikarjun
            </p>
            <p className="text-primary-foreground/50 text-xs mt-1">
              © {currentYear} All rights reserved
            </p>
          </div>
        </div>
        
        {/* Bottom Border */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-primary-foreground/60 text-xs">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;