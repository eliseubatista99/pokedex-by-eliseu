import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App";
import { TestComponent } from "./components";

const setup = () => {
  return (
    <TestComponent>
      <App />
    </TestComponent>
  );
};

test("renders learn react link", () => {
  const wrapper = render(setup());
  expect(wrapper).toBeDefined();
});
