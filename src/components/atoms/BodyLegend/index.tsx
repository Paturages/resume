import type { ReactNode } from "react";
import "./style.scss";

interface BodyLegendProps {
  children: ReactNode;
}

export default ({ children }: BodyLegendProps) => (
  <div className="BodyLegend">{children}</div>
);