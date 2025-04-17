"use client"

import { useState, useEffect } from "react"
import {
  Github,
  ExternalLink,
  Plus,
  Edit,
  Trash,
  Moon,
  Sun,
  X,
  LogOut,
  Lock,
  FileText,
  Linkedin,
  Mail,
} from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

// Sample project data
const initialProjects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart functionality and payment processing.",
    image: "/sleek-product-showcase.png",
    github: "https://github.com/username/ecommerce",
    liveUrl: "https://example.com/ecommerce",
  },
  {
    id: "2",
    title: "Weather Dashboard",
    description: "Real-time weather forecasting app with interactive maps and data visualization.",
    image: "/modern-weather-dashboard.png",
    github: "https://github.com/username/weather",
    liveUrl: "https://example.com/weather",
  },
  {
    id: "3",
    title: "Task Management App",
    description: "Productivity tool for organizing tasks with drag-and-drop functionality.",
    image: "/clean-task-dashboard.png",
    github: "https://github.com/username/tasks",
    liveUrl: "",
  },
  {
    id: "4",
    title: "Social Media Dashboard",
    description: "Analytics dashboard for tracking engagement across multiple platforms.",
    image: "/social-media-insights.png",
    github: "https://github.com/username/social-dashboard",
    liveUrl: "https://example.com/social",
  },
]

// Add this sample experience data after the initialProjects array
const initialExperiences = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    startDate: "Jan 2022",
    endDate: "Present",
    description: [
      "Led the development of a React-based dashboard that increased user engagement by 40%",
      "Mentored junior developers and implemented code review processes",
      "Optimized application performance, reducing load time by 30%",
    ],
    logo: "/techcorp-logo.png",
  },
  {
    id: "2",
    title: "Full Stack Developer",
    company: "InnovateSoft",
    startDate: "Mar 2020",
    endDate: "Dec 2021",
    description: [
      "Developed and maintained multiple client projects using React, Node.js, and MongoDB",
      "Implemented CI/CD pipelines that reduced deployment time by 50%",
      "Collaborated with design team to create responsive, accessible interfaces",
    ],
    logo: "/innovatesoft-logo.png",
  },
  {
    id: "3",
    title: "Web Developer",
    company: "DigitalWave Agency",
    startDate: "Jun 2018",
    endDate: "Feb 2020",
    description: [
      "Built custom WordPress themes and plugins for enterprise clients",
      "Developed e-commerce solutions with WooCommerce and Shopify",
      "Optimized website performance and SEO for client websites",
    ],
    logo: "/digitalwave-logo.png",
  },
]

