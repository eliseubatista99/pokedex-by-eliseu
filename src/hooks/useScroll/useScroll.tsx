export const useScroll = () => {
  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "initial";
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "auto";
  };

  return {
    disableScroll,
    enableScroll,
  };
};
