import React from "react";

import Legend from "~components/atoms/PanelLegend";

import "./style.scss";

export default ({
  legend = "Contact",
  items = []
}) => <div className="Contact">
  <Legend>{legend}</Legend>
  <div className="Contact__items">
    {items.map(([icon, label]) => <div className="Contact__item">
      <div className="Contact__icon" style={{
        backgroundImage: `url(${icon})`
      }} />
      <div className="Contact__label">{label}</div>
    </div>)}
  </div>
</div>