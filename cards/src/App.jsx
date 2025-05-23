import './App.css';
import Card from './Card';
import Cards from './products'; 
import { useState } from 'react'; 

function App() {
  const [filterproduct, setfilterproduct] = useState("All");

  const filterclick = (e) => {
    setfilterproduct(e.target.value);
  };

  const filteredCards = filterproduct === "All"
    ? Cards
    : Cards.filter(card => card.category === filterproduct); 

  return (
    <>
      <div className='container'>
        <div className='filterdata'>
          <select onChange={filterclick} value={filterproduct}>
            <option value="All">All</option>
            <option value="Chocolate">Chocolate</option>
            <option value="Cake">Cake</option>
            <option value="Ice Cream">Ice Cream</option>
          </select>
        </div>

        {
        filteredCards.map((e, index) => (
          <Card key={index} img={e.image} price={e.price} name={e.name} />
        ))
        }
      </div>
    </>
  );
}

export default App;
