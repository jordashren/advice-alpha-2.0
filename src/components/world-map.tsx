'use client'

import { useState, useEffect } from "react"
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps"

interface ContinentData {
  continent: string;
  clients: number;
}

// Example data for continents
const CONTINENT_DATA: ContinentData[] = [
  { continent: "North America", clients: 570 },
  { continent: "Europe", clients: 440 },
  { continent: "Asia", clients: 110 },
  { continent: "Oceania", clients: 150 },
  { continent: "Africa", clients: 90 },
  { continent: "South America", clients: 45 },
]

// Map of country codes to continents
const COUNTRY_TO_CONTINENT: { [key: string]: string } = {
  // North America
  USA: "North America",
  CAN: "North America",
  MEX: "North America",
  // South America
  BRA: "South America",
  ARG: "South America",
  COL: "South America",
  // Europe
  FRA: "Europe",
  DEU: "Europe",
  GBR: "Europe",
  // Africa
  NGA: "Africa",
  EGY: "Africa",
  ZAF: "Africa",
  // Asia
  CHN: "Asia",
  IND: "Asia",
  JPN: "Asia",
  // Oceania
  AUS: "Oceania",
  NZL: "Oceania",
}

export function WorldMap() {
  const [hoveredContinent, setHoveredContinent] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [mapData, setMapData] = useState<any>(null)

  useEffect(() => {
    const fetchMapData = async () => {
      try {
        const response = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
        if (!response.ok) {
          throw new Error('Failed to load map data')
        }
        const data = await response.json()
        setMapData(data)
        setIsLoading(false)
      } catch (err) {
        setError('Failed to load map data. Please try again later.')
        setIsLoading(false)
        console.error('Error loading map data:', err)
      }
    }

    fetchMapData()
  }, [])

  return (
    <div className="relative w-full h-[300px] overflow-hidden rounded-lg bg-white p-4">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#3AAFA9]"></div>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80">
          <div className="text-red-500 text-sm">{error}</div>
        </div>
      )}

      {mapData && (
        <div className="w-full h-full">
          <ComposableMap
            projectionConfig={{
              scale: 120,
              center: [0, 40]
            }}
          >
            <ZoomableGroup center={[0, 40]}>
              <Geographies geography={mapData}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const continent = COUNTRY_TO_CONTINENT[geo.properties.ISO_A3]
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => setHoveredContinent(continent)}
                        onMouseLeave={() => setHoveredContinent(null)}
                        style={{
                          default: {
                            fill: continent ? getContinentColor(continent) : "#DEF2F1",
                            stroke: "#2B7A78",
                            strokeWidth: 0.2,
                            outline: "none",
                          },
                          hover: {
                            fill: continent ? getContinentColor(continent, true) : "#DEF2F1",
                            stroke: "#2B7A78",
                            strokeWidth: 0.2,
                          },
                          pressed: {
                            fill: "#17252A",
                            stroke: "#2B7A78",
                            strokeWidth: 0.2,
                          },
                        }}
                      />
                    )
                  })
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
        </div>
      )}
      
      {hoveredContinent && (
        <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-md shadow-md text-sm font-medium text-gray-800">
          {hoveredContinent}
          {CONTINENT_DATA.find((d) => d.continent === hoveredContinent) && (
            <div className="text-xs text-gray-600">
              {CONTINENT_DATA.find((d) => d.continent === hoveredContinent)?.clients} clients
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function getContinentColor(continent: string, isHovered: boolean = false): string {
  const continentInfo = CONTINENT_DATA.find((d) => d.continent === continent)
  if (!continentInfo) return "#DEF2F1"
  
  const opacity = Math.min(continentInfo.clients / 600, 1)
  return isHovered 
    ? `rgba(58, 175, 169, ${opacity + 0.2})`
    : `rgba(58, 175, 169, ${opacity})`
} 