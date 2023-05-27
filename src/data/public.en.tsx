import type { ResumeData } from "types";

import miko from "assets/images/miko.png";

import location from "assets/icons/location.svg";
import email from "assets/icons/email.svg";
import github from "assets/icons/github.svg";
import website from "assets/icons/website.svg";

import eisti from "assets/images/eisti.png";
import mbs3 from "assets/images/mbs3.png";

import frontend from "assets/icons/frontend.svg";
import ui from "assets/icons/ui.svg";
import backend from "assets/icons/backend.svg";
import database from "assets/icons/database.svg";
import devops from "assets/icons/devops.svg";
import project from "assets/icons/project.svg";

import javascript from "assets/icons/javascript.svg";
import desktop from "assets/icons/desktop.svg";
import build from "assets/icons/build.svg";

import france from "assets/icons/france.svg";
import usa from "assets/icons/usa.svg";
import germany from "assets/icons/germany.svg";
import vietnam from "assets/icons/vietnam.svg";

import chorus from "assets/icons/chorus.png";
import ch from "assets/icons/ch.png";

import saegus from "assets/icons/saegus.svg";
import stratumn from "assets/icons/stratumn.png";

const data: ResumeData = {
  footer: {
    url: "https://github.com/Paturages/resume"
  },
  header: {
    name: "Paturages",
    subtitle: "A full-stack web developer, and more!",
    picture: miko
  },
  contact: {
    legend: "Contact",
    items: [
      [location, "Paris area, France"],
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
      [frontend, "Frontend development", "React, Svelte, vanilla JS"],
      [ui, "UI integration", "HTML/CSS, SCSS, atomic design"],
      [backend, "Backend development", "Node.js, PHP, Python"],
      [database, "Database management", "PostgreSQL, SQLite, Redis, MongoDB"],
      [devops, "DevOps", "Docker, Terraform, CircleCI, GitLab CI, GitHub Actions, Linux, AWS"],
      [project, "Project management", "Agile (Scrum), Trello, JIRA, GitHub, GitLab"],
    ]
  },
  extra: {
    legend: "Extra",
    items: [
      [javascript, "JavaScript", "TypeScript, ESNext"],
      [desktop, "Desktop utilities", "Electron, bash/Node.js scripts"],
      [build, "Project utilities", "vite, webpack, babel, git"]
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
      [stratumn, "Stratumn", "Software engineer, product leader", "Jun 2019 - Feb 2023", [
        ["Trace", "Augmented business process management", <>
          <div>Lead development and engineering work across the whole stack on a dedicated product</div>
          <div>Feature ownership and deep diving working with Agile methodology, R&D</div>
          <div>Product management and knowledge transfer in acquisition context with Sia Partners</div>
          <div><i>TypeScript, React, Node.js, PostgreSQL, Redis, AWS, Terraform</i></div>
          <small>
            <a target="_blank" href="https://stratumn.com">
              https://stratumn.com
            </a>
          </small>
        </>]
      ]],
      [saegus, "saegus", "Web developer, digital consultant", "Oct 2016 - Jun 2019", [
        ["saegus factory", "Where design and tech meet and combine", <>
          <div>Technical lead and full stack development</div>
          <div>Collaboration with UI and UX designers</div>
          <div><i>Node.js, PHP, React, Vue, Storybook, Zeplin/Invision</i></div>
          <small>
            <a target="_blank" href="https://saegus.com">
              https://saegus.com
            </a>
          </small>
        </>],
        ["Foreseeds", "A digitalized design thinking platform", <>
          <div>Web application full-stack development</div>
          <div>Maintenance and support</div>
          <div><i>Node.js, AngularJS, socket.io, PostgreSQL, Redis, AWS</i></div>
          <small><a target="_blank" href="https://foreseeds.com">https://foreseeds.com</a></small>
        </>],
      ]],
    ]
  },
  personal: {
    legend: "Personal projects",
    items: [
      [mbs3, "Mania Beginner's Showdown 3", "International online gaming tournament", "", [
        ["", "", <>
          <div>Web application full-stack development</div>
          <div>Maintenance of Linux server</div>
          <div><i>Svelte, Node.js, GitHub Pages, Directus</i></div>
          <small><a target="_blank" href="https://mbs3.fightthe.pw">https://mbs3.fightthe.pw</a></small><br />
          <small><a target="_blank" href="https://github.com/Paturages/mbs3">https://github.com/Paturages/mbs3</a></small>
        </>]
      ]],
      [chorus, "chorus", "Centralized repository of user-created content for Clone Hero", "", [
        ["", "", <>
          <div>Draft, proof-of-concept and web application full-stack development</div>
          <div>Maintenance of Linux server</div>
          <div><i>Node.js, React, PostgreSQL, Google Drive API</i></div>
          <small><a target="_blank" href="https://chorus.fightthe.pw">https://chorus.fightthe.pw</a></small><br />
          <small><a target="_blank" href="https://github.com/Paturages/chorus">https://github.com/Paturages/chorus</a></small>
        </>]
      ]],
      [ch, "Clone Hero", "Official website", "", [
        ["", "", <>
          <div>Refactoring, redesign and frontend integration</div>
          <div><i>Jekyll, GitLab Pages, SCSS</i></div>
          <small><a target="_blank" href="https://clonehero.net">https://clonehero.net</a></small>
        </>]
      ]],
    ]
  }
};

export default data;