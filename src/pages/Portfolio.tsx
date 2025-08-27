import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { SkillBadge } from "@/components/SkillBadge";
import { Mail, Github, Linkedin } from "lucide-react";

// Import project images
import solarPanelImage from "@/assets/solar-panel-project.jpg";
import jarvisImage from "@/assets/jarvis-project.jpg";
import greenlensImage from "@/assets/greenlens-project.jpg";
import hackingImage from "@/assets/hacking-project.jpg";

const projects = [
  {
    id: "solar-panel",
    title: "☀️ Moving Solar Panel with Arduino & LDR Sun Tracking",
    shortDescription: "Automated solar panel system that tracks sunlight using Arduino and sensors for maximum efficiency.",
    image: solarPanelImage,
    problem: "Fixed panels waste energy by not following sunlight.",
    solution: "Arduino + LDR sensors track the sun and adjust orientation.",
    tools: ["Arduino", "C++", "Servo Motors", "IoT concepts"],
    role: "Designed hardware, programmed sensors, tested system.",
    impact: "Increased energy efficiency by ensuring panels always face the sun.",
    linkedinUrl: "https://www.linkedin.com/posts/aayush-sharma-52b9b0324_smart-india-hackathon-2024-activity-7322839252638019584-ZsHi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFIEafMBjlISKYpA5_OAf1tFiPr1p53_U38"
  },
  {
    id: "jarvis",
    title: "🤖 J.A.R.V.I.S – Personal Assistant in Java",
    shortDescription: "AI-powered assistant built in Java with voice recognition and task automation.",
    image: jarvisImage,
    problem: "Existing assistants are locked to big platforms.",
    solution: "A customizable, Java-based assistant with voice recognition and commands.",
    tools: ["Java", "Speech Recognition API", "AI logic"],
    role: "Implemented commands, integrated APIs, optimized workflow.",
    impact: "Expanded productivity with a customizable student-built assistant."
  },
  {
    id: "greenlens",
    title: "🌱 GreenLens – AI Environmental Analysis",
    shortDescription: "AI-powered tool that analyzes satellite images to measure green cover and track urban deforestation.",
    image: greenlensImage,
    problem: "Hard to monitor greenery with manual surveys.",
    solution: "AI + satellite data to detect vegetation and generate a \"green score.\"",
    tools: ["Python", "ML", "Computer Vision", "Satellite APIs"],
    role: "Trained AI model, integrated APIs, built scoring system.",
    impact: "Scalable way to monitor sustainability and help in urban planning.",
    prototypeUrl: "https://www.figma.com/make/GGNVVWWekJP6i0xDJyplTy/GreenIndex-Map-Dashboard?node-id=0-1&p=f&t=OnwKir8TST990OGy-0&fullscreen=1"
  },
  {
    id: "hacking",
    title: "💻 My Hacking Journey",
    shortDescription: "A personal exploration of cybersecurity through CTFs, penetration testing, and ethical hacking tools.",
    image: hackingImage,
    problem: "Learning cybersecurity feels overwhelming with scattered resources.",
    solution: "Documented my journey — CTFs, pen-testing basics, and hands-on experiments.",
    tools: ["Kali Linux", "Wireshark", "Nmap", "Burp Suite", "Python"],
    role: "Practiced, explored vulnerabilities, and solved challenges.",
    impact: "Built a hacker's problem-solving mindset and strong security foundation."
  }
];

const skills = [
  "C++", "Java", "Python", "Arduino", "IoT", "Flutter", 
  "Data Structures & Algorithms", "Cybersecurity", "Machine Learning", "Computer Vision"
];

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeElements = document.querySelectorAll(".fade-in-up");
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="hero-text">Aayush</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
              Student | Tech Explorer | Problem Solver
            </p>
            <div className="w-24 h-0.5 bg-primary mx-auto animate-bounce-gentle"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-section px-6">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in-up">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">About Me</h2>
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Hi, I'm Aayush — a student passionate about technology, coding, and building solutions that make a real impact. 
                I enjoy exploring how ideas can be turned into working projects, from Arduino-based innovations to personal assistants 
                and software tools. Currently, I'm sharpening my skills in Data Structures, Algorithms, and cybersecurity while 
                experimenting with projects that blend creativity and problem-solving. My goal is to keep learning, building, 
                and contributing to meaningful tech solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-section px-6">
        <div className="max-w-6xl mx-auto">
          <div className="fade-in-up">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="fade-in-up">
                  <ProjectCard
                    title={project.title}
                    description={project.shortDescription}
                    image={project.image}
                    onClick={() => openProjectModal(project)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-section px-6">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in-up">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Skills</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-section px-6">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in-up">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Contact</h2>
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-8">
                Let's connect and build something amazing together.
              </p>
              <div className="flex justify-center gap-6">
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <a href="mailto:aayush.sharma2605@gmail.com">
                    <Mail className="h-5 w-5" />
                    Email
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <a href="https://github.com/aayush-sharma2605" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <a href="https://www.linkedin.com/in/aayush-sharma-52b9b0324/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>&copy; 2024 Aayush. Built with passion and curiosity.</p>
      </footer>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </div>
  );
};