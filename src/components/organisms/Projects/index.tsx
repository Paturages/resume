import type { ProjectSection } from "types";
import BodyLegend from "components/atoms/BodyLegend";
import ExperienceItem from "components/molecules/ExperienceItem";

import "./style.scss";

export default ({
  legend = "Professional experience",
  items = []
}: ProjectSection) => <div className="Projects">
  <BodyLegend>{legend}</BodyLegend>
  <div className="Projects__items">
    {items.map(([icon, company, subtitle, period, subitems]) => <ExperienceItem
      icon={icon}
      company={company}
      subtitle={subtitle}
      period={period}
      subitems={subitems}
    />)}
  </div>
</div>;