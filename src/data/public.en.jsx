import React from "react";

import kaguya from "~assets/images/kaguya.png";

import location from "~assets/icons/location.svg";
import email from "~assets/icons/email.svg";
import github from "~assets/icons/github.svg";
import website from "~assets/icons/website.svg";

import eisti from "~assets/images/eisti.png";

import frontend from "~assets/icons/frontend.svg";
import ui from "~assets/icons/ui.svg";
import backend from "~assets/icons/backend.svg";
import database from "~assets/icons/database.svg";
import devops from "~assets/icons/devops.svg";
import project from "~assets/icons/project.svg";

import javascript from "~assets/icons/javascript.svg";
import desktop from "~assets/icons/desktop.svg";
import build from "~assets/icons/build.svg";

import france from "~assets/icons/france.svg";
import usa from "~assets/icons/usa.svg";
import germany from "~assets/icons/germany.svg";
import vietnam from "~assets/icons/vietnam.svg";

import chorus from "~assets/icons/chorus.png";
import ch from "~assets/icons/ch.png";
import fightthepw from "~assets/icons/fightthepw.png";

import saegus from "~assets/icons/saegus.svg";
import ibm from "~assets/icons/ibm.png";

export default {
  header: {
    name: "Paturages",
    subtitle: "A full-stack web developer, and more!",
    picture: kaguya
  },
  contact: {
    legend: "Contact",
    items: [
      [location, "Paris, France"],
      [email, "contact@fightthe.pw"],
      [github, <a target="_blank" href="https://github.com/Paturages">
        https://github.com/Paturages
      </a>],
      [website, <a target="_blank" href="https://fightthe.pw">https://fightthe.pw</a>],
    ]
  },
  education: {
    legend: "Education",
    logo: eisti,
    year: "2011 - 2016",
    title: "EISTI, Cergy-Pontoise",
    subtitle: "Master's Degree in Software Engineering"
  },
  skills: {
    legend: "Skills",
    items: [
      [frontend, "Frontend development", "React, Angular, AngularJS, Vue, vanilla JS"],
      [ui, "UI integration", "HTML/CSS, SCSS, Bootstrap, atomic design, grids"],
      [backend, "Backend development", "Node.js, PHP, Python"],
      [database, "Database management", "PostgreSQL, Redis, MongoDB, MySQL, SQLite"],
      [devops, "DevOps", "Docker, CircleCI, GitLab CI, Linux, AWS Elastic Beanstalk"],
      [project, "Project management", "Agile (Scrum), Trello, JIRA, GitHub, GitLab"],
    ]
  },
  extra: {
    legend: "Extra",
    items: [
      [javascript, "JavaScript", "ES2015+, TypeScript"],
      [desktop, "Desktop utilities", "Electron, @zeit/pkg, bash"],
      [build, "Project utilities", "webpack, parcel, gulp, git, prettier, yeoman"]
    ]
  },
  languages: {
    legend: "Languages",
    items: [
      [france, "French", "Native"],
      [usa, "English", "Fluent"],
      [germany, "German", "Basic"],
      [vietnam, "Vietnamese", "Basic"],
    ]
  },

  industry: {
    legend: "Professional experience",
    items: [
      [saegus, "saegus", "Web development and digital consulting", "Oct 2016 - ongoing", [
        ["saegus factory", "Where design and tech meet and combine", <React.Fragment>
          <div>Technical lead and full stack development</div>
          <div>Collaboration with UI and UX designers</div>
          <div><i>Node.js, React, Vue, Storybook, Zeplin/Invision</i></div>
          <small>
            <a target="_blank" href="https://saegus.com/en/offers/#skillsCenter">
              https://saegus.com/en/offers/#skillsCenter
            </a>
          </small>
        </React.Fragment>],
        ["Foreseeds", "A digitalized design thinking platform", <React.Fragment>
          <div>Web application full-stack development</div>
          <div>Maintenance and support</div>
          <div><i>Node.js, AngularJS, socket.io, PostgreSQL, Redis, AWS</i></div>
          <small><a target="_blank" href="https://foreseeds.com">https://foreseeds.com</a></small>
        </React.Fragment>],
        ["Mutualize", "Digitalizing the insurance subscription experience", <React.Fragment>
          <div>Mobile-first web application full-stack development</div>
          <div>Setup, deployment and maintenance of Raspberry Pi environment</div>
          <div><i>Node.js, React, socket.io, MongoDB, Redis</i></div>
        </React.Fragment>]
      ]],
      [ibm, "IBM", "Internship", "Apr 2015 - Sept 2015", [
        ["Business Intelligence Application", "Strategic analysis of a support team", <React.Fragment>
          <div>Web application conception, design and full-stack development</div>
          <div><i>PHP, AngularJS, Materialize, MySQL</i></div>
        </React.Fragment>]
      ]]
    ]
  },
  personal: {
    legend: "Personal projects",
    items: [
      [chorus, "chorus", "Clone Hero-friendly Organized Repository of User-provided Songs", "", [
        ["", "", <React.Fragment>
          <div>Draft, proof-of-concept and web application full-stack development</div>
          <div>Maintenance of Linux server</div>
          <div><i>Node.js, React, PostgreSQL, Google Drive API, DigitalOcean droplets</i></div>
          <small><a target="_blank" href="https://chorus.fightthe.pw">https://chorus.fightthe.pw</a></small>
        </React.Fragment>]
      ]],
      [ch, "Clone Hero", "Official website", "", [
        ["", "", <React.Fragment>
          <div>Refactoring, redesign and frontend integration</div>
          <div><i>Jekyll, GitLab Pages, SCSS</i></div>
          <small><a target="_blank" href="https://clonehero.net">https://clonehero.net</a></small>
        </React.Fragment>]
      ]],
      [fightthepw, "fightthe.pw", "Personal website", "", [
        ["", "", <React.Fragment>
          <div>Design and frontend integration</div>
          <div><i>Jekyll, GitHub Pages, SCSS</i></div>
          <small><a target="_blank" href="https://fightthe.pw">https://fightthe.pw</a></small>
        </React.Fragment>]
      ]],
    ]
  }
};