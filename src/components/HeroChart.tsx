import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export const description = "A simple area chart";

const chartData = [
  { month: "January", applications: 32 },
  { month: "February", applications: 15 },
  { month: "March", applications: 55 },
  { month: "April", applications: 80 },
  { month: "May", applications: 40 },
  { month: "June", applications: 113 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function HeroChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>With Charts 📈</CardTitle>
        <CardDescription>
          Diferent types of charts to check your progress
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="applications"
              type="natural"
              fill="#00BBA7"
              fillOpacity={0.4}
              stroke="#00BBA7"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
