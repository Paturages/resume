import type { ReactNode } from "react";
import "./style.scss";

interface PanelLegendProps {
  children: ReactNode;
}

export default ({ children }: PanelLegendProps) => (
  <h2 className="PanelLegend">{children}</h2>
);
