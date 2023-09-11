import type { SkillSection } from "types";
import Legend from "components/atoms/PanelLegend";

import "./style.scss";

export default ({
  legend = "Skills",
  items = []
}: SkillSection) => <div className="Skills">
  <Legend>{legend}</Legend>
  <div className="Skills__items">
    {items.map(([icon, title, subtitle]) => <div className="Skills__item">
      <div className="Skills__icon" style={{
        backgroundImage: `url(${icon})`
      }} />
      <div className="Skills__label">
        <h3 className="Skills__title">{title}</h3>
        <div className="Skills__subtitle">{subtitle}</div>
      </div>
    </div>)}
  </div>
</div>;