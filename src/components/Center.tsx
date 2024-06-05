import Slimer from "../media/slimer.png";
import { useState, useEffect } from "react";
interface CenterProps {
  trapOn: boolean;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  vis: boolean;
  setVis: React.Dispatch<React.SetStateAction<boolean>>;
}

const Center: React.FC<CenterProps> = ({
  trapOn,
  time,
  setTime,
  vis,
  setVis,
}) => {
  useEffect(() => {
    setTimeout(() => {
      setVis(true);
    }, time);
  }, [time]);

  return (
    <div className="center">
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
