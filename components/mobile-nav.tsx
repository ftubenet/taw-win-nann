"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Home, Newspaper, Wrench, Contact, Menu, X } from "lucide-react"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import ContactDialog from "@/components/contact-dialog"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import {
  Phone,
  MessageSquare,
  Mail,
  Facebook,
  MessagesSquare,
  MessageCircle,
  Send,
  MessageSquareDashed,
  MessageSquareMore,
} from "lucide-react"

export default function MobileNav() {
  const [activeSection, setActiveSection] = useState("home")
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "projects", "blog", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = (sectionId: string) => {
    setIsOpen(false)

    // Smooth scroll to section
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed right-4 top-4 z-50 md:hidden border-primary/20"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="h-5 w-5 text-primary" />
      </Button>

      {/* Mobile Menu Sheet */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-card border-l border-primary/20">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <Wrench className="h-6 w-6 text-primary" />
                <span className="text-xl font-heading">Taw Win Nann</span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            <nav className="flex flex-col gap-4">
              <a
                href="#home"
                className={`text-lg font-medium py-2 px-4 rounded-md transition-colors ${
                  activeSection === "home" ? "bg-primary/10 text-primary" : "hover:bg-primary/5"
                }`}
                onClick={() => handleLinkClick("home")}
              >
                Home
              </a>
              <a
                href="#services"
                className={`text-lg font-medium py-2 px-4 rounded-md transition-colors ${
                  activeSection === "services" ? "bg-primary/10 text-primary" : "hover:bg-primary/5"
                }`}
                onClick={() => handleLinkClick("services")}
              >
                Services
              </a>
              <a
                href="#projects"
                className={`text-lg font-medium py-2 px-4 rounded-md transition-colors ${
                  activeSection === "projects" ? "bg-primary/10 text-primary" : "hover:bg-primary/5"
                }`}
                onClick={() => handleLinkClick("projects")}
              >
                Projects
              </a>
              <a
                href="#blog"
                className={`text-lg font-medium py-2 px-4 rounded-md transition-colors ${
                  activeSection === "blog" ? "bg-primary/10 text-primary" : "hover:bg-primary/5"
                }`}
                onClick={() => handleLinkClick("blog")}
              >
                Blog
              </a>
              <a
                href="#contact"
                className={`text-lg font-medium py-2 px-4 rounded-md transition-colors ${
                  activeSection === "contact" ? "bg-primary/10 text-primary" : "hover:bg-primary/5"
                }`}
                onClick={() => handleLinkClick("contact")}
              >
                Contact
              </a>
            </nav>

            <div className="mt-auto pt-8">
              <ContactDialog />

              <div className="flex justify-center gap-4 mt-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Facebook className="h-5 w-5 text-primary" />
                </a>
                <a
                  href="https://t.me/tawwinnann"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Send className="h-5 w-5 text-primary" />
                </a>
                <a
                  href="viber://chat?number=%2B959123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 text-primary" />
                </a>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 z-40 w-full h-16 bg-card border-t border-border/40 md:hidden">
        <div className="grid h-full grid-cols-4">
          <Link
            href="#home"
            className={`flex flex-col items-center justify-center ${
              activeSection === "home" ? "text-primary" : "text-muted-foreground"
            }`}
            onClick={(e) => {
              e.preventDefault()
              handleLinkClick("home")
            }}
          >
            <Home className="h-5 w-5" />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link
            href="#services"
            className={`flex flex-col items-center justify-center ${
              activeSection === "services" ? "text-primary" : "text-muted-foreground"
            }`}
            onClick={(e) => {
              e.preventDefault()
              handleLinkClick("services")
            }}
          >
            <Wrench className="h-5 w-5" />
            <span className="text-xs mt-1">Services</span>
          </Link>
          <Link
            href="#blog"
            className={`flex flex-col items-center justify-center ${
              activeSection === "blog" ? "text-primary" : "text-muted-foreground"
            }`}
            onClick={(e) => {
              e.preventDefault()
              handleLinkClick("blog")
            }}
          >
            <Newspaper className="h-5 w-5" />
            <span className="text-xs mt-1">Blog</span>
          </Link>
          <Dialog>
            <DialogTrigger asChild>
              <button
                className={`flex flex-col items-center justify-center w-full h-full ${
                  activeSection === "contact" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <Contact className="h-5 w-5" />
                <span className="text-xs mt-1">Contact</span>
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-center">ဆက်သွယ်ရန် နည်းလမ်းများ</h3>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { name: "ဖုန်း", icon: <Phone className="h-6 w-6 text-primary mb-1" />, link: "tel:+959123456789" },
                    {
                      name: "SMS",
                      icon: <MessageSquare className="h-6 w-6 text-primary mb-1" />,
                      link: "sms:+959123456789",
                    },
                    {
                      name: "အီးမေးလ်",
                      icon: <Mail className="h-6 w-6 text-primary mb-1" />,
                      link: "mailto:info@tawwinnann.com",
                    },
                    {
                      name: "Facebook",
                      icon: <Facebook className="h-6 w-6 text-primary mb-1" />,
                      link: "https://facebook.com",
                    },
                    {
                      name: "Messenger",
                      icon: <MessagesSquare className="h-6 w-6 text-primary mb-1" />,
                      link: "https://m.me/tawwinnann",
                    },
                    {
                      name: "Viber",
                      icon: <MessageCircle className="h-6 w-6 text-primary mb-1" />,
                      link: "viber://chat?number=%2B959123456789",
                    },
                    {
                      name: "Telegram",
                      icon: <Send className="h-6 w-6 text-primary mb-1" />,
                      link: "https://t.me/tawwinnann",
                    },
                    {
                      name: "Line",
                      icon: <MessageSquareDashed className="h-6 w-6 text-primary mb-1" />,
                      link: "https://line.me/ti/p/~tawwinnann",
                    },
                    {
                      name: "WeChat",
                      icon: <MessageSquareMore className="h-6 w-6 text-primary mb-1" />,
                      link: "weixin://dl/chat?tawwinnann",
                    },
                  ].map((option, index) => (
                    <a
                      key={index}
                      href={option.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                    >
                      {option.icon}
                      <span className="text-xs text-center">{option.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  )
}

