export function fetchNumber(max = 15) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * max))
    }, 2000);
  });
}