import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import mainContext from "../context/mainContext";

const Recipe = ({item, index}) => {

    const {getFavorite, setFavorite, getRecipe, setRecipe} = useContext(mainContext)
    const nav = useNavigate()

    function openRecipe() {
        nav("/recipe/"+item.url)
    }

    function addRecipe() {
        const rec = getFavorite.find(x => x.url === item.url)

        if (rec) {
        } else {
            setFavorite([...getFavorite, item])
        }
    }

    function deleteRecipe(index) {
        setRecipe(getRecipe.filter((x, i) => i !== index))
    }

    return (
        <div className="recipe">
            <img src={item.photo[0]} alt=""/>
            <h3>{item.title}</h3>
            <h5>Time: {item.time} min.</h5>
            <p>Ingredients: {item.ingredients.length}</p>
            <p>Preparation Steps: {item.steps.length}</p>
            <div className="btn open" onClick={openRecipe}>Open The Recipe</div>
            <div className="btn add" onClick={addRecipe}>Add To Favorites</div>
            <div className="btn delete" onClick={() => deleteRecipe(index)}>Delete</div>
        </div>
    );
};

export default Recipe;