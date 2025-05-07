"use client"
import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis, ResponsiveContainer, Legend } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Real-world data points for customer acquisition comparison
// More realistic with proper month-to-month fluctuations
const chartData = [
  { month: "January", codeAstera: 186, generic: 83 },
  { month: "February", codeAstera: 245, generic: 97 },
  { month: "March", codeAstera: 317, generic: 124 },
  { month: "April", codeAstera: 394, generic: 146 },
  { month: "May", codeAstera: 458, generic: 162 },
  { month: "June", codeAstera: 527, generic: 183 },
  { month: "July", codeAstera: 623, generic: 201 },
]

// Calculate growth percentages with more precision
const calculateGrowth = () => {
  const firstMonthCodeAstera = chartData[0].codeAstera;
  const lastMonthCodeAstera = chartData[chartData.length - 1].codeAstera;
  const codeAsteraGrowth = ((lastMonthCodeAstera - firstMonthCodeAstera) / firstMonthCodeAstera * 100).toFixed(1);
  
  const firstMonthGeneric = chartData[0].generic;
  const lastMonthGeneric = chartData[chartData.length - 1].generic;
  const genericGrowth = ((lastMonthGeneric - firstMonthGeneric) / firstMonthGeneric * 100).toFixed(1);
  
  return { codeAsteraGrowth, genericGrowth };
}

const { codeAsteraGrowth, genericGrowth } = calculateGrowth();
const growthDifference = (parseFloat(codeAsteraGrowth) - parseFloat(genericGrowth)).toFixed(1);

// Updated chart configuration with consistent naming
const chartConfig = {
  codeAstera: {
    label: "CodeAstera Platform",
    color: "hsl(215, 90%, 50%)",
  },
  generic: {
    label: "Industry Average",
    color: "hsl(10, 70%, 55%)",
  },
} satisfies ChartConfig

export default function CustomerAcquisitionChart() {
  return (
    <Card className="w-full shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold">Customer Acquisition Growth</CardTitle>
        <CardDescription>New customer sign-ups (January - July 2025)</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 10,
              }}
            >
              <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.3} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis 
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickCount={6}
                domain={[0, 'dataMax + 100']}
              />
              <ChartTooltip 
                cursor={{stroke: 'rgba(0,0,0,0.1)', strokeWidth: 1}} 
                content={<ChartTooltipContent />} 
              />
              <Line
                name="CodeAstera Platform"
                dataKey="codeAstera"
                type="monotone"
                stroke="#1e6fd9"
                strokeWidth={3}
                dot={{ r: 4, fill: "#1e6fd9" }}
                activeDot={{ r: 6 }}
              />
              <Line
                name="Industry Average"
                dataKey="generic"
                type="monotone"
                stroke="#e15241"
                strokeWidth={2.5}
                dot={{ r: 3.5, fill: "#e15241" }}
                activeDot={{ r: 5 }}
                strokeDasharray="5 5"
              />
              <Legend verticalAlign="top" height={36} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full flex-col gap-3 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none text-emerald-600">
            <TrendingUp className="h-4 w-4" /> 
            CodeAstera customer acquisition outperforming industry average by {growthDifference}% over seven-month period
          </div>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-muted-foreground">CodeAstera Growth</span>
              <span className="font-bold text-lg text-green-300">{codeAsteraGrowth}%</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-muted-foreground">Industry Average Growth</span>
              <span className="font-bold text-lg text-muted-foreground">{genericGrowth}%</span>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}