import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const todoskey = "myname"
  const [notes, setNotes] = useState("");
  const [para, setPara] = useState(() => {
    const rowtodo = localStorage.getItem(todoskey)
    if(!rowtodo) return [];
    let objvalue = JSON.parse(rowtodo)
    return objvalue;
  });

  useEffect(() => {
    localStorage.setItem(todoskey, JSON.stringify(para));
  },[para]);

  useEffect(() => {
    const storedNotes = localStorage.getItem("myname");
    if (storedNotes) {
      setPara(JSON.parse(storedNotes));
    }
  },[]);

  const addValue = () => {
    // let availablenotes = {
      
    // }
    const updatedNotes = [...para, notes];
    setPara(updatedNotes);
    setNotes("");
  };

  const removevalue = (index) => {
    // localStorage.removeItem(todoskey)
    const alldata = [...para];
     alldata.splice(index , 1)
    setPara(alldata)
    console.log(removevalue)

    localStorage.setItem(todoskey, JSON.stringify(alldata));

  }

  // const clearall = () => {
  //   localStorage.removeItem(todoskey)
  // }

  return (
    <>
      <h1>Hello {notes}</h1>
      <textarea placeholder='Enter Your Note Here' value={notes} onChange={(e) => setNotes(e.target.value)} />
      <button onClick={addValue}>Add</button>

       {para.map((allnotes, index) => (
        <>
        <div key={index}>
          <p>{allnotes}</p>
          <button onClick={() => removevalue(index)}>remove</button>
        </div>
        </>
       )  )

       }

    </>
  );
}

export default App;
