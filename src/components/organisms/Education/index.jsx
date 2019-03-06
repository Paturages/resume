import React from "react";

import Legend from "~components/atoms/PanelLegend";

import "./style.scss";

export default ({
  legend = "Education",
  logo = "",
  year = "20XX - 20XX",
  title = "Something, Somewhere",
  subtitle = "It's a diploma about something"
}) => <div className="Education">
  <Legend>{legend}</Legend>
  <div className="Education__header">
    <div className="Education__logo">
      <img alt="" src={logo} />
    </div>
    <div className="Education__header-label">
      <div className="Education__title">
        {title}
      </div>
      <div className="Education__year">{year}</div>
    </div>
  </div>
  <div className="Education__body">
    <div className="Education__subtitle">{subtitle}</div>
  </div>
</div>;