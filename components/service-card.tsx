"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group gradient-border rounded-lg bg-card shadow-sm p-6 transition-all hover:shadow-md"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Button variant="link" className="p-0 h-auto font-medium flex items-center gap-1 text-primary">
        Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </motion.div>
  )
}

