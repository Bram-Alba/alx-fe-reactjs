import { useState } from 'react';

function AddTodoForm({ addTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} data-testid="add-todo-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
        data-testid="todo-input"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodoForm;