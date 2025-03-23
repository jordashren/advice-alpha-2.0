"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { NavDropdown } from "@/components/nav-dropdown"
import {
  LayoutDashboard,
  Users,
  FileText,
  LineChart,
  Settings,
} from "lucide-react"

const sidebarNavItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Client Management",
    href: "/clients",
    icon: Users,
  },
  {
    title: "Planning",
    icon: FileText,
    items: [
      {
        title: "Financial Planning",
        href: "/planning/financial",
        icon: FileText,
      },
      {
        title: "Retirement Planning",
        href: "/planning/retirement",
        icon: FileText,
      },
      {
        title: "Estate Planning",
        href: "/planning/estate",
        icon: FileText,
      },
    ],
  },
  {
    title: "Investment",
    icon: LineChart,
    items: [
      {
        title: "Portfolio Management",
        href: "/investment/portfolio",
        icon: LineChart,
      },
      {
        title: "Asset Allocation",
        href: "/investment/allocation",
        icon: LineChart,
      },
      {
        title: "Risk Analysis",
        href: "/investment/risk",
        icon: LineChart,
      },
    ],
  },
  {
    title: "Platform Admin",
    href: "http://localhost:8000/admin",
    icon: Settings,
    external: true
  },
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col h-full bg-card border-r">
      <div className="flex h-14 items-center border-b px-4">
        <span className="text-lg font-semibold">Advice Alpha</span>
      </div>
      <ScrollArea className="flex-1">
        <div className="space-y-1 p-2">
          {sidebarNavItems.map((item) => {
            if (item.items) {
              return (
                <NavDropdown
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                  items={item.items}
                />
              )
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.title}</span>
              </Link>
            )
          })}
        </div>
      </ScrollArea>
    </nav>
  )
} 