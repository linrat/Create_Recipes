import React, {useContext} from 'react';
import mainContext from "../context/mainContext";
import FavoriteItem from "../components/FavoriteItem";

const Favorites = () => {

    const {getFavorite} = useContext(mainContext)

    return (
        <div className="page">

            <h2>FAVORITE RECIPES</h2>

        <div className="wrap">
    {getFavorite.map ((x, i) =>  <FavoriteItem item={x} index={i} key={i}/>)}
        </div>

        </div>
    );
};

export default Favorites;