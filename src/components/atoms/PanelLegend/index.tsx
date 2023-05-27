import type { ReactNode } from "react";
import "./style.scss";

interface PanelLegendProps {
  children: ReactNode;
}

export default ({ children }: PanelLegendProps) => (
  <div className="PanelLegend">{children}</div>
);
