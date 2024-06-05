import Slimer from "../media/slimer.png";
import {  useEffect } from "react";
interface CenterProps {
  trapOn: boolean;
  time: number;
  vis: boolean;
  setVis: React.Dispatch<React.SetStateAction<boolean>>;
  result:number;
}

const Center: React.FC<CenterProps> = ({
  trapOn,
  time,
  vis,
  setVis,
  result
}) => {
  useEffect(() => {
    setTimeout(() => {
      setVis(true);
    }, time);
  }, [time]);

  return (
    <div className="center">
      <h1 className="result">{result > 0 ? result + "ms": ""}</h1>
      <img
        style={{
          animation: trapOn ? "moveDown 2s forwards" : "none",
          visibility: vis ? "visible" : "hidden",
        }}
        src={Slimer}
        alt="slimer"
        className="slimer"
      />
    </div>
  );
};
export default Center;
