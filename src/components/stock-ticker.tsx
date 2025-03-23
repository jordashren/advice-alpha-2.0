'use client'

import { useEffect, useState } from 'react'
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react'

interface StockData {
  symbol: string
  price: number
  change: number
  name: string
}

export function StockTicker() {
  const [stocks, setStocks] = useState<StockData[]>([
    { symbol: 'NPN.JO', price: 3425.50, change: 1.2, name: 'Naspers' },
    { symbol: 'PRX.JO', price: 1242.75, change: -0.5, name: 'Prosus' },
    { symbol: 'FSR.JO', price: 142.65, change: 0.8, name: 'FirstRand' },
    { symbol: 'SBK.JO', price: 175.35, change: 2.1, name: 'Standard Bank' },
    { symbol: 'AGL.JO', price: 485.90, change: -1.3, name: 'Anglo American' },
    { symbol: 'MTN.JO', price: 175.35, change: -2.4, name: 'MTN Group' },
    { symbol: 'VOD.JO', price: 875.35, change: 3.2, name: 'Vodacom' },
    { symbol: 'ABG.JO', price: 185.45, change: 0.7, name: 'ABSA Group' },
  ])

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-t border-muted/20">
      <div className="animate-ticker inline-flex space-x-12 whitespace-nowrap py-1.5">
        {[...stocks, ...stocks].map((stock, index) => (
          <div key={`${stock.symbol}-${index}`} className="inline-flex items-center space-x-3">
            <div className="flex flex-col space-y-0">
              <span className="text-foreground text-xs font-medium">{stock.name}</span>
              <span className="text-muted-foreground text-[10px]">{stock.symbol}</span>
            </div>
            <span className="text-foreground font-medium text-xs">R{stock.price.toFixed(2)}</span>
            <span className={`flex items-center ${stock.change >= 0 ? 'text-emerald-500' : 'text-red-500'} text-xs`}>
              {stock.change >= 0 ? (
                <ArrowUpIcon className="h-3 w-3 mr-0.5" />
              ) : (
                <ArrowDownIcon className="h-3 w-3 mr-0.5" />
              )}
              {Math.abs(stock.change)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
} 