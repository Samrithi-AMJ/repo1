import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import R2Component from "./r2/r2.jsx";
function App() {
  const [count, setCount] = useState(0);

  return <R2Component />;
}

export default App;
