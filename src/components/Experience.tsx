import { Briefcase, Calendar, MapPin, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Python Programming Intern",
      company: "BITM in collaboration with EZTS Company",
      duration: "April 2024 – May 2024",
      location: "Remote",
      type: "Internship",
      description: "Gained hands-on experience in Python programming and Data Structures & Algorithms (DSA), developing practical problem-solving and code optimization skills.",
      achievements: [
        "Developed proficiency in Python programming fundamentals",
        "Mastered key Data Structures and Algorithms concepts",
        "Enhanced problem-solving and analytical thinking skills",
        "Learned code optimization techniques and best practices",
        "Collaborated on real-world programming challenges"
      ],
      skills: ["Python", "Data Structures", "Algorithms", "Problem Solving", "Code Optimization"]
    }
  ];

  const achievements = [
    {
      title: "Banking Risk Analytics Solution",
      description: "Created a comprehensive banking risk analytics solution that improved decision-making efficiency through advanced data analysis and visualization.",
      impact: "Enhanced lending decision accuracy and reduced operational risks"
    },
    {
      title: "Agricultural Data Analysis Dashboard",
      description: "Designed and deployed an agricultural data analysis dashboard that provided crucial insights for rural market strategies.",
      impact: "Directly impacted rural market planning and farmer support initiatives"
    }
  ];

  return (
    <section id="experience" className="portfolio-section">
      <div className="portfolio-container">
        <h2 className="section-title">Experience & Achievements</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Experience Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-accent" />
              Professional Experience
            </h3>
            
            {experiences.map((exp, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-card relative">
                {/* Timeline Connector */}
                <div className="absolute -left-4 top-6 w-3 h-3 bg-accent rounded-full border-4 border-background"></div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-xl font-semibold text-primary">{exp.title}</h4>
                      <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                        {exp.type}
                      </span>
                    </div>
                    
                    <h5 className="text-lg font-medium text-accent mb-2">{exp.company}</h5>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div>
                    <h6 className="font-semibold mb-3">Key Achievements:</h6>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h6 className="font-semibold mb-3">Skills Developed:</h6>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Major Achievements */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Award className="h-6 w-6 text-accent" />
              Major Achievements
            </h3>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-gradient-accent p-6 rounded-lg text-white"
                >
                  <h4 className="text-lg font-semibold mb-3">{achievement.title}</h4>
                  <p className="text-white/90 mb-4 leading-relaxed">
                    {achievement.description}
                  </p>
                  <div className="bg-white/10 p-3 rounded border border-white/20">
                    <span className="text-sm font-medium">Impact: </span>
                    <span className="text-sm text-white/90">{achievement.impact}</span>
                  </div>
                </div>
              ))}
              
              {/* Education Highlight */}
              <div className="bg-card p-6 rounded-lg shadow-card border border-accent/20">
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  Academic Excellence
                </h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium">Bachelor of Engineering (B.E.) in Computer Science</h5>
                    <p className="text-sm text-muted-foreground">Specialization: Data Science</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Current CGPA</span>
                    <span className="text-2xl font-bold text-accent">8.19</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-accent h-2 rounded-full transition-all duration-1000" 
                      style={{ width: '81.9%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;