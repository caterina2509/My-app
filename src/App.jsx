
import './App.css'
import  image from './shopping.jpg';
import imageTwo from './man.jpg';
import { GroceryList } from './GroceryList';

function App() {
 

  return (
   <div className='app'>
<img  src = { image } width="300px" alt='shopping'/>
<h1>Grocery List</h1>

<GroceryList/>

<img src ={ imageTwo } width="300px" alt="man"/>
   </div>
  );
}

export default App;
