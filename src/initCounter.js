// Examples usage:
// const [increment, decrement] = makeCounter();
// increment(); // 1

// Exmaple usages with state var and step:
// let state = 2
// const step = 5
// const [, decrement] = initCounter(state, step);
// decrement(); // -3

function initCounter(stateVar = 0, step = 1) {
  const increment = (newStep = false) => {
    // If user want change step
    if (newStep) step = newStep;

    // Change state
    stateVar = stateVar + step;
    // return state variable
    return stateVar;
  };

  const decrement = (newStep = false) => {
    // If user want change step
    if (newStep) step = newStep;
    // Change state
    stateVar = stateVar - step;
    // return state variable
    return stateVar;
  };

  // return funcitons set
  return [increment, decrement];
}