export default function Portfolio() {
  const [projects, setProjects] = useState(initialProjects)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [darkMode, setDarkMode] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)
  const [editingProject, setEditingProject] = useState(null)
  const [newProject, setNewProject] = useState({
    id: "",
    title: "",
    description: "",
    image: "",
    github: "",
    liveUrl: "",
  })

  // Add this to the component's state declarations
  const [experiences, setExperiences] = useState(initialExperiences)
  const [showExperienceModal, setShowExperienceModal] = useState(false)
  const [editingExperience, setEditingExperience] = useState(null)
  const [newExperience, setNewExperience] = useState({
    id: "",
    title: "",
    company: "",
    startDate: "",
    endDate: "",
    description: [""],
    logo: "",
  })

  // Apply dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault()
    // Simple mock authentication
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true)
      setShowLoginModal(false)
      setUsername("")
      setPassword("")
    }
  }

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  // Add new project
  const handleAddProject = () => {
    const projectToAdd = {
      ...newProject,
      id: Date.now().toString(),
    }
    setProjects([...projects, projectToAdd])
    setNewProject({
      id: "",
      title: "",
      description: "",
      image: "",
      github: "",
      liveUrl: "",
    })
    setShowAddModal(false)
  }

  // Edit project
  const handleEditProject = () => {
    setProjects(projects.map((project) => (project.id === editingProject.id ? editingProject : project)))
    setEditingProject(null)
  }

  // Delete project
  const handleDeleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id))
  }

  // Add these functions for experience management
  const handleAddExperience = () => {
    const experienceToAdd = {
      ...newExperience,
      id: Date.now().toString(),
      description: newExperience.description.filter((item) => item.trim() !== ""),
    }
    setExperiences([...experiences, experienceToAdd])
    setNewExperience({
      id: "",
      title: "",
      company: "",
      startDate: "",
      endDate: "",
      description: [""],
      logo: "",
    })
    setShowExperienceModal(false)
  }

  const handleEditExperience = () => {
    const updatedExperience = {
      ...editingExperience,
      description: editingExperience.description.filter((item) => item.trim() !== ""),
    }
    setExperiences(experiences.map((exp) => (exp.id === updatedExperience.id ? updatedExperience : exp)))
    setEditingExperience(null)
  }

  const handleDeleteExperience = (id) => {
    setExperiences(experiences.filter((exp) => exp.id !== id))
  }

  const addDescriptionField = () => {
    if (editingExperience) {
      setEditingExperience({
        ...editingExperience,
        description: [...editingExperience.description, ""],
      })
    } else {
      setNewExperience({
        ...newExperience,
        description: [...newExperience.description, ""],
      })
    }
  }

  const updateDescriptionField = (index, value) => {
    if (editingExperience) {
      const updatedDescription = [...editingExperience.description]
      updatedDescription[index] = value
      setEditingExperience({
        ...editingExperience,
        description: updatedDescription,
      })
    } else {
      const updatedDescription = [...newExperience.description]
      updatedDescription[index] = value
      setNewExperience({
        ...newExperience,
        description: updatedDescription,
      })
    }
  }

  const removeDescriptionField = (index) => {
    if (editingExperience) {
      const updatedDescription = [...editingExperience.description]
      updatedDescription.splice(index, 1)
      setEditingExperience({
        ...editingExperience,
        description: updatedDescription,
      })
    } else {
      const updatedDescription = [...newExperience.description]
      updatedDescription.splice(index, 1)
      setNewExperience({
        ...newExperience,
        description: updatedDescription,
      })
    }
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}
    >
      <header className="container mx-auto px-4 py-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Jane Doe</h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">Full-Stack Developer & UI Designer</p>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              <LogOut className="h-5 w-5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          ) : (
            <button
              onClick={() => setShowLoginModal(true)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Login"
            >
              <Lock className="h-5 w-5" />
            </button>
          )}
        </div>
      </header>

      {/* Personal Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          className="flex flex-col md:flex-row gap-8 items-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 overflow-hidden rounded-full border-4 border-indigo-100 dark:border-indigo-900 shadow-lg">
            <img src="/confident-professional.png" alt="Profile Photo" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate full-stack developer with expertise in React, Next.js, and modern web technologies. With
              over 5 years of experience building beautiful, functional web applications, I focus on creating intuitive
              user experiences backed by clean, efficient code. When I'm not coding, you can find me hiking, reading
              sci-fi novels, or experimenting with new tech.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://drive.google.com/your-resume-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <FileText className="h-4 w-4" />
                <span>View Resume</span>
              </a>
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:your-email@example.com"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Past Experience</h2>
          {isLoggedIn && (
            <button
              onClick={() => setShowExperienceModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Plus className="h-4 w-4" />
              <span>Add Experience</span>
            </button>
          )}
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content */}
                <div
                  className={`w-full md:w-[calc(50%-20px)] ${index % 2 === 0 ? "md:pl-0 md:pr-8" : "md:pl-8 md:pr-0"} pl-8`}
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 relative group">
                    {isLoggedIn && (
                      <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => setEditingExperience(experience)}
                          className="p-1.5 bg-gray-100 dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                          aria-label="Edit experience"
                        >
                          <Edit className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                        </button>
                        <button
                          onClick={() => handleDeleteExperience(experience.id)}
                          className="p-1.5 bg-gray-100 dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                          aria-label="Delete experience"
                        >
                          <Trash className="h-4 w-4 text-red-600 dark:text-red-400" />
                        </button>
                      </div>
                    )}

                    <div className="flex items-start gap-4">
                      {experience.logo && (
                        <div className="hidden sm:block w-12 h-12 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-700 flex-shrink-0">
                          <img
                            src={experience.logo || "/placeholder.svg"}
                            alt={`${experience.company} logo`}
                            className="w-full h-full object-contain p-1"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold">{experience.title}</h3>
                        <p className="text-indigo-600 dark:text-indigo-400 font-medium">{experience.company}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                          {experience.startDate} – {experience.endDate}
                        </p>
                        <ul className="space-y-2">
                          {experience.description.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-indigo-600 dark:text-indigo-400 mr-2">•</span>
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">My Projects</h2>
          {isLoggedIn && (
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Plus className="h-4 w-4" />
              <span>Add Project</span>
            </button>
          )}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <AnimatePresence>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image || "/placeholder.svg?height=400&width=600&query=project+thumbnail"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {isLoggedIn && (
                    <div className="absolute top-2 right-2 flex gap-2">
                      <button
                        onClick={() => setEditingProject(project)}
                        className="p-1.5 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                        aria-label="Edit project"
                      >
                        <Edit className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                      </button>
                      <button
                        onClick={() => handleDeleteProject(project.id)}
                        className="p-1.5 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                        aria-label="Delete project"
                      >
                        <Trash className="h-4 w-4 text-red-600 dark:text-red-400" />
                      </button>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        aria-label="View live site"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      {/* Login Modal */}
      <AnimatePresence>
        {showLoginModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Admin Login</h3>
                <button
                  onClick={() => setShowLoginModal(false)}
                  className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label htmlFor="username" className="block text-sm font-medium mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="password" className="block text-sm font-medium mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
                >
                  Login
                </button>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                  Use username: admin, password: password
                </p>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add/Edit Project Modal */}
      <AnimatePresence>
        {(showAddModal || editingProject) && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{editingProject ? "Edit Project" : "Add New Project"}</h3>
                <button
                  onClick={() => {
                    setShowAddModal(false)
                    setEditingProject(null)
                  }}
                  className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  editingProject ? handleEditProject() : handleAddProject()
                }}
              >
                <div className="mb-4">
                  <label htmlFor="title" className="block text-sm font-medium mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={editingProject ? editingProject.title : newProject.title}
                    onChange={(e) => {
                      if (editingProject) {
                        setEditingProject({ ...editingProject, title: e.target.value })
                      } else {
                        setNewProject({ ...newProject, title: e.target.value })
                      }
                    }}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="description" className="block text-sm font-medium mb-1">
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={editingProject ? editingProject.description : newProject.description}
                    onChange={(e) => {
                      if (editingProject) {
                        setEditingProject({ ...editingProject, description: e.target.value })
                      } else {
                        setNewProject({ ...newProject, description: e.target.value })
                      }
                    }}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="image" className="block text-sm font-medium mb-1">
                    Image URL
                  </label>
                  <input
                    type="text"
                    id="image"
                    value={editingProject ? editingProject.image : newProject.image}
                    onChange={(e) => {
                      if (editingProject) {
                        setEditingProject({ ...editingProject, image: e.target.value })
                      } else {
                        setNewProject({ ...newProject, image: e.target.value })
                      }
                    }}
                    placeholder="/team-brainstorm.png"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="github" className="block text-sm font-medium mb-1">
                    GitHub URL
                  </label>
                  <input
                    type="text"
                    id="github"
                    value={editingProject ? editingProject.github : newProject.github}
                    onChange={(e) => {
                      if (editingProject) {
                        setEditingProject({ ...editingProject, github: e.target.value })
                      } else {
                        setNewProject({ ...newProject, github: e.target.value })
                      }
                    }}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="liveUrl" className="block text-sm font-medium mb-1">
                    Live URL (optional)
                  </label>
                  <input
                    type="text"
                    id="liveUrl"
                    value={editingProject ? editingProject.liveUrl : newProject.liveUrl}
                    onChange={(e) => {
                      if (editingProject) {
                        setEditingProject({ ...editingProject, liveUrl: e.target.value })
                      } else {
                        setNewProject({ ...newProject, liveUrl: e.target.value })
                      }
                    }}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
                >
                  {editingProject ? "Save Changes" : "Add Project"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add/Edit Experience Modal */}
      <AnimatePresence>
        {(showExperienceModal || editingExperience) && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{editingExperience ? "Edit Experience" : "Add New Experience"}</h3>
                <button
                  onClick={() => {
                    setShowExperienceModal(false)
                    setEditingExperience(null)
                  }}
                  className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  editingExperience ? handleEditExperience() : handleAddExperience()
                }}
              >
                <div className="mb-4">
                  <label htmlFor="title" className="block text-sm font-medium mb-1">
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={editingExperience ? editingExperience.title : newExperience.title}
                    onChange={(e) => {
                      if (editingExperience) {
                        setEditingExperience({ ...editingExperience, title: e.target.value })
                      } else {
                        setNewExperience({ ...newExperience, title: e.target.value })
                      }
                    }}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="company" className="block text-sm font-medium mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={editingExperience ? editingExperience.company : newExperience.company}
                    onChange={(e) => {
                      if (editingExperience) {
                        setEditingExperience({ ...editingExperience, company: e.target.value })
                      } else {
                        setNewExperience({ ...newExperience, company: e.target.value })
                      }
                    }}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="startDate" className="block text-sm font-medium mb-1">
                      Start Date
                    </label>
                    <input
                      type="text"
                      id="startDate"
                      placeholder="Jan 2022"
                      value={editingExperience ? editingExperience.startDate : newExperience.startDate}
                      onChange={(e) => {
                        if (editingExperience) {
                          setEditingExperience({ ...editingExperience, startDate: e.target.value })
                        } else {
                          setNewExperience({ ...newExperience, startDate: e.target.value })
                        }
                      }}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="endDate" className="block text-sm font-medium mb-1">
                      End Date
                    </label>
                    <input
                      type="text"
                      id="endDate"
                      placeholder="Present"
                      value={editingExperience ? editingExperience.endDate : newExperience.endDate}
                      onChange={(e) => {
                        if (editingExperience) {
                          setEditingExperience({ ...editingExperience, endDate: e.target.value })
                        } else {
                          setNewExperience({ ...newExperience, endDate: e.target.value })
                        }
                      }}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="logo" className="block text-sm font-medium mb-1">
                    Company Logo URL (optional)
                  </label>
                  <input
                    type="text"
                    id="logo"
                    value={editingExperience ? editingExperience.logo : newExperience.logo}
                    onChange={(e) => {
                      if (editingExperience) {
                        setEditingExperience({ ...editingExperience, logo: e.target.value })
                      } else {
                        setNewExperience({ ...newExperience, logo: e.target.value })
                      }
                    }}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700"
                  />
                </div>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-sm font-medium">Description Points</label>
                    <button
                      type="button"
                      onClick={addDescriptionField}
                      className="text-xs flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                    >
                      <Plus className="h-3 w-3" /> Add Point
                    </button>
                  </div>
                  {(editingExperience ? editingExperience.description : newExperience.description).map(
                    (point, index) => (
                      <div key={index} className="flex items-center gap-2 mb-2">
                        <input
                          type="text"
                          value={point}
                          onChange={(e) => updateDescriptionField(index, e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700"
                          placeholder="Describe your achievement or responsibility"
                          required
                        />
                        {(editingExperience ? editingExperience.description : newExperience.description).length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeDescriptionField(index)}
                            className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                          >
                            <X className="h-4 w-4 text-gray-500" />
                          </button>
                        )}
                      </div>
                    ),
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
                >
                  {editingExperience ? "Save Changes" : "Add Experience"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="container mx-auto px-4 py-8 mt-12 border-t border-gray-200 dark:border-gray-700">
        <p className="text-center text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Jane Doe. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
