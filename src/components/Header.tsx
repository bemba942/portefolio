
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Accueil', href: '#home' },
  { label: 'À propos', href: '#about' },
  { label: 'Projets', href: '#projects' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 ease-in-out px-6 py-4',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-xl font-display font-bold">
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary/80"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 top-[60px] bg-white/95 backdrop-blur-lg z-40 pt-6 md:hidden transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="container flex flex-col items-center space-y-6 py-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
