import React from "react";

import "./styles.css";

import MapMusicContainer from "./components/MapMusicContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <MapMusicContainer />
      <Footer />
    </div>
  );
}

export default App;
