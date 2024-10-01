import React from "react";
import styles from "./Buttons.module.css";

export const Buttons = ({ onButtonClicked }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonContainer}>
      {buttonNames.map((items) => (
        <button
          className={styles.button}
          onClick={() => onButtonClicked(items)}
        >
          {items}
        </button>
      ))}
    </div>
  );
};
