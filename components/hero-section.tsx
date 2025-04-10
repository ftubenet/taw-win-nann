"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Leaf, Zap, ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="relative overflow-hidden py-20 md:py-32 bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/80 to-background"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              အရည်သွေးမြင့် ဆိုလာ နှင့် လျှပ်စစ် လုပ်ငန်း
            </div>
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl mb-6 leading-tight">
              Power Your Home With <span className="text-gradient-green">Green Energy</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto lg:mx-0 mb-8">
              ဟိုတယ်များ၊ လူနေအဆောက်အအုံများနှင့် ပုဂ္ဂလိကနေအိမ်များအတွက် ပရော်ဖက်ရှင်နယ် အီလက်ထရွန်းနစ်နှင့် ဆိုလာ တပ်ဆင်ရေး ဝန်ဆောင်မှု
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                <Link href="#contact">
                  အခမဲ့ ဆွေးနွေးရန် <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5" asChild>
                <Link href="#services">လုပ်ငန်းများ</Link>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              {[
                { icon: <Leaf className="h-6 w-6 text-primary" />, text: "သဘာဝ" },
                { icon: <Zap className="h-6 w-6 text-primary" />, text: "စွမ်းအင်" },
                { icon: <Leaf className="h-6 w-6 text-primary" />, text: "ရေရှည်" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl gradient-border">
              <img
                src="https://aquawebtoon.com/wp-content/uploads/2025/03/solarinstall.png"
                alt="Solar panel installation"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 rounded-lg glass-card p-4 shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Save up to</p>
                  <p className="text-2xl font-bold text-gradient">40%</p>
                  <p className="text-xs text-muted-foreground">on electricity bills</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -top-6 -right-6 rounded-lg glass-card p-4 shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Over</p>
                  <p className="text-2xl font-bold text-gradient">50+</p>
                  <p className="text-xs text-muted-foreground">projects completed</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a
            href="#services"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm mb-2">အောက်သို့ဆွဲရန်</span>
            <ChevronDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

