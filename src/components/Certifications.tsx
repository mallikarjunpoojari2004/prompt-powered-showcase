import { Award, Calendar, ExternalLink, Cloud, Brain, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "Google Cloud Career Launchpad",
      issuer: "Google Cloud",
      track: "Generative AI Track",
      date: "May 21, 2025",
      certificateId: "qOqOZTMv",
      description: "Comprehensive program focusing on Generative AI technologies and applications in cloud computing environments.",
      skills: ["Generative AI", "Google Cloud Platform", "Machine Learning", "AI Applications"],
      icon: Cloud,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      verified: true
    }
  ];

  const upcomingCertifications = [
    {
      title: "Python for Data Science",
      provider: "IBM/Coursera",
      expectedDate: "Q2 2025",
      icon: Code,
      status: "In Progress"
    },
    {
      title: "Machine Learning Specialization",
      provider: "Stanford/Coursera",
      expectedDate: "Q3 2025",
      icon: Brain,
      status: "Planned"
    }
  ];

  return (
    <section id="certifications" className="portfolio-section bg-gradient-subtle">
      <div className="portfolio-container">
        <h2 className="section-title">Certifications & Learning</h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Current Certifications */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <Award className="h-6 w-6 text-accent" />
              Earned Certifications
            </h3>
            
            <div className="grid gap-8">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className={`bg-card p-8 rounded-lg shadow-card border-2 ${cert.borderColor} hover:shadow-elegant transition-all duration-300 group`}
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Certificate Info */}
                    <div className="lg:col-span-2 space-y-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-4 rounded-lg ${cert.bgColor} ${cert.color} group-hover:scale-110 transition-transform duration-300`}>
                          <cert.icon className="h-8 w-8" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="text-xl font-bold">{cert.title}</h4>
                            {cert.verified && (
                              <span className="px-3 py-1 bg-success/10 text-success text-xs rounded-full">
                                Verified
                              </span>
                            )}
                          </div>
                          <p className="text-lg text-accent font-medium">{cert.issuer}</p>
                          <p className="text-muted-foreground">{cert.track}</p>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>
                      
                      <div>
                        <h5 className="font-semibold mb-3">Skills Acquired:</h5>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill) => (
                            <span 
                              key={skill}
                              className={`px-3 py-1 text-sm rounded-full ${cert.bgColor} ${cert.color} border ${cert.borderColor}`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Certificate Details */}
                    <div className="space-y-6">
                      <div className={`p-6 rounded-lg ${cert.bgColor} border ${cert.borderColor}`}>
                        <h5 className="font-semibold mb-4">Certificate Details</h5>
                        
                        <div className="space-y-3 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">Issued: </span>
                            <span className="font-medium">{cert.date}</span>
                          </div>
                          
                          <div className="flex items-start gap-2">
                            <Award className="h-4 w-4 text-muted-foreground mt-0.5" />
                            <span className="text-muted-foreground">ID: </span>
                            <span className="font-mono text-xs bg-secondary px-2 py-1 rounded">
                              {cert.certificateId}
                            </span>
                          </div>
                        </div>
                        
                        <Button 
                          variant="outline" 
                          className="w-full mt-4 flex items-center gap-2"
                          onClick={() => alert('Certificate verification link would be provided here')}
                        >
                          <ExternalLink className="h-4 w-4" />
                          Verify Certificate
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Upcoming Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <Brain className="h-6 w-6 text-accent" />
              Continuing Education
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingCertifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-card border border-dashed border-muted hover:border-accent transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-muted">
                      <cert.icon className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{cert.provider}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{cert.expectedDate}</span>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          cert.status === 'In Progress' 
                            ? 'bg-accent/10 text-accent' 
                            : 'bg-muted/50 text-muted-foreground'
                        }`}>
                          {cert.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Committed to continuous learning and staying updated with the latest technologies in data science and software development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;