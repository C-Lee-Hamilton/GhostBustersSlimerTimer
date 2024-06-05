import "./styles.css";
import { useState } from "react";
import Header from "./media/Header.png";
import Trap from "./components/Trap";
import Center from "./components/Center";
import Button from "./components/Button";
export default function App() {
  const [trapOn, setTrapOn] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [vis, setVis] = useState<boolean>(true);
  const [result,setResult]=useState<number>(0);



  return (
    <div className="App">
      <img className="Header" src={Header} alt="banner" />
      <div className="game-container">
      <Center
        result={result}
        vis={vis}
        setVis={setVis}
        time={time}
       
        trapOn={trapOn}
      />
      <Trap trapOn={trapOn} />
      <Button time={time} setResult={setResult} vis={vis} setTime={setTime} setVis={setVis} setTrapOn={setTrapOn} />
    </div>
    </div>
  );
}
