"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Home, Users, PieChart, FileText, Settings, Calendar, Bell, DollarSign, Building2, Scale, BarChart3 } from "lucide-react"
import Link from "next/link"
import { NavDropdown } from "@/components/nav-dropdown"

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const navItems = [
    { icon: Home, label: "Dashboard", href: "/" },
    {
      icon: Users,
      label: "CRM",
      items: [
        { icon: Users, title: "Contacts", href: "/crm/contacts" },
        { icon: Users, title: "Leads", href: "/crm/leads" },
        { icon: Users, title: "Clients", href: "/crm/clients" },
      ],
    },
    { icon: Building2, label: "Financial Planning & Strategy", href: "/financial-planning" },
    { icon: PieChart, label: "Investment Management", href: "/investment-management" },
    { icon: Scale, label: "Compliance & Regulation", href: "/compliance" },
    { icon: BarChart3, label: "Reporting & Analytics", href: "/reporting" },
  ]

  return (
    <div
      className={cn(
        "relative min-h-screen bg-[#F5F5F5] border-r border-[#E0E0E0] transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-4 top-6 h-8 w-8 rounded-full bg-white border border-[#E0E0E0] shadow-sm hover:bg-[#F5F5F5]"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? (
          <ChevronRight className="h-4 w-4 text-[#3AAFA9]" />
        ) : (
          <ChevronLeft className="h-4 w-4 text-[#3AAFA9]" />
        )}
      </Button>

      <div className="flex flex-col h-full py-6">
        <div className="px-4 mb-8">
          {/* Removed spacer line div */}
        </div>

        <nav className="flex-1 space-y-1 px-2">
          {navItems.map((item) => (
            item.items ? (
              <NavDropdown
                key={item.label}
                title={item.label}
                icon={item.icon}
                items={item.items}
                isCollapsed={isCollapsed}
              />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200",
                  "text-[#2B7A78] hover:bg-[#E0E0E0] hover:text-[#3AAFA9]",
                  isCollapsed ? "justify-center" : "space-x-3"
                )}
              >
                <item.icon className="h-5 w-5" />
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            )
          ))}
        </nav>
      </div>
    </div>
  )
} 