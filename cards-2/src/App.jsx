import './App.css';
import Card from './Card';
import Categories from './products'; 
import { useState } from 'react'; 

function App() {
  const [data, setData] = useState(Categories);

  const filterResult = (category) => {
    if (category === "All") {
      setData(Categories); 
    } else {
      setData(Categories.filter(item => item.category === category)); 
    }
  };

  // const filterResult = (catItem) => {
  //   const result = Categories.filter((curData) => curData.category === catItem);
  //   setData(result);
  // };

  return (
    <>
      <div className='container'>
        <div className='buttons'>
        <button onClick={() => filterResult("All")}>All</button>  
          <button onClick={() => filterResult("Chocolate")}>Chocolates</button>
          <button onClick={() => filterResult("Cake")}>Cake</button>
          <button onClick={() => filterResult("Ice Cream")}>Ice-creams</button>
        </div>

        {data.map((values, index) => {
          const { name, price, image } = values;
          return (
            <Card key={index} img={image} price={price} name={name} />
          );
        })}
      </div>
    </>
  );
}

export default App;

// import React from 'react'
// import { useState } from 'react'
// import Categories from './products';

// const App = () => {
//   const [filtercat , setfiltercat] = useState("All");

//   const filterproduct = filtercat === "All" ? Categories : Categories.filter((e) => e.category === filtercat)
//   return (
//     <>
//       <button onClick={() => setfiltercat("All")}>All</button>
//       <button onClick={() => setfiltercat("Chocolate")}>Chocolate</button>
//       <button onClick={() => setfiltercat("Cake")}>Cake</button>
//       <button onClick={() => setfiltercat("Ice Cream")}>Ice Cream</button>

//       {
//         filterproduct.map((d , i) => (
//           <>
//           <div key={i}>
//             <img src={d.image}></img>
//             <h1>{d.name}</h1>
//           </div>
//           </>
//         ))
//       }
//     </>
//   )
// }

// export default App

