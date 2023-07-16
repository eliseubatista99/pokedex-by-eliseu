export const useChallenge1Helper = () => {
  const handleSayHello = () => {
    alert("Challenge 1: Hello");
  };

  return {
    sayHello: handleSayHello,
  };
};
