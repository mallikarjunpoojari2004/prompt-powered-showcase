import { Code, Database, BarChart3, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "HTML", "CSS", "JavaScript"],
      color: "text-blue-500"
    },
    {
      title: "Tools & Technologies",
      icon: Database,
      skills: ["Power BI", "SQL", "Jupyter Notebook", "VS Code", "AI Tools"],
      color: "text-green-500"
    },
    {
      title: "Core Competencies",
      icon: BarChart3,
      skills: ["Data Analysis", "EDA", "Dashboard Development", "Problem-Solving"],
      color: "text-purple-500"
    },
    {
      title: "Specializations",
      icon: Brain,
      skills: ["Data Science", "Risk Analytics", "Agricultural Data Analysis", "Decision Support Systems"],
      color: "text-orange-500"
    }
  ];

  return (
    <section id="skills" className="portfolio-section">
      <div className="portfolio-container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-card p-6 rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-accent/10 ${category.color} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg group-hover:text-accent transition-colors duration-300">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className="skill-tag group-hover:bg-accent/30 group-hover:border-accent/40 group-hover:scale-105"
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Interactive Skills Grid */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">Technical Proficiency</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "Python", level: 90 },
              { name: "SQL", level: 85 },
              { name: "Power BI", level: 80 },
              { name: "JavaScript", level: 75 },
              { name: "HTML/CSS", level: 85 },
              { name: "Data Analysis", level: 90 },
              { name: "EDA", level: 88 },
              { name: "Problem Solving", level: 92 },
            ].map((skill, index) => (
              <div 
                key={skill.name}
                className="group relative"
              >
                <div className="skill-tag text-center cursor-pointer group-hover:bg-accent group-hover:text-white group-hover:scale-110 transition-all duration-300 transform">
                  {skill.name}
                </div>
                
                {/* Tooltip showing proficiency */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-primary text-white px-3 py-1 rounded text-sm whitespace-nowrap">
                    {skill.level}% Proficiency
                  </div>
                  <div className="w-3 h-3 bg-primary transform rotate-45 absolute -top-1.5 left-1/2 -translate-x-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;