export const useChallenge2Helper = () => {
  const handleSayHello = () => {
    alert("Challenge 2: Hello");
  };

  return {
    sayHello: handleSayHello,
  };
};
