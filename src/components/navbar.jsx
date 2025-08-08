"use client"

import * as React from "react"
import { useEffect, useRef, useState } from "react"
import { Menu, Search } from 'lucide-react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import { cn } from "../lib/utils"   


const NAV_ITEMS = [
  {
    label: "Dashboard",
    href: "#",
    sections: [
      {
        title: "Overview",
        items: [
          { label: "Status", desc: "Realtime health & uptime", href: "#" },
          { label: "Usage", desc: "Traffic and bandwidth", href: "#" },
          { label: "Regions", desc: "Deployments by region", href: "#" },
        ],
      },
      {
        title: "Manage",
        items: [
          { label: "Projects", desc: "Create or organize projects", href: "#" },
          { label: "Teams", desc: "Invite and manage teammates", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Analytics",
    href: "#",
    sections: [
      {
        title: "Insights",
        items: [
          { label: "Performance", desc: "Latency and Core Web Vitals", href: "#" },
          { label: "Errors", desc: "Error rate, trends and traces", href: "#" },
          { label: "Logs", desc: "Stream and search logs", href: "#" },
        ],
      },
      {
        title: "Reports",
        items: [
          { label: "Exports", desc: "Download CSV / JSON", href: "#" },
          { label: "Schedules", desc: "Automated weekly reports", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Nodes",
    href: "#",
    sections: [
      {
        title: "Network",
        items: [
          { label: "Map", desc: "Interactive global view", href: "#" },
          { label: "Providers", desc: "Owners and capacity", href: "#" },
          { label: "Subnets", desc: "Topology and routing", href: "#" },
        ],
      },
      {
        title: "Operations",
        items: [
          { label: "Deploy", desc: "Provision new nodes", href: "#" },
          { label: "Maintenance", desc: "Windows and tasks", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Support",
    href: "#",
    sections: [
      {
        title: "Help",
        items: [
          { label: "Docs", desc: "Guides and API reference", href: "#" },
          { label: "Community", desc: "Forum and discussions", href: "#" },
          { label: "Status", desc: "Service availability", href: "#" },
        ],
      },
      {
        title: "Contact",
        items: [
          { label: "Tickets", desc: "Open a support ticket", href: "#" },
          { label: "Chat", desc: "Live chat with engineers", href: "#" },
        ],
      },
    ],
  },
]

export default function Navbar({ isLargeScreen }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  // Open dialog with Ctrl+/ or Cmd+/
  useEffect(() => {
    const onKeyDown = (e) => {
      const isMac = navigator.platform.toUpperCase().includes("MAC")
      const metaPressed = isMac ? e.metaKey : e.ctrlKey
      if (metaPressed && e.key === "/") {
        e.preventDefault()
        setOpen(true)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  // Autofocus the input when dialog opens
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 50)
      return () => clearTimeout(t)
    }
  }, [open])

  function handleSearchSubmit(e) {
    e.preventDefault()
    // Do something with query (navigate, filter, etc.)
    // For now, just close the dialog.
    setOpen(false)
  }

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 border-b border-white/10",
          "bg-transparent backdrop-blur-0"
        )}
        aria-label="Global"
      >
        <div className={cn("mx-auto px-4 sm:px-6 py-4", isLargeScreen ? "max-w-7xl" : "container")}>
          <div className="flex items-center justify-between">
            {/* Brand */}
            <a href="#" className="text-white font-bold text-xl tracking-tight">
              GlobalNet
            </a>

            {/* Desktop nav with hover dropdowns + search */}
            <div className="hidden md:flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <HoverCard key={item.label} openDelay={60} closeDelay={80}>
                  <HoverCardTrigger asChild>
                    <a
                      href={item.href}
                      className="text-white/80 hover:text-white transition-colors relative px-1 py-1 group"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-0 h-px w-0 bg-white/60 transition-all duration-200 group-hover:w-full" />
                    </a>
                  </HoverCardTrigger>

                  <HoverCardContent
                    align="start"
                    sideOffset={14}
                    className="w-[560px] p-0 overflow-hidden border-white/10 bg-gradient-to-b from-slate-900/90 to-slate-900/70 backdrop-blur-md"
                  >
                    <div className="grid grid-cols-2 gap-0">
                      {item.sections.map((section, idx) => (
                        <div key={section.title} className="p-4">
                          <div className="text-xs uppercase tracking-wider text-white/50 mb-2">
                            {section.title}
                          </div>
                          <ul className="space-y-1.5">
                            {section.items.map((link) => (
                              <li key={link.label}>
                                <a
                                  href={link.href}
                                  className="block rounded-md px-2 py-2 hover:bg-white/5 transition-colors"
                                >
                                  <div className="text-sm text-white">{link.label}</div>
                                  <div className="text-xs text-white/60">{link.desc}</div>
                                </a>
                              </li>
                            ))}
                          </ul>
                          {idx === 0 && (
                            <div className="my-3">
                              <Separator className="bg-white/10" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}

              {/* Search button (pill) */}
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-3 py-1.5 text-white/80 hover:text-white transition-colors"
                aria-haspopup="dialog"
                aria-expanded={open}
                aria-controls="global-search-dialog"
              >
                <Search size={16} className="text-white/80 group-hover:text-white" />
                <span className="text-sm">Search</span>
                <span className="ml-1 rounded-md border border-white/10 bg-white/10 px-2 py-0.5 text-xs text-white/70">
                  Ctrl+/
                </span>
              </button>
            </div>

            {/* Mobile: menu + search icon */}
            <div className="md:hidden flex items-center gap-2">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="text-white/90 hover:text-white transition"
                aria-label="Open search"
                aria-haspopup="dialog"
                aria-expanded={open}
                aria-controls="global-search-dialog"
              >
                <Search className="w-6 h-6" />
              </button>
              <button className="text-white/90 hover:text-white transition">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Open menu</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          id="global-search-dialog"
          className="sm:max-w-lg border-white/10 bg-gradient-to-b from-slate-900/95 to-slate-900/80 backdrop-blur-md"
        >
          <DialogHeader>
            <DialogTitle className="text-white">Search</DialogTitle>
            <DialogDescription className="text-white/60">
              Type a query and press Enter. Press Esc to close. Tip: Use Ctrl+/ to open quickly.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSearchSubmit} className="mt-3 flex items-center gap-2">
            <Input
            
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search nodes, regions, providers..."
              className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
              aria-label="Global search"
            />
            <Button type="submit" className="bg-white/10 hover:bg-white/20 text-white border border-white/20">
              Go
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
