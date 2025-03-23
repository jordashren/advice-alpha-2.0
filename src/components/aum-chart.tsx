'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface AUMData {
  date: string;
  value: number;
}

interface AUMChartProps {
  data: AUMData[];
}

export function AUMChart({ data }: AUMChartProps) {
  const formatYAxis = (value: number) => {
    return `R${(value / 1000000000).toFixed(1)}B`;
  };

  return (
    <div className="h-[350px] w-full flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 40,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#DEF2F1" />
          <XAxis 
            dataKey="date" 
            stroke="#2B7A78"
            tick={{ fill: '#2B7A78', fontSize: 12 }}
            tickMargin={10}
          />
          <YAxis 
            stroke="#2B7A78"
            tick={{ fill: '#2B7A78', fontSize: 12 }}
            tickFormatter={formatYAxis}
            tickMargin={10}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#FEFFFF',
              border: '1px solid #DEF2F1',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
            labelStyle={{ color: '#2B7A78', fontWeight: '500', fontSize: 12 }}
            itemStyle={{ color: '#17252A', fontSize: 12 }}
            formatter={(value: number) => [`R${(value / 1000000000).toFixed(1)}B`, 'AUM']}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3AAFA9"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: '#2B7A78' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
} 