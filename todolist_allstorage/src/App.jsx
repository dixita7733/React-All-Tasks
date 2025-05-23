import { useState } from 'react'
import './App.css'
import Cookies from 'js-cookie'

function App() {
  let todoskey = "note";

  let [usernote , setusernote] = useState("")
  let [note , setnote] = useState(() => {
    const rowtodo = localStorage.getItem(todoskey)
    if(!rowtodo) return [];
    let objvalue = JSON.parse(rowtodo)
    return objvalue;
  })

  let handlelocalstorage = () => {
    const updatedNotes = [...note, usernote];
    setnote(updatedNotes);
    localStorage.setItem(todoskey, JSON.stringify(note))
    setusernote("");

  }

  let handlesessionstorage = () => {
    const updatedNotes = [...note, usernote];
    setnote(updatedNotes);
    setusernote("");
    sessionStorage.setItem(todoskey, JSON.stringify(updatedNotes));
  };
  
  let handlecookie = () => {
    const updatedNotes = [...note, usernote];
    setnote(updatedNotes);
    setusernote("");
    Cookies.set(todoskey, JSON.stringify(updatedNotes), { expires: 2 });
  };
  

  // const addnote = () => {
  //   const updatedNotes = [...note, usernote];
  //   setnote(updatedNotes);
  //   setusernote("");
  // }

  const removevalue = (index) => {
    const alldata = [...note];
    alldata.splice(index, 1);
    setnote(alldata);

    localStorage.setItem(todoskey, JSON.stringify(alldata));
  };

  const editnotes = () => {
    // setEditingIndex(index);
    // setEditedTodo(todos[index]);
  }  

  return (
    <>
  <div class="todo__wrapper">
  <div class="todo__content">
    <h1>TODO</h1>
    <form class="newItem" onSubmit={(e) => e.preventDefault()}>
      <div class="newItem__input">
        <input type="text"   value={usernote} name="add" placeholder="Enter Your Note..." onChange={(e) => {setusernote(e.target.value)}}/>
        {/* <div class="newItem__select"> */}
        {/* <select class="filter" onClick={handlestorage}>
          <option value="LocalStorage" ref={selectedlocal_storage}>LocalStorage</option>
          <option value="SessionStorage">SessionStorage</option>
          <option value="Cookie">Cookie</option>
        </select> */}
      {/* </div> */}

      </div>
      <div class="newItem_select_buttons">
        <button onClick={handlelocalstorage}>local storage</button>
        <button onClick={handlesessionstorage}>Session storage</button>
        <button onClick={handlecookie}>Cookie</button>
      </div>
    </form>
    <ul class="todo__list">
      {note.map((allnotes , index)=> (
      <li class="todo__item" key={index}>
      <label for="todo-1">
        <p class="item__title">{allnotes}</p>
      </label>
      <i class="fas fa-trash-alt item__trash-can" onClick={() => removevalue(index)}></i>
      <i class="fas fa-edit" onClick={editnotes}></i>

    </li>
      ))}


    </ul>
  </div>
</div>
    </>
  )
}

export default App
