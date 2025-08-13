'use client'

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart'
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts'

const DashboardDemo = () => {
  // US Flag Color Scheme
  const colors = {
    oldGloryRed: '#B31942',
    oldGloryBlue: '#0A3161',
    white: '#FFFFFF',
    gray: '#6B7280',
    green: '#22C55E',
    yellow: '#EAB308',
  }

  // Demo data for different chart types
  const areaChartData = [
    { month: 'Jan', renewable: 45, fossil: 55 },
    { month: 'Feb', renewable: 52, fossil: 48 },
    { month: 'Mar', renewable: 58, fossil: 42 },
    { month: 'Apr', renewable: 65, fossil: 35 },
    { month: 'May', renewable: 72, fossil: 28 },
    { month: 'Jun', renewable: 78, fossil: 22 },
  ]

  const barChartData = [
    { quarter: 'Q1', energy: 2400, emissions: 1800 },
    { quarter: 'Q2', energy: 1398, emissions: 1200 },
    { quarter: 'Q3', energy: 9800, emissions: 7200 },
    { quarter: 'Q4', energy: 3908, emissions: 2800 },
  ]

  const lineChartData = [
    { time: '00:00', grid: 850, solar: 0, wind: 120 },
    { time: '06:00', grid: 920, solar: 45, wind: 95 },
    { time: '12:00', grid: 1150, solar: 380, wind: 85 },
    { time: '18:00', grid: 1280, solar: 125, wind: 110 },
    { time: '24:00', grid: 1050, solar: 0, wind: 135 },
  ]

  const pieChartData = [
    { name: 'Renewable', value: 45, fill: colors.green },
    { name: 'Nuclear', value: 25, fill: colors.oldGloryBlue },
    { name: 'Natural Gas', value: 20, fill: colors.gray },
    { name: 'Coal', value: 10, fill: colors.oldGloryRed },
  ]

  const chartConfigs = {
    area: {
      renewable: { label: 'Renewable Energy (%)', color: colors.green },
      fossil: { label: 'Fossil Fuels (%)', color: colors.oldGloryRed },
    },
    bar: {
      energy: { label: 'Energy Production (GWh)', color: colors.oldGloryBlue },
      emissions: { label: 'CO₂ Emissions (kt)', color: colors.oldGloryRed },
    },
    line: {
      grid: { label: 'Grid Load (MW)', color: colors.oldGloryRed },
      solar: { label: 'Solar (MW)', color: colors.yellow },
      wind: { label: 'Wind (MW)', color: colors.oldGloryBlue },
    },
    pie: {
      renewable: { label: 'Renewable', color: colors.green },
      nuclear: { label: 'Nuclear', color: colors.oldGloryBlue },
      gas: { label: 'Natural Gas', color: colors.gray },
      coal: { label: 'Coal', color: colors.oldGloryRed },
    },
  }

  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Fermi Energy Dashboard Components</h1>
          <p className="text-xl text-slate-300">
            Interactive charts using shadcn/ui components with US Flag color theme
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Area Chart */}
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Energy Mix Transition - Area Chart
            </h3>
            <ChartContainer config={chartConfigs.area} className="h-80">
              <AreaChart data={areaChartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="month" stroke={colors.white} />
                <YAxis stroke={colors.white} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Area
                  type="monotone"
                  dataKey="renewable"
                  stackId="1"
                  stroke={colors.green}
                  fill={colors.green}
                  fillOpacity={0.7}
                />
                <Area
                  type="monotone"
                  dataKey="fossil"
                  stackId="1"
                  stroke={colors.oldGloryRed}
                  fill={colors.oldGloryRed}
                  fillOpacity={0.7}
                />
              </AreaChart>
            </ChartContainer>
          </div>

          {/* Bar Chart */}
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Quarterly Performance - Bar Chart
            </h3>
            <ChartContainer config={chartConfigs.bar} className="h-80">
              <BarChart data={barChartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="quarter" stroke={colors.white} />
                <YAxis stroke={colors.white} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="energy" fill={colors.oldGloryBlue} />
                <Bar dataKey="emissions" fill={colors.oldGloryRed} />
              </BarChart>
            </ChartContainer>
          </div>

          {/* Line Chart */}
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Daily Grid Performance - Line Chart
            </h3>
            <ChartContainer config={chartConfigs.line} className="h-80">
              <LineChart data={lineChartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="time" stroke={colors.white} />
                <YAxis stroke={colors.white} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Line
                  type="monotone"
                  dataKey="grid"
                  stroke={colors.oldGloryRed}
                  strokeWidth={3}
                  dot={{ fill: colors.oldGloryRed, strokeWidth: 2, r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="solar"
                  stroke={colors.yellow}
                  strokeWidth={3}
                  dot={{ fill: colors.yellow, strokeWidth: 2, r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="wind"
                  stroke={colors.oldGloryBlue}
                  strokeWidth={3}
                  dot={{ fill: colors.oldGloryBlue, strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ChartContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Energy Sources Distribution - Pie Chart
            </h3>
            <ChartContainer config={chartConfigs.pie} className="h-80">
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent />} />
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
            </ChartContainer>
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 text-center">
            <div className="text-3xl font-bold" style={{ color: colors.green }}>
              78%
            </div>
            <div className="text-slate-300 mt-2">Renewable Energy</div>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 text-center">
            <div className="text-3xl font-bold" style={{ color: colors.oldGloryRed }}>
              340%
            </div>
            <div className="text-slate-300 mt-2">Efficiency Boost</div>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 text-center">
            <div className="text-3xl font-bold" style={{ color: colors.oldGloryBlue }}>
              99.8%
            </div>
            <div className="text-slate-300 mt-2">Grid Stability</div>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 text-center">
            <div className="text-3xl font-bold" style={{ color: colors.white }}>
              $150B
            </div>
            <div className="text-slate-300 mt-2">Annual Savings</div>
          </div>
        </div>

        {/* Color Palette Reference */}
        <div className="mt-12 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
          <h3 className="text-xl font-semibold text-white mb-4">US Flag Color Palette</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div
                className="w-full h-16 rounded-lg mb-2"
                style={{ backgroundColor: colors.oldGloryRed }}
              />
              <div className="text-sm text-slate-300">Old Glory Red</div>
              <div className="text-xs text-slate-500">#B31942</div>
            </div>
            <div className="text-center">
              <div
                className="w-full h-16 rounded-lg mb-2 border border-slate-600"
                style={{ backgroundColor: colors.white }}
              />
              <div className="text-sm text-slate-300">White</div>
              <div className="text-xs text-slate-500">#FFFFFF</div>
            </div>
            <div className="text-center">
              <div
                className="w-full h-16 rounded-lg mb-2"
                style={{ backgroundColor: colors.oldGloryBlue }}
              />
              <div className="text-sm text-slate-300">Old Glory Blue</div>
              <div className="text-xs text-slate-500">#0A3161</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardDemo
