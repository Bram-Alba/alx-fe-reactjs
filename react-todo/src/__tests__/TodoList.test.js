import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);

  expect(screen.getByText("Learn React Hooks")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  expect(screen.getByText("Write comprehensive tests")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);

  const input = screen.getByPlaceholderText("Add new todo");
  const button = screen.getByText("Add Todo");

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(button);

  expect(screen.getByText("New Task")).toBeInTheDocument();
});

test("toggles a todo", () => {
  render(<TodoList />);

  const todo = screen.getByText("Learn React Hooks");

  fireEvent.click(todo);

  expect(todo).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);

  const deleteButtons = screen.getAllByText("Delete");

  fireEvent.click(deleteButtons[0]);

  expect(screen.queryByText("Learn React Hooks")).not.toBeInTheDocument();
});