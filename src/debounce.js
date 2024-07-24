// Examples usage:
// const debouncedLog = debounce(console.log, 100);
// debouncedLog("Hello world") // cancelled
// debouncedLog("Hello world2") // cancelled
// debouncedLog("Hello world3") // cancelled
// debouncedLog("Hello world4") // Hello world4 after 100ms

function debounce(fn, t) {
  let timerId; // Init var to hold the timeout ID

  return (...args) => {
    // Return a new function that wraps the original function
    clearTimeout(timerId); // Clear any existing timer to reset the debounce delay
    // Set a new timer that will call 'fn' with the provided arguments after the specified delay 't'
    timerId = setTimeout(() => fn(...args), t);
  };
}
