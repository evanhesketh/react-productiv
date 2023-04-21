import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

// let renderedTodo;

// beforeEach(function () {
//   renderedTodo = render(<Todo
//     title="Test todo"
//     description="Test description"
//     priority={1} />);
// });

describe("todo", function () {
  it("renders without crashing", function () {
    render(<Todo
      title="Test todo"
      description="Test description"
      priority={1} />);
  });

  it("matches snapshot on initial render", function () {
    const { container } = render(<Todo
      title="Test todo"
      description="Test description"
      priority={1} />);
    expect(container).toMatchSnapshot();
  });

  it("contains expected information", function () {
    const { container } = render(<Todo
      title="Test todo"
      description="Test description"
      priority={1} />);
    expect(container.querySelector(".Todo")).toContainHTML("Test todo");
  });


});