import "./hello.scss";
import IconDown from "../../images/icon-arrow-down.svg";

const Hello = () => {
  return (
    <div className="hello">
      <h1>WE ARE CREATIVES</h1>
      <img src={IconDown} alt="" />
    </div>
  );
};

export default Hello;
