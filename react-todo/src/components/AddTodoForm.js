function AddTodoForm({ onAdd }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    onAdd(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}