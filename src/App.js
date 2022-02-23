import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemCategoryContainer from './components/ItemCategoryContainer/ItemCategoryContainer';

function App() {
  

  return (
    <div className="App , Container">
      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path='/' element= {<ItemListContainer />}/>
      <Route path='/category/:productCategory' element={<ItemCategoryContainer />}/>
      <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
