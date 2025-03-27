"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function ProjectGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const projects = [
    {
      title: "Hotel Solar Installation",
      description: "Complete solar panel installation for a 5-star hotel in Yangon.",
      image: "/placeholder.svg?height=400&width=600&text=Hotel+Project",
    },
    {
      title: "Residential Building Electrical System",
      description: "Full electrical system design and installation for a new residential building.",
      image: "/placeholder.svg?height=400&width=600&text=Residential+Project",
    },
    {
      title: "Smart Home Automation",
      description: "Smart home system installation for a private residence.",
      image: "/placeholder.svg?height=400&width=600&text=Smart+Home+Project",
    },
    {
      title: "Commercial Solar Project",
      description: "Large-scale solar installation for a commercial complex.",
      image: "/placeholder.svg?height=400&width=600&text=Commercial+Project",
    },
    {
      title: "Luxury Villa Lighting",
      description: "Custom lighting design and installation for a luxury villa.",
      image: "/placeholder.svg?height=400&width=600&text=Lighting+Project",
    },
    {
      title: "Office Building Energy Solution",
      description: "Energy-efficient electrical solutions for a modern office building.",
      image: "/placeholder.svg?height=400&width=600&text=Office+Project",
    },
  ]

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer rounded-lg overflow-hidden gradient-border bg-card text-card-foreground shadow-sm"
                onClick={() => setSelectedImage(index)}
              >
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
                </div>
              </motion.div>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <div className="grid gap-4">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-muted-foreground">{project.description}</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
          View All Projects
        </Button>
      </div>
    </div>
  )
}

