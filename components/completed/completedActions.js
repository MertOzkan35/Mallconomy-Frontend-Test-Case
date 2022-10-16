import React from "react";
import Navbar from "../navbar";
import { useSelector } from "react-redux";

function CompletedActions() {
  // completedDB data coming from ../store/completedActions and render in this page
  const completedDB = useSelector(
    (state) => state.completedDB.completedActionsDb
  );
  // completedDB data coming from ../store/completedActions and render in this page
  return (
    <div>
      <Navbar />
      <div className="myPoints">
        <div className="myPointsContainer">
          <div className="myPointsHeader">
            <p>Completed actions</p>
          </div>
          {completedDB &&
            completedDB.map((element, key) => {
              return (
                <div key={key} className="myPointsBox">
                  <h1>{element.title}</h1>
                  <p>+{element.point}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default CompletedActions;
