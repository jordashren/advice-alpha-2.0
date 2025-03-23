"use client"

import Link from "next/link"
import { Settings, UserCircle, HelpCircle, Search } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#2B7A78]/20 bg-[#17252A] shadow-sm">
      <div className="flex h-16 items-center px-6">
        <Link href="/" className="flex items-center">
          <svg
            viewBox="0 0 24 24"
            width="32"
            height="32"
            className="text-[#3AAFA9]"
          >
            <path
              fill="currentColor"
              d="M12 2L4 7v10l8 5 8-5V7l-8-5zM6 15.6V8.4l6-3.7 6 3.7v7.2l-6 3.7-6-3.7z"
            />
            <path
              fill="currentColor"
              d="M12 6L7 9v6l5 3 5-3V9l-5-3zm-3 7.8V10.2l3-1.9 3 1.9v3.6l-3 1.9-3-1.9z"
            />
          </svg>
          <span className="ml-2 text-[#3AAFA9] text-sm font-medium">advice alpha</span>
        </Link>
        <div className="flex items-center mx-auto max-w-md w-full">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-[#1E2E2D] text-white placeholder-[#3AAFA9]/70 rounded-md py-1.5 pl-10 pr-4 text-sm ring-1 ring-[#2B7A78]/20 focus:outline-none focus:ring-[#3AAFA9]/50"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#3AAFA9]/70" />
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <Link
            href="http://localhost:8000/admin"
            className="text-[#3AAFA9] hover:text-[#DEF2F1] transition-colors"
            target="_blank"
          >
            <Settings className="h-5 w-5" />
          </Link>
          <button className="text-[#3AAFA9] hover:text-[#DEF2F1] transition-colors">
            <UserCircle className="h-5 w-5" />
          </button>
          <button className="text-[#3AAFA9] hover:text-[#DEF2F1] transition-colors">
            <HelpCircle className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
} 