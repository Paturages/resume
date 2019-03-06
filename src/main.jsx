import { hot } from 'react-hot-loader';
import React from "react";
import ReactDOM from "react-dom";

import "~scss/base.scss";

import Header from "~components/organisms/Header";
import Contact from "~components/organisms/Contact";
import Education from "~components/organisms/Education";
import Skills from "~components/organisms/Skills";

import Projects from "~components/organisms/Projects";

import data from "~data/public.en";
// import data from "~data/professional.fr";

const App = ({
  header,
  contact,
  education,
  skills,
  extra,
  languages,
  industry,
  personal
}) => <div className="App">
  <Header {...header} />
  <div className="App__body">
    <div className="App__panel">
      <Contact {...contact} />
      <Education {...education} />
      <Skills {...skills} />
      <Skills {...extra} />
      <Skills {...languages} />
    </div>
    <div className="App__content">
      <Projects {...industry} />
      <Projects {...personal} />
    </div>
  </div>
</div>;

ReactDOM.render(<App {...data} />, document.getElementById("root"));

export default hot(module)(App);