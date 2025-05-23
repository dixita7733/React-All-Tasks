
import './App.css'
import Getitem from './component/Getitem';

function App() {
 let handleform = ((e) => {
  e.preventDefault();
  
    let name = document.getElementById("username").value;
    let email = document.getElementById("email").value;


    let formdata = {name: name, email: email}

    localStorage.setItem("user1", JSON.stringify(formdata))

    // console.log("user" + formdata.name + "password" + formdata.email)
    window.location.reload();

  })

    let getitems = localStorage.getItem("user1");
    const userData =  JSON.parse(getitems) ;



  return (
    <>
  <div class="container">
    <div class="form-container" id="login-form">
      <h1>Login</h1>
      <form>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required></input>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required></input>
        <button type="submit" onClick={handleform}>Login</button>
      </form>
    </div>
  </div>
   
  {userData && <Getitem name={userData.name} email={userData.email} />}
  
     
    </>
  )
}

export default App
