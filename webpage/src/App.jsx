import './App.css'
import Header from './Header/Header'
import Page from './page/Page'

function App() {


  setTimeout(() => {
    let Number = document.querySelectorAll(".num");
  Number.forEach(ele => {
     let target_value = +ele.dataset.count;
     ele.innerText = target_value;
  
     let current_num = 0;

     let speed = target_value / 200;

     function mynumber(){
      if(current_num < target_value){
          current_num += Math.floor(speed);
           ele.innerText = current_num + "+";
      }
     }
  

     setInterval(mynumber, 5)
  });
}, 1000);

  return (
    <>
    <Header/>
    <Page/>
    </>
  )
}

export default App
