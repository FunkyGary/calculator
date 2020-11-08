import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import useRWD from "./helper/useRWD";
import CssBaseline from "@material-ui/core/CssBaseline";

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
  body: {
    height: "100vh",
    background: "black",
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

function App() {
  const classes = useStyles();
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
  const operatorsRow = ["AC", "+/-", "%"];
  const operatorsColumn = ["÷", "×", "-", "+", "="];
  const operators = ["÷", "×", "-", "+", "+/-", "%", "=", "AC"];
  const result = useSelector((state) => state.result);
  const [showCalculator, setShowCalculator] = useState(false);
  const [active, setActive] = useState(null);
  const [currentX, setCurrentX] = useState(null);
  const [currentY, setCurrentY] = useState(null);
  const [initialX, setInitialX] = useState(null);
  const [initialY, setInitialY] = useState(null);
  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);
  const dispatch = useDispatch();
  const device = useRWD();

  console.log(device);

  // let active = false;
  // let currentX;
  // let currentY;
  // let initialX;
  // let initialY;
  // let xOffset = 0;
  // let yOffset = 0;

  function dragStart(e) {
    console.log("touchstart");
    setActive(true);
    // active = true;
    setInitialX(e.clientX - xOffset);
    setInitialY(e.clientY - yOffset);
    // initialX = e.clientX - xOffset;
    // initialY = e.clientY - yOffset;
  }

  function dragEnd(e) {
    console.log("touchend");
    setInitialX(currentX);
    setInitialY(currentY);
    // initialX = currentX;
    // initialY = currentY;
    setActive(false);
    // active = false;
  }

  console.log(active);
  function drag(e) {
    if (active) {
      e.preventDefault();
      setCurrentX(e.clientX - initialX);
      setCurrentY(e.clientY - initialY);

      // currentX = e.clientX - initialX;
      // currentY = e.clientY - initialY;
      setXOffset(currentX);
      setYOffset(currentY);
      // xOffset = currentX;
      // yOffset = currentY;
      console.log(currentX);
      console.log(currentY);
      // setTranslate(currentX, currentY, dragItem);
    }
  }

  // function setTranslate(xPos, yPos, el) {
  //   console.log(el);
  //   // el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  // }

  const handleClick = (e) => {
    const value = e.target.innerText;
    console.log(value);
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

  return (
    <div className={classes.body} onMouseMove={drag} onMouseUp={dragEnd}>
      <CssBaseline />

      <Button
        variant="contained"
        onClick={() => setShowCalculator(!showCalculator)}
      >
        Open calculator
      </Button>

      {showCalculator && (
        // <Calculator
        //   handleClick={handleClick}
        //   dragStart={dragStart}
        //   currentX={currentX}
        //   currentY={currentY}
        // />
        <div
          className={classes.layout}
          {...(device === "PC" && { onMouseDown: dragStart })}
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
                  <Grid item xs={4}>
                    <div
                      className={`${classes[`background#AFAFAF`]}  ${
                        classes.circle
                      }`}
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
                  <Grid item xs={item === 0 ? 8 : 4}>
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
                  <Grid item xs={12}>
                    <div
                      className={`${classes[`background#3091FD`]}  ${
                        classes.circle
                      }`}
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
    </div>
  );
}

// function Calculator(props) {
//   const classes = useStyles();
//   const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
//   const operatorsRow = ["AC", "+/-", "%"];
//   const operatorsColumn = ["÷", "×", "-", "+", "="];
//   const result = useSelector((state) => state.result);
//   const { dragStart, handleClick, currentX, currentY } = props;
//   console.log(currentX);
//   console.log(currentY);
//   return (
//     <div className={classes.layout} onClick={dragStart} id="calculator">
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <div className={`${classes.input}`} id="input">
//             {result}
//           </div>
//         </Grid>
//         <Grid item xs={9}>
//           <Grid container spacing={2}>
//             {operatorsRow.map((item) => (
//               <Grid item xs={4}>
//                 <div
//                   className={`${classes[`background#AFAFAF`]}  ${
//                     classes.circle
//                   }`}
//                   onClick={handleClick}
//                 >
//                   <div
//                     className={`${classes.colorBlack} ${classes.circleText}`}
//                   >
//                     {item}
//                   </div>
//                 </div>
//               </Grid>
//             ))}
//             {numbers.map((item) => (
//               <Grid item xs={item === 0 ? 8 : 4}>
//                 <div
//                   className={`${classes[`background#333333`]}
//             ${classes.circle}
//             ${item === 0 && classes.circleW}`}
//                   onClick={handleClick}
//                 >
//                   <div
//                     className={`${classes.colorWhite} ${classes.circleText}`}
//                   >
//                     {item}
//                   </div>
//                 </div>
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>
//         <Grid item xs={3}>
//           <Grid container spacing={2}>
//             {operatorsColumn.map((item) => (
//               <Grid item xs={12}>
//                 <div
//                   className={`${classes[`background#3091FD`]}  ${
//                     classes.circle
//                   }`}
//                   onClick={handleClick}
//                 >
//                   <div
//                     className={`${classes.colorWhite} ${classes.circleText}`}
//                   >
//                     {item}
//                   </div>
//                 </div>
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

export default App;
