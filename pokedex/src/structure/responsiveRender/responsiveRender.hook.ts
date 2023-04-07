import React from "react";
import { ResponsiveRenderElement, ResponsiveRenderProps } from ".";

export const useResponsiveRenderHelper = ({
  elements,
}: ResponsiveRenderProps) => {
  const [width, setWidth] = React.useState<number>(0);
  const [currentElement, setCurrentElement] =
    React.useState<ResponsiveRenderElement>({
      breakpoint: 0,
      content: undefined,
    });

  const onWindowResize = () => {
    setWidth(window.innerWidth);

    updateCurrentElement();
  };

  const updateCurrentElement = () => {
    let newElem: ResponsiveRenderElement = {
      breakpoint: 0,
      content: undefined,
    };

    elements.forEach((elem) => {
      if (width >= elem.breakpoint) {
        newElem = elem;
      }
    });

    setCurrentElement(newElem);
  };

  React.useEffect(() => {
    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return {
    currentElement,
  };
};
