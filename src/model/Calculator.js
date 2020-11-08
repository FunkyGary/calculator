import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";
import useRWD from "../helper/useRWD";

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "480px",
    position: "absolute",
    background: "linear-gradient(to bottom, #84BAFF, #0B0E1C)",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down(768)]: {
      width: "360px",
    },
    [theme.breakpoints.down(576)]: {
      bottom: 0,
      width: "100%",
      height: "50%",
      overflowY: "scroll",
    },
  },
  input: {
    textAlign: "right",
    color: "white",
    fontSize: "8rem",
    [theme.breakpoints.down(768)]: {
      fontSize: "5rem",
    },
  },
  "background#AFAFAF": {
    background: "#AFAFAF",
  },
  "background#3091FD": {
    background: "#3091FD",
  },
  "background#333333": {
    background: "#333333",
  },
  colorBlack: {
    color: "black",
  },
  colorWhite: {
    color: "white",
  },
  circle: {
    position: "relative",
    paddingBottom: "100%",
    cursor: "pointer",
    userSelect: "none",
    borderRadius: "50%",
    "&:hover": {
      opacity: "0.8",
    },
    "&:active": {
      transform: "scale(0.9)",
    },
  },
  circleW: {
    borderRadius: "50px",
    paddingBottom: "45%",
  },
  circleText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "2rem",
  },
}));

function Calculator(props) {
  const classes = useStyles();
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
  const operatorsRow = ["AC", "+/-", "%"];
  const operatorsColumn = ["÷", "×", "-", "+", "="];
  const result = useSelector((state) => state.result);
  const [active, setActive] = useState(null);
  const [currentX, setCurrentX] = useState(null);
  const [currentY, setCurrentY] = useState(null);
  const [initialX, setInitialX] = useState(null);
  const [initialY, setInitialY] = useState(null);
  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);
  const operators = ["÷", "×", "-", "+", "+/-", "%", "=", "AC"];
  const dispatch = useDispatch();
  const device = useRWD();
  const { calculatorEl, showCalculator } = props;

  const handleClick = (e) => {
    const value = e.target.innerText;
    if (operators.includes(value)) {
      dispatch({
        type: "OPERATOR",
        value: value,
      });
    } else {
      dispatch({
        type: "NUMBER",
        value: value,
      });
    }
  };

  function dragStart(e) {
    setActive(true);
    setInitialX(e.clientX - xOffset);
    setInitialY(e.clientY - yOffset);
  }

  function dragEnd(e) {
    setInitialX(currentX);
    setInitialY(currentY);
    setActive(false);
  }

  function drag(e) {
    if (active) {
      e.preventDefault();
      setCurrentX(e.clientX - initialX);
      setCurrentY(e.clientY - initialY);
      setXOffset(currentX);
      setYOffset(currentY);
    }
  }

  return (
    <>
      {showCalculator && (
        <div
          ref={calculatorEl}
          className={classes.layout}
          {...(device === "PC" && {
            onMouseDown: dragStart,
            onMouseMove: drag,
            onMouseUp: dragEnd,
          })}
          id="calculator"
          style={{
            left: currentX,
            top: currentY,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div className={`${classes.input}`} id="input">
                {result}
              </div>
            </Grid>
            <Grid item xs={9}>
              <Grid container spacing={2}>
                {operatorsRow.map((item) => (
                  <Grid item xs={4} key={item}>
                    <div
                      className={`${classes[`background#AFAFAF`]}  
                      ${classes.circle}`}
                      onClick={handleClick}
                    >
                      <div
                        className={`${classes.colorBlack} ${classes.circleText}`}
                      >
                        {item}
                      </div>
                    </div>
                  </Grid>
                ))}
                {numbers.map((item) => (
                  <Grid item xs={item === 0 ? 8 : 4} key={item}>
                    <div
                      className={`${classes[`background#333333`]}
                                  ${classes.circle}
                                  ${item === 0 && classes.circleW}`}
                      onClick={handleClick}
                    >
                      <div
                        className={`${classes.colorWhite} ${classes.circleText}`}
                      >
                        {item}
                      </div>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container spacing={2}>
                {operatorsColumn.map((item) => (
                  <Grid item xs={12} key={item}>
                    <div
                      className={`${classes[`background#3091FD`]}  
                      ${classes.circle}`}
                      onClick={handleClick}
                    >
                      <div
                        className={`${classes.colorWhite} ${classes.circleText}`}
                      >
                        {item}
                      </div>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
}

export default Calculator;
