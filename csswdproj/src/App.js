import { useState } from 'react';
import './App.css';
import Restaurant from "./components/restaurant"
function App() {
  const [restaurants, setRestaurants] = useState([])
  return (
    <div className="App">
      <header>
          <h1 id="page-title">Food</h1>
          <h3 id="page-subheader">Food is any substance consumed by an organism for nutritional support. Food is usually of plant, animal, or fungal origin and contains essential nutrients such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth. Different species of animals have different feeding behaviours that satisfy the needs of their metabolisms and have evolved to fill a specific ecological niche within specific geographical contexts.</h3>
        </header>
        <article>
          <h2 id="header2">Food Nearby Tech</h2>
          {
            restaurants.map((data, idx) =>
              <Restaurant restaurant_data={data} key={idx}/>
            )
          }
        </article>
    </div>
  );
}

export default App;
