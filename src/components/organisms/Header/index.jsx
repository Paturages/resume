import React from "react";

import "./style.scss";

export default ({
  name = "Somename LASTNAME",
  subtitle = "Some catchy subtitle",
  picture = ""
}) => <header className="Header">
  <div className="Header__title">
    <div className="Header__picture" style={{
      backgroundImage: `url(${picture})`
    }} />
    <h1 className="Header__name">{name}</h1>
  </div>
  <div className="Header__subtitle">
    {subtitle}
  </div>
</header>;
