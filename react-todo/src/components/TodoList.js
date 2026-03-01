import React, { useState } from 'react';

// Optional: you can also put TodoItem in its own file
function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li
      onClick={() => onToggle(todo.id)}
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        cursor: "pointer"
      }}
    >
      {todo.text}
      <button
        onClick={(e) => {
          e.stopPropagation(); // prevent li onClick from firing
          onDelete(todo.id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React Hooks', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Write comprehensive tests', completed: false },
  ]);

  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>My Todo List</h1>

      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Add new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;