import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Result from "../Components/Popup/Result";
import "./Home.css";
import englishParagraphs from "../../data/English";
import banglaParagraphs from "../../data/Bangla";
import chineseParagraphs from "../../data/Chinese";
import koreanParagraphs from "../../data/Korean";

function Home() {

  const [text,setText] = useState('')
  const [showPopup, setShowPopup] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [incorrect, setIncorrect] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);


  const handleLanguageChange = (e) => {
  const language = e.target.value;

  let selectedParagraphs = [];

  if (language === "Bangla") {
    selectedParagraphs = banglaParagraphs;
  } 
  else if (language === "English") {
    selectedParagraphs = englishParagraphs;
  } 
  else if (language === "Chinese") {
    selectedParagraphs = chineseParagraphs;
  } 
  else if (language === "Korean") {
    selectedParagraphs = koreanParagraphs;
  }

  const randomText =
    selectedParagraphs[Math.floor(Math.random() * selectedParagraphs.length)];

  setText(randomText);
};

  const handleTyping = (e) => {
    if (!isStarted) setIsStarted(true);
    setTypedText(e.target.value);
   };

  // Incorrect count
  useEffect(() => {
    let incorrectCount = 0;
    typedText.split("").forEach((char, index) => {
      if (char !== text[index]) {
        incorrectCount++;
      }
    });
    setIncorrect(incorrectCount);
  }, [typedText, text]);

  // Start time
  useEffect(() => {
    let timer;
    if (isStarted && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
        calculateResults();
      }, 1000);
    } else if (timeLeft === 0) {
      calculateResults();
      setShowPopup(true)
    }
    if (typedText.length === text.length) {
      setIsStarted(false)
      setShowPopup(true)
    }
    return () => clearTimeout(timer);
  }, [isStarted, timeLeft]);

  const calculateResults = () => {
    // Calculate WPM
    const wordsTyped = typedText.length / 5;
    setWpm(Math.round(wordsTyped));

    // Calculate Accuracy
    let correctChars = 0;
    typedText.split("").forEach((char, index) => {
      if (char === text[index]) correctChars++;
    });
    const acc =
      typedText.length > 0 ? (correctChars / typedText.length) * 100 : 0;
    setAccuracy(Math.round(acc));
  };

  // Reset
  const Restart = () => {
    setTypedText("");
    setTimeLeft(60);
    setIsStarted(false);
    setIncorrect(0); 
    setWpm(0);
    setAccuracy(0);
  };

  return (
    <>
    {showPopup?<Result wpm={wpm} accuracy={accuracy} incorrect={incorrect} setShowPopup={setShowPopup} Restart={Restart}/>:""}
      <NavBar />
      <div className="home-container">
        <div className="left-box">
          <div className="result-box">
            <div className="result">Live Typing Score:</div>
            <div className="result">WPM: {wpm}</div>
            <div className="result">Accuracy: {accuracy}%</div>
            <div className="result">Incorrect: {incorrect}</div>
            <div className="result">Time: {timeLeft}s</div>
          </div>
          <div className="text-box">
            <div className="text-container">
              <span className="text">
                {text.split("").map((char, index) => {
                  let color = "plaintext";
                  if (index < typedText.length) {
                    color = char === typedText[index] ? "correct" : "incorrect";
                  }
                  return (
                    <span key={index} className={color}>
                      {char}
                    </span>
                  );
                })}
              </span>
              <div className="text-area">
                <textarea
                  className="text-input"
                  placeholder="Start typing here..."
                  value={typedText}
                  onChange={handleTyping}
                  disabled={timeLeft === 0 || typedText.length===text.length}
                />
                <button className="start-button" onClick={Restart}>
                  Restart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="right-box">
          <div className="language">
            <select className="language-select" onChange={handleLanguageChange}>
              <option value="English">English</option>
              <option value="Bangla">Bangla</option>
              <option value="Chinese">Chinese</option>
               <option value="Korean">Korean</option>

            </select>
          </div>
          <div className="Test-Duration">
            <div>Time Duration:</div>
            <button onClick={() => setTimeLeft(5)}>0:05</button>
            <button onClick={() => setTimeLeft(10)}>0:10</button>
            <button onClick={() => setTimeLeft(20)}>0:20</button>
            <button onClick={() => setTimeLeft(30)}>0:30</button>
            <button onClick={() => setTimeLeft(60)}>1:00</button>
            <button onClick={() => setTimeLeft(60 * 3)}>3:00</button>
            <button onClick={() => setTimeLeft(60 * 6)}>6:00</button>

          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
