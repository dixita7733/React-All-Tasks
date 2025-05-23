import React, { useState } from 'react'
import Products from './component/products'

const App = () => {
  const [category , setcategory] = useState("All")

  const filteredproduct = category === Products.category ? Products : Products.filter((e) => e.category === category)
  return (
    <>
      <select onChange={(e) => setcategory(e.target.value)}>
        <option>All</option>
        <option>Cake</option>
        <option>Ice Cream</option>
        <option>Chocolate</option>
      </select>

      {
        filteredproduct.map((e , index) => (
          <>
          <div key={index}>
          <img src={e.image}/>
          <h1>{e.name}</h1>
          </div>
          </>

        ))
      }
    </>
  )
}

export default App
