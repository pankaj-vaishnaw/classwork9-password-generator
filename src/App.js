
import "./App.css";
import { useState } from "react";
import Checkbox from "./components/Checkbox";
import Number from "./components/Number"

function App() {
  console.log("i am rendering");
  const [password, setPassword] = useState("");
  const [containUppercase, setContainUppercase] = useState(false);
  const [containDigit, setContainDigit] = useState(false);
  const [containSymbol, setContainSymbol] = useState(false);
  const [length, setLength] = useState(8);

 

  function handleDigit() {
    setContainDigit(!containDigit);
  }

  function handleUppercase() {
    setContainUppercase(!containUppercase);
  }

  function handleSymbol() {
    setContainSymbol((prev) => {
      return !prev;
    });
  }

  function handleLength(event) {
    setLength((prev) => {
      return event.target.value;
    });
  }

  function copypassword() {
    navigator.clipboard.writeText(password);
  }

  function generatePassword() {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";
    let dict = lowercaseChars;
    if (containDigit) {
      dict += numberChars;
    }
    if (containUppercase) {
      dict += uppercaseChars;
    }
    if (containSymbol) {
      dict += symbolChars;
    }
    let newPassoword = "";
    for (let i = 1; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * dict.length);
      newPassoword += dict.charAt(randomIndex);
    }
    setPassword(newPassoword);
  }

  return (
    <div className="App flex flex-col border-8 border-slate-500">
      <h1>Create Your Password</h1>
      
      <Number lengthKey={length} handleLengthKey={handleLength} />
    
      <Checkbox
        containDigitKey={containDigit}
        handleDigitKey={handleDigit}
        strKey={"Should the password contain Numbers"}
      />

      

      <Checkbox
        containDigitKey={containUppercase}
        handleDigitKey={handleUppercase}
        strKey={"Should the password contain Uppercase"}
      />

      

      <Checkbox
        containDigitKey={containSymbol}
        handleDigitKey={handleSymbol}
        strKey={"Should the password contain Symbols"}
      />

      <h1>{password}</h1>
      <button
        className="border-1 border-slate-50 bg-slate-300 m-5"
        onClick={generatePassword}
      >
        Click to generate the password
      </button>

      <button
        className="border-1 border-slate-50 bg-slate-300"
        onClick={copypassword}
      >
        Copy password
      </button>
    </div>
  );
}

export default App;