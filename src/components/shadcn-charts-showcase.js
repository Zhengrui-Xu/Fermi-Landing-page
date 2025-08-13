'use client'

import React, { useState } from 'react'
import { TrendingUp, TrendingDown, Battery, Zap, Leaf, BarChart3 } from 'lucide-react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  BarChart,
  Line,
  LineChart,
} from 'recharts'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const ShadcnChartsShowcase = () => {
  const [timeRange, setTimeRange] = useState('90d')

  // US Flag colors
  const colors = {
    oldGloryRed: '#B31942',
    oldGloryBlue: '#0A3161',
    white: '#FFFFFF',
  }

  // Interactive Area Chart Data (from your example)
  const interactiveAreaData = [
    { date: '2024-04-01', desktop: 222, mobile: 150 },
    { date: '2024-04-02', desktop: 97, mobile: 180 },
    { date: '2024-04-03', desktop: 167, mobile: 120 },
    { date: '2024-04-04', desktop: 242, mobile: 260 },
    { date: '2024-04-05', desktop: 373, mobile: 290 },
    { date: '2024-04-06', desktop: 301, mobile: 340 },
    { date: '2024-04-07', desktop: 245, mobile: 180 },
    { date: '2024-04-08', desktop: 409, mobile: 320 },
    { date: '2024-04-09', desktop: 59, mobile: 110 },
    { date: '2024-04-10', desktop: 261, mobile: 190 },
    { date: '2024-04-11', desktop: 327, mobile: 350 },
    { date: '2024-04-12', desktop: 292, mobile: 210 },
    { date: '2024-04-13', desktop: 342, mobile: 380 },
    { date: '2024-04-14', desktop: 137, mobile: 220 },
    { date: '2024-04-15', desktop: 120, mobile: 170 },
    { date: '2024-04-16', desktop: 138, mobile: 190 },
    { date: '2024-04-17', desktop: 446, mobile: 360 },
    { date: '2024-04-18', desktop: 364, mobile: 410 },
    { date: '2024-04-19', desktop: 243, mobile: 180 },
    { date: '2024-04-20', desktop: 89, mobile: 150 },
    { date: '2024-04-21', desktop: 137, mobile: 200 },
    { date: '2024-04-22', desktop: 224, mobile: 170 },
    { date: '2024-04-23', desktop: 138, mobile: 230 },
    { date: '2024-04-24', desktop: 387, mobile: 290 },
    { date: '2024-04-25', desktop: 215, mobile: 250 },
    { date: '2024-04-26', desktop: 75, mobile: 130 },
    { date: '2024-04-27', desktop: 383, mobile: 420 },
    { date: '2024-04-28', desktop: 122, mobile: 180 },
    { date: '2024-04-29', desktop: 315, mobile: 240 },
    { date: '2024-04-30', desktop: 454, mobile: 380 },
    { date: '2024-05-01', desktop: 165, mobile: 220 },
    { date: '2024-05-02', desktop: 293, mobile: 310 },
    { date: '2024-05-03', desktop: 247, mobile: 190 },
    { date: '2024-05-04', desktop: 385, mobile: 420 },
    { date: '2024-05-05', desktop: 481, mobile: 390 },
    { date: '2024-05-06', desktop: 498, mobile: 520 },
    { date: '2024-05-07', desktop: 388, mobile: 300 },
    { date: '2024-05-08', desktop: 149, mobile: 210 },
    { date: '2024-05-09', desktop: 227, mobile: 180 },
    { date: '2024-05-10', desktop: 293, mobile: 330 },
  ]

  // Simple Area Chart Data
  const simpleAreaData = [
    { month: 'January', desktop: 186 },
    { month: 'February', desktop: 305 },
    { month: 'March', desktop: 237 },
    { month: 'April', desktop: 73 },
    { month: 'May', desktop: 209 },
    { month: 'June', desktop: 214 },
  ]

  // Area Chart with Icons Data
  const iconsAreaData = [
    { month: 'January', desktop: 186, mobile: 80 },
    { month: 'February', desktop: 305, mobile: 200 },
    { month: 'March', desktop: 237, mobile: 120 },
    { month: 'April', desktop: 73, mobile: 190 },
    { month: 'May', desktop: 209, mobile: 130 },
    { month: 'June', desktop: 214, mobile: 140 },
  ]

  const chartConfigs = {
    interactive: {
      visitors: {
        label: 'Visitors',
      },
      desktop: {
        label: 'Desktop',
        color: 'var(--chart-1)',
      },
      mobile: {
        label: 'Mobile',
        color: 'var(--chart-2)',
      },
    },
    simple: {
      desktop: {
        label: 'Desktop',
        color: 'var(--chart-1)',
      },
    },
    icons: {
      desktop: {
        label: 'Desktop',
        color: 'var(--chart-1)',
        icon: TrendingDown,
      },
      mobile: {
        label: 'Mobile',
        color: 'var(--chart-2)',
        icon: TrendingUp,
      },
    },
  }

  const filteredData = interactiveAreaData.filter(item => {
    const date = new Date(item.date)
    const referenceDate = new Date('2024-06-30')
    let daysToSubtract = 90
    if (timeRange === '30d') {
      daysToSubtract = 30
    } else if (timeRange === '7d') {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Shadcn/UI Charts - Fermi Energy Edition
          </h1>
          <p className="text-xl text-slate-300">
            Exact implementation of shadcn/ui chart components with US Flag colors
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Interactive Area Chart */}
          <Card className="border-white/20 bg-black/20 backdrop-blur-sm">
            <CardHeader className="flex items-center gap-2 space-y-0 border-b border-white/20 py-5 sm:flex-row">
              <div className="grid flex-1 gap-1">
                <CardTitle className="text-white">Energy Usage - Interactive</CardTitle>
                <CardDescription className="text-gray-300">
                  Showing total energy consumption for the last 3 months
                </CardDescription>
              </div>
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger
                  className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex bg-white/10 border-white/20 text-white"
                  aria-label="Select a value"
                >
                  <SelectValue placeholder="Last 3 months" />
                </SelectTrigger>
                <SelectContent className="rounded-xl bg-slate-900 border-white/20">
                  <SelectItem value="90d" className="rounded-lg text-white">
                    Last 3 months
                  </SelectItem>
                  <SelectItem value="30d" className="rounded-lg text-white">
                    Last 30 days
                  </SelectItem>
                  <SelectItem value="7d" className="rounded-lg text-white">
                    Last 7 days
                  </SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
              <ChartContainer
                config={chartConfigs.interactive}
                className="aspect-auto h-[250px] w-full"
              >
                <AreaChart data={filteredData}>
                  <defs>
                    <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-mobile)" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.1)" />
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    minTickGap={32}
                    tick={{ fill: colors.white, fontSize: 12 }}
                    tickFormatter={value => {
                      const date = new Date(value)
                      return date.toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })
                    }}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={
                      <ChartTooltipContent
                        labelFormatter={value => {
                          return new Date(value).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                          })
                        }}
                        indicator="dot"
                      />
                    }
                  />
                  <Area
                    dataKey="mobile"
                    type="natural"
                    fill="url(#fillMobile)"
                    stroke="var(--color-mobile)"
                    stackId="a"
                  />
                  <Area
                    dataKey="desktop"
                    type="natural"
                    fill="url(#fillDesktop)"
                    stroke="var(--color-desktop)"
                    stackId="a"
                  />
                  <ChartLegend content={<ChartLegendContent />} />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Simple Area Chart */}
          <Card className="border-white/20 bg-black/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Energy Efficiency</CardTitle>
              <CardDescription className="text-gray-300">
                Showing grid efficiency for the last 6 months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfigs.simple}>
                <AreaChart
                  accessibilityLayer
                  data={simpleAreaData}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.1)" />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tick={{ fill: colors.white, fontSize: 12 }}
                    tickFormatter={value => value.slice(0, 3)}
                  />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
                  <Area
                    dataKey="desktop"
                    type="natural"
                    fill="var(--color-desktop)"
                    fillOpacity={0.4}
                    stroke="var(--color-desktop)"
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
            <CardFooter>
              <div className="flex w-full items-start gap-2 text-sm">
                <div className="grid gap-2">
                  <div className="flex items-center gap-2 leading-none font-medium text-white">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                  </div>
                  <div className="text-gray-300 flex items-center gap-2 leading-none">
                    January - June 2024
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>

          {/* Area Chart with Icons */}
          <Card className="border-white/20 bg-black/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Renewable vs Traditional - Icons</CardTitle>
              <CardDescription className="text-gray-300">
                Energy source comparison for the last 6 months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfigs.icons}>
                <AreaChart
                  accessibilityLayer
                  data={iconsAreaData}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.1)" />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tick={{ fill: colors.white, fontSize: 12 }}
                    tickFormatter={value => value.slice(0, 3)}
                  />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
                  <Area
                    dataKey="mobile"
                    type="natural"
                    fill="var(--color-mobile)"
                    fillOpacity={0.4}
                    stroke="var(--color-mobile)"
                    stackId="a"
                  />
                  <Area
                    dataKey="desktop"
                    type="natural"
                    fill="var(--color-desktop)"
                    fillOpacity={0.4}
                    stroke="var(--color-desktop)"
                    stackId="a"
                  />
                  <ChartLegend content={<ChartLegendContent />} />
                </AreaChart>
              </ChartContainer>
            </CardContent>
            <CardFooter>
              <div className="flex w-full items-start gap-2 text-sm">
                <div className="grid gap-2">
                  <div className="flex items-center gap-2 leading-none font-medium text-white">
                    Renewable energy trending up by 12.3% <TrendingUp className="h-4 w-4" />
                  </div>
                  <div className="text-gray-300 flex items-center gap-2 leading-none">
                    January - June 2024
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>

          {/* Additional Energy Metrics Card */}
          <Card className="border-white/20 bg-black/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Energy Dashboard Summary
              </CardTitle>
              <CardDescription className="text-gray-300">
                Key performance indicators for Fermi Energy systems
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold" style={{ color: colors.oldGloryRed }}>
                    4.2GW
                  </div>
                  <div className="text-sm text-gray-300 mt-1">Peak Capacity</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold" style={{ color: colors.oldGloryBlue }}>
                    99.7%
                  </div>
                  <div className="text-sm text-gray-300 mt-1">System Uptime</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold" style={{ color: colors.white }}>
                    $2.8B
                  </div>
                  <div className="text-sm text-gray-300 mt-1">Annual Savings</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-green-400">-45Mt</div>
                  <div className="text-sm text-gray-300 mt-1">CO₂ Reduced</div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="text-sm text-gray-300">
                Real-time data updated every 15 minutes
                {' • '}
                Last updated: {new Date().toLocaleTimeString()}
              </div>
            </CardFooter>
          </Card>
        </div>

        {/* Implementation Note */}
        <div className="mt-12 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Implementation Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div>
              <h4 className="font-semibold text-white mb-2">📊 Chart Types</h4>
              <ul className="space-y-1">
                <li>• Interactive Area Charts</li>
                <li>• Simple Area Charts</li>
                <li>• Area Charts with Icons</li>
                <li>• Real-time Filtering</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">🎨 Design System</h4>
              <ul className="space-y-1">
                <li>• US Flag Color Palette</li>
                <li>• Consistent Typography</li>
                <li>• Glass Morphism Effects</li>
                <li>• Responsive Layout</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">⚡ Features</h4>
              <ul className="space-y-1">
                <li>• Time Range Selection</li>
                <li>• Interactive Tooltips</li>
                <li>• Custom Gradients</li>
                <li>• Real-time Updates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShadcnChartsShowcase
