# AI-Driven Heatwave Detection & Early Advisory System

[![React 19](https://img.shields.io/badge/React-19.0.0-blue.svg?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.1.1-646CFF.svg?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/TailwindCSS-4.3.3-38B2AC.svg?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Status: Active](https://img.shields.io/badge/Status-Active%20Development-brightgreen.svg)]()

> An end-to-end climate resilience platform combining satellite remote sensing, ground station telemetry, deep learning spatial-temporal models, and automated persona-targeted public advisories to mitigate heatwave risks across India.

---

## Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [System Architecture & Workflow](#-system-architecture--workflow)
- [Tech Stack](#-tech-stack)
- [Project Directory Structure](#-project-directory-structure)
- [Quick Start Guide](#-quick-start-guide)
- [Application Pages & Modules](#-application-pages--modules)
- [AI Advisory Personas](#-ai-advisory-personas)
- [Future Roadmap](#-future-roadmap)
- [License](#-license)

---

## Overview

Heatwaves represent one of the fastest-growing climate hazards in South Asia, leading to severe heatstroke mortality, agricultural losses, power grid failures, and urban heat island amplification. Traditional meteorology forecasts often lack hyper-local resolution and actionable, persona-tailored advisories.

The **AI-Driven Heatwave Detection & Early Advisory System** addresses this challenge by providing:
- **72-Hour Hyper-Local Predictions**: High-confidence land surface temperature & heat index forecasting using LSTM spatial-temporal neural networks.
- **Interactive GIS Heat Maps**: Real-time vector map visualizers tracking temperature distributions across Indian states and districts.
- **Automated Persona-Targeted Advisories**: AI-generated guidance tailored specifically for **Farmers**, **Outdoor Laborers**, **Hospitals**, and **Municipal Authorities**.
- **Early Warning Ticker & Alert Dispatch**: Instant emergency broadcasts (SMS, WhatsApp, Municipal Hub APIs) for Red, Orange, and Yellow heat warnings.

---

## Key Features

### 1. 📊 Executive Command Dashboard
- High-level overview of national heat threat status.
- Real-time heatwave alert tickers and quick-response action items.
- Live key metrics: Active Heatwave Alerts, Peak Temperature, High-Risk Population Exposed, and Hospital Preparedness Index.

### 2. 🗺️ Interactive GIS Heat Map Engine
- High-resolution SVG-based interactive map of India with district-level drilldowns.
- Color-coded thermal severity distribution:
  - 🟢 **Normal**: $< 40^\circ\text{C}$
  - 🟡 **Moderate Heat**: $40^\circ\text{C} - 43.9^\circ\text{C}$
  - 🟠 **Severe Heatwave**: $44^\circ\text{C} - 46.9^\circ\text{C}$
  - 🔴 **Extreme Threat**: $\ge 47^\circ\text{C}$
- Real-time hover tooltips with temperature, heat index, humidity, and status indicators.

### 3. 🌤️ Real-Time Weather & Telemetry Monitoring
- Multi-parameter live telemetry cards tracking Ambient Temperature, Heat Index (Humidex), Relative Humidity, UV Index, Wind Speed, and Solar Radiation.
- Hourly 24-hour temperature forecast timeline and historical trend comparison graphs.

### 4. 🔥 Hotspot Identification & Urban Heat Islands (UHI)
- Detailed breakdown of critical heat zones across North, West, Central, and South India.
- Risk score calculation blending Land Surface Temperature (LST), concrete density, vegetation index (NDVI), and population density.

### 5. 🚨 Early Warning & Emergency Alerts System
- Multi-level emergency notifications categorised into **Red Alert (Emergency Dispatch)**, **Orange Alert (Prepare & Shield)**, and **Yellow Alert (Watch)**.
- Filtering by severity level and state/region.
- Broadcast trigger integration for municipal disaster management units.

### 6. 🤖 AI Advisory Generator
- Dynamic advisory engine generating persona-specific coping strategies:
  - 🌾 **Farmers & Agricultural Workers**: Crop irrigation timing, livestock cooling, field labor shift adjustments.
  - 👷 **Outdoor & Construction Laborers**: Hydration schedules, mandatory rest breaks, wet-towel cooling protocols.
  - 🏥 **Hospitals & Healthcare Facilities**: Heatstroke ICU bed allocation, ORS inventory, emergency surge response.
  - 🏛️ **Municipal Disaster Units**: Water tanker dispatches, cooling shelter activations, power grid load management.
  - 🏡 **General Public & Vulnerable Groups**: Hydration advisories, peak sun avoidance, elderly care check-ins.

### 7. 📈 Advanced Climate Analytics & Historical Comparisons
- Trend charts analyzing year-over-year heatwave frequency and duration.
- Heat-stress mortality correlation indices and humidity vs. temperature matrices.

### 8. 📄 Automated Disaster Reports & Export
- Generated summary reports downloadable for government officials, NGOs, and research institutions.
- Options to export filterable CSV dataset extracts and executive PDF summaries.

---

## System Architecture & Workflow

```
┌─────────────────────────┐      ┌──────────────────────────┐      ┌─────────────────────────┐
│   IMD Ground Telemetry  │      │  INSAT-3D Satellite Data │      │ Weather API Telemetry   │
└────────────┬────────────┘      └────────────┬─────────────┘      └────────────┬────────────┘
             │                                │                                 │
             └───────────────────┬────────────┴─────────────────────────────────┘
                                 ▼
                     ┌───────────────────────┐
                     │ Data Ingestion Engine │
                     └───────────┬───────────┘
                                 ▼
                    ┌─────────────────────────┐
                    │ LSTM Neural Prediction  │
                    │ Spatial-Temporal Model │
                    └───────────┬─────────────┘
                                 ▼
                    ┌─────────────────────────┐
                    │ Risk Score & Severity   │
                    │ Matrix Classifier       │
                    └───────────┬─────────────┘
                                 ▼
            ┌────────────────────┴────────────────────┐
            ▼                                         ▼
┌───────────────────────┐                 ┌───────────────────────┐
│ Interactive GIS Front │                 │ Automated Persona     │
│ Command Dashboard     │                 │ Advisory Generator    │
└───────────────────────┘                 └───────────────────────┘
```

1. **Ingestion Layer**: Ingests temperature telemetry from IMD (India Meteorological Department) ground stations and thermal radiometer bands from INSAT-3D satellites.
2. **Deep Learning Layer**: Runs spatial-temporal neural models (LSTM/PyTorch) predicting land surface temperature trends for 24h, 48h, and 72h horizons.
3. **Classification & Risk Matrix**: Evaluates temperature alongside humidity, wind, and demographic vulnerability to assign threat scores.
4. **Advisory & Broadcast Layer**: Generates tailored mitigation recommendations and dispatches warnings via frontend dashboards and emergency communication channels.

---

## Tech Stack

| Category | Technology |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/) |
| **Routing** | [React Router v7](https://reactrouter.com/) |
| **Styling & UI** | [Tailwind CSS v4](https://tailwindcss.com/) + [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Data Visualization** | [Recharts](https://recharts.org/) + SVG Vector GIS Engine |
| **State & Theme Management**| Custom React Context (`ThemeContext`) with Light/Dark Mode support |
| **Target Backend / ML** | Python 3.10+, PyTorch, FastAPI, GeoJSON GIS Engine |

---

## Project Directory Structure

```
HeatmapDetection/
├── frontend/                     # React Frontend Application
│   ├── public/                   # Public assets & favicon
│   ├── src/
│   │   ├── components/           # Reusable UI components
│   │   │   ├── AlertCard.jsx           # Warning and alert display cards
│   │   │   ├── Breadcrumb.jsx          # Route breadcrumb navigation
│   │   │   ├── ChartCard.jsx           # Recharts wrapper component
│   │   │   ├── EmptyState.jsx          # Fallback empty view states
│   │   │   ├── Footer.jsx              # Application footer
│   │   │   ├── HotspotCard.jsx         # High-risk zone cards
│   │   │   ├── IndiaMap.jsx            # SVG Interactive GIS Map of India
│   │   │   ├── Layout.jsx              # Main app wrapper with Navbar/Sidebar
│   │   │   ├── Loader.jsx              # Loading spinners & skeletons
│   │   │   ├── Navbar.jsx              # Top header navigation & search toggle
│   │   │   ├── NotificationsPanel.jsx  # Slide-over alert notifications
│   │   │   ├── ReportCard.jsx          # Exportable report download cards
│   │   │   ├── SearchModal.jsx         # Global search & command palette
│   │   │   ├── Sidebar.jsx             # Collapsible side navigation
│   │   │   └── StatisticCard.jsx       # Key performance indicator cards
│   │   ├── context/
│   │   │   └── ThemeContext.jsx        # Dark/Light theme provider
│   │   ├── data/
│   │   │   └── mockData.js             # Telemetry, alerts, hotspots & mock datasets
│   │   ├── pages/                      # Application route views
│   │   │   ├── AIAdvisoryGenerator.jsx # AI Persona advisory generator page
│   │   │   ├── AboutProject.jsx        # Project background, objectives & team info
│   │   │   ├── AlertsEarlyWarning.jsx  # Active warnings and broadcast dispatches
│   │   │   ├── Analytics.jsx           # Historical climate data analytics
│   │   │   ├── Dashboard.jsx           # Main executive overview dashboard
│   │   │   ├── HeatwaveHotspots.jsx    # High-risk zone tracking & UHI index
│   │   │   ├── InteractiveHeatMap.jsx  # District & state level heat map visualizer
│   │   │   ├── LandingPage.jsx         # Public landing page & overview
│   │   │   ├── NotFound.jsx            # 404 Error page
│   │   │   ├── Reports.jsx             # Generated reports & data exports
│   │   │   ├── Settings.jsx            # App preferences & notification settings
│   │   │   └── WeatherMonitoring.jsx   # Live weather telemetry & forecasts
│   │   ├── App.jsx                     # Route definitions & layout wrappers
│   │   ├── main.jsx                    # Application entry point
│   │   └── index.css                   # Global styles & Tailwind CSS imports
│   ├── package.json
│   └── vite.config.js
└── README.md                     # Root project documentation
```

---

## Quick Start Guide

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher (or `yarn` / `pnpm`)

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/riteshgorule/HeatwavePrediction.git
   cd HeatwavePrediction
   ```

2. **Navigate to Frontend Directory & Install Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   The development application will be available at `http://localhost:5173`.

4. **Build for Production**
   ```bash
   npm run build
   ```
   The production ready assets will be output to `frontend/dist`.

5. **Preview Production Build**
   ```bash
   npm run preview
   ```

---

## Application Pages & Navigation

| Route | Page Name | Description |
| :--- | :--- | :--- |
| `/` | **Landing Page** | Public introduction, feature highlights, and system metrics. |
| `/dashboard` | **Command Dashboard** | Real-time national heatwave overview and threat indicators. |
| `/monitoring` | **Weather Telemetry** | Live multi-sensor weather telemetry and 24-hour forecasts. |
| `/map` | **GIS Heat Map** | Interactive India vector map with thermal layer toggles. |
| `/hotspots` | **Heatwave Hotspots** | District risk rankings, UHI index, and vulnerability ratings. |
| `/alerts` | **Alerts & Warnings** | Emergency warnings categorized by severity level (Red/Orange/Yellow). |
| `/ai-advisory` | **AI Advisory Generator**| Targeted mitigation advisories for farmers, hospitals, and citizens. |
| `/analytics` | **Climate Analytics** | Deep-dive statistical trends, mortality correlation, and historical data. |
| `/reports` | **Disaster Reports** | Downloadable PDF/CSV climate reports and executive summaries. |
| `/about` | **About Project** | Project objectives, deep learning workflow, and research team details. |
| `/settings` | **System Settings** | Notification threshold customization, theme toggle, and API settings. |

---

## AI Advisory Personas

The AI advisory module synthesizes environmental variables to output actionable steps:

- **Agriculture & Farming**: Calculates evaporation rates to optimize night-time crop irrigation and protect livestock against heat stress.
- **Construction & Outdoor Labor**: Enforces maximum wet-bulb temperature work cut-offs and mandatory shade/electrolyte break intervals.
- **Hospitals & Health Centers**: Pre-allocates cooling beds, monitors heat exhaustion admissions, and maintains emergency power backup for refrigeration of vital medicines.
- **Municipal Disaster Units**: Automatically triggers city water misting, opens public cooling centers, and alters municipal working hours.

---

## Future Roadmap

- [ ] **Live OpenWeather API Integration**: Connect real-time REST API feeds for live global weather telemetry.
- [ ] **PyTorch / FastAPI Backend**: Integrate real-time inference server with trained LSTM models.
- [ ] **Automated SMS & WhatsApp Alerts**: Integration with Twilio / Gupshup gateways for instant SMS dispatch to rural communities.
- [ ] **Satellite Imagery Layers**: Overlay Sentinel-3 and MODIS Land Surface Temperature (LST) raster layers directly on the GIS map.
- [ ] **Multi-Language Support**: Support for regional Indian languages (Hindi, Marathi, Gujarati, Tamil, Telugu, etc.) for advisory dispatches.

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.