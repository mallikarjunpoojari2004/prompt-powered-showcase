import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1) || 'home');
      const currentSection = sections.find(section => {
        const element = section === 'home' ? document.body : document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      setActiveSection(currentSection || '');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="portfolio-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#')}
            className="text-xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
          >
            MP
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const sectionId = item.href === '#' ? 'home' : item.href.substring(1);
              const isActive = activeSection === sectionId || (activeSection === '' && item.href === '#');
              
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-accent ${
                    isActive ? 'text-accent' : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
          
          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              variant="outline"
              size="sm"
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-muted-foreground hover:text-accent transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg">
          <div className="portfolio-container py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const sectionId = item.href === '#' ? 'home' : item.href.substring(1);
                const isActive = activeSection === sectionId || (activeSection === '' && item.href === '#');
                
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-left py-2 text-sm font-medium transition-all duration-300 hover:text-accent ${
                      isActive ? 'text-accent' : 'text-muted-foreground'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
              
              <div className="pt-4 border-t border-border">
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setIsOpen(false);
                    window.open('/resume.pdf', '_blank');
                  }}
                  className="w-full flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;