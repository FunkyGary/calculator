const initState = {
  result: 0,
  firstNumber: "",
  SecondNumber: "",
  operator: null,
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case "OPERATOR": {
      if (action.value === "=") {
        if (state.firstNumber !== "" && state.SecondNumber !== "") {
          state.result = eval(
            `${state.firstNumber} ${state.operator} ${state.SecondNumber}`
          );
          state.firstNumber = state.result;
          state.SecondNumber = "";
          state.operator = "=";
        }
      } else if (action.value === "AC") {
        state = {
          result: 0,
          firstNumber: "",
          SecondNumber: "",
          operator: null,
        };
      } else {
        state.operator = action.value;
      }
      return state;
    }
    case "NUMBER": {
      if (
        state.result > 0 &&
        state.SecondNumber === "" &&
        state.operator === "="
      ) {
        state.firstNumber = "";
        state.firstNumber = state.firstNumber += action.value;
        state.result = state.firstNumber;
        state.operator = null;
      } else {
        if (state.operator === null) {
          if (action.value === "0" && state.result === 0) {
            return state;
          } else {
            state.firstNumber = state.firstNumber += action.value;
            state.result = state.firstNumber;
          }
        } else {
          state.SecondNumber = state.SecondNumber += action.value;
          state.result = state.SecondNumber;
        }
      }
      return state;
    }
    default: {
      return state;
    }
  }
};
