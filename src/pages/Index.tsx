
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { ArrowDown, Github, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    document.querySelectorAll('.animate-fade-up, .animate-fade-down, .animate-fade-left, .animate-fade-right, .animate-scale-in')
      .forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background antialiased">
      <Header />
      
      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--muted)) 100%)'
        }}
      >
        <div className="container px-6 relative z-10">
          <div className="grid md:grid-cols-1 gap-12 items-center">
            <div className="text-center space-y-6 animate-fade-up">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary animate-pulse">
                Étudiant BTS SIO option SLAM
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                Bonjour, je suis <span className="text-primary">Bemba KEBE</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg mx-auto">
                Étudiant en BTS SIO et passionné par la sécurité informatique, les réseaux et le développement d'applications. Mon état d'esprit positif et enthousiaste me pousse à me dépasser et à poursuivre mes objectifs avec passion et détermination.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="button-primary" asChild>
                  <a href="#contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Me contacter
                  </a>
                </Button>
                <Button variant="outline" className="border-2" asChild>
                  <a href="#projects">
                    Voir mes projets
                  </a>
                </Button>
              </div>
              
              <div className="flex items-center gap-4 justify-center mt-8">
                <a
                  href="http://bemba942.github.io/projet/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="mailto:bembakebe106@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
                <a
                  href="tel:0769961548"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Téléphone"
                >
                  <Phone className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowDown className="h-8 w-8" />
            </a>
          </div>
        </div>
      </section>
      
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
