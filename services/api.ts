export const getMachineResult = async () => {
  const plays = {
    1: "paper",
    2: "rock",
    3: "scissors",
  };

  setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * (4 - 1)) + 1;

    return plays[randomNumber];
  }, 2000);
};
