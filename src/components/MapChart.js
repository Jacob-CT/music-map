import React from "react";
import { VectorMap } from "react-jvectormap";
import logo from "../images/katika-logo.png";

const mapData = {};

const handleClick = (e, countryCode) => {
  console.log(countryCode);
  console.log("hello there");
};

const MapChart = () => {
  return (
    <div>
      <VectorMap
        map={"world_mill"}
        backgroundColor="transparent" //change it to ocean blue: #0077be
        zoomOnScroll={true}
        containerStyle={{
          width: "auto",
          height: "75vh",
          marginTop: "-30px",
          paddingTop: "100px",
        }}
        onRegionClick={handleClick} //gets the country code
        containerClassName="map"
        regionStyle={{
          initial: {
            fill: "#AE0D0D",
            "fill-opacity": 0.9,
            stroke: "none",
            "stroke-width": 0,
            "stroke-opacity": 0,
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: "pointer",
            fill: "#2a8b26",
          },
          selected: {
            fill: "#262626", //color for the clicked country
          },
          selectedHover: {
            fill: "#2a8b26",
          },
        }}
        regionsSelectable={true}
        series={{
          regions: [
            {
              values: mapData, //this is your data
              scale: ["#146804", "#ff0000"], //your color game's here
              normalizeFunction: "polynomial",
            },
          ],
        }}
      />
    </div>
  );
};

export default MapChart;
