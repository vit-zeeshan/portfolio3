"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, Github, Download } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowRight as ArrowRightIcon } from "lucide-react"
import Image from "next/image"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { ThemeSparkles } from "@/components/ui/ThemeSparkles"

export default function Page() {
  const [showMoreCerts, setShowMoreCerts] = useState(false)
  const [visibleProjectCount, setVisibleProjectCount] = useState(6)
  const [visibleCertCount, setVisibleCertCount] = useState(8)

  const projects = [
    {
      title: "Rozgar Hub",
      description: "A collection Jobs, job listing websites",
      content: "A comprehensive collection of job, internship to streamline the Careers",
      // link: "https://github.com/fernand3z/dev-toolbox",
      technologies: [
        { name: "Python", icon: "/icons/python-svgrepo-com.svg" },
        { name: "Prettier", icon: "/icons/prettier-svgrepo-com.svg" },
        { name: "Bash", icon: "/icons/bash-icon-svgrepo-com.svg" },
        { name: "Linux", icon: "/icons/linux-svgrepo-com(1).svg" },
        { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
        { name: "GitHub", icon: "/icons/github-svgrepo-com.svg" }
      ]
    },
    {
      title: "Amplify",
      description: "music streaming web",
      content: "Streamlines the process of keeping your system up-to-date with latest music",
      // link: "https://github.com/fernand3z/update-script",
      technologies: [
        { name: "Bash", icon: "/icons/bash-icon-svgrepo-com.svg" },
        { name: "Linux", icon: "/icons/linux-svgrepo-com(1).svg" },
        { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
        { name: "GitHub", icon: "/icons/github-svgrepo-com.svg" }
      ]
    },
    // {
    //   title: "Portfolio Website",
    //   description: "Modern portfolio website built with Next.js and Tailwind CSS",
    //   content: "A responsive and animated portfolio showcasing my projects and skills",
    //   link: "https://github.com/fernand3z/portfolio",
    //   technologies: [
    //     { name: "Next.js", icon: "/icons/nextjs-icon-svgrepo-com.svg" },
    //     { name: "React", icon: "/icons/react-svgrepo-com.svg" },
    //     { name: "TypeScript", icon: "/icons/typescript-svgrepo-com.svg" },
    //     { name: "Tailwind", icon: "/icons/tailwind-svgrepo-com.svg" },
    //     { name: "NPM", icon: "/icons/npm.svg" },
    //     { name: "Prettier", icon: "/icons/prettier-svgrepo-com.svg" },
    //     { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
    //     { name: "GitHub", icon: "/icons/github-svgrepo-com.svg" }
    //   ]
    // },
    // {
    //   title: "Personal Blog Site",
    //   description: "A modern blog site built with Hugo static site generator",
    //   content: "Fast and minimalist blog featuring custom themes, responsive design, and markdown support",
    //   link: "https://github.com/fernand3z/my-blog-site",
    //   technologies: [
    //     { name: "Hugo", icon: "/icons/hugo-svgrepo-com.svg" },
    //     { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
    //     { name: "GitHub", icon: "/icons/github-svgrepo-com.svg" }
    //   ]
    // },
    // {
    //   title: "ytmusic Downloader",
    //   description: "Python script for downloading music from YTmusic using the yt-dlp library",
    //   content: "A simple Python script to download audio from YouTube videos",
    //   link: "https://github.com/fernand3z/yt-music-downloader",
    //   technologies: [
    //     { name: "Python", icon: "/icons/python-svgrepo-com.svg" },
    //     { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
    //     { name: "GitHub", icon: "/icons/github-svgrepo-com.svg" }
    //   ]
    // },
    // {
    //   title: "Devlogz Blog App",
    //   description: "A React Native mobile app for my personal blog",
    //   content: "Cross-platform mobile application built with React Native that provides a native app experience for my blog site with offline capabilities and push notifications",
    //   link: "https://github.com/fernand3z/my-webview-app",
    //   technologies: [
    //     { name: "React Native", icon: "/icons/reactnative-svgrepo-com.svg" },
    //     { name: "JavaScript", icon: "/icons/javascript-svgrepo-com.svg" },
    //     { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
    //     { name: "GitHub", icon: "/icons/github-svgrepo-com.svg" }
    //   ]
    // },
    {
      title: "Coming Soon",
      description: "Future project planned",
      content: "Another exciting project in the pipeline. Stay tuned for updates!",
      status: "In Planning",
      technologies: []
    },
    {
      title: "Coming Soon",
      description: "Future project planned",
      content: "Another exciting project in the pipeline. Stay tuned for updates!",
      status: "In Planning",
      technologies: []
    },
    {
      title: "Coming Soon",
      description: "Future project planned",
      content: "Another exciting project in the pipeline. Stay tuned for updates!",
      status: "In Planning",
      technologies: []
    }
  ];

  const handleShowMoreProjects = () => {
    if (visibleProjectCount >= projects.length) {
      setVisibleProjectCount(6) // Reset to initial count of 6
    } else {
      setVisibleProjectCount(prev => Math.min(prev + 3, projects.length))
    }
  }

  const showingAllProjects = visibleProjectCount >= projects.length

  const handleShowMoreCerts = () => {
    if (visibleCertCount >= 12) { // Total number of certificates
      setVisibleCertCount(4) // Reset to initial count
    } else {
      setVisibleCertCount(prev => Math.min(prev + 4, 12))
    }
  }

  const showingAllCerts = visibleCertCount >= 12

  const handleContact = (platform: string) => {
    switch(platform) {
      case 'gmail':
        window.location.href = 'mailto:zeeshan.vit@gmail.com';
        break;
      case 'whatsapp':
        window.location.href = 'https://wa.me/919303483925';
        break;
      case 'linkedin':
        window.location.href = 'https://www.linkedin.com/in/1zeeshanraza';
        break;
    }
  }

  return (
    <div className="relative min-h-screen">
      <ThemeSparkles />
      <div className="relative min-h-screen bg-transparent">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Hero Section */}
          <section id="about" className="mb-24 text-center">
            <h1 className="text-[42px] font-bold mb-4 gradient-text animate-fade-in">
              Zeeshan Raza
            </h1>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in delay-200">
            DevOps & Back-End Developer from India. specializing in automation, scalability, and system optimization. I have experience with various programming languages and specifically DevOps. I am currently available to get hired.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="default"
                    className="bg-success hover:bg-success/90 text-success-foreground animate-fade-in delay-300 hover-lift focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  >
                    Contact Me!
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  <DropdownMenuLabel>Get in touch</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => handleContact('gmail')}>
                      <Mail className="mr-2 h-4 w-4" />
                      <span>Email</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleContact('whatsapp')}>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      <span>WhatsApp</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleContact('linkedin')}>
                      <Github className="mr-2 h-4 w-4" />
                      <span>LinkedIn</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                variant="default"
                className="bg-success hover:bg-success/90 text-success-foreground animate-fade-in delay-300 hover-lift"
                asChild
              >
                <a
                  href="https://github.com/zeeshanraza11"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GitHubLogoIcon className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="default"
                className="bg-success hover:bg-success/90 text-success-foreground animate-fade-in delay-300 hover-lift"
                asChild
              >
                <a href="https://rozgarhub.netlify.app" target="_blank" rel="noopener noreferrer">
                  My Blog Site
                </a>
              </Button>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-24 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Skills && Technologies</h2>
            <div className="card-spotify rounded-lg p-4">
              <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
                {/* Column 1 - Programming Languages */}
                <div className="animate-slide-in delay-100">
                  <div className="space-y-2 md:space-y-4">
                    {[
                      { name: "Java", icon: "/icons/java-svgrepo-com.svg" },
                      { name: "Python", icon: "/icons/python-svgrepo-com.svg" },
                      { name: "JavaScript", icon: "/icons/javascript-svgrepo-com.svg" },
                      { name: "C", icon: "/icons/c.svg" },
                      // { name: "TypeScript", icon: "/icons/typescript-svgrepo-com.svg" },
                      { name: "HTML", icon: "/icons/html-5-svgrepo-com.svg" },
                      { name: "CSS", icon: "/icons/css-svgrepo-com.svg" }
                    ].map((tech: { name: string; icon: string }, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <Image
                          src={tech.icon}
                          alt={`${tech.name} icon`}
                          width={20}
                          height={20}
                          className="w-5 h-5"
                        />
                        <span className="text-xs md:text-sm font-medium text-foreground">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2 - Frontend Frameworks */}
                <div className="animate-slide-in delay-200">
                  <div className="space-y-2 md:space-y-4">
                    {[
                      { name: "React", icon: "/icons/react-svgrepo-com.svg" },
                      // { name: "Next.js", icon: "/icons/nextjs-icon-svgrepo-com.svg" },
                      { name: "Tailwind", icon: "/icons/tailwind-svgrepo-com.svg" },
                      // { name: "NPM", icon: "/icons/npm-svgrepo-com.svg" },
                      // { name: "Hugo", icon: "/icons/hugo-svgrepo-com.svg" },
                      { name: "WordPress", icon: "/icons/wordpress-color-svgrepo-com.svg" },
                      // { name: "Deno", icon: "/icons/Deno_Logo_2024.svg" },
                    ].map((tech: { name: string; icon: string }, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <Image
                          src={tech.icon}
                          alt={`${tech.name} icon`}
                          width={20}
                          height={20}
                          className="w-5 h-5"
                        />
                        <span className="text-xs md:text-sm font-medium text-foreground">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 3 - Backend & Databases */}
                <div className="animate-slide-in delay-300">
                  <div className="space-y-2 md:space-y-4">
                    {[
                      { name: "MySQL", icon: "/icons/node-svgrepo-com.png" },
                      { name: "SpringBoot", icon: "/icons/spring-boot.svg" },
                      { name: "PostgreSQL", icon: "/icons/postgresql-svgrepo-com.svg" },
                      { name: "MongoDB", icon: "/icons/mongodb-svgrepo-com.svg" },
                      // { name: "Firebase", icon: "/icons/firebase-svgrepo-com.svg" },
                      // { name: "PHP", icon: "/icons/php-1-logo-svgrepo-com.svg" },
                      { name: "SQL", icon: "/icons/sql-database-generic-svgrepo-com.svg" }
                    ].map((tech: { name: string; icon: string }, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <Image
                          src={tech.icon}
                          alt={`${tech.name} icon`}
                          width={20}
                          height={20}
                          className="w-5 h-5"
                        />
                        <span className="text-xs md:text-sm font-medium text-foreground">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 4 - DevOps & Cloud */}
                <div className="animate-slide-in delay-400">
                  <div className="space-y-2 md:space-y-4">
                    {[
                      { name: "Docker", icon: "/icons/docker-svgrepo-com(1).svg" },
                      { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
                      { name: "GitHub", icon: "/icons/github-svgrepo-com.svg" },
                      { name: "GitLab", icon: "/icons/gitlab-svgrepo-com.svg" },
                      { name: "Ansible", icon: "/icons/ansible.svg" },
                      { name: "AWS", icon: "/icons/aws-svgrepo-com.svg" },
                      { name: "Oracle", icon: "/icons/oracle-icon.svg" },
                      { name: "Kubernetes", icon: "/icons/kubernetes-icon.svg" }
                    ].map((tech: { name: string; icon: string }, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <Image
                          src={tech.icon}
                          alt={`${tech.name} icon`}
                          width={20}
                          height={20}
                          className="w-5 h-5"
                        />
                        <span className="text-xs md:text-sm font-medium text-foreground">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 5 - Operating Systems */}
                <div className="animate-slide-in delay-500">
                  <div className="space-y-2 md:space-y-4">
                    {[
                      { name: "Linux", icon: "/icons/linux-svgrepo-com(1).svg" },
                      { name: "Ubuntu", icon: "/icons/ubuntu-svgrepo-com.svg" },
                      { name: "Windows", icon: "/icons/windows-10-icon.svg" },
                      // { name: "Apple", icon: "/icons/apple-svgrepo-com.svg" },
                      // { name: "Slack", icon: "/icons/slack-svgrepo-com.svg" },
                      // { name: "Cursor", icon: "/icons/cursor.svg" },
                      { name: "Vim", icon: "/icons/vim-svgrepo-com.svg" }
                    ].map((tech: { name: string; icon: string }, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <Image
                          src={tech.icon}
                          alt={`${tech.name} icon`}
                          width={20}
                          height={20}
                          className="w-5 h-5"
                        />
                        <span className="text-xs md:text-sm font-medium text-foreground">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 6 - Development Tools */}
                <div className="animate-slide-in delay-600">
                  <div className="space-y-2 md:space-y-4">
                    {[
                      { name: "VS Code", icon: "/icons/vscode-svgrepo-com.svg" },
                      { name: "Jupyter", icon: "/icons/jupyter-svgrepo-com.svg" },
                      { name: "Terminal", icon: "/icons/terminal-svgrepo-com.svg" },
                      { name: "PowerShell", icon: "/icons/powershell-svgrepo-com.svg" },
                      { name: "Bash", icon: "/icons/bash-icon-svgrepo-com.svg" },
                      { name: "Eclipse", icon: "/icons/eclipse.svg" },
                      { name: "Figma", icon: "/icons/figma-svgrepo-com.svg" }
                    ].map((tech: { name: string; icon: string }, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <Image
                          src={tech.icon}
                          alt={`${tech.name} icon`}
                          width={20}
                          height={20}
                          className="w-5 h-5"
                        />
                        <span className="text-xs md:text-sm font-medium text-foreground">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-24 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Development Endeavors</h2>
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.slice(0, visibleProjectCount).map((project, index) => (
                  <Card key={index} className={`hover-lift flex flex-col ${!project.link ? 'opacity-75' : ''}`}>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-[0.75em]">
                        {project.content}
                      </p>
                      {project.technologies && project.technologies.length > 0 && (
                        <div className="flex gap-2 mt-4">
                          {project.technologies.map((tech, techIndex) => (
                            <div
                              key={techIndex}
                              className="relative group"
                            >
                              <Image
                                src={tech.icon}
                                alt={`${tech.name} icon`}
                                width={20}
                                height={20}
                                className="w-5 h-5"
                              />
                              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-popover text-popover-foreground rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {tech.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="mt-auto">
                      {project.link ? (
                        <div className="flex flex-row w-full space-x-2">
                          <Button
                            asChild
                            variant="outline"
                            className="mt-4 text-foreground hover:text-success hover:border-success transition-colors"
                          >
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View on GitHub <ArrowRightIcon className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                          {project.title === "Devlogz Blog App" && (
                            <Button
                              asChild
                              variant="outline"
                              className="mt-4 text-foreground hover:text-success hover:border-success transition-colors"
                            >
                              <a
                                href="https://github.com/fernand3z/my-webview-app/releases/download/v1.0.0/devlogzv1.0.0.apk"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Download className="h-[18px] w-[18px]" />
                              </a>
                            </Button>
                          )}
                        </div>
                      ) : (
                        <span className="text-muted-foreground inline-flex items-center space-x-1">
                          {project.status} →
                        </span>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {/* Show More/Less Projects Button */}
              {visibleProjectCount < projects.length ? (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={handleShowMoreProjects}
                    className="text-muted-foreground hover:text-foreground inline-flex items-center space-x-2 transition-colors group"
                  >
                    <div className="flex items-center space-x-2 group-hover:translate-y-[-2px] transition-transform duration-200">
                      <span>Show More</span>
                      <span className="transform transition-transform duration-200">↓</span>
                    </div>
                  </button>
                </div>
              ) : (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={handleShowMoreProjects}
                    className="text-muted-foreground hover:text-foreground inline-flex items-center space-x-2 transition-colors group"
                  >
                    <div className="flex items-center space-x-2 group-hover:translate-y-[-2px] transition-transform duration-200">
                      <span>Show Less</span>
                      <span className="transform transition-transform duration-200 rotate-180">↓</span>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-24 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Professional Background</h2>
            <div className="space-y-8">
              {/* NUMBER PLATE CLINIC Experience */}
              <Card className="hover-lift">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-card">
                      <a 
                        href="https://www.google.com/imgres?q=vit%20infotech%20logo&imgurl=https%3A%2F%2Fcdn.techimply.com%2Fuploads%2Fcompany%2F98%2Flogo%2FVyshnavi%2520Information%2520Technologies.jpg&imgrefurl=https%3A%2F%2Fwww.techimply.com%2Fprofile%2Fvyshnavi-information-technologies-india-pvt-ltd&docid=ixIxmZxLFToy-M&tbnid=uSFCqslgcXFCmM&vet=12ahUKEwjq5LHnsN6MAxVgcGwGHWbFFvoQM3oECEgQAA..i&w=115&h=115&hcb=2&ved=2ahUKEwjq5LHnsN6MAxVgcGwGHWbFFvoQM3oECEgQAA" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cursor-pointer transition-opacity hover:opacity-80"
                      >
                        <Image 
                          src="/npc-logo.jpg" 
                          alt="NPC Logo" 
                          width={48}
                          height={48}
                          className="w-full h-full object-contain p-1" 
                        />
                      </a>
                    </div>
                    <div className="flex-grow">
                      <a 
                        href="https://www.linkedin.com/in/1zeeshanraza/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        <CardTitle>VIT Infotech</CardTitle>
                      </a>
                      <CardDescription>
                        <span className="block text-muted-foreground">Full-Time · 1 yrs</span>
                        <span className="block text-sm text-muted-foreground/60">Bengaluru, Karnataka, India</span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* System Administrator Role */}
                  <div className="mt-2">
                    <h4 className="text-lg font-semibold text-foreground">DevOps Engineer</h4>
                    <p className="text-sm text-muted-foreground/60 mb-4">Oct 2024 - Present · 1 yr</p>
                    <p className="text-muted-foreground mb-4 text-[0.75em]">
                    Leading DevOps engineering at VIT Infotech, focusing on infrastructure automation, system reliability, and continuous integration/deployment. Responsible for streamlining IT operations, maintaining seamless system performance, and supporting scalable development workflows.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: "Linux", icon: "/icons/linux-svgrepo-com(1).svg" },
                        { name: "Docker", icon: "/icons/docker-svgrepo-com(1).svg" },
                        { name: "Bash", icon: "/icons/bash-icon-svgrepo-com.svg" },
                        { name: "Python", icon: "/icons/python-svgrepo-com.svg" },
                        { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
                        { name: "GitHub", icon: "/icons/github-svgrepo-com.svg" },
                        { name: "PostgreSQL", icon: "/icons/postgresql-svgrepo-com.svg" },
                        { name: "Nginx", icon: "/icons/nginx-svgrepo-com.svg" },
                        { name: "AWS", icon: "/icons/aws-svgrepo-com.svg" }
                      ].map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="relative group"
                        >
                          <Image
                            src={tech.icon}
                            alt={`${tech.name} icon`}
                            width={20}
                            height={20}
                            className="w-5 h-5"
                          />
                          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-popover text-popover-foreground rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Assistant System Administrator Role */}
                  <div className="mt-8 border-t border-border pt-6">
                    <h4 className="text-lg font-semibold text-foreground">SWE Intern at VIT Infotech</h4>
                    <p className="text-sm text-muted-foreground/60 mb-4">Oct 2024 - Mar 2025 · 6 Month</p>
                    <p className="text-muted-foreground mb-4 text-[0.75em]">
                    Worked as a DevOps Intern at VIT Infotech, assisting in automating infrastructure, monitoring system performance, and supporting CI/CD pipelines. Gained hands-on experience with deployment tools, cloud environments, and collaborative development workflows.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: "Linux", icon: "/icons/linux-svgrepo-com(1).svg" },
                        { name: "Bash", icon: "/icons/bash-icon-svgrepo-com.svg" },
                        { name: "Python", icon: "/icons/python-svgrepo-com.svg" },
                        { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
                        { name: "GitHub", icon: "/icons/github-svgrepo-com.svg" },
                        { name: "PostgreSQL", icon: "/icons/postgresql-svgrepo-com.svg" }
                      ].map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="relative group"
                        >
                          <Image
                            src={tech.icon}
                            alt={`${tech.name} icon`}
                            width={20}
                            height={20}
                            className="w-5 h-5"
                          />
                          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-popover text-popover-foreground rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Freelance WordPress Developer Experience */}
              {/* <Card className="hover-lift">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-card">
                      <Image 
                        src="/favicon.png" 
                        alt="Freelance Logo" 
                        width={48}
                        height={48}
                        className="w-full h-full object-contain p-1" 
                      />
                    </div>
                    <div className="flex-grow">
                      <CardTitle>Freelance WordPress Developer</CardTitle>
                      <CardDescription>
                        <span className="block text-muted-foreground">Self-employed · 6 mos</span>
                        <span className="block text-sm text-muted-foreground/60">Remote</span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mt-2">
                    <h4 className="text-lg font-semibold text-foreground">WordPress Developer</h4>
                    <p className="text-sm text-muted-foreground/60 mb-4">Jun 2022 - Nov 2022 · 6 mos</p>
                    <p className="text-muted-foreground mb-4 text-[0.75em]">
                      Specialized in developing custom WordPress solutions, including e-commerce websites and business platforms. Focused on creating high-performance, secure websites with optimized user experiences and comprehensive content management systems.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: "WordPress", icon: "/icons/wordpress-color-svgrepo-com.svg" },
                        { name: "PHP", icon: "/icons/php-1-logo-svgrepo-com.svg" },
                        { name: "HTML", icon: "/icons/html-5-svgrepo-com.svg" },
                        { name: "CSS", icon: "/icons/css-svgrepo-com.svg" },
                        { name: "JavaScript", icon: "/icons/javascript-svgrepo-com.svg" },
                        { name: "MySQL", icon: "/icons/sql-database-generic-svgrepo-com.svg" },
                        { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
                        { name: "GitHub", icon: "/icons/github-svgrepo-com.svg" }
                      ].map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="relative group"
                        >
                          <Image
                            src={tech.icon}
                            alt={`${tech.name} icon`}
                            width={20}
                            height={20}
                            className="w-5 h-5"
                          />
                          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-popover text-popover-foreground rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card> */}

              {/* Adventa Technologies Experience */}
              {/* <Card className="hover-lift">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-card">
                      <a 
                        href="https://www.linkedin.com/company/adventa-technologies/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cursor-pointer transition-opacity hover:opacity-80"
                      >
                        <Image 
                          src="/adventa-logo.jpg" 
                          alt="Adventa Logo" 
                          width={48}
                          height={48}
                          className="w-full h-full object-contain p-1" 
                        />
                      </a>
                    </div>
                    <div className="flex-grow">
                      <a 
                        href="https://www.linkedin.com/company/adventa-technologies/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        <CardTitle>Adventa Technologies Pvt Ltd</CardTitle>
                      </a>
                      <CardDescription>
                        <span className="block text-muted-foreground">Full-time · 1 yr 1 mo</span>
                        <span className="block text-sm text-muted-foreground/60">Colombo District, Western Province, Sri Lanka · Hybrid</span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mt-2">
                    <h4 className="text-lg font-semibold text-foreground">Web Developer</h4>
                    <p className="text-sm text-muted-foreground/60 mb-4">Apr 2021 - Apr 2022 · 1 yr 1 mo</p>
                    <p className="text-muted-foreground mb-4 text-[0.75em]">
                      Developed and maintained web applications using various technologies including Bubble.io, WordPress, and custom web development tools. Created user-friendly interfaces, integrated third-party services, and ensured optimal performance across all platforms.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: "HTML", icon: "/icons/html-5-svgrepo-com.svg" },
                        { name: "CSS", icon: "/icons/css-svgrepo-com.svg" },
                        { name: "JavaScript", icon: "/icons/javascript-svgrepo-com.svg" },
                        { name: "WordPress", icon: "/icons/wordpress-color-svgrepo-com.svg" },
                        { name: "PHP", icon: "/icons/php-1-logo-svgrepo-com.svg" },
                        { name: "MySQL", icon: "/icons/sql-database-generic-svgrepo-com.svg" },
                        { name: "Figma", icon: "/icons/figma-svgrepo-com.svg" },
                        { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
                        { name: "GitHub", icon: "/icons/github-svgrepo-com.svg" }
                      ].map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="relative group"
                        >
                          <Image
                            src={tech.icon}
                            alt={`${tech.name} icon`}
                            width={20}
                            height={20}
                            className="w-5 h-5"
                          />
                          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-popover text-popover-foreground rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="mb-24 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Knowledge Acquisition</h2>
            <div className="space-y-6">
              {/* Associate's Degree */}
              <Card className="hover-lift">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-card">
                      <a 
                        href="https://www.linkedin.com/school/vtasrilanka" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cursor-pointer transition-opacity hover:opacity-80"
                      >
                        <Image 
                          src="/vta-logo.jpg" 
                          alt="Vocational Training Authority Logo" 
                          width={48}
                          height={48}
                          className="w-full h-full object-contain p-1" 
                        />
                      </a>
                    </div>
                    <div>
                      <a 
                        href="https://www.linkedin.com/school/vtasrilanka" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        <CardTitle>Bachelor of Technology : Computer Science</CardTitle>
                      </a>
                      <CardDescription>
                        <span className="block text-muted-foreground">Rajiv Gandhi Proudyogiki Vishwavidyalaya</span>
                        <span className="block text-sm text-muted-foreground/60">Jun 2020 - Jun 2024</span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* Master's Degree */}
              {/* <Card className="hover-lift">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-card">
                      <a 
                        href="https://www.uclan.ac.uk/postgraduate/courses/mba-master-of-business-administration" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cursor-pointer transition-opacity hover:opacity-80"
                      >
                        <Image 
                          src="/uclan-logo.jpg" 
                          alt="University of Central Lancashire Logo" 
                          width={48}
                          height={48}
                          className="w-full h-full object-contain p-1" 
                        />
                      </a>
                    </div>
                    <div>
                      <a 
                        href="https://www.uclan.ac.uk/postgraduate/courses/mba-master-of-business-administration" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        <CardTitle>Master's degree: Business Administration and Management</CardTitle>
                      </a>
                      <CardDescription>
                        <span className="block text-muted-foreground">University of Central Lancashire</span>
                        <span className="block text-sm text-muted-foreground/60">Jan 2023 - Jan 2024</span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card> */}

              {/* CS50 Course */}
              {/* <Card className="hover-lift">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-card">
                      <a 
                        href="https://cs50.harvard.edu/x" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cursor-pointer transition-opacity hover:opacity-80"
                      >
                        <Image 
                          src="/harvard-logo.jpg" 
                          alt="Harvard University Logo" 
                          width={48}
                          height={48}
                          className="w-full h-full object-contain p-1" 
                        />
                      </a>
                    </div>
                    <div>
                      <a 
                        href="https://cs50.harvard.edu/x" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        <CardTitle>CS50's Introduction to Computer Science</CardTitle>
                      </a>
                      <CardDescription>
                        <span className="block text-muted-foreground">Harvard University</span>
                        <span className="block text-sm text-muted-foreground/60">In Progress</span>
                        <span className="inline-flex items-center px-2.5 py-0.5 mt-2 rounded-full text-xs font-medium bg-success/10 text-success">
                          Currently Studying
                        </span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card> */}

              {/* freeCodeCamp */}
              {/* <Card className="hover-lift">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-card">
                      <a 
                        href="https://www.freecodecamp.org" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cursor-pointer transition-opacity hover:opacity-80"
                      >
                        <Image 
                          src="/freecodecamp-logo.jpg" 
                          alt="freeCodeCamp Logo" 
                          width={48}
                          height={48}
                          className="w-full h-full object-contain p-1" 
                        />
                      </a>
                    </div>
                    <div>
                      <a 
                        href="https://www.freecodecamp.org" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        <CardTitle>Full Stack Development Curriculum</CardTitle>
                      </a>
                      <CardDescription>
                        <span className="block text-muted-foreground">freeCodeCamp</span>
                        <span className="block text-sm text-muted-foreground/60">In Progress</span>
                        <span className="inline-flex items-center px-2.5 py-0.5 mt-2 rounded-full text-xs font-medium bg-success/10 text-success">
                          Currently Studying
                        </span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card> */}
            </div>
          </section>

          {/* License & Certifications Section */}
          <section id="certifications" className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">License && Certifications</h2>
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First 4 certificates are always visible */}
                {/* Additional certificates are shown based on visibleCertCount */}
                {[
                  {
                    title: "Career Essentials in GitHub",
                    type: "Professional Certificate",
                    issuer: "LinkedIn and GitHub",
                    date: "2025",
                    link: "https://www.linkedin.com/learning/certificates/95ab038988c255d63db1db0dc4b018e87cca009032a26917b5f3cb7b06802a80",
                    providers: [
                      { name: "GitHub", url: "https://github.com", icon: "/github-logo.png" },
                      { name: "LinkedIn", url: "https://linkedin.com", icon: "/linkedin-logo.png" }
                    ]
                  },
                  {
                    title: "Career Essentials in System Administration",
                    type: "Professional Certificate",
                    issuer: "LinkedIn and Microsoft",
                    date: "2025",
                    link: "https://www.linkedin.com/learning/certificates/9b7ea63d32cd9a46772852f87edc3e13f32e8e6aefb95c4ebaa51ecb87c0b2b4",
                    providers: [
                      { name: "Microsoft", url: "https://microsoft.com", icon: "/microsoft-logo.png" },
                      { name: "LinkedIn", url: "https://linkedin.com", icon: "/linkedin-logo.png" }
                    ]
                  },
                  {
                    title: "Ubuntu Linux Professional Certificate",
                    type: "Professional Certificate",
                    issuer: "Canonical",
                    date: "2025",
                    link: "https://www.linkedin.com/learning/certificates/92313e2481dd7891e2c805cf6f57c24041b3e22c982fc3471459972634f686a0",
                    providers: [
                      { name: "Canonical", url: "https://canonical.com", icon: "/canonical-logo.jpg" },
                      { name: "LinkedIn", url: "https://linkedin.com", icon: "/linkedin-logo.png" }
                    ]
                  },
                  {
                    title: "Career Essentials in Sustainable Tech",
                    type: "Professional Certificate",
                    issuer: "Microsoft and LinkedIn",
                    date: "2024",
                    link: "https://www.linkedin.com/learning/certificates/0ba4b2d71c34aeabf02cfea0f534d11dbb15e6a89be7d8e36a96ee34ed6f1e98",
                    providers: [
                      { name: "Microsoft", url: "https://microsoft.com", icon: "/microsoft-logo.png" },
                      { name: "LinkedIn", url: "https://linkedin.com", icon: "/linkedin-logo.png" }
                    ]
                  },
                  {
                    title: "Docker Foundations",
                    type: "Professional Certificate",
                    issuer: "Docker",
                    date: "2024",
                    link: "https://www.linkedin.com/learning/certificates/23f5265eada7fe3a3d6ed85f7271f2376f1a09c6902cc3c78fd7ae8ec59ffad6",
                    providers: [
                      { name: "Docker", url: "https://docker.com", icon: "/docker-logo.jpg" },
                      { name: "LinkedIn", url: "https://linkedin.com", icon: "/linkedin-logo.png" }
                    ]
                  },
                  {
                    title: "Zendesk Customer Service",
                    type: "Professional Certificate",
                    issuer: "Zendesk",
                    date: "2025",
                    link: "https://www.linkedin.com/learning/certificates/be5e562f9bf05dddc22d374603b35d8b93484a076d9d85ddcc1d1cab63c76f11",
                    providers: [
                      { name: "Zendesk", url: "https://zendesk.com", icon: "/zendesk-logo.jpg" },
                      { name: "LinkedIn", url: "https://linkedin.com", icon: "/linkedin-logo.png" }
                    ]
                  },
                  {
                    title: "Build Your Generative AI Productivity Skills",
                    type: "Professional Certificate",
                    issuer: "Microsoft and LinkedIn",
                    date: "2024",
                    link: "https://www.linkedin.com/learning/certificates/8101d556cce742a74ff9a4ce9bb64f354811a6ede16f5b885421716cbcd235e5",
                    providers: [
                      { name: "Microsoft", url: "https://microsoft.com", icon: "/microsoft-logo.png" },
                      { name: "LinkedIn", url: "https://linkedin.com", icon: "/linkedin-logo.png" }
                    ]
                  },
                  {
                    title: "Career Essentials in Generative AI",
                    type: "Professional Certificate",
                    issuer: "Microsoft and LinkedIn",
                    date: "2024",
                    link: "https://www.linkedin.com/learning/certificates/d4255dd847774f8bc86ad30aebe1cd089242bef805644c6a88b8e87a8dab063f",
                    providers: [
                      { name: "Microsoft", url: "https://microsoft.com", icon: "/microsoft-logo.png" },
                      { name: "LinkedIn", url: "https://linkedin.com", icon: "/linkedin-logo.png" }
                    ]
                  },
                  {
                    title: "Generative AI for Customer Service with Microsoft 365 Copilot",
                    type: "Professional Certificate",
                    issuer: "Microsoft",
                    date: "2024",
                    link: "https://www.linkedin.com/learning/certificates/6cac185f1b410c460a9dea686cd5da12e45da8c5106707297ba2662ebbf49e6d",
                    providers: [
                      { name: "Microsoft", url: "https://microsoft.com", icon: "/microsoft-logo.png" }
                    ]
                  },
                  {
                    title: "Microsoft Copilot for Productivity",
                    type: "Professional Certificate",
                    issuer: "Microsoft and LinkedIn",
                    date: "2024",
                    link: "https://www.linkedin.com/learning/certificates/da1c01eaac07fcac76025e1cd3d92f3cdf4ce89bc9dcdd5f817ca4044d7ac209",
                    providers: [
                      { name: "Microsoft", url: "https://microsoft.com", icon: "/microsoft-logo.png" },
                      { name: "LinkedIn", url: "https://linkedin.com", icon: "/linkedin-logo.png" }
                    ]
                  }
                ].slice(0, visibleCertCount).map((cert, index) => (
                  <div key={index} className={`card-spotify p-4 rounded-lg hover-lift animate-scale-in delay-${(index % 4 + 1) * 100} flex flex-col`}>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-foreground">{cert.title}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <p className="text-muted-foreground text-[0.6em]">{cert.type}</p>
                        <span className="text-muted-foreground text-[0.6em]">•</span>
                        <p className="text-muted-foreground text-[0.6em]">{cert.issuer}</p>
                        <span className="text-muted-foreground text-[0.6em]">•</span>
                        <p className="text-muted-foreground text-[0.6em]">{cert.date}</p>
                      </div>
                    </div>
                    <div className="mt-auto pt-4 flex justify-between items-center">
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-muted-foreground hover:text-foreground inline-flex items-center space-x-1 transition-colors group text-[0.75em]"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-200">View Certificate</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                      </a>
                      <div className="flex gap-2">
                        {cert.providers.map((provider, i) => (
                          <a
                            key={i}
                            href={provider.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity flex items-center justify-center"
                          >
                            <Image
                              src={provider.icon}
                              alt={`${provider.name} logo`}
                              width={24}
                              height={24}
                              className="w-6 h-6 object-contain"
                              quality={100}
                              unoptimized
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Show More/Less Certificates Button */}
              {visibleCertCount < 12 && (
                <div className="flex justify-center">
                  <button
                    onClick={handleShowMoreCerts}
                    className="text-muted-foreground hover:text-foreground inline-flex items-center space-x-2 transition-colors group"
                  >
                    <div className="flex items-center space-x-2 group-hover:translate-y-[-2px] transition-transform duration-200">
                      <span>Show More</span>
                      <span className="transform transition-transform duration-200">↓</span>
                    </div>
                  </button>
                </div>
              )}

              {/* Show Less Button - only visible when all certificates are shown */}
              {showingAllCerts && (
                <div className="flex justify-center">
                  <button
                    onClick={handleShowMoreCerts}
                    className="text-muted-foreground hover:text-foreground inline-flex items-center space-x-2 transition-colors group"
                  >
                    <div className="flex items-center space-x-2 group-hover:translate-y-[-2px] transition-transform duration-200">
                      <span>Show Less</span>
                      <span className="transform transition-transform duration-200 rotate-180">↓</span>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 