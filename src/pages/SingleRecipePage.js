import React, {useContext} from 'react';
import mainContext from "../context/mainContext";
import {useParams} from "react-router-dom";
import SingleRecipe from "../components/SingleRecipe";

const SingleRecipePage = ({getPhoto}) => {

    const {getRecipe} = useContext(mainContext)
    const {url} = useParams()
    const single = getRecipe.find(x => x.url === url)

    return (
        <div className="page">
            <SingleRecipe single={single}/>
        </div>

    );
};

export default SingleRecipePage;