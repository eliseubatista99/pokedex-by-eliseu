export const useScroll = () => {
  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "unset";
  };

  return {
    disableScroll,
    enableScroll,
  };
};
