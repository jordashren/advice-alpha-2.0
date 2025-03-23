"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"

interface NavDropdownProps {
  title: string
  icon: any
  items: {
    title: string
    href: string
    icon: any
  }[]
  isCollapsed?: boolean
}

export function NavDropdown({ title, icon: Icon, items, isCollapsed = false }: NavDropdownProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="space-y-1">
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-3 text-sm font-medium",
          "text-[#2B7A78] hover:bg-[#E0E0E0] hover:text-[#3AAFA9]",
          isCollapsed && "justify-center"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon className="h-5 w-5" />
        {!isCollapsed && <span>{title}</span>}
        {!isCollapsed && (
          isOpen ? (
            <ChevronDown className="ml-auto h-4 w-4 opacity-70" />
          ) : (
            <ChevronRight className="ml-auto h-4 w-4 opacity-70" />
          )
        )}
      </Button>
      
      {isOpen && !isCollapsed && (
        <div className="ml-6 space-y-0.5 border-l border-[#E0E0E0] pl-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center px-3 py-1.5 text-sm rounded-md transition-colors duration-200",
                "text-[#2B7A78] hover:bg-[#E0E0E0] hover:text-[#3AAFA9]",
                pathname === item.href
                  ? "bg-[#E0E0E0] text-[#3AAFA9]"
                  : ""
              )}
            >
              <span className="text-xs opacity-50 mr-2">•</span>
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
} 