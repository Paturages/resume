import type { ProjectItem } from "types";
import "./style.scss";

import saegus from "assets/icons/saegus.svg";

interface ExperienceItemProps {
  icon: string;
  company: string;
  subtitle: string;
  period: string;
  subitems: ProjectItem[];
}

export default ({
  icon = saegus,
  company = "saegus",
  subtitle = "Web development and digital consulting",
  period = "Oct 2016 - ongoing",
  subitems = [
    ["saegus factory", "Where design and tech meet and combine", <>
      <div>Technical lead and full stack development</div>
      <div>Collaboration with UI and UX designers</div>
      <small>
        <a target="_blank" href="https://saegus.com/en/offers/#skillsCenter">
          https://saegus.com/en/offers/#skillsCenter
        </a>
      </small>
    </>],
    ["Foreseeds", "A digitalized design thinking platform", <>
      <div>Web application full-stack development</div>
      <div>Maintenance and support</div>
      <div>Node.js, AngularJS, socket.io, PostgreSQL, Redis, AWS</div>
      <small><a target="_blank" href="https://foreseeds.com">https://foreseeds.com</a></small>
    </>],
    ["Mutualize", "Digitalizing the insurance subscription experience", <>
      <div>Mobile-first web application full-stack development</div>
      <div>Setup, deployment and maintenance of Raspberry Pi environment</div>
      <div>Node.js, React, socket.io, MongoDB, Redis</div>
    </>]
  ]
}: ExperienceItemProps) => <div className="ExperienceItem">
  <div className="ExperienceItem__company">
    <div className="ExperienceItem__icon" style={{
      backgroundImage: `url(${icon})`
    }} />
    <div className="ExperienceItem__label">
      <h3 className="ExperienceItem__title">{company}</h3>
      <div className="ExperienceItem__subtitle">{subtitle}</div>
    </div>
    <div className="ExperienceItem__period">
      {period}
    </div>
  </div>
  <div className="ExperienceItem__subitems">
    {subitems.map(([
      project, projectSubtitle, description
    ]) => <div className="ExperienceItem__subitem">
      <div className="ExperienceItem__project">
        <h4 className="ExperienceItem__project-title">{project}</h4>
        <div className="ExperienceItem__project-subtitle">{projectSubtitle}</div>
      </div>
      <div className="ExperienceItem__description">
        {description}
      </div>
    </div>)}
  </div>
</div>;