import "./styles.css";
import { useState } from "react";
import Header from "./media/Header.png";
import Trap from "./components/Trap";
import Center from "./components/Center";
import Button from "./components/Button";
export default function App() {
  const [trapOn, setTrapOn] = useState<boolean>(false);
  const [time, setTime] = useState<number>(100000);
  const [vis, setVis] = useState<boolean>(true);

  return (
    <div className="App">
      <img className="Header" src={Header} alt="banner" />
      <Center
        vis={vis}
        setVis={setVis}
        time={time}
        setTime={setTime}
        trapOn={trapOn}
      />
      <Trap trapOn={trapOn} />
      <Button setTime={setTime} setVis={setVis} setTrapOn={setTrapOn} />
    </div>
  );
}
