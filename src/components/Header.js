import React from "react";
import "../images/katika-logo.png";

const Header = () => {
  return (
    <div class="header">
      <a>
        <img
          src={require("../images/katika-logo.png")}
          alt="katika logo"
          width="200px"
          height="auto"
        />
      </a>
    </div>
  );
};

export default Header;
