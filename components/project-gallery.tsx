"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function ProjectGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const projects = [
    {
      title: "ဟိုတယ် ဆိုလာ တပ်ဆင်ခြင်း",
      description: "အင်းလေးဒေသ ရှိ ဟိုတယ်တစ်ခုတွင် ဆိုလာစွမ်းအင် တပ်ဆင်ပေးခြင်း",
      image: "https://aquawebtoon.com/wp-content/uploads/2025/03/Hotelsolor.png",
    },
    {
      title: "နေအိမ်အဆောက်အဦး လျှပ်စစ်စနစ်",
      description: "တည်ဆောက်လက်စ နေအိမ်တစ်လုံးတွင် လျှပ်စစ်စနစ် တပ်ဆင်နေခြင်း",
      image: "https://aquawebtoon.com/wp-content/uploads/2025/03/resdi.png",
    },
    {
      title: "Smart Home Automation",
      description: "သီးသန့် နေအိမ်တစ်လုံးမှာ smart home automation sytem တပ်ဆင်နေခြင်း",
      image: "https://aquawebtoon.com/wp-content/uploads/2025/03/smarthomeauto.png",
    },
    {
      title: "ဆိုလာ ပရောဂျက်များ",
      description: "လုပ်ငန်းသုံး ဆိုလာ ပရောဂျက်များ တပ်ဆင်နေခြင်း",
      image: "https://aquawebtoon.com/wp-content/uploads/2025/03/largescal.png",
    },
    {
      title: "တန်ဖိုးကြီး အိမ်ယာများ နှင့်ဆိုလာ",
      description: "တန်ဖိုးကြီး အိမ်ယာများတွင် စိတ်တိုင်းကျ လျှပ်စစ်သွယ်တန်းမှုများနှင့် ဆိုလာတပ်ဆင်ပေးခြင်း",
      image: "https://aquawebtoon.com/wp-content/uploads/2025/03/laxuy.png",
    },
    {
      title: "ရုံးသုံးလုပ်ငန်းများ အတွက် စွမ်းအင်",
      description: "ရုံးသုံးလုပ်ငန်းများအတွက် စွမ်းအင်ချွေတာရန် ဆိုလာတပ်ဆင်ပေးခြင်း",
      image: "https://aquawebtoon.com/wp-content/uploads/2025/03/office.png",
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
          ပိုမိုကြည့်ရှုရန်
        </Button>
      </div>
    </div>
  )
}

