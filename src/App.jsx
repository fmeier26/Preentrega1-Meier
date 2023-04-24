import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';



function App() {
  return (
    <div className="App">
        <Navbar />
        <ItemListContainer Bienvenido={"Bienvenidos"}/>
<ItemCount initial={1} stock={10} onAdd={(quantity) => console.log ("Cantidad Agregada ", quantity)}/>
     
         </div>
  );
}

export default App;
