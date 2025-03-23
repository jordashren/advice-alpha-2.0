'use client'

import { useEffect, useState } from 'react'
import { CardHeader, CardTitle } from "@/components/ui/card"
import { Newspaper } from "lucide-react"

interface NewsItem {
  title: string;
  source: string;
  time: string;
  category: string;
}

interface NewsCarouselProps {
  items: NewsItem[];
}

export function NewsCarousel({ items }: NewsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change news every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered, items.length]);

  return (
    <>
      <CardHeader>
        <CardTitle className="text-lg font-medium text-[#2B7A78] flex items-center gap-2">
          <Newspaper className="h-5 w-5" />
          Latest Financial News
        </CardTitle>
      </CardHeader>
      <div 
        className="space-y-4 h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#3AAFA9] scrollbar-track-[#DEF2F1] px-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {items.map((item, i) => (
          <div 
            key={i} 
            className="space-y-1 p-2 rounded-lg transition-colors duration-200 hover:bg-[#DEF2F1]/50"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-[#17252A]">{item.title}</span>
              <span className="text-xs text-[#2B7A78]">{item.time}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-[#3AAFA9]">{item.category}</span>
              <span className="text-xs text-[#2B7A78]">•</span>
              <span className="text-xs text-[#2B7A78]">{item.source}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
} 