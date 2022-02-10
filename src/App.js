import './App.css';
import image from './fruits.jpeg';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className="app" >
      <div className="container">
        <img src={image} width="200px" alt="fruits" />
      </div>
      <div className="container">
        <h1>Grocery list</h1>
      </div>
      <GroceryList />
      <div className="container">
        <img src={image} width="200px" alt="fruits" />
      </div>
    </div>
  );
}

export default App;
