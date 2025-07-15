"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  Server,
  Palette,
  ChevronRight,
  User,
  Briefcase,
  Award,
  GraduationCap,
  Calendar,
  CheckCircle,
  Phone,
  Copy,
  X,
  FileTextIcon,
} from "lucide-react"
import Image from "next/image"
import { NEXT_RESUME_HEADER } from "next/dist/lib/constants"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState(0)
  const [showContactPopup, setShowContactPopup] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Handle active section
      const sections = document.querySelectorAll("section[data-section]")
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach((section, index) => {
        const element = section as HTMLElement
        const offsetTop = element.offsetTop
        const offsetHeight = element.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(index)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionIndex: number) => {
    const sections = document.querySelectorAll("section[data-section]")
    if (sections[sectionIndex]) {
      sections[sectionIndex].scrollIntoView({ behavior: "smooth" })
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // You could add a toast notification here if desired
  }

  const skills = [
    { name: "React.js", symbol: "React", icon: <Code className="w-6 h-6" /> },
    { name: "Next.js", symbol: "Next", icon: <Globe className="w-6 h-6" /> },
    { name: "JavaScript", symbol: "Js", icon: <Code className="w-6 h-6" /> },
    { name: "TypeScript", symbol: "Ts", icon: <Code className="w-6 h-6" /> },
    { name: "Node.js", symbol: "Node", icon: <Server className="w-6 h-6" /> },
    { name: "MongoDB", symbol: "MgDb", icon: <Database className="w-6 h-6" /> },
    { name: "Tailwind CSS", symbol: "Tw", icon: <Palette className="w-6 h-6" /> },
    { name: "C++", symbol: "C++", icon: <Code className="w-6 h-6" /> },
    { name: "C", symbol: "C", icon: <Code className="w-6 h-6" /> },
    { name: "Java (Basics)", symbol: "Java", icon: <Code className="w-6 h-6" /> },
    { name: "HTML", symbol: "Html", icon: <Globe className="w-6 h-6" /> },
    { name: "CSS", symbol: "Css", icon: <Palette className="w-6 h-6" /> },
  ]

  const projects = [
    {
      title: "JOB SIGNATURE",
      description:
        "A comprehensive job portal platform connecting employers with talented professionals. Features advanced search, real-time notifications, and seamless application management.",
      technologies: ["React", "Node.js", "React", "Tailwind", "CSS", "JavaSrpit"],
      features: [
        "Advanced job search and filtering",
        "Real-time job/interview searching",
        "Easy Apply",
        "Newly Job & Intership",
      ],
      status: "Live Project",
      githubLink: "#", // Will be updated later
      websiteLink: "#", // Will be updated later
    },
    
  ]

  const certifications = [
    {
      title: "Web Development",
      issuer: "Null-class",
      date: "june 2025",
      description: "Successfully completed online Training on WEB DEVELOPMENT and real time project training on Learn To build a Real Time Website Like YouTube.",
      credentiaId: "68444a67c9fca98ead4191cf",
      status: "Active",
      certificateUrl: "https://www.nullclass.com/certificates/68444a67c9fca98ead4191cf", // Replace with actual certificate URL when available
    },
    {
      title: "JavaScript",
      issuer: "Infosys SpringBoard",
      date: "March 2025",
      description: "Successfully completed the course of JavaSript.",
      credentiaId: "",
      status: "Active",
      certificateUrl: "https://drive.google.com/file/d/1SnHy8GwKIe5L56oqiXJTgmbZ5t6JI9qB/view?usp=drive_link", // Replace with actual certificate URL when available
    },
    {
      title: "Salesforce Agentblazer Champion",
      issuer: "Salesforce",
      date: "april 2025",
      description: "Successfully completed cource of Salesforce AI with Agentforce Champion.",
      credentiaId: "",
      status: "Active",
      certificateUrl: "https://drive.google.com/file/d/10DjbEG2VMYpP2Gd97ppsrgB_BSzVywpZ/view?usp=drive_link", // Replace with actual certificate URL when available
    },
    // Add more certifications as needed
  ]

  const TechBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/20 to-black"></div>
      {/* Floating tech elements */}
      <div className="absolute top-20 left-10 text-white/5 text-4xl md:text-6xl animate-pulse">{"</>"}</div>
      <div className="absolute top-40 right-20 text-white/5 text-2xl md:text-4xl animate-bounce">{"{}"}</div>
      <div className="absolute bottom-40 left-20 text-white/5 text-3xl md:text-5xl animate-pulse">[]</div>
      <div className="absolute bottom-20 right-10 text-white/5 text-xl md:text-3xl animate-bounce">()</div>
      <div className="absolute top-60 left-1/2 text-white/5 text-2xl md:text-4xl animate-pulse">{"<>"}</div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px]"></div>

      {/* Animated particles */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 md:w-2 md:h-2 bg-white/10 rounded-full animate-ping"></div>
      <div className="absolute top-3/4 right-1/4 w-0.5 h-0.5 md:w-1 md:h-1 bg-white/15 rounded-full animate-ping animation-delay-1000"></div>
      <div className="absolute top-1/2 left-3/4 w-1 h-1 md:w-1.5 md:h-1.5 bg-white/12 rounded-full animate-ping animation-delay-2000"></div>
    </div>
  )

  const Navigation = () => (
    <nav className="fixed top-3 md:top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-black/80 backdrop-blur-md border border-white/20 rounded-full px-3 md:px-6 py-2 md:py-3 shadow-2xl">
        <div className="flex items-center space-x-2 md:space-x-4">
          {[
            { id: 0, label: "Home", icon: <User className="w-3 h-3 md:w-4 md:h-4" /> },
            { id: 1, label: "Projects", icon: <Briefcase className="w-3 h-3 md:w-4 md:h-4" /> },
            { id: 2, label: "Skills", icon: <Award className="w-3 h-3 md:w-4 md:h-4" /> },
            { id: 3, label: "Certifications", icon: <GraduationCap className="w-3 h-3 md:w-4 md:h-4" /> },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center space-x-1 md:space-x-2 px-2 md:px-3 py-1.5 md:py-2 rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-105 ${
                activeSection === item.id ? "bg-white/20 text-white shadow-lg" : "text-gray-400 hover:text-white"
              }`}
            >
              <div className="transition-transform duration-300 hover:rotate-12">{item.icon}</div>
              <span className="text-xs md:text-sm font-medium hidden sm:inline">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  )

  const ContactPopup = () => (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" onClick={() => setShowContactPopup(false)} />

      {/* Popup Card */}
      <div className="fixed inset-4 sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 sm:inset-auto z-50 flex items-center justify-center">
        <Card className="bg-black/90 border-white/20 backdrop-blur-md shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-lg animate-in fade-in-0 zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-white">Contact Information</h3>
              <button
                onClick={() => setShowContactPopup(false)}
                className="p-1.5 sm:p-2 rounded-full hover:bg-white/10 transition-colors duration-200 touch-manipulation"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-white" />
              </button>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {/* Email */}
              <div className="p-3 sm:p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start space-x-3 min-w-0 flex-1">
                    <div className="p-2 rounded-full bg-white/10 flex-shrink-0">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Email</p>
                      <p className="text-white font-medium text-sm sm:text-base break-all">mahakalayush11@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 flex-shrink-0">
                    <button
                      onClick={() => copyToClipboard("mahakalayush11@gmail.com")}
                      className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200 touch-manipulation"
                      title="Copy email"
                    >
                      <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 hover:text-white" />
                    </button>
                    <a
                      href="mailto:mahakalayush11@gmail.com"
                      className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200 touch-manipulation"
                      title="Send email"
                    >
                      <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 hover:text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="p-3 sm:p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start space-x-3 min-w-0 flex-1">
                    <div className="p-2 rounded-full bg-white/10 flex-shrink-0">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Phone</p>
                      <p className="text-white font-medium text-sm sm:text-base">+91 8176943020</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 flex-shrink-0">
                    <button
                      onClick={() => copyToClipboard("8176943020")}
                      className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200 touch-manipulation"
                      title="Copy phone number"
                    >
                      <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 hover:text-white" />
                    </button>
                    <a
                      href="tel:+918176943020"
                      className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200 touch-manipulation"
                      title="Call now"
                    >
                      <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 hover:text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10">
              <p className="text-center text-xs sm:text-sm text-gray-400 leading-relaxed">
                Feel free to reach out for collaborations or opportunities!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )

  const HomeSection = () => (
    <section
      data-section="0"
      className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-16 md:pt-20 relative"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-block">
                <Badge
                  variant="outline"
                  className="border-white/30 text-white bg-white/5 px-3 md:px-4 py-1.5 md:py-2 text-sm"
                >
                  Web Developer
                </Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
                Hi, I'm <span className="text-red-500">Ayush Srivastava</span>
              </h1>
              <p className="text-base md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Passionate web developer crafting digital experiences with modern technologies. I build responsive,
                user-friendly applications that solve real-world problems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                className="bg-white text-black hover:bg-gray-200 px-6 md:px-8 py-2.5 md:py-3 text-base md:text-lg group transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection(1)}
              >
                View My Work
                <ChevronRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-6 md:px-8 py-2.5 md:py-3 text-base md:text-lg transition-all duration-300 hover:scale-105 bg-transparent"
                onClick={() => setShowContactPopup(true)}
              >
                <Mail className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                Contact Me
              </Button>
            </div>

            <div className="flex space-x-4 md:space-x-6 pt-4 justify-center lg:justify-start">
              {[
                {
                  icon: <Github className="w-5 h-5 md:w-6 md:h-6" />,
                  href: "https://github.com/ayushhxx",
                  label: "GitHub",
                },
                {
                  icon: <Linkedin className="w-5 h-5 md:w-6 md:h-6" />,
                  href: "https://www.linkedin.com/in/ayush-srivastava-81a622247/",
                  label: "LinkedIn",
                }, 
                {
                  icon: <Mail className="w-5 h-5 md:w-6 md:h-6" />,
                  href: "mailto:mahakalayush11@gmail.com?subject=Portfolio%20Contact",
                  label: "Email",
                },
                {
                  icon: <FileTextIcon className="w-5 h-5 md:w-6 md:h-6" />,
                  href: "https://drive.google.com/file/d/1LVya-VWnpIJH-QvmDDBpRBSgCf_x0XO_/view?usp=drive_link",
                  label: "Resume",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? "_self" : "_blank"}
                  rel={social.href.startsWith("mailto:") ? "" : "noopener noreferrer"}
                  className="p-2.5 md:p-3 rounded-full border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-110 group"
                  aria-label={social.label}
                >
                  <div className="group-hover:rotate-12 transition-transform duration-300">{social.icon}</div>
                </a>
              ))}
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="relative w-60 h-60 md:w-80 md:h-80 mx-auto">
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-full blur-3xl opacity-30 animate-pulse"></div>

              {/* Profile image container */}
              <div className="relative w-full h-full rounded-full border-2 border-white/20 overflow-hidden bg-gradient-to-br from-gray-800 to-black group hover:border-white/40 transition-all duration-500">
                <Image
                  src="/images/profile.jpg"
                  alt="Ayush Srivastava - Web Developer"
                  fill
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  priority
                />
                {/* Subtle overlay for better integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating elements around the image */}
              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-6 h-6 md:w-8 md:h-8 bg-white/10 rounded-full animate-bounce animation-delay-1000"></div>
              <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-4 h-4 md:w-6 md:h-6 bg-white/15 rounded-full animate-bounce animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Popup */}
      {showContactPopup && <ContactPopup />}
    </section>
  )

  const ProjectsSection = () => (
    <section data-section="1" className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-16 md:pt-20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gray-300">Project</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto">
            Showcasing my latest work in web development
          </p>
        </div>

        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-white/5 border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500 hover:scale-[1.02] group max-w-3xl mx-auto"
          >
            <CardContent className="p-4 md:p-6">
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <Badge className="bg-white/10 text-white border-white/20 text-xs md:text-sm">
                      {project.status}
                    </Badge>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white group-hover:text-gray-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">{project.description}</p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-base md:text-lg font-semibold text-gray-200">Key Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-300 text-xs md:text-sm">
                        <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="border-white/20 text-gray-300 hover:bg-white/10 transition-colors duration-300 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                  <Button
                    className="bg-white text-black hover:bg-gray-200 group/btn transition-all duration-300 hover:scale-105 text-sm md:text-base"
                    onClick={() => window.open("https://github.com/ayushhxx", "_blank")}
                  >
                    <Github className="mr-2 w-3 h-3 md:w-4 md:h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 group/btn transition-all duration-300 hover:scale-105 bg-transparent text-sm md:text-base"
                    onClick={() => window.open(project.websiteLink, "_blank")}
                  >
                    <ExternalLink className="mr-2 w-3 h-3 md:w-4 md:h-4 group-hover/btn:rotate-45 transition-transform duration-300" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )

  const SkillsSection = () => (
    <section data-section="2" className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-16 md:pt-20">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4">
            My <span className="text-gray-300">Skills</span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6 justify-items-center">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500 hover:scale-110 group w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 relative overflow-hidden"
              >
                <CardContent className="p-2 md:p-3 h-full flex flex-col items-center justify-center relative">
                  {/* Atomic number style */}
                  <div className="absolute top-1 left-1 md:top-1.5 md:left-1.5 text-xs text-gray-500 font-mono">
                    {index + 1}
                  </div>

                  {/* Element symbol */}
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white group-hover:text-gray-300 transition-colors duration-300 mb-2">
                    {skill.symbol}
                  </div>

                  {/* Icon */}
                  <div className="text-white/60 group-hover:text-white group-hover:rotate-12 transition-all duration-300 mb-2">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">{skill.icon}</div>
                  </div>

                  {/* Full name */}
                  <div className="text-xs md:text-sm text-gray-400 text-center leading-tight group-hover:text-gray-300 transition-colors duration-300 px-1">
                    {skill.name}
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Periodic table style legend */}
          <div className="mt-8 md:mt-12 text-center">
            <div className="inline-flex flex-wrap items-center justify-center space-x-2 md:space-x-4 text-xs md:text-sm text-gray-500 gap-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-white/10 rounded border border-white/20"></div>
                <span>Frontend</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-white/20 rounded border border-white/30"></div>
                <span>Backend</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-white/30 rounded border border-white/40"></div>
                <span>Languages</span>
              </div>
            </div>
          </div>
        </div>
        
        
        
      </div>
    </section>
  )

  const CertificationsSection = () => (
    <section data-section="3" className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-16 md:pt-20">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4">
            My <span className="text-gray-300">Certifications</span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6 md:gap-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500 hover:scale-[1.02] group"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                        <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-gray-300 transition-colors duration-300">
                          {cert.title}
                        </h3>
                        <p className="text-sm md:text-base text-gray-400">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end space-y-2">
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs md:text-sm">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {cert.status}
                      </Badge>
                      <div className="flex items-center text-gray-400 text-xs md:text-sm">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                        {cert.date}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">{cert.description}</p>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                    <div className="text-xs md:text-sm text-gray-500">
                      <span className="font-medium">Credential ID:</span> {cert.credentialId}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white/20 text-white hover:bg-white/10 group/btn transition-all duration-300 hover:scale-105 bg-transparent text-xs md:text-sm"
                      onClick={() => window.open(cert.certificateUrl, "_blank")}
                    >
                      <ExternalLink className="mr-2 w-3 h-3 group-hover/btn:rotate-45 transition-transform duration-300" />
                      View Certificate
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add more certifications placeholder */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500 border-dashed mt-6 md:mt-8">
            <CardContent className="p-6 md:p-8 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-gray-400" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-300 mb-2">More Certifications Coming Soon</h3>
              <p className="text-sm md:text-base text-gray-400">
                I'm continuously learning and earning new certifications to stay updated with the latest technologies.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500 inline-block">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Let's Connect!</h3>
              <p className="text-gray-400 mb-6 max-w-md text-sm md:text-base">
                Ready to discuss opportunities or collaborate on exciting projects? I'd love to hear from you.
              </p>
              <Button
                asChild
                className="bg-white text-black hover:bg-gray-200 px-6 md:px-8 py-2.5 md:py-3 text-base md:text-lg group transition-all duration-300 hover:scale-105"
              >
                <a href="mailto:mahakalayush11@gmail.com?subject=Portfolio%20Contact&body=Hi%20Ayush,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0ABest%20regards">
                  <Mail className="mr-2 w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Get In Touch
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )

  return (
    <div className="min-h-screen bg-black text-white relative">
      <TechBackground />
      <Navigation />

      <div className="relative z-10">
        <HomeSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
      </div>
    </div>
  )
}
