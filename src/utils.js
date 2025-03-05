const getRandomNumber = (min, max) => {
  const minimalNum = min;
  const maximalNum = max;
  const number = Math.abs(Math.floor(((Math.random() * (maximalNum - minimalNum) + minimalNum))));

  return number;
};

export default getRandomNumber;
