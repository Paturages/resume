import type { ReactNode } from "react";
import "./style.scss";

interface BodyLegendProps {
  children: ReactNode;
}

export default ({ children }: BodyLegendProps) => (
  <h2 className="BodyLegend">{children}</h2>
);