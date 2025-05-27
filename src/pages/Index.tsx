
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Download,
  ExternalLink,
  ChevronDown,
  Code,
  Brain,
  Eye,
  Cpu,
  Zap,
  Globe,
  Star,
  Moon,
  Sun
} from "lucide-react";

const Index = () => {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "services", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      title: "FITAI - AI Fitness Trainer",
      description: "Intelligent fitness coaching system using computer vision for real-time posture correction and workout guidance.",
      tags: ["Computer Vision", "MediaPipe", "Python", "AI"],
      status: "Completed"
    },
    {
      title: "Ezy-n-Green - Waste Classifier",
      description: "Smart waste classification system with recycling recommendations using deep learning models.",
      tags: ["Deep Learning", "CNN", "Environmental", "Classification"],
      status: "Completed"
    },
    {
      title: "Sign Ninja - Sign Language Converter",
      description: "Real-time sign language to text/speech converter improving accessibility for the deaf community.",
      tags: ["Computer Vision", "NLP", "Accessibility", "Real-time"],
      status: "Ongoing"
    },
    {
      title: "Note Ninja - Handwriting Recognition",
      description: "Mid-air handwriting recognition system using gesture tracking and machine learning.",
      tags: ["Gesture Recognition", "ML", "OpenCV", "Innovation"],
      status: "Completed"
    }
  ];

  const skills = [
    {
      category: "Machine Learning",
      items: ["Supervised Learning", "Unsupervised Learning", "Predictive Analysis", "Model Optimization"],
      icon: <Brain className="w-6 h-6" />
    },
    {
      category: "Deep Learning",
      items: ["CNNs", "Neural Networks", "TensorFlow", "Model Training"],
      icon: <Cpu className="w-6 h-6" />
    },
    {
      category: "Computer Vision",
      items: ["MediaPipe", "OpenCV", "Object Detection", "Gesture Recognition"],
      icon: <Eye className="w-6 h-6" />
    },
    {
      category: "Programming",
      items: ["Python", "Java", "C", "R", "JavaScript"],
      icon: <Code className="w-6 h-6" />
    }
  ];

  const services = [
    {
      title: "Custom AI/ML Model Development",
      description: "End-to-end machine learning solutions tailored to your business needs",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "Computer Vision Systems",
      description: "Advanced vision systems for object detection, tracking, and analysis",
      icon: <Eye className="w-8 h-8" />
    },
    {
      title: "AI-Powered Automation",
      description: "Intelligent automation solutions to streamline your workflows",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "AI Web App Development",
      description: "Flask-based web applications with integrated AI capabilities",
      icon: <Globe className="w-8 h-8" />
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isDark ? 'bg-gray-900/95 border-gray-700' : 'bg-white/95 border-gray-200'} backdrop-blur-md border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <Star className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold">Abhinav S Pillai</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {["Home", "About", "Skills", "Projects", "Services", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors duration-200 hover:text-green-400 ${
                    activeSection === item.toLowerCase() ? 'text-green-400' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="p-2"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Abhinav
                <br />
                <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                  S Pillai
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-400 font-light">
                Building intelligent systems for real-world impact.
              </p>
              <p className="text-lg text-gray-500">
                AI & Software Engineer | Machine Learning Enthusiast | Vision Systems Innovator
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3">
                <Download className="w-4 h-4 mr-2" />
                View Resume
              </Button>
              <Button variant="outline" className="px-8 py-3 border-green-400 text-green-400 hover:bg-green-400 hover:text-white">
                Explore Projects
              </Button>
            </div>

            <div className="flex space-x-6">
              <a href="https://github.com" className="text-gray-400 hover:text-green-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-green-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:abhinavspillai2005@gmail.com" className="text-gray-400 hover:text-green-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full blur-3xl absolute inset-0"></div>
              <div className="relative w-72 h-72 bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-sm text-gray-400">Profile Picture</div>
                  <div className="text-xs text-gray-500 mt-1">Placeholder for personal branding</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-green-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-gray-400 leading-relaxed">
                I'm Abhinav S Pillai, an aspiring AI and software engineer passionate about building intelligent systems that solve real-world problems. With a strong foundation in machine learning, computer vision, and neural networks, I've led impactful projects such as an AI fitness trainer and a real-time sign language converter.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                I enjoy transforming ideas into AI-powered solutions that enhance accessibility, automation, and everyday efficiency.
              </p>
            </div>
            
            <div className="space-y-6">
              <Card className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Bachelor of Computer Applications (BCA)</h4>
                      <p className="text-sm text-gray-400">Jain University, Bangalore</p>
                      <p className="text-sm text-gray-400">2022–2025 • CGPA: 8.1</p>
                    </div>
                    <Separator className="my-4" />
                    <div>
                      <h4 className="font-medium">High School (CBSE)</h4>
                      <p className="text-sm text-gray-400">Navajeevan Bethany Vidyalaya, Kerala</p>
                      <p className="text-sm text-gray-400">2022 • 82%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-4 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} hover:scale-105 transition-transform duration-300`}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                      {skill.icon}
                    </div>
                    <h3 className="font-semibold">{skill.category}</h3>
                  </div>
                  <div className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <Badge key={itemIndex} variant="secondary" className="mr-2 mb-2">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} hover:scale-105 transition-all duration-300 group`}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold group-hover:text-green-400 transition-colors">
                      {project.title}
                    </h3>
                    <Badge className={project.status === "Completed" ? "bg-green-500" : "bg-yellow-500"}>
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="bg-green-500 hover:bg-green-600 flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-20 px-4 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} hover:scale-105 transition-transform duration-300 text-center`}>
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Work Together</h3>
                <p className="text-gray-400 mb-6">
                  Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your AI ideas to life.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <Mail className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-400">abhinavspillai2005@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <Phone className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-400">+91 8590252890</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className={`w-full px-4 py-2 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} focus:ring-2 focus:ring-green-400 focus:border-transparent`}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className={`w-full px-4 py-2 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} focus:ring-2 focus:ring-green-400 focus:border-transparent`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className={`w-full px-4 py-2 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} focus:ring-2 focus:ring-green-400 focus:border-transparent`}
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
              <Star className="w-3 h-3 text-white" />
            </div>
            <span className="font-semibold">Abhinav S Pillai</span>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com" className="text-gray-400 hover:text-green-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-green-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:abhinavspillai2005@gmail.com" className="text-gray-400 hover:text-green-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            © 2025 Abhinav S Pillai. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
