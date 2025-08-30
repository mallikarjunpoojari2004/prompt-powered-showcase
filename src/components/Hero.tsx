import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 portfolio-container text-center text-white">
        <div className="fade-in-up max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Mallikarjun <span className="text-accent">Poojari</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium mb-8 text-white/90">
            Data Scientist & Software Developer
          </h2>
          
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-white/80">
            Transforming data into actionable insights and developing innovative solutions 
            that drive informed decision-making
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              className="btn-accent"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              className="btn-outline border-white text-white hover:bg-white hover:text-primary"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-6 justify-center mb-12">
            <a 
              href="https://www.linkedin.com/in/mallikarjun-poojari-5b5756357/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-accent transition-colors duration-300 hover:scale-110 transform"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            
            <a 
              href="https://github.com/mallikarjunpoojari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-accent transition-colors duration-300 hover:scale-110 transform"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            
            <a 
              href="mailto:Mallikarjunpoojari661@gmail.com"
              className="text-white/70 hover:text-accent transition-colors duration-300 hover:scale-110 transform"
              aria-label="Email Contact"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-accent transition-colors duration-300 floating-animation"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;