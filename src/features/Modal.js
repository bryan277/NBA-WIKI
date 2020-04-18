import React from "react";
import { getFancyDate } from "../utils/utils";

const Modal = ({ hideModal, show, gamesData }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  console.log("modal data is ", gamesData);
  return (
    <div className={showHideClassName}>
      {gamesData !== null && (
        <section className="modal-main">
          <h1 className="modal-heading">Game Description</h1>
          <h4 className="modal-date-time">
            {getFancyDate(gamesData.date)}
            {" ("}
            {gamesData.status}
            {")"}
          </h4>
          <div className="modal-data-view">
            <div className="width50">
              <div className="modal-team-description">
                <h2 className="font-questrial">Home Team</h2>
                <div>
                  <p className="font-questrial">
                    {gamesData.home_team.full_name} {"("}
                    {gamesData.home_team.abbreviation}
                    {")"}
                  </p>
                  <p className="font-questrial">
                    <span className="bold">City :</span>{" "}
                    {gamesData.home_team.city}
                  </p>
                  <p className="font-questrial">
                    <span className="bold">Conference :</span>{" "}
                    {gamesData.home_team.conference}
                  </p>
                  <p className="font-questrial">
                    <span className="bold">Division :</span>{" "}
                    {gamesData.home_team.division}
                  </p>
                  <p className="font-questrial">
                    <span className="bold">Home Team Score :</span>{" "}
                    {gamesData.home_team_score}
                  </p>
                </div>
              </div>
            </div>
            <div className="width50">
              <div className="modal-team-description">
                <h2 className="font-questrial">Visitor Team</h2>
                <div>
                  <p className="font-questrial">
                    {gamesData.visitor_team.full_name} {"("}
                    {gamesData.visitor_team.abbreviation}
                    {")"}
                  </p>
                  <p className="font-questrial">
                    <span className="bold">City :</span>{" "}
                    {gamesData.visitor_team.city}
                  </p>
                  <p className="font-questrial">
                    <span className="bold">Conference :</span>{" "}
                    {gamesData.visitor_team.conference}
                  </p>
                  <p className="font-questrial">
                    <span className="bold">Division :</span>{" "}
                    {gamesData.visitor_team.division}
                  </p>
                  <p className="font-questrial">
                    <span className="bold">Visitor Team Score :</span>{" "}
                    {gamesData.visitor_team_score}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button onClick={hideModal} className="close-btn">
            Close
          </button>
        </section>
      )}
    </div>
  );
};

export default Modal;
