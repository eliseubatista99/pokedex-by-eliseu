import React from "react";
import { ResponsiveRenderElement, ResponsiveRenderProps } from ".";

export const useResponsiveRenderHelper = ({
  elements,
}: ResponsiveRenderProps) => {
  const [width, setWidth] = React.useState<number>(0);

  const onWindowResize = () => {
    const newWidth = window.innerWidth;

    setWidth(newWidth);
  };

  const getCurrentElement = () => {
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

    return newElem;
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
    currentElement: getCurrentElement(),
  };
};
