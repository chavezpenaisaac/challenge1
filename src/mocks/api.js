const getNumber = () => {
  const ms = 100; // supposing api response time
  const min = 1;
  const max = 900;
  return new Promise((resolve) => {
    setTimeout(() => {
      const rand = Math.floor(Math.random() * max) + min;
      resolve(rand);
    }, ms);
  });
};
export { getNumber };
