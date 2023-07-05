import Input from "./components/Input";
import { useState } from "react";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState([]);

  const handleNames = () => {
    if ((firstName || middleName || lastName).trim() !== "")
      setFullName([...fullName, { firstName, middleName, lastName }]);

    setFirstName("");
    setMiddleName("");
    setLastName("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const styled = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

  const renderedNames = fullName.map((el, ind) => {
    const initials = (
      el.firstName.charAt(0) +
      el.middleName.charAt(0) +
      el.lastName.charAt(0)
    ).toUpperCase();
    return (
      <div key={ind} style={{ display: "flex" }}>
        <div
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "red",
            border: "1px solid black",
            borderRadius: "50%",
            margin: "10px",
            ...styled
          }}
        >
          {initials}
        </div>

        <div style={styled}>
          {el.firstName} {el.middleName} {el.lastName}
        </div>
      </div>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter first name</label>
        <Input value={firstName} onChange={setFirstName} />
        <br />
        <label>Enter middle name</label>
        <Input value={middleName} onChange={setMiddleName} />
        <br />
        <label>Enter last name</label>
        <Input value={lastName} onChange={setLastName} />
        <br />
        <button onClick={handleNames}>Submit</button>
        <br />
      </form>

      {renderedNames}
    </div>
  );
}
