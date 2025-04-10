"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
  Phone,
  Mail,
  Facebook,
  Send,
  MessageCircle,
  MessageSquare,
  MessagesSquare,
  MessageSquareDashed,
  MessageSquareMore,
} from "lucide-react"

export default function ContactDialog() {
  const [isOpen, setIsOpen] = useState(false)

  const contactOptions = [
    {
      name: "ဖုန်း",
      icon: <Phone className="h-6 w-6 text-primary mb-1" />,
      link: "tel:+959123456789",
    },
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
  ]

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full bg-primary hover:bg-primary/90 text-white">ဆက်သွယ်ရန်</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-center">ဆက်သွယ်ရန် နည်းလမ်းများ</h3>
          <div className="grid grid-cols-3 gap-3">
            {contactOptions.map((option, index) => (
              <a
                key={index}
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {option.icon}
                <span className="text-xs text-center">{option.name}</span>
              </a>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

