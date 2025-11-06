import { useEffect, useState } from "react";

import "./App.css";

const apiURL = "http://localhost:4000/api/message";

function App() {
  const [message, setMessage] = useState(0);

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((res) => setMessage(res.message))
      .catch((err) => console.log(err));
  });
  return (
    <>
      <h1>Welcome to chai aur code</h1>
      <p>{`message : ${message}`}</p>
    </>
  );
}

export default App;
