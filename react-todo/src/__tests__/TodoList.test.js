// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import custom matchers

import TodoList from '../components/TodoList'; // Adjust path if needed

// --- Initial Render Test ---
test('renders TodoList component with initial todos', () => {
  render(<TodoList />);

  // Check if the main heading is present
  expect(screen.getByText('My Todo List')).toBeInTheDocument();

  // Check if initial todos are rendered
  expect(screen.getByText('Learn React Hooks')).toBeInTheDocument();
  expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  expect(screen.getByText('Write comprehensive tests')).toBeInTheDocument();

  // You can also check for specific elements like buttons
  expect(screen.getAllByText('Delete').length).toBe(3); // Assuming 3 initial todos
});

// --- Test Adding Todos ---
test('allows user to add a new todo', () => {
  render(<TodoList />);

   /*
  const inputElement = screen.getByPlaceholderText('Add new todo');
  const addButton = screen.getByRole('button', { name: /add todo/i });

  fireEvent.change(inputElement, { target: { value: 'New Test Todo' } });
  fireEvent.click(addButton);

  expect(screen.getByText('New Test Todo')).toBeInTheDocument();
  */
});

// --- Test Toggling Todos ---
test('allows user to toggle a todo completion status', () => {
  render(<TodoList />);

  const todoItem = screen.getByText('Learn React Hooks');
  expect(todoItem).not.toHaveStyle('text-decoration: line-through');

  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: line-through');

  fireEvent.click(todoItem); // Click again to toggle back
  expect(todoItem).not.toHaveStyle('text-decoration: line-through');
});

// --- Test Deleting Todos ---
test('allows user to delete a todo', () => {
  render(<TodoList />);

  const todoTextToDelete = 'Build a Todo App';
  expect(screen.getByText(todoTextToDelete)).toBeInTheDocument();

  // Find the delete button associated with this specific todo
  // This assumes your delete button is inside the li and we can find it relative to the todo text
  // A more robust way might be to give the button a test-id or an accessible name.
  const todoItem = screen.getByText(todoTextToDelete).closest('li');
  const deleteButton = todoItem.querySelector('button'); // Get the button inside the li

  fireEvent.click(deleteButton);

  expect(screen.queryByText(todoTextToDelete)).not.toBeInTheDocument();
  expect(screen.getAllByText('Delete').length).toBe(2); // One less delete button
});
