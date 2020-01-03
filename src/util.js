export const waitForCondition = (func, timeout) => new Promise((resolve, reject) => {
  const startTime = Date.now();

  const check = () => {
    if (func()) {
      resolve();
    } else if (Date.now() > startTime + timeout) {
      reject('Timed out!');
    } else {
      setTimeout(check, 1000);
    }
  };

  check();
});
