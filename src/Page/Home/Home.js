import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import "./Home.css";

function Home() {
  const paragraphs = [
    "The internet has changed the way people communicate across the world.",
    "Practice typing every day to improve your typing speed and accuracy.",
    "Learning new skills requires patience consistency and curiosity.",
    "Technology continues to shape the future of education and work.",
  ];

  return (
    <>
    <NavBar />
    <div className="home-container">
      <div className="left-box">
        <div className="result-box">
          <div className="result">Typing Test:</div>
          <div className="result">WPM: 0</div>
          <div className="result">Accuracy: 0%</div>
          <div className="result">Time: 0s</div>
        </div>
        <div className="text-box">
          <div className="text-container">
            <span className="text">
              The internet has changed the way people communicate across
              world When you imagine posting your project on LinkedIn…When you imagine posting your project on LinkedIn…When you imagine posting your project on LinkedIn…When you imagine posting your project on LinkedIn…When you imagine posting your project on LinkedIn…When you imagine posting your project on LinkedIn When you imagine posting your project on LinkedIn…When you imagine posting your project on LinkedIn…When you imagine posting your project on LinkedI When you imagine posting your project on LinkedIn…When you imagine posting your project on LinkedIn…When you imagine posting your project on LinkedIn
            </span>
            <div className="text-area">
                <textarea className="text-input" placeholder="Start typing here..." />
                <button className="start-button">Restart</button>
            </div>
          </div>
        </div>
      </div>
      <div className="right-box">
        <div className="language">
        <select className="language-select">
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
        </select>
      </div>
      <div className="Test-Duration">
        <div>Test Duration:</div>
        <button>0:30 </button>
        <button>1:00 </button>
        <button>3:00 </button>
        <button>5:00 </button>
        <button>10:00 </button>
      </div>
      <div className="layout">
        <div>Layout:</div>
        <input type="radio" id="layout1" name="layout" value="layout1" />
        <label htmlFor="layout1">Typeing Box</label>
        <input type="radio" id="layout2" name="layout" value="layout2" />
        <label htmlFor="layout2">Numbers</label>
        <input type="radio" id="layout3" name="layout" value="layout3" />
        <label htmlFor="layout3">Punctuation</label>
      </div>
      </div>
    </div>
    </>
  );
}


export default Home;
