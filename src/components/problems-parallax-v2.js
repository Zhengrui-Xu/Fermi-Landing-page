'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Battery, Zap, Leaf } from 'lucide-react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  BarChart,
  Bar,
  YAxis,
  LineChart,
  Line,
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

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const ProblemsParallaxV2 = () => {
  const containerRef = useRef()
  const sectionsRef = useRef([])
  const titleRef = useRef()
  const [timeRange, setTimeRange] = useState('90d')

  // US Flag Color Scheme
  const colors = {
    oldGloryRed: '#B31942',
    oldGloryBlue: '#0A3161',
    white: '#FFFFFF',
  }

  // Slide 1: Battery Energy Storage Systems (BESS) Performance
  const batteryData = [
    { date: '2024-01-01', capacity: 2400, demand: 2800, efficiency: 85 },
    { date: '2024-01-15', capacity: 2520, demand: 2750, efficiency: 87 },
    { date: '2024-02-01', capacity: 2680, demand: 2900, efficiency: 89 },
    { date: '2024-02-15', capacity: 2850, demand: 3100, efficiency: 91 },
    { date: '2024-03-01', capacity: 3020, demand: 3200, efficiency: 93 },
    { date: '2024-03-15', capacity: 3200, demand: 3300, efficiency: 94 },
    { date: '2024-04-01', capacity: 3400, demand: 3450, efficiency: 95 },
    { date: '2024-04-15', capacity: 3580, demand: 3600, efficiency: 96 },
    { date: '2024-05-01', capacity: 3750, demand: 3700, efficiency: 97 },
    { date: '2024-05-15', capacity: 3920, demand: 3800, efficiency: 98 },
    { date: '2024-06-01', capacity: 4100, demand: 3850, efficiency: 98 },
    { date: '2024-06-15', capacity: 4280, demand: 3900, efficiency: 99 },
  ]

  const batteryConfig = {
    capacity: {
      label: 'Storage Capacity (MWh)',
      color: 'var(--chart-1)',
      icon: Battery,
    },
    demand: {
      label: 'Energy Demand (MWh)',
      color: 'var(--chart-2)',
      icon: TrendingUp,
    },
  }

  // Slide 2: Grid Frequency Stabilization
  const gridFrequencyData = [
    { time: '00:00', frequency: 59.98, voltage: 230.5, stability: 98.2 },
    { time: '02:00', frequency: 60.01, voltage: 229.8, stability: 98.8 },
    { time: '04:00', frequency: 59.97, voltage: 231.2, stability: 97.9 },
    { time: '06:00', frequency: 60.03, voltage: 230.1, stability: 99.1 },
    { time: '08:00', frequency: 59.95, voltage: 229.6, stability: 97.5 },
    { time: '10:00', frequency: 60.02, voltage: 230.8, stability: 98.9 },
    { time: '12:00', frequency: 60.0, voltage: 230.3, stability: 99.5 },
    { time: '14:00', frequency: 59.99, voltage: 230.7, stability: 99.2 },
    { time: '16:00', frequency: 60.01, voltage: 230.1, stability: 98.7 },
    { time: '18:00', frequency: 59.98, voltage: 230.4, stability: 98.4 },
    { time: '20:00', frequency: 60.02, voltage: 230.6, stability: 99.0 },
    { time: '22:00', frequency: 59.99, voltage: 230.2, stability: 98.8 },
  ]

  const gridConfig = {
    frequency: {
      label: 'Grid Frequency (Hz)',
      color: 'var(--chart-1)',
      icon: Zap,
    },
    stability: {
      label: 'Stability Index (%)',
      color: 'var(--chart-2)',
      icon: TrendingUp,
    },
  }

  // Slide 3: Carbon Emission Reduction Impact
  const carbonData = [
    { year: '2020', traditional: 850, fermi: 0, reduction: 0 },
    { year: '2021', traditional: 820, fermi: 45, reduction: 30 },
    { year: '2022', traditional: 780, fermi: 120, reduction: 70 },
    { year: '2023', traditional: 720, fermi: 280, reduction: 130 },
    { year: '2024', traditional: 640, fermi: 450, reduction: 210 },
    { year: '2025', traditional: 520, fermi: 680, reduction: 330 },
  ]

  const carbonConfig = {
    traditional: {
      label: 'Traditional Energy (Mt CO₂)',
      color: 'var(--chart-1)',
      icon: TrendingDown,
    },
    fermi: {
      label: 'Fermi Clean Energy (Mt CO₂ Avoided)',
      color: 'var(--chart-2)',
      icon: Leaf,
    },
  }

  const problemsData = [
    {
      id: 1,
      title: 'Battery Energy Storage Revolution',
      subtitle: 'Advanced BESS Performance Analytics',
      description:
        'Our quantum-enhanced battery technology delivers unprecedented energy storage capacity with 99% efficiency rates, revolutionizing grid-scale energy management.',
      data: batteryData,
      config: batteryConfig,
      chartType: 'area',
      metrics: {
        primary: { value: '4,280 MWh', label: 'Peak Capacity', color: colors.oldGloryBlue },
        secondary: { value: '99%', label: 'Efficiency Rate', color: colors.oldGloryRed },
        tertiary: { value: '340%', label: 'Capacity Growth', color: colors.white },
      },
    },
    {
      id: 2,
      title: 'Grid Frequency Stabilization',
      subtitle: 'Real-Time Power Quality Management',
      description:
        'AI-powered frequency regulation maintains grid stability within ±0.1Hz tolerance, ensuring 99.5% uptime and preventing costly blackouts across the energy network.',
      data: gridFrequencyData,
      config: gridConfig,
      chartType: 'line',
      metrics: {
        primary: { value: '±0.1Hz', label: 'Frequency Range', color: colors.oldGloryBlue },
        secondary: { value: '99.5%', label: 'Grid Stability', color: colors.oldGloryRed },
        tertiary: { value: '24/7', label: 'Monitoring', color: colors.white },
      },
    },
    {
      id: 3,
      title: 'Carbon Footprint Elimination',
      subtitle: 'Clean Energy Transition Impact',
      description:
        'Fermi Energy&apos;s integrated renewable platform has eliminated 330Mt of CO₂ emissions while accelerating the transition to sustainable power generation.',
      data: carbonData,
      config: carbonConfig,
      chartType: 'bar',
      metrics: {
        primary: { value: '330Mt', label: 'CO₂ Eliminated', color: colors.oldGloryBlue },
        secondary: { value: '78%', label: 'Emission Reduction', color: colors.oldGloryRed },
        tertiary: { value: '2025', label: 'Net Zero Target', color: colors.white },
      },
    },
  ]

  // Filter data based on time range for interactive charts
  const getFilteredData = data => {
    if (!data || data.length === 0) return data
    let daysToShow = 90
    if (timeRange === '30d') daysToShow = 30
    if (timeRange === '7d') daysToShow = 7

    // For this demo, return appropriate subset
    const totalItems = data.length
    const itemsToShow = Math.max(Math.floor((daysToShow / 90) * totalItems), 3)
    return data.slice(-itemsToShow)
  }

  useEffect(() => {
    const container = containerRef.current
    const sections = sectionsRef.current
    const title = titleRef.current

    if (!container || sections.length === 0) return

    // Set initial positions
    gsap.set(sections, { x: '100%', opacity: 0 })
    gsap.set(sections[0], { x: '0%', opacity: 1 })

    // Create the horizontal scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        snap: {
          snapTo: 'labels',
          duration: { min: 0.2, max: 3 },
          delay: 0.2,
          ease: 'power1.inOut',
        },
      },
    })

    // Title animation
    tl.from(
      title,
      {
        y: 50,
        opacity: 0,
        duration: 0.5,
      },
      0
    )

    // Animate through each section
    sections.forEach((section, index) => {
      if (index === 0) return // Skip first section as it's already visible

      const label = `section${index}`

      tl.addLabel(label)
        .to(
          sections[index - 1],
          {
            x: '-100%',
            opacity: 0,
            duration: 1,
            ease: 'power2.inOut',
          },
          label
        )
        .fromTo(
          sections[index],
          {
            x: '100%',
            opacity: 0,
          },
          {
            x: '0%',
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
          },
          label
        )
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === container) {
          trigger.kill()
        }
      })
    }
  }, [])

  const renderChart = problem => {
    const filteredData = getFilteredData(problem.data)

    switch (problem.chartType) {
      case 'area':
        return (
          <Card className="border-gray-300 bg-white/80 backdrop-blur-sm">
            <CardHeader className="flex items-center gap-2 space-y-0 border-b border-gray-300 py-5 sm:flex-row">
              <div className="grid flex-1 gap-1">
                <CardTitle className="text-black">Energy Storage Performance</CardTitle>
                <CardDescription className="text-gray-600">
                  Battery Energy Storage Systems (BESS) performance and efficiency
                </CardDescription>
              </div>
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-[160px] rounded-lg bg-white/90 border-gray-300 text-black">
                  <SelectValue placeholder="Last 3 months" />
                </SelectTrigger>
                <SelectContent className="rounded-xl bg-white border-gray-300">
                  <SelectItem value="90d" className="text-black">
                    Last 3 months
                  </SelectItem>
                  <SelectItem value="30d" className="text-black">
                    Last 30 days
                  </SelectItem>
                  <SelectItem value="7d" className="text-black">
                    Last 7 days
                  </SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
              <ChartContainer config={problem.config} className="aspect-auto h-[300px] w-full">
                <AreaChart data={filteredData}>
                  <defs>
                    <linearGradient id="fillCapacity" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={colors.oldGloryBlue} stopOpacity={0.8} />
                      <stop offset="95%" stopColor={colors.oldGloryBlue} stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="fillDemand" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={colors.oldGloryRed} stopOpacity={0.8} />
                      <stop offset="95%" stopColor={colors.oldGloryRed} stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} stroke="rgba(0,0,0,0.1)" />
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tick={{ fill: '#000000', fontSize: 12 }}
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
                            year: 'numeric',
                          })
                        }}
                        indicator="dot"
                      />
                    }
                  />
                  <Area
                    dataKey="demand"
                    type="natural"
                    fill="url(#fillDemand)"
                    stroke={colors.oldGloryRed}
                    stackId="a"
                  />
                  <Area
                    dataKey="capacity"
                    type="natural"
                    fill="url(#fillCapacity)"
                    stroke={colors.oldGloryBlue}
                    stackId="a"
                  />
                  <ChartLegend content={<ChartLegendContent />} />
                </AreaChart>
              </ChartContainer>
            </CardContent>
            <CardFooter>
              <div className="flex w-full items-start gap-2 text-sm">
                <div className="grid gap-2">
                  <div className="flex items-center gap-2 leading-none font-medium text-black">
                    Trending up by 340% capacity growth <TrendingUp className="h-4 w-4" />
                  </div>
                  <div className="text-gray-600 flex items-center gap-2 leading-none">
                    January - June 2024 • 99% Efficiency Rate
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>
        )

      case 'line':
        return (
          <Card className="border-gray-300 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-black flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Grid Frequency Monitoring
              </CardTitle>
              <CardDescription className="text-gray-600">
                24/7 real-time frequency and stability tracking
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={problem.config} className="aspect-auto h-[300px] w-full">
                <LineChart data={filteredData} margin={{ left: 12, right: 12 }}>
                  <CartesianGrid vertical={false} stroke="rgba(0,0,0,0.1)" />
                  <XAxis
                    dataKey="time"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tick={{ fill: '#000000', fontSize: 12 }}
                  />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
                  <Line
                    dataKey="frequency"
                    type="monotone"
                    stroke={colors.oldGloryRed}
                    strokeWidth={3}
                    dot={{ fill: colors.oldGloryRed, strokeWidth: 2, r: 4 }}
                  />
                  <Line
                    dataKey="stability"
                    type="monotone"
                    stroke={colors.oldGloryBlue}
                    strokeWidth={3}
                    dot={{ fill: colors.oldGloryBlue, strokeWidth: 2, r: 4 }}
                  />
                  <ChartLegend content={<ChartLegendContent />} />
                </LineChart>
              </ChartContainer>
            </CardContent>
            <CardFooter>
              <div className="flex w-full items-start gap-2 text-sm">
                <div className="grid gap-2">
                  <div className="flex items-center gap-2 leading-none font-medium text-black">
                    Maintaining ±0.1Hz tolerance <TrendingUp className="h-4 w-4" />
                  </div>
                  <div className="text-gray-600 flex items-center gap-2 leading-none">
                    24-hour monitoring cycle • 99.5% uptime
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>
        )

      case 'bar':
        return (
          <Card className="border-gray-300 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-black flex items-center gap-2">
                <Leaf className="h-5 w-5" />
                Carbon Emission Impact
              </CardTitle>
              <CardDescription className="text-gray-600">
                Clean energy transition and CO₂ reduction timeline
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={problem.config} className="aspect-auto h-[300px] w-full">
                <BarChart data={filteredData} margin={{ left: 12, right: 12 }}>
                  <CartesianGrid vertical={false} stroke="rgba(0,0,0,0.1)" />
                  <XAxis
                    dataKey="year"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tick={{ fill: '#000000', fontSize: 12 }}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dashed" />}
                  />
                  <Bar dataKey="traditional" fill={colors.oldGloryRed} />
                  <Bar dataKey="fermi" fill={colors.oldGloryBlue} />
                  <ChartLegend content={<ChartLegendContent />} />
                </BarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter>
              <div className="flex w-full items-start gap-2 text-sm">
                <div className="grid gap-2">
                  <div className="flex items-center gap-2 leading-none font-medium text-black">
                    78% reduction in carbon emissions <TrendingDown className="h-4 w-4" />
                  </div>
                  <div className="text-gray-600 flex items-center gap-2 leading-none">
                    2020 - 2025 projection • Net zero by 2025
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>
        )

      default:
        return null
    }
  }

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Hero-style Animated Background - EXACT MATCH */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            // 0% - START/END: Red left, Blue right baseline with gentle wave
            'radial-gradient(ellipse 51% 71% at 4% 47%, rgba(255,105,135,0.7) 0%, transparent 85%), radial-gradient(ellipse 49% 69% at 96% 53%, rgba(135,206,250,0.7) 0%, transparent 85%), radial-gradient(ellipse 300% 150% at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(250,250,255,0.9) 80%, transparent 100%)',

            // First breathing cycle - Wavy float up with left drift
            'radial-gradient(ellipse 66% 87% at 1% 9%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 64% 93% at 99% 91%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 328% 172% at 51% 49%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // First breathing cycle - Wavy float down with right drift
            'radial-gradient(ellipse 64% 89% at 9% 91%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 66% 91% at 91% 9%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 332% 178% at 49% 51%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // Second breathing cycle - Wave up with center drift
            'radial-gradient(ellipse 67% 88% at 3% 8%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 63% 92% at 97% 92%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 325% 168% at 52% 48%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // Second breathing cycle - Wave down with side drift
            'radial-gradient(ellipse 63% 86% at 7% 92%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 67% 94% at 93% 8%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 338% 182% at 48% 52%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // Third breathing cycle - Pronounced wave up with left curve
            'radial-gradient(ellipse 69% 91% at 0% 7%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 61% 89% at 100% 93%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 330% 175% at 53% 47%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // Third breathing cycle - Graceful wave down with right curve
            'radial-gradient(ellipse 61% 88% at 10% 93%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 69% 92% at 90% 7%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 334% 179% at 47% 53%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // SWITCH - Orbital exchange with floating S-curve
            'radial-gradient(ellipse 49% 69% at 96% 53%, rgba(255,105,135,0.7) 0%, transparent 85%), radial-gradient(ellipse 51% 71% at 4% 47%, rgba(135,206,250,0.7) 0%, transparent 85%), radial-gradient(ellipse 300% 150% at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(250,250,255,0.9) 80%, transparent 100%)',

            // Fourth breathing cycle (switched) - Wavy float up with right drift
            'radial-gradient(ellipse 64% 93% at 99% 9%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 66% 87% at 1% 91%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 332% 178% at 49% 51%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // Fourth breathing cycle (switched) - Floating wave down with left drift
            'radial-gradient(ellipse 66% 91% at 91% 91%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 64% 89% at 9% 9%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 328% 172% at 51% 49%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // Fifth breathing cycle (switched) - Wave up with center drift
            'radial-gradient(ellipse 63% 92% at 97% 8%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 67% 88% at 3% 92%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 325% 168% at 48% 52%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // Fifth breathing cycle (switched) - Organic wave down with side drift
            'radial-gradient(ellipse 67% 94% at 93% 92%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 63% 86% at 7% 8%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 338% 182% at 52% 48%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // Sixth breathing cycle (switched) - Final wave up with right curve
            'radial-gradient(ellipse 61% 89% at 100% 7%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 69% 91% at 0% 93%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 330% 175% at 47% 53%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // Sixth breathing cycle (switched) - Return wave down with left curve
            'radial-gradient(ellipse 69% 92% at 90% 93%, rgba(255,85,115,0.8) 0%, transparent 75%), radial-gradient(ellipse 61% 88% at 10% 7%, rgba(115,185,230,0.8) 0%, transparent 75%), radial-gradient(ellipse 334% 179% at 53% 47%, rgba(255,255,255,0.99) 0%, rgba(245,247,255,0.96) 88%, transparent 100%)',

            // Return to exact start frame
            'radial-gradient(ellipse 51% 71% at 4% 47%, rgba(255,105,135,0.7) 0%, transparent 85%), radial-gradient(ellipse 49% 69% at 96% 53%, rgba(135,206,250,0.7) 0%, transparent 85%), radial-gradient(ellipse 300% 150% at 50% 50%, rgba(255,255,255,0.95) 0%, rgba(250,250,255,0.9) 80%, transparent 100%)',
          ],
        }}
        transition={{
          duration: 48.0,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />

      {/* Section Title */}
      <div className="absolute top-16 left-0 right-0 z-20">
        <div ref={titleRef} className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-2 text-black">Fermi Energy Dashboard</h1>
          <p className="text-lg md:text-xl font-medium text-gray-800">
            Real-time analytics driving America&apos;s clean energy future
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="relative h-full w-full">
        {problemsData.map((problem, index) => (
          <div
            key={problem.id}
            ref={el => {
              sectionsRef.current[index] = el
            }}
            className="absolute inset-0 flex items-center justify-center p-4 md:p-8"
          >
            <div className="max-w-7xl mx-auto w-full">
              {/* Main content grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center">
                {/* Left side: Content */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-black">{problem.title}</h2>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
                      {problem.subtitle}
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed text-gray-600">
                      {problem.description}
                    </p>
                  </div>

                  {/* Key metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                      <div
                        className="text-2xl md:text-3xl font-bold"
                        style={{ color: problem.metrics.primary.color }}
                      >
                        {problem.metrics.primary.value}
                      </div>
                      <div className="text-sm text-gray-300 mt-1">
                        {problem.metrics.primary.label}
                      </div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                      <div
                        className="text-2xl md:text-3xl font-bold"
                        style={{ color: problem.metrics.secondary.color }}
                      >
                        {problem.metrics.secondary.value}
                      </div>
                      <div className="text-sm text-gray-300 mt-1">
                        {problem.metrics.secondary.label}
                      </div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                      <div
                        className="text-2xl md:text-3xl font-bold"
                        style={{ color: problem.metrics.tertiary.color }}
                      >
                        {problem.metrics.tertiary.value}
                      </div>
                      <div className="text-sm text-gray-300 mt-1">
                        {problem.metrics.tertiary.label}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side: Chart */}
                <div className="h-full min-h-[400px] flex items-center">{renderChart(problem)}</div>
              </div>

              {/* Page indicator */}
              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
                <div className="flex justify-center space-x-3">
                  {problemsData.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        idx === index ? 'scale-125 shadow-lg' : 'opacity-50'
                      }`}
                      style={{
                        backgroundColor: idx === index ? colors.oldGloryRed : colors.white,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2 opacity-70">Scroll to explore analytics</span>
          <div
            className="w-6 h-10 border-2 rounded-full flex justify-center"
            style={{ borderColor: colors.oldGloryRed }}
          >
            <div
              className="w-1 h-3 rounded-full mt-2 animate-bounce"
              style={{ backgroundColor: colors.oldGloryRed }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemsParallaxV2
