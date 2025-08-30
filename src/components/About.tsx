import { User, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="portfolio-section bg-gradient-subtle">
      <div className="portfolio-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Main Content */}
          <div className="space-y-6">
            <div className="bg-card p-8 rounded-lg shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <User className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-semibold">Who I Am</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I am an aspiring Data Scientist and Software Developer with a solid foundation 
                in computer science, data analytics, and software engineering. I am passionate 
                about transforming data into actionable insights and developing innovative 
                solutions that drive informed decision-making.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-semibold">My Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I seek opportunities to contribute to impactful projects by leveraging my 
                expertise in programming, data analysis, and visualization. My goal is to 
                bridge the gap between complex data and meaningful business insights.
              </p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="space-y-6">
            <div className="bg-card p-8 rounded-lg shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-semibold">What Drives Me</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">2+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">8.19</div>
                  <div className="text-sm text-muted-foreground">CGPA</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">Programming Languages</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">1</div>
                  <div className="text-sm text-muted-foreground">Google Cloud Certification</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-accent p-8 rounded-lg text-white">
              <h4 className="text-lg font-semibold mb-3">Core Values</h4>
              <ul className="space-y-2 text-sm">
                <li>• Innovation through data-driven solutions</li>
                <li>• Continuous learning and adaptation</li>
                <li>• Collaboration and knowledge sharing</li>
                <li>• Ethical and responsible technology use</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;