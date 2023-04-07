import React from "react";
import { ResponsiveRenderElement, ResponsiveRenderProps } from ".";

export const useResponsiveRenderHelper = ({
  elements,
}: ResponsiveRenderProps) => {
  const [currentElement, setCurrentElement] =
    React.useState<ResponsiveRenderElement>({
      breakpoint: 0,
      content: undefined,
    });

  const onWindowResize = () => {
    const width = window.innerWidth;

    updateCurrentElement(width);
  };

  const updateCurrentElement = (width: number) => {
    let newElem: ResponsiveRenderElement = {
      breakpoint: 0,
      content: undefined,
    };

    elements.forEach((elem) => {
      if (width >= elem.breakpoint) {
        if (newElem.breakpoint <= elem.breakpoint) {
          newElem = elem;
        }
      }
    });

    setCurrentElement(newElem);
  };

  React.useEffect(() => {
    onWindowResize();
    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    currentElement,
  };
};
