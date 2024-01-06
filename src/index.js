import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="jay.jpg" alt="jay"></img>
}

function Intro() {
  return <p>I am a dedicated Master Trainer at Edunet Foundation with a profound passion for teaching and empowering individuals to excel in Full Stack Web Development.</p>
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML & CSS" color="#1abc9c" />
      <Skill skill="JavaScript" color="#e67e22" />
      <Skill skill="ReactJS" color="#3498db" />
      <Skill skill="NodeJS" color="#27ae60" />
      <Skill skill="Express" color="#e74c3c" />
      <Skill skill="MongoDB" color="#8e44ad" />
    </div>
  )
}

function Skill(props) {
  const style = {
    backgroundColor: props.color
  }
  return <p className="skill" style={style}>{props.skill}</p>
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
