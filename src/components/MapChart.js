import React, { memo, useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = (num) => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

const colorScale = scaleLinear()
  .domain([0.29, 0.68])
  .range(["#03041e", "#d00000"]);

function handleClick(e) {
  console.log("that tickles");
}

const MapChart = ({ setTooltipContent }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv(`/vulnerability.csv`).then((data) => {
      setData(data);
    });
  }, []);

  return (
    <>
      <ComposableMap
        data-tip=''
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 200,
        }}
      >
        <ZoomableGroup>
          <Sphere stroke='#E4E5E6' strokeWidth={0.5} />
          <Graticule stroke='#E4E5E6' strokeWidth={0.5} />
          {data.length > 0 && (
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const d = data.find((s) => s.ISO3 === geo.properties.ISO_A3);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => {
                        const { NAME, POP_EST } = geo.properties;
                        setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                      }}
                      onMouseLeave={() => {
                        setTooltipContent("");
                      }}
                      // onClick={() => {
                      //
                      // }}
                      style={{
                        default: {
                          fill: d ? colorScale(d["2017"]) : "#4a4e69",
                          outline: "none",
                        },
                        hover: {
                          fill: "#d00000",
                          outline: "none",
                        },
                        pressed: {
                          fill: "#ffba08",
                          outline: "none",
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          )}
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
