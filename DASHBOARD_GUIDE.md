# Fermi Energy Dashboard Components Guide

## Overview

This guide demonstrates how to use shadcn/ui chart components with the US Flag color theme for Fermi Energy's dashboard visualizations.

## Color Scheme

The dashboard uses the official US Flag colors:

- **Old Glory Red**: `#B31942` (RGB: 179, 25, 66)
- **Old Glory Blue**: `#0A3161` (RGB: 10, 49, 97)
- **White**: `#FFFFFF` (RGB: 255, 255, 255)

## Available Chart Types

### 1. Area Charts

Perfect for showing energy mix transitions and cumulative data over time.

```jsx
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts'

const data = [
  { month: 'Jan', renewable: 45, fossil: 55 },
  { month: 'Feb', renewable: 52, fossil: 48 },
  // ... more data
]

const config = {
  renewable: { label: 'Renewable Energy (%)', color: '#22C55E' },
  fossil: { label: 'Fossil Fuels (%)', color: '#B31942' },
}

<ChartContainer config={config} className="h-80">
  <AreaChart data={data}>
    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
    <XAxis dataKey="month" stroke="#FFFFFF" />
    <YAxis stroke="#FFFFFF" />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Area type="monotone" dataKey="renewable" stackId="1" stroke="#22C55E" fill="#22C55E" fillOpacity={0.7} />
    <Area type="monotone" dataKey="fossil" stackId="1" stroke="#B31942" fill="#B31942" fillOpacity={0.7} />
  </AreaChart>
</ChartContainer>
```

### 2. Bar Charts

Ideal for comparing quarterly performance, emissions data, and discrete value comparisons.

```jsx
import { BarChart, Bar } from 'recharts'

const data = [
  { quarter: 'Q1', energy: 2400, emissions: 1800 },
  { quarter: 'Q2', energy: 1398, emissions: 1200 },
  // ... more data
]

<ChartContainer config={config} className="h-80">
  <BarChart data={data}>
    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
    <XAxis dataKey="quarter" stroke="#FFFFFF" />
    <YAxis stroke="#FFFFFF" />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="energy" fill="#0A3161" />
    <Bar dataKey="emissions" fill="#B31942" />
  </BarChart>
</ChartContainer>
```

### 3. Line Charts

Best for real-time monitoring, grid performance tracking, and continuous data streams.

```jsx
import { LineChart, Line } from 'recharts'

const data = [
  { time: '00:00', frequency: 59.98, voltage: 230.5 },
  { time: '04:00', frequency: 60.02, voltage: 229.8 },
  // ... more data
]

<ChartContainer config={config} className="h-80">
  <LineChart data={data}>
    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
    <XAxis dataKey="time" stroke="#FFFFFF" />
    <YAxis stroke="#FFFFFF" />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Line type="monotone" dataKey="frequency" stroke="#B31942" strokeWidth={3}
          dot={{ fill: '#B31942', strokeWidth: 2, r: 4 }} />
    <Line type="monotone" dataKey="voltage" stroke="#0A3161" strokeWidth={3}
          dot={{ fill: '#0A3161', strokeWidth: 2, r: 4 }} />
  </LineChart>
</ChartContainer>
```

### 4. Pie Charts

Great for showing energy source distributions and portfolio breakdowns.

```jsx
import { PieChart, Pie, Cell } from 'recharts'

const data = [
  { name: 'Renewable', value: 45, fill: '#22C55E' },
  { name: 'Nuclear', value: 25, fill: '#0A3161' },
  { name: 'Natural Gas', value: 20, fill: '#6B7280' },
  { name: 'Coal', value: 10, fill: '#B31942' },
]

<ChartContainer config={config} className="h-80">
  <PieChart>
    <ChartTooltip content={<ChartTooltipContent />} />
    <Pie data={data} cx="50%" cy="50%" outerRadius={100} dataKey="value"
         label={({ name, percent }) => \`\${name} \${(percent * 100).toFixed(0)}%\`}>
      {data.map((entry, index) => (
        <Cell key={\`cell-\${index}\`} fill={entry.fill} />
      ))}
    </Pie>
  </PieChart>
</ChartContainer>
```

## Key Metrics Cards

Use consistent styling for key performance indicators:

```jsx
<div className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 text-center">
  <div className="text-3xl font-bold" style={{ color: '#B31942' }}>
    340%
  </div>
  <div className="text-slate-300 mt-2">Efficiency Boost</div>
</div>
```

## Background Styling

Consistent dark theme with US Flag color accents:

```jsx
<section
  className="relative h-screen w-full overflow-hidden"
  style={{ backgroundColor: '#0A3161' }}
>
  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 opacity-95" />
  {/* Content */}
</section>
```

## Real Data Examples

### Energy Storage Metrics

- Capacity increases: 340%
- Efficiency rates: 85%
- 24/7 operation capability

### Grid Stability Indicators

- Frequency tolerance: ±0.1Hz
- Uptime: 99.8%
- AI-powered monitoring

### Carbon Emissions Tracking

- Emission reduction: 78%
- Annual cost savings: $150B
- Target achievement: 2025

## File Structure

```
src/
├── components/
│   ├── ui/
│   │   └── chart.jsx              # shadcn/ui chart components
│   ├── problems-parallax-v2.js    # Main parallax dashboard
│   └── dashboard-demo.js          # Comprehensive chart examples
├── app/
│   ├── dashboard/
│   │   └── page.js                # Dashboard demo page
│   └── globals.css                # US Flag color variables
└── tailwind.config.js             # Extended color palette
```

## Usage Tips

1. **Consistent Colors**: Always use the US Flag color palette for patriotic branding
2. **Real Data**: Replace Lorem ipsum with actual energy metrics and KPIs
3. **Responsive Design**: All charts are responsive and work on mobile devices
4. **Accessibility**: Charts include proper tooltips and labels for screen readers
5. **Performance**: Use React.memo() for chart components that render frequently

## Next Steps

1. Connect charts to real-time data APIs
2. Add export functionality for reports
3. Implement chart filtering and date range selection
4. Add animation transitions between chart states
5. Create custom chart legends with company branding
