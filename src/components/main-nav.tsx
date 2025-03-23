"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Users,
  FileText,
  BarChart3,
  Target,
  PieChart,
  Shield,
  GraduationCap,
  Wallet,
  Building2,
  Home,
} from "lucide-react"
import { NavDropdown } from "@/components/nav-dropdown"

const mainNavItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: Home,
    showText: true,
  },
  {
    title: "Client Management",
    href: "/clients",
    icon: Users,
    showText: true,
  },
  {
    type: "dropdown",
    title: "Planning",
    icon: FileText,
    items: [
      {
        title: "Financial Planning",
        href: "/planning",
        icon: FileText,
      },
      {
        title: "Estate Planning",
        href: "/estate",
        icon: Building2,
      },
      {
        title: "Retirement Planning",
        href: "/retirement",
        icon: GraduationCap,
      },
      {
        title: "Insurance Planning",
        href: "/insurance",
        icon: Wallet,
      },
    ],
  },
  {
    type: "dropdown",
    title: "Investment",
    icon: PieChart,
    items: [
      {
        title: "Investment Strategy",
        href: "/investments",
        icon: PieChart,
      },
      {
        title: "Portfolio Management",
        href: "/portfolio",
        icon: BarChart3,
      },
      {
        title: "Risk Assessment",
        href: "/risk",
        icon: Shield,
      },
      {
        title: "Goals & Objectives",
        href: "/goals",
        icon: Target,
      },
    ],
  },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-2 lg:space-x-4">
      {mainNavItems.map((item) => {
        if (item.type === "dropdown") {
          return (
            <NavDropdown
              key={item.title}
              title={item.title}
              icon={item.icon}
              items={item.items}
            />
          )
        }

        const Icon = item.icon
        return (
          <Link
            key={item.href}
            href={item.href as any}
            className={cn(
              "flex items-center text-sm font-medium transition-colors hover:text-primary rounded-md p-2",
              pathname === item.href
                ? "text-primary bg-primary/10"
                : "text-muted-foreground hover:bg-muted"
            )}
            title={item.title}
          >
            <Icon className="h-5 w-5" />
            {item.showText && (
              <span className="ml-2 hidden md:inline-block">{item.title}</span>
            )}
          </Link>
        )
      })}
    </nav>
  )
} 