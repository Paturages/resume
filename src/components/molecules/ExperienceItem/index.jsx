import React from "react";

import "./style.scss";

import saegus from "~assets/icons/saegus.svg";

export default ({
  icon = saegus,
  company = "saegus",
  subtitle = "Web development and digital consulting",
  period = "Oct 2016 - ongoing",
  subitems = [
    ["saegus factory", "Where design and tech meet and combine", <React.Fragment>
      <div>Technical lead and full stack development</div>
      <div>Collaboration with UI and UX designers</div>
      <small>
        <a target="_blank" href="https://saegus.com/en/offers/#skillsCenter">
          https://saegus.com/en/offers/#skillsCenter
        </a>
      </small>
    </React.Fragment>],
    ["Foreseeds", "A digitalized design thinking platform", <React.Fragment>
      <div>Web application full-stack development</div>
      <div>Maintenance and support</div>
      <div>Node.js, AngularJS, socket.io, PostgreSQL, Redis, AWS</div>
      <small><a target="_blank" href="https://foreseeds.com">https://foreseeds.com</a></small>
    </React.Fragment>],
    ["Mutualize", "Digitalizing the insurance subscription experience", <React.Fragment>
      <div>Mobile-first web application full-stack development</div>
      <div>Setup, deployment and maintenance of Raspberry Pi environment</div>
      <div>Node.js, React, socket.io, MongoDB, Redis</div>
    </React.Fragment>]
  ]
}) => <div className="ExperienceItem">
  <div className="ExperienceItem__company">
    <div className="ExperienceItem__icon" style={{
      backgroundImage: `url(${icon})`
    }} />
    <div className="ExperienceItem__label">
      <div className="ExperienceItem__title">{company}</div>
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
        <div className="ExperienceItem__project-title">{project}</div>
        <div className="ExperienceItem__project-subtitle">{projectSubtitle}</div>
      </div>
      <div className="ExperienceItem__description">
        {description}
      </div>
    </div>)}
  </div>
</div>;