"use client"

import { useEffect } from "react"
import Link from "next/link"
import {
  Facebook,
  Mail,
  Phone,
  MessageCircle,
  Send,
  Home,
  ChevronRight,
  Leaf,
  Zap,
  Lightbulb,
  Wifi,
  Battery,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectGallery from "@/components/project-gallery"
import ServiceCard from "@/components/service-card"
import MobileNav from "@/components/mobile-nav"
import HeroSection from "@/components/hero-section"

export default function LandingPage() {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      if (!anchor) return

      const href = anchor.getAttribute("href")
      if (!href || !href.startsWith("#")) return

      e.preventDefault()
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: "smooth",
        })

        // Update URL without scrolling
        window.history.pushState(null, "", href)
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-xl font-heading">Taw Win Nann</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#home" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="#projects" className="text-sm font-medium transition-colors hover:text-primary">
              Projects
            </Link>
            <Link href="#blog" className="text-sm font-medium transition-colors hover:text-primary">
              Blog
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
              <Link href="#contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <section id="services" className="py-16 bg-accent/5">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Our Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We provide professional electronics and solar installation services for hotels, residential buildings,
                and private homes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                icon={<Leaf className="h-10 w-10 text-primary" />}
                title="Solar Panel Installation"
                description="Professional installation of solar panels for residential and commercial buildings."
              />
              <ServiceCard
                icon={<Zap className="h-10 w-10 text-primary" />}
                title="Electrical Systems"
                description="Complete electrical system design and installation for new and existing buildings."
              />
              <ServiceCard
                icon={<Lightbulb className="h-10 w-10 text-primary" />}
                title="Smart Lighting"
                description="Energy-efficient smart lighting solutions for homes and businesses."
              />
              <ServiceCard
                icon={<Wifi className="h-10 w-10 text-primary" />}
                title="Home Automation"
                description="Smart home systems for controlling lighting, security, and appliances."
              />
              <ServiceCard
                icon={<Battery className="h-10 w-10 text-primary" />}
                title="Battery Storage"
                description="Energy storage solutions to maximize your solar power investment."
              />
              <ServiceCard
                icon={<Shield className="h-10 w-10 text-primary" />}
                title="Maintenance & Repair"
                description="Regular maintenance and emergency repair services for all installations."
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Our Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Take a look at some of our recent installations for hotels, residential buildings, and private homes.
              </p>
            </div>
            <ProjectGallery />
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-16 bg-accent/5">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Latest News</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Stay updated with the latest trends and news in solar energy and electronics.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="group rounded-lg gradient-border bg-card text-card-foreground shadow-sm overflow-hidden transition-all hover:shadow-md"
                >
                  <div className="aspect-video w-full overflow-hidden bg-muted">
                    <img
                      src={`/placeholder.svg?height=250&width=500&text=Blog+Image+${item}`}
                      alt={`Blog post ${item}`}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="p-6">
                    <time className="text-sm text-muted-foreground">March 15, 2025</time>
                    <h3 className="mt-2 text-xl font-semibold leading-none tracking-tight">
                      The Benefits of Solar Energy for Your Home
                    </h3>
                    <p className="mt-2 line-clamp-3 text-muted-foreground">
                      Learn how solar energy can reduce your electricity bills and help the environment.
                    </p>
                    <Button variant="link" className="mt-4 p-0 h-auto font-medium flex items-center gap-1 text-primary">
                      Read More <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
                View All Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get in touch with us for inquiries, quotes, or to discuss your project needs.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="gradient-border bg-card rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                    Send Message
                  </Button>
                </form>
              </div>
              <div className="gradient-border bg-card rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a
                      href="tel:+959123456789"
                      className="flex items-center gap-3 p-4 rounded-lg border border-primary/20 hover:bg-primary/5 transition-colors"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <p className="text-sm text-muted-foreground">+95 9 123 456 789</p>
                      </div>
                    </a>
                    <a
                      href="mailto:info@tawwinnann.com"
                      className="flex items-center gap-3 p-4 rounded-lg border border-primary/20 hover:bg-primary/5 transition-colors"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-sm text-muted-foreground">info@tawwinnann.com</p>
                      </div>
                    </a>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium">Social Media</h4>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                      >
                        <Facebook className="h-6 w-6 text-primary" />
                        <span className="sr-only">Facebook</span>
                      </a>
                      <a
                        href="https://t.me/tawwinnann"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                      >
                        <Send className="h-6 w-6 text-primary" />
                        <span className="sr-only">Telegram</span>
                      </a>
                      <a
                        href="viber://chat?number=%2B959123456789"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                      >
                        <MessageCircle className="h-6 w-6 text-primary" />
                        <span className="sr-only">Viber</span>
                      </a>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Location</h4>
                    <p className="text-muted-foreground">123 Main Street, Yangon, Myanmar</p>
                    <div className="mt-4 aspect-video w-full overflow-hidden rounded-lg gradient-border bg-muted">
                      <img
                        src="/placeholder.svg?height=200&width=400&text=Map"
                        alt="Office location map"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/40 bg-accent/5">
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Leaf className="h-6 w-6 text-primary" />
                <span className="text-xl font-heading">Taw Win Nann</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Professional electronics and solar installation services for residential and commercial buildings.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#blog" className="text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Solar Panel Installation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Electrical Systems
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Smart Lighting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Home Automation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+95 9 123 456 789</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>info@tawwinnann.com</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Home className="h-4 w-4 text-primary" />
                  <span>123 Main Street, Yangon, Myanmar</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Taw Win Nann. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Navigation */}
      <MobileNav />
    </div>
  )
}

