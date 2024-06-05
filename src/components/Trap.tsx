import One from "../media/1.gif";
import Two from "../media/2.gif";
interface TrapProps {
  trapOn: boolean;
}
const Trap: React.FC<TrapProps> = ({ trapOn }) => {
  return (
    <div>
      {!trapOn && <img className="trap" src={One} alt="nai" />}

      {trapOn && <img className="trap" src={Two} alt="nai" />}
    </div>
  );
};
export default Trap;
