import React from "react";
import { useSelector, useDispatch } from "react-redux"; // ✅ add useDispatch
import { deleteTodo } from "../redux/actions";
import { clearTodo } from "../redux/actions";


function TodoList() {
  const todoDisplay = useSelector((state) => state); 
  const dispatch = useDispatch();
  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
    alert("Deleted")
  };

  const handleclearTodo = () => {
    dispatch(clearTodo())
  }
  return (
    
    <div className="todo-list">
      {todoDisplay.map((todo, index) => (
        <div className="todo-item" key={index}>
          <span className="task-text">{todo}</span>
          <button className="delete-btn" onClick={() => handleDelete(index)}>✕</button>
        </div>
      ))}
      <button onClick={handleclearTodo}>clear</button>
    </div>
  );
}

export default TodoList;


