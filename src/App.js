import "./styles.css";

import { getNumber } from "./mocks/api";
import { useState, useEffect, useRef } from "react";

const colors = ["Green", "Red", "Blue"];
const interval = 1000;

export default function App() {
  const [color, setColor] = useState(null);
  const [colorHistory, setColorHistory] = useState([]);
  const delay = useRef(0);

  useEffect(() => {
    changeColor();
  }, []);

  const onClickHandler = () => {
    setColorHistory((current) => [...current, color]);
    changeColor();
  };

  const changeColor = async () => {
    const num = await getNumber();
    if (num % 2) {
      delay.current += interval;
      setTimeout(() => {
        changeColor();
      }, delay.current);
    } else {
      delay.current = 0;
      let index = 0;
      if (num >= 600) index = 2;
      else if (num >= 300) index = 1;
      setColor(colors[index]);
    }
  };
  return (
    <div className="App">
      <button
        onClick={onClickHandler}
        className="color-button"
        style={{ backgroundColor: color }}
      ></button>
      <ul>
        {colorHistory.map((color, index) => {
          return <li key={color + index}>{color}</li>;
        })}
      </ul>
    </div>
  );
}
