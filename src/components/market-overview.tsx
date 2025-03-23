'use client'

import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts"

interface MarketData {
  index: string;
  value: number;
  change: string;
  trend: 'up' | 'down';
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

interface MarketOverviewProps {
  data: MarketData[];
}

export function MarketOverview({ data }: MarketOverviewProps) {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="index"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
} 