import React from "react";
import { fireEvent, render } from "@testing-library/react";
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
    expect(container).toMatchSnapshot()
  });

  // it("contains expected information", function () {
  //   const { container } = render(<EditableTodo todo={testTodo} />);
  //   expect(container.querySelector(".EditableTodo")).toContainHTML("Test description");
  //   expect(container.querySelector(".EditableTodo")).toContainHTML("Ultra-Über");
  // });

  it("deleting todo works", function () {
    const mockDelete = jest.fn();
    const { container } = render(<EditableTodo todo={testTodo} remove={mockDelete} />);
    const deleteBtn = container.querySelector('.EditableTodo-delBtn');

    // TODO: test mock hasnt been called and was called after
    fireEvent.click(deleteBtn);

    expect(mockDelete).toHaveBeenCalledTimes(1);
  });

  // TODO: could add test for update - form should appear when edit btn clicked
});