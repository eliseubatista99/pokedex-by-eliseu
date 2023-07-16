export const useProjectHelper = () => {
  const handleSayHello = () => {
    alert("Project: Hello");
  };

  return {
    sayHello: handleSayHello,
  };
};
