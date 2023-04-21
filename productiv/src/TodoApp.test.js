import React from "react";
import { fireEvent, render } from "@testing-library/react";
import TodoApp from "./TodoApp";

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

describe("todo app", function () {
  it("renders without crashing", function () {
    render(<TodoApp initialTodos={testTodos} />);
  });

  it("matches snapshot on initial render", function () {
    const { container } = render(<TodoApp initialTodos={testTodos} />);
    expect(container).toMatchSnapshot();
  });

  it("deletes todo on delete btn click", function () {
    const { container } = render(<TodoApp initialTodos={testTodos} />);
    const deleteBtn = container.querySelector(".EditableTodo-delBtn");
    fireEvent.click(deleteBtn);
    expect(deleteBtn).not.toBeInTheDocument();
    // TODO: test that text in todo was deleted - and also present before
  });

  it("adds a new todo", function () {
    const { container } = render(<TodoApp initialTodos={testTodos} />);

    // grab form inputs
    const titleInput = container.querySelector("[name=title]");
    const descriptionInput = container.querySelector("[name=description]");

    // add title and description
    fireEvent.change(titleInput, { target: { value: "new todo" } });
    fireEvent.change(descriptionInput, { target: { value: "new description" } });

    // TODO: test that default priority was correctly assigned

    // grab submit button
    const button = container.querySelector(".NewTodoForm-addBtn");
    fireEvent.click(button);

    expect(container).toContainHTML("new description");
  });

  it("edits a todo", function () {
    const { container } = render(<TodoApp initialTodos={testTodos} />);

    // click 1st edit button
    const editBtn = container.querySelectorAll(".EditableTodo-toggle")[0];
    fireEvent.click(editBtn);

    // grab form inputs
    const titleInput = container.querySelectorAll("[name=title]")[0];
    const descriptionInput = container.querySelectorAll("[name=description]")[0];

    // add title and description
    fireEvent.change(titleInput, { target: { value: "edited todo" } });
    fireEvent.change(descriptionInput, { target: { value: "edited description" } });

    // click 1st submit button
    const submitBtn = container.querySelectorAll(".NewTodoForm-addBtn")[0];
    fireEvent.click(submitBtn);

    // TODO: before making edits, write tests for what it looked like before and after
    expect(container).toContainHTML("edited description");
  });

  // TODO: write a test that when all todos are deleted -
  // no top todo, but forms there - "You have no todos."

  // TODO: write a test that
  // when you add a new highest priority todo - that it renders twice

});