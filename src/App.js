import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Calculator from "./model/Calculator";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
  body: {
    height: "100vh",
    background: "black",
  },
}));

function App() {
  const classes = useStyles();
  const calculatorEl = useRef(null);
  const [showCalculator, setShowCalculator] = useState(false);

  function hideCalculator(e) {
    if (calculatorEl.current && !calculatorEl.current.contains(e.target)) {
      setShowCalculator(false);
    }
  }

  function toggleCalculator() {
    setShowCalculator(!showCalculator);
  }

  return (
    <div className={classes.body} id="body" onClick={hideCalculator}>
      <CssBaseline />
      <Button variant="contained" onClick={toggleCalculator}>
        Open calculator
      </Button>
      <Calculator calculatorEl={calculatorEl} showCalculator={showCalculator} />
    </div>
  );
}

export default App;
