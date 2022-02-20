import React, {useContext} from 'react';
import mainContext from "../context/mainContext";
import Slider from "./Slider";


const SingleRecipe = ({single}) => {


    const {getFavorite, setFavorite} = useContext(mainContext)

    function addRecipe() {
        const rec = getFavorite.find(x => x.url === single.url)

        if (rec) {
        } else {
            setFavorite([...getFavorite, single])
        }
    }

    return (
            <div className="card single d-flex column">

                <div className="d-flex column">
                <h3>{single.title}</h3>
                <h5>Time: {single.time} min.</h5>
                </div>

            <div className="d-flex content">

                <div className="grow1">
                <img src={single.photo[0]} alt=""/>
                    {/*<Slider single={single}/>*/}
                </div>

                <div className="d-flex column grow1 mar-left">
                <div className="d-flex column">
                    <div><b>Ingredients ({single.ingredients.length}):</b></div>
                    <div>{single.ingredients.join(", ")}</div>
                </div>
                <br/>
                <div className="d-flex column">
                    <div><b>Preparation Steps ({single.steps.length}):</b></div>
                    <div>{single.steps.join(",\n")}</div>
                </div>
                </div>
            </div>

                <div className="btn add" onClick={addRecipe}>Add To Favorites</div>
            </div>
    );
};

export default SingleRecipe;