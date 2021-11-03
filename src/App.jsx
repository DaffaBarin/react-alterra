import React from 'react'
import TodoPage from "./pages/todo/ToDoPage";
import {todoMock} from "./mockData"

function App() {
  return (
    <div className="App">
        <TodoPage todos={todoMock}/>
    </div>
  );
}

export default App;