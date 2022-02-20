import React, {useContext} from 'react';
import mainContext from "../context/mainContext";

const FavoriteItem = ({item, index}) => {

    const {getFavorite, setFavorite} = useContext(mainContext)

    function deleteRecipe(index) {
        setFavorite(getFavorite.filter((x, i) => i !== index))
    }

    return (
        <div>
            <div className="recipe">
                <img className="photo" src={item.photo} alt=""/>
                <h3>{item.title}</h3>
                <h5 className="mar0">Time: {item.time} min.</h5>
                <p>Ingredients: {item.ingredients.length}</p>
                <p>Preparation Steps: {item.steps.length}</p>
                <div className="btn delete" onClick={() => deleteRecipe(index)}>Delete</div>
            </div>
        </div>
    );
};

export default FavoriteItem;