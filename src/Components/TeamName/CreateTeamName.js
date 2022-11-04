import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./CreateTeamName.css";

function CreateTeamName() {
  const [teamName, setTeamName] = useState("");

  const handleSubmit = (event) => {
    // let myTeam = document.getElementById("myText").value;
    event.preventDefault();
    // <h3>`Hello ${teamName}`</h3>;
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="teamName">
        <label>
          Team:
          <input
            type="text"
            // id="myText"
            // required
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
          <input type="submit" />
        </label>
      </form>
      <div className="teamName">
        <h3>{`${teamName}`}</h3>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CreateTeamName />);

export default CreateTeamName;
