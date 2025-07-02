import { useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';

// Define the type for state stats
interface StateStats {
      [key: string]: {
            cases: number;
      };
}

const CaseStats = () => {
      const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

      // State stats object with type safety
      const stateStats: StateStats = {
            Texas: { cases: 10 },
            Mississippi: { cases: 15 },
            Alabama: { cases: 20 },
            Georgia: { cases: 25 },
      };

      const [selectedState, setSelectedState] = useState<string | null>(null);

      const handleStateClick = (geo: any) => {
            const stateName = geo.properties.name;
            setSelectedState((prev) => (prev === stateName ? null : stateName));
      };

      return (
            <div className="flex relative justify-center items-center w-full h-full rounded-xl border">
                  {selectedState && stateStats[selectedState] && (
                        <div className="absolute bottom-10 left-[20%] p-4 bg-white rounded-md transform -translate-x-1/2 shadow-lg">
                              <p className="text-lg font-semibold">{selectedState}</p>
                              <p className="text-sm">Cases: {stateStats[selectedState].cases}</p>
                        </div>
                  )}
                  <div className="w-full h-[40vh]">
                        <ComposableMap
                              projection="geoMercator"
                              projectionConfig={{
                                    scale: 1300,
                                    center: [-92, 30],
                              }}
                              style={{
                                    width: '100%',
                                    height: '100%',
                              }}
                        >
                              <ZoomableGroup>
                                    <Geographies geography={geoUrl}>
                                          {({ geographies }) =>
                                                geographies
                                                      .filter((geo) => stateStats.hasOwnProperty(geo.properties.name)) // Filter only states in stateStats
                                                      .map((geo) => {
                                                            const stateName = geo.properties.name;
                                                            const isSelected = selectedState === stateName;
                                                            return (
                                                                  <Geography
                                                                        key={geo.rsmKey}
                                                                        geography={geo}
                                                                        onClick={() => handleStateClick(geo)}
                                                                        style={{
                                                                              default: {
                                                                                    fill: isSelected
                                                                                          ? '#75CFF0'
                                                                                          : 'green',
                                                                                    outline: 'none',
                                                                                    stroke: 'none',
                                                                              },
                                                                              hover: {
                                                                                    fill: '#75CFF0',
                                                                                    outline: 'none',
                                                                                    stroke: 'none',
                                                                              },
                                                                              pressed: {
                                                                                    fill: '#FF5722',
                                                                                    outline: 'none',
                                                                                    stroke: 'none',
                                                                              },
                                                                        }}
                                                                  />
                                                            );
                                                      })
                                          }
                                    </Geographies>
                              </ZoomableGroup>
                        </ComposableMap>
                  </div>
            </div>
      );
};

export default CaseStats;
