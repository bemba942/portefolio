
import React from 'react';
import { Github, Linkedin, Twitter, Phone, Mail, MapPin } from 'lucide-react';

const socialLinks = [
  { icon: <Github className="h-5 w-5" />, href: "http://bemba942.github.io/projet/", label: "GitHub" },
  { icon: <Mail className="h-5 w-5" />, href: "mailto:bembakebe106@gmail.com", label: "Email" },
  { icon: <Phone className="h-5 w-5" />, href: "tel:0769961548", label: "Téléphone" },
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
              &copy; {currentYear} Bemba KEBE. Tous droits réservés.
            </p>
            <p className="mt-2 text-xs text-muted-foreground flex items-center justify-center">
              Portfolio BTS SIO <span className="mx-1 text-red-500">♥</span> option SLAM
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
