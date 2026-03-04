import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';
import AddTodoForm from '../components/AddTodoForm';

describe('TodoList Component', () => {
  test('renders the TodoList component with initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  test('adds a new todo when form is submitted', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');

    fireEvent.change(input, { target: { value: 'New Test Todo' } });
    fireEvent.click(screen.getByText('Add Todo'));

    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
  });

  test('clears input after adding a todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');

    fireEvent.change(input, { target: { value: 'Another Todo' } });
    fireEvent.click(screen.getByText('Add Todo'));

    expect(input.value).toBe('');
  });

  test('toggles a todo completion status when clicked', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');

    expect(todoItem).toHaveStyle('text-decoration: none');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo when Delete button is clicked', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();

    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[0]);

    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });

  test('does not add empty todos', () => {
    render(<TodoList />);
    const initialTodos = screen.getAllByText('Delete').length;

    fireEvent.click(screen.getByText('Add Todo'));

    expect(screen.getAllByText('Delete').length).toBe(initialTodos);
  });
});

describe('AddTodoForm Component', () => {
  test('renders the AddTodoForm component', () => {
    const mockAddTodo = jest.fn();
    render(<AddTodoForm addTodo={mockAddTodo} />);

    expect(screen.getByPlaceholderText('Add a new todo')).toBeInTheDocument();
    expect(screen.getByText('Add Todo')).toBeInTheDocument();
  });

  test('calls addTodo with input value on submit', () => {
    const mockAddTodo = jest.fn();
    render(<AddTodoForm addTodo={mockAddTodo} />);

    const input = screen.getByPlaceholderText('Add a new todo');
    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.click(screen.getByText('Add Todo'));

    expect(mockAddTodo).toHaveBeenCalledWith('Test Todo');
  });
});