import { useState } from "react";
import style1 from "./App.module.css";
import BtnContainer from "./components/BtnContainer";
import Display from "./components/Display";

function App() {
  const [value,setValue] = useState(""); 

  const clicked = (btnValue) =>{
    if (btnValue === "C") {
      setValue("");
    } else if (btnValue === "=") {
      const result = eval(value);
      setValue(result);
    } else {
      const newDisplayValue = value + btnValue;
      setValue(newDisplayValue);
    }
  };

  const buttons = [
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
  <div className= {style1.calculator}>

      <Display initialValue = {value}></Display>
      <BtnContainer btns = {buttons} clicked={clicked}></BtnContainer>  
  </div>
  )
}

export default App
