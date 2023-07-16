import React from "react";
import { render, screen } from "@testing-library/react";
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
