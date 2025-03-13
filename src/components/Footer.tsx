
import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Heart } from 'lucide-react';

const socialLinks = [
  { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
  { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
  { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
  { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-secondary">
      <div className="container px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 flex items-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="text-foreground/80 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Mon Portfolio. Tous droits réservés.
            </p>
            <p className="mt-2 text-xs text-muted-foreground flex items-center justify-center">
              Conçu avec <Heart className="h-3 w-3 mx-1 text-red-500" /> en France
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
