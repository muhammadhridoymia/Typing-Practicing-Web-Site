import React from "react";
import "./Result.css";
function Result({ wpm, accuracy, incorrect, setShowPopup, Restart }) {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Test Completed 🎉</h2>

        <p>
          WPM: <span>{wpm}</span>
        </p>
        <p>
          Accuracy: <span>{accuracy}%</span>
        </p>
        <p>
          Incorrect: <span>{incorrect}</span>
        </p>
        <button
          onClick={() => {
            setShowPopup(false);
            Restart();
          }}
        >
          Restart Test
        </button>
      </div>
    </div>
  );
}

export default Result;
