import type { FooterSection } from "types";
import "./style.scss";

export default ({ url = "https://github.com/Paturages/resume" }: FooterSection) => (
  <footer className="Footer">
    <div className="Footer__text">The source of this resume can be found at</div>
    <div className="Footer__url"><a target="_blank" href={url}>{url}</a></div>
  </footer>
);
