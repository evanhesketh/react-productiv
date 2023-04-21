import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";

it("renders without crashing", function () {
  render(<TodoForm />);
});

it("matches initial form snapshot", function () {
  const { asFragment } = render(<TodoForm />);
  expect(asFragment()).toMatchSnapshot();
});

it("matches data-entered snapshot", function () {
  const { container } = render(<TodoForm />);

  const titleInput = container.querySelector("[name=title]");
  const descriptionInput = container.querySelector("[name=description]");
  const priorityInput = container.querySelector("[name=priority]");

  fireEvent.input(titleInput, { target: { value: "New Todo" } });
  fireEvent.input(descriptionInput, { target: { value: "This is a new todo" } });
  fireEvent.input(priorityInput, { target: { value: "2" } });

  expect(container).toMatchSnapshot();
});

it("submitting form works", function () {
  const mockHandleSave = jest.fn();
  const { container } = render(<TodoForm handleSave={mockHandleSave}/>);

  const titleInput = container.querySelector("[name=title]");
  const descriptionInput = container.querySelector("[name=description]");
  const priorityInput = container.querySelector("[name=priority]");



  fireEvent.input(titleInput, { target: { value: "New Todo" } });
  fireEvent.input(descriptionInput, { target: { value: "This is a new todo" } });
  fireEvent.input(priorityInput, { target: { value: "2" } });

  expect(mockHandleSave).toHaveBeenCalledTimes(0);

  fireEvent.click(container.querySelector(".NewTodoForm-addBtn"))
  expect(mockHandleSave).toHaveBeenCalledTimes(1);

  // expect all form inputs to be empty

  expect(titleInput).toHaveValue('');
  expect(descriptionInput).toHaveValue('');
  expect(priorityInput).toHaveValue('1');

});