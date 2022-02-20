import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import mainContext from "./context/mainContext";
import Toolbar from "./components/Toolbar";
import CreateRecipePage from "./pages/CreateRecipePage";
import AllRecipes from "./pages/AllRecipes";
import Favorites from "./pages/Favorites";
import SingleRecipePage from "./pages/SingleRecipePage";
import {useState} from "react";

function App() {

    const [getRecipe, setRecipe] = useState([])
    const [getFavorite, setFavorite] = useState([])
    const [getTitleFilter, setTitleFilter] = useState("")
    const [getIngFilter, setIngFilter] = useState("")
    const [getIngAmountFilter, setIngAmountFilter] = useState("")
    const [getTimeFilter, setTimeFilter] = useState("")

  return (
    <div className="App">
        <mainContext.Provider value={{getRecipe, setRecipe, getFavorite, setFavorite, getTitleFilter, setTitleFilter, getIngFilter, setIngFilter, getIngAmountFilter, setIngAmountFilter, getTimeFilter, setTimeFilter}}>

<BrowserRouter>
    <Toolbar/>
    <Routes>
        <Route path="/" element={<AllRecipes/>}/>
        <Route path="/recipe/:url" element={<SingleRecipePage/>}/>
        <Route path="/create" element={<CreateRecipePage/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
    </Routes>

</BrowserRouter>

    </mainContext.Provider>
    </div>
  );
}

export default App;
