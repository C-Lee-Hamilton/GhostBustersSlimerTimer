import Stripe from "../media/stripe.png";
import { useState } from "react";
interface ButtonProps {
  setTrapOn: React.Dispatch<React.SetStateAction<boolean>>;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  setVis: React.Dispatch<React.SetStateAction<boolean>>;
}
const Button: React.FC<ButtonProps> = ({ setTrapOn, setTime, setVis }) => {
  const [started, setStarted] = useState<boolean>(false);
  const startButton = () => {
    var randomNum = Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000;
    setTime(randomNum);
    setStarted(true);
    setVis(false);
  };

  const trapset = () => {
    setTrapOn(true);
    setTimeout(() => {
      setTrapOn(false);
      setStarted(false);
      setVis(false);
    }, 2000);
  };
  return (
    <div className="start" style={{ backgroundImage: `url(${Stripe})` }}>
      <button
        onClick={started ? trapset : startButton}
        className="start-button"
      >
        {!started ? "START" : "OPEN TRAP"}
      </button>
    </div>
  );
};
export default Button;
