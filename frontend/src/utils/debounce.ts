export const debounce = (callback: any, delay: number) => {
  let timer: any = null;
  return (...args: any) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
