'use client'

import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

interface PortfolioData {
  name: string;
  value: number;
  color: string;
  amount?: string;
}

interface PortfolioChartProps {
  data: PortfolioData[];
}

export function PortfolioChart({ data }: PortfolioChartProps) {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.color}
                className="transition-all duration-300 hover:opacity-80 hover:scale-105"
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number, entry: any) => {
              if (!entry || !entry.payload) return '';
              return [
                `${value}%`,
                `${entry.payload.name} (${entry.payload.amount})`
              ];
            }}
            contentStyle={{
              backgroundColor: '#FEFFFF',
              border: '1px solid #DEF2F1',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
            labelStyle={{ color: '#2B7A78', fontWeight: '500' }}
            itemStyle={{ color: '#17252A' }}
            cursor={{ fill: 'transparent' }}
          />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  )
} 