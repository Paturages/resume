import type { ResumeData } from "types";

import Header from "./components/organisms/Header";
import Contact from "./components/organisms/Contact";
import Education from "./components/organisms/Education";
import Skills from "./components/organisms/Skills";
import Projects from "./components/organisms/Projects";
import Footer from "./components/organisms/Footer";

import './App.scss';

const App = ({
  header,
  footer,
  contact,
  education,
  skills,
  extra,
  languages,
  industry,
  personal,
}: ResumeData) => (
  <div className="App">
    <Header {...header} />
    <div className="App__body">
      <div className="App__panel">
        <Contact {...contact} />
        <Education {...education} />
        <Skills {...skills} />
        <Skills {...extra} />
        <Skills {...languages} />
        <div className="App__panel-filler" />
        <Footer {...footer} />
      </div>
      <div className="App__content">
        <Projects {...industry} />
        <Projects {...personal} />
      </div>
    </div>
  </div>
);

export default App;
