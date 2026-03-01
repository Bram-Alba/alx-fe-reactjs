import React from 'react';
import './App.css'; // Keep your styling (you can eventually remove this if you don't use App.css anymore)
import TodoList from './components/TodoList'; // Import your component

function App() {
  return (
    <div className="App">
      <TodoList /> {/* Render your TodoList component */}
    </div>
  );
}

export default App;
