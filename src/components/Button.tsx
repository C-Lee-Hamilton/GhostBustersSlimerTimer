import Stripe from "../media/stripe.png";
import { useState } from "react";
interface ButtonProps {
  setTrapOn: React.Dispatch<React.SetStateAction<boolean>>;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  setVis: React.Dispatch<React.SetStateAction<boolean>>;
  vis:boolean;
  setResult:React.Dispatch<React.SetStateAction<number>>;
  time:number;
}
const Button: React.FC<ButtonProps> = ({ setTrapOn, setTime, setVis,vis,setResult,time }) => {
  const [started, setStarted] = useState<boolean>(false);
  const [startTime,setStartTime]=useState<number>(0);
 



  const getTime = () => {
    const timer = new Date();
  
    const hours = String(timer.getHours()).padStart(2, '0');
    const minutes = String(timer.getMinutes()).padStart(2, '0');
    const seconds = String(timer.getSeconds()).padStart(2, '0');
    const milliseconds = String(timer.getMilliseconds()).padStart(3, '0');
  
    const total=
    parseInt(hours, 10) * 3600000 +
    parseInt(minutes, 10) * 60000 +
    parseInt(seconds, 10) * 1000 +
    parseInt(milliseconds, 10);

    setStartTime(total);
  }


  const startButton = () => {
    setResult(0);
    getTime();
    var randomNum = Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000;
    setTime(randomNum);
    setStarted(true);
    setVis(false);
  };
  const consoleClick=()=>{console.log("Wait for it")};
  const trapset = () => {
    const timer = new Date();
  
    const hours = String(timer.getHours()).padStart(2, '0');
    const minutes = String(timer.getMinutes()).padStart(2, '0');
    const seconds = String(timer.getSeconds()).padStart(2, '0');
    const milliseconds = String(timer.getMilliseconds()).padStart(3, '0');

    const endTotal=
    parseInt(hours, 10) * 3600000 +
    parseInt(minutes, 10) * 60000 +
    parseInt(seconds, 10) * 1000 +
    parseInt(milliseconds, 10);
   
    setTrapOn(true);

    setTimeout(() => {
      setTrapOn(false);
      setStarted(false);
      setVis(false);
      setResult(endTotal-startTime-time);
    }, 2000);
  };
  return (
    <div className="start" style={{ backgroundImage: `url(${Stripe})` }}>
      <button
        onClick={started && vis ? trapset : started ? consoleClick :startButton}
        className="start-button"
      >
        {started && vis ? "OPEN TRAP" : started ? "GET READY": "START"}
      </button>
    </div>
  );
};
export default Button;
