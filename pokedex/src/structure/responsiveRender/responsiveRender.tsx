import { useResponsiveRenderHelper } from "./responsiveRender.hook";

export interface ResponsiveRenderElement {
  breakpoint: number;
  content: JSX.Element | undefined;
}

export interface ResponsiveRenderProps {
  elements: ResponsiveRenderElement[];
}

export const ResponsiveRender = (props: ResponsiveRenderProps) => {
  const { currentElement } = useResponsiveRenderHelper(props);

  return <>{currentElement}</>;
};
