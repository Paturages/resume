import type { ResumeData } from "types";

import miko from "assets/images/miko.png";

import location from "assets/icons/location.svg";
import email from "assets/icons/email.svg";
import github from "assets/icons/github.svg";
import website from "assets/icons/website.svg";

import eisti from "assets/images/eisti.png";

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

import ch from "assets/icons/ch.png";
import osu from "assets/icons/osu.svg";
import cheri from "assets/images/cheri.png";

import saegus from "assets/icons/saegus.svg";
import stratumn from "assets/icons/stratumn.png";

const data: ResumeData = {
  footer: {
    url: "https://github.com/Paturages/resume"
  },
  header: {
    name: "Paturages",
    subtitle: "A full stack engineer, and more!",
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
    title: <>
      <div>EISTI (CY Tech)</div>
      <div>Cergy-Pontoise</div>
    </>,
    subtitle: "Master's Degree in Software Engineering"
  },
  skills: {
    legend: "Skills",
    items: [
      [frontend, "Frontend development", "React, Svelte, vanilla JS"],
      [ui, "UI integration", "HTML/CSS, SCSS, atomic design"],
      [backend, "Backend development", "Node.js, PHP, Python"],
      [database, "Database management", "PostgreSQL, SQLite, Redis, MongoDB"],
      [devops, "DevOps", "Docker, Terraform, CircleCI, GitLab CI, GitHub Actions, Linux, AWS"],
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
      [stratumn, "Stratumn", "Full stack software engineer and lead", "Jun 2019 - Feb 2023", [
        ["Trace", "Augmented business process management", <>
          <div>Development and engineering work across the whole stack on a dedicated product</div>
          <div>Feature ownership and planning, R&D</div>
          <div>Product management and knowledge transfer in acquisition context with Sia Partners</div>
          <div><i>TypeScript, React, Node.js, PostgreSQL, Redis, AWS, Terraform</i></div>
          <small>
            <a target="_blank" href="https://stratumn.com">
              https://stratumn.com
            </a>
          </small>
        </>]
      ]],
      [saegus, "saegus", "Full stack web developer, digital consultant", "Oct 2016 - Jun 2019", [
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
    legend: "Personal/volunteer experience",
    items: [
      [osu, "osu!", "One of the most established online rhythm games - 10K+ daily players", "", [
        ["", "", <>
          <div>Tournament management and staffing, streaming (Twitch), content creation (beatmaps)</div>
          <div>Development of tools, scripts and websites/webapps for those tournaments</div>
          <div>(<i>Google App Scripts, Svelte, Node.js</i>)</div>
          <small><a target="_blank" href="https://osu.ppy.sh/users/1375479">https://osu.ppy.sh/users/1375479</a> - </small>
          <small><a target="_blank" href="https://mbs3.fightthe.pw">https://mbs3.fightthe.pw</a></small>
        </>]
      ]],
      [ch, "Clone Hero", "The currently most popular Guitar Hero clone - 100K+ monthly players", "", [
        ["", "", <>
          <div>Design and frontend integration of official website</div>
          <div>(<i>Jekyll, GitLab Pages, SCSS</i>)</div>
          <div>Maintenance of websites, webapps and tools for the content creation community</div>
          <div>(<i>React, Node.js, Ghost, PostgreSQL, Google Drive API</i>)</div>
          <small><a target="_blank" href="https://clonehero.net">https://clonehero.net</a> - </small>
          <small><a target="_blank" href="https://chorus.fightthe.pw">https://chorus.fightthe.pw</a> - </small>
          <small><a target="_blank" href="https://customsongscentral.com">https://customsongscentral.com</a></small>
        </>]
      ]],
      [cheri, "Cheri Lupina", "One of VReverie's online streamers and talents - 60K+ subscribers", "", [
        ["", "", <>
          <div>Community management and moderation (YouTube), talent support</div>
          <div>Deployment and maintenance of third-party helper tools (<i>Python, Node.js</i>)</div>
          <div>Development of tools, scripts and silly other things (<i>Svelte, Node.js</i>)</div>
          <small><a target="_blank" href="https://www.youtube.com/@CheriLupina">https://www.youtube.com/@CheriLupina</a> - </small>
          <small><a target="_blank" href="https://v-reverie.com">https://v-reverie.com</a> - </small>
          <small><a target="_blank" href="https://paturages.github.io/hoi">https://paturages.github.io/hoi</a></small>
        </>]
      ]],
    ]
  }
};

export default data;