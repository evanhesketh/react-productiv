import React from "react";
import { render } from "@testing-library/react";
import TopTodo from "./TopTodo";

const testTodos = [
  {
    id: 1,
    title: "Code!",
    description: "Write some code",
    priority: 2,
  },
  {
    id: 2,
    title: "Make dinner",
    description: "Cook something healthy",
    priority: 1,
  },
  {
    id: 3,
    title: "Go to bed",
    description: "In bed by 11:15",
    priority: 3,
  },
];

describe("top todo", function () {
  it("renders without crashing", function () {
    render(<TopTodo todos={testTodos} />);
  });

  it("displays the highest todo", function () {
    const { container } = render(<TopTodo todos={testTodos} />);
    expect(container.querySelector(".Todo")).toContainHTML("Make dinner");

    // TODO: could additonally assert "go to bed" isnt in doc
  });

  // TODO: add a snapshot test

});