import { useState } from "react";
import { Mail, Phone, Linkedin, Github, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Mallikarjunpoojari661@gmail.com",
      href: "mailto:Mallikarjunpoojari661@gmail.com",
      color: "text-red-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8150837781",
      href: "tel:+918150837781",
      color: "text-green-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Mallikarjun Poojari",
      href: "https://www.linkedin.com/in/mallikarjun-poojari-5b5756357/",
      color: "text-blue-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@mallikarjunpoojari",
      href: "https://github.com/mallikarjunpoojari",
      color: "text-gray-500"
    }
  ];

  return (
    <section id="contact" className="portfolio-section">
      <div className="portfolio-container">
        <h2 className="section-title">Let's Connect</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new opportunities, collaborations, 
                or just having a conversation about data science and technology. 
                Feel free to reach out through any of the channels below.
              </p>
            </div>
            
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 group"
                >
                  <div className={`p-3 rounded-lg bg-muted group-hover:scale-110 transition-transform duration-300 ${contact.color}`}>
                    <contact.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium">{contact.label}</h4>
                    <p className="text-sm text-muted-foreground">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Availability */}
            <div className="bg-gradient-accent p-6 rounded-lg text-white">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Current Availability
              </h4>
              <p className="text-white/90 text-sm">
                I'm currently seeking opportunities in data science and software development roles. 
                Open to full-time positions, internships, and freelance projects.
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-card">
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                  rows={6}
                  className="w-full resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground mt-4 text-center">
              I typically respond within 24-48 hours. Looking forward to hearing from you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;