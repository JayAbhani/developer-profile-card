import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="jay.jpg" alt="jay"></img>
}

function Intro() {
  return (
    <div>
      <h1>Jay Abhani</h1>
      <p>I am a dedicated Master Trainer at Edunet Foundation with a profound passion for teaching and empowering individuals to excel in Full Stack Web Development.</p>
    </div>
  )
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML & CSS" color="#1abc9c" emoji="💪" />
      <Skill skill="JavaScript" color="#e67e22" emoji="💪" />
      <Skill skill="ReactJS" color="#3498db" emoji="💪" />
      <Skill skill="NodeJS" color="#27ae60" emoji="👍" />
      <Skill skill="Express" color="#e74c3c" emoji="👍" />
      <Skill skill="MongoDB" color="#8e44ad" emoji="🙂" />
    </div>
  )
}

function Skill(props) {
  const style = {
    backgroundColor: props.color
  }
  return (
    <div className="skill" style={style}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
