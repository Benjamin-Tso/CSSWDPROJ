import './App.css';
import Restaurant from "./components/restaurant"
import r_data from "./data/restaurants.json"
function App() {
  return (
    <div className="App">
      <header>
          <h1 id="page-title">Food</h1>
          <h3 id="page-subheader">Food is any substance consumed by an organism for nutritional support. Food is usually of plant, animal, or fungal origin and contains essential nutrients such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth. Different species of animals have different feeding behaviours that satisfy the needs of their metabolisms and have evolved to fill a specific ecological niche within specific geographical contexts.</h3>
        </header>
        <nav>
          <ul>
            {
              r_data.map((data, idx) => {
                  return (
                    <li key={idx}><a href={`#${data.name}`}>{data.name}</a></li>
                  )
                }
              )
            }
          </ul>
        </nav>
        <article>
          <h2 id="header2">Food Near Tech</h2>
          {
            r_data.map((data, idx) =>
              <Restaurant restaurant_data={data} key={idx}/>
            )
          }
        </article>
        <footer>
          &copy; Benjamin Tso
        </footer>
    </div>
  );
}

export default App;
