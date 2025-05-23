export const addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};


export const deleteTodo = (index) => ({
  type: "DELETE_TODO",
  payload: index,
});

export const editTodo = (index) => ({
  type: "EDIT_TODO",
  payload: index,
});

export const clearTodo = () => ({
  type: "CLEAR_TODO",
});