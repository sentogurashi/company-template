export const throttle = (callback, wait = 100) => {
  let waiting = false;
  return (...args) => {
    if (waiting) return;
    waiting = true;
    callback(...args);
    setTimeout(() => {
      waiting = false;
    }, wait);
  };
};

export const throttleWithRAF = (callback) => {
  let waiting = false;
  return (...args) => {
    if (waiting) return;
    waiting = true;
    callback(...args);
    window.requestAnimationFrame(() => {
      waiting = false;
    });
  };
};

export default throttle;
