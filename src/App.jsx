import React, { useState } from "react";
import styles from "./App.module.css";
import { Buttons } from "./component/Buttons";
import { Display } from "./component/Display";

function App() {
  const [calVal, setCalVal] = useState("");

  const buttonClicked = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else if (buttonText) {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "pink",
          fontSize: "50px",
        }}
      >
        Calculator
      </h1>
      <div className={styles.calculator}>
        <Display displayVal={calVal} />
        <Buttons onButtonClicked={buttonClicked} />
      </div>
    </>
  );
}

export default App;
