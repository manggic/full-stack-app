import { useEffect, useState } from "react";

import "./App.css";

const apiURL = "http://65.0.138.160:8080/api/message";

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
