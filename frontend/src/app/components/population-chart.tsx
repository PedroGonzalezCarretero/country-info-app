"use client"

import {
   LineChart,
   Line,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   ResponsiveContainer
} from "recharts"

interface PopulationChartProps {
   data: Array<{ year: number; value: number }>
}

export default function PopulationChart({ data }: PopulationChartProps) {
   return (
      <ResponsiveContainer width="100%" height="100%">
         <LineChart
            data={data}
            margin={{
               top: 5,
               right: 30,
               left: 20,
               bottom: 5
            }}
         >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" tick={{ fill: "hsl(var(--foreground))" }} />
            <YAxis
               tick={{ fill: "hsl(var(--foreground))" }}
               tickFormatter={(value) => (value / 1000000).toFixed(1) + "M"}
            />
            <Tooltip
               contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  borderColor: "hsl(var(--border))"
               }}
               labelStyle={{ color: "hsl(var(--foreground))" }}
               formatter={(value: number) => [
                  new Intl.NumberFormat().format(value),
                  "Population"
               ]}
            />
            <Line
               type="monotone"
               dataKey="value"
               stroke="hsl(var(--primary))"
               strokeWidth={2}
               dot={false}
            />
         </LineChart>
      </ResponsiveContainer>
   )
}
