import { useState } from 'react';
import './App.css';

function App() {
  const students = [
    { id: 1, name: 'Alice Johnson', course: 'HTML, CSS, JavaScript' },
    { id: 2, name: 'Bob Smith', course: 'ReactJS, Node.js, MongoDB' },
    { id: 3, name: 'Charlie Davis', course: 'HTML, CSS, ReactJS' },
    { id: 4, name: 'David Lee', course: 'Vue.js, Node.js, MongoDB' },
    
    { id: 5, name: 'Eve Walker', course: 'HTML, CSS, ReactJS, Node.js' },
    { id: 6, name: 'Frank Harris', course: 'Vue.js, ReactJS, MongoDB' },
    { id: 7, name: 'Grace Martinez', course: 'HTML, CSS, JavaScript, Node.js' },
    { id: 8, name: 'Henry Thomas', course: 'Vue.js, ReactJS, Node.js, MongoDB' },
    { id: 9, name: 'Isabel Gonzalez', course: 'HTML, CSS, Vue.js' },
    { id: 10, name: 'Jack White', course: 'ReactJS, JavaScript, MongoDB' }
  ];

  let [courses, setcourses] = useState('All');
  let [id, setid] = useState('');


  let filtered = students.filter((stud) => {
    const matchId = id === '' || [stud].find(s => s.id === Number(id));
    const matchCourse = courses === 'All' || stud.course.toLowerCase().includes(courses.toLowerCase());
    return matchId && matchCourse;
  });
  

  let searchid = (e) => {
    setid(e.target.value);
  };

  let filtercourse = (e) => {
    setcourses(e.target.value);
  };

  return (
    <>
      <div className='main'>
        <div className='top-box'>
          <input type='number' placeholder='Search By ID' value={id} onChange={searchid}/>
          <div className='filteredbox'>
            <select onChange={filtercourse}>
              <option value="All">All</option>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Node">Node JS</option>
              <option value="React">React JS</option>
              <option value="MongoDB">MongoDB</option>
              <option value="Vue">Vue JS</option>
            </select>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Courses</th>
            </tr>
          </thead>
          <tbody>
            {
              filtered.length > 0 ? (
                filtered.map((s, i) => (
                  <tr key={i}>
                    <td>{s.id}</td>
                    <td>{s.name}</td>
                    <td>{s.course}</td>
                  </tr> 
                ))
              ) : (
                <tr>
                  <td colSpan="3">Not Available</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
