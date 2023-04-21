import React from "react";
import { render } from "@testing-library/react";
import EditableTodo from "./EditableTodo";

const testTodo = {
  title: "Test todo",
  description: "Test description",
  priority: 1
};

describe("EditableTodo", function () {
  it("renders without crashing", function () {
    render(<EditableTodo
      todo={testTodo} />);
  });

  it("matches snapshot on initial render", function () {
    const { container } = render(<EditableTodo todo={testTodo} />);
    expect(container).toMatchSnapshot();

  it("contains expected information", function () {
    const { container } = render(<EditableTodo todo={testTodo} />);
    expect(container.querySelector(".EditableTodo")).toContainHTML("Test description");
    expect(container.querySelector(".EditableTodo")).toContainHTML("Ultra-Über");
  });
});