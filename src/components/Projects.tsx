import { ExternalLink, Github, BarChart3, Shield, Sprout, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Data-Driven Analysis of Major Crops of India",
      description: "Developed a comprehensive analysis framework and dashboards to address rural agricultural challenges, providing insights into market access, pricing trends, and infrastructure gaps.",
      icon: Sprout,
      technologies: ["Python", "Power BI", "Data Analysis", "EDA", "Dashboard Development"],
      highlights: [
        "Analyzed market access patterns for rural farmers",
        "Identified pricing trends across different crop categories",
        "Mapped infrastructure gaps in agricultural supply chains",
        "Created interactive dashboards for stakeholder insights"
      ],
      impact: "Impacted rural market strategies through data-driven insights",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    },
    {
      title: "Risk Analytics in Banking: Smart Decision Support System",
      description: "Built a decision-support solution using EDA and Power BI to analyze client profiles, enhancing lending decisions and reducing operational risks.",
      icon: Shield,
      technologies: ["Python", "Power BI", "Risk Analytics", "EDA", "Decision Support"],
      highlights: [
        "Analyzed client risk profiles using advanced EDA techniques",
        "Developed risk scoring algorithms for lending decisions",
        "Created automated reporting dashboards",
        "Reduced operational risks through data-driven insights"
      ],
      impact: "Improved decision-making efficiency in banking operations",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    }
  ];

  return (
    <section id="projects" className="portfolio-section bg-gradient-subtle">
      <div className="portfolio-container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="space-y-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`project-card ${project.bgColor} ${project.borderColor} border-2`}
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Project Info */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${project.bgColor} ${project.color}`}>
                      <project.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-accent" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className={`px-3 py-1 text-sm rounded-full ${project.bgColor} ${project.color} border ${project.borderColor}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Impact */}
                  <div className={`p-4 rounded-lg ${project.bgColor} border ${project.borderColor}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className={`h-4 w-4 ${project.color}`} />
                      <span className="font-semibold">Project Impact</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{project.impact}</p>
                  </div>
                </div>
                
                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-4">Key Achievements</h4>
                    <ul className="space-y-3">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full ${project.color.replace('text-', 'bg-')} mt-2 flex-shrink-0`}></div>
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2"
                      onClick={() => alert('GitHub repository link would be provided here')}
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </Button>
                    
                    <Button 
                      className="btn-accent flex items-center gap-2"
                      onClick={() => alert('Live demo link would be provided here')}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* More Projects Teaser */}
        <div className="text-center mt-16">
          <div className="bg-card p-8 rounded-lg shadow-card max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">More Projects Coming Soon</h3>
            <p className="text-muted-foreground mb-6">
              I'm continuously working on new projects in data science, machine learning, 
              and software development. Stay tuned for updates!
            </p>
            <Button 
              className="btn-outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;