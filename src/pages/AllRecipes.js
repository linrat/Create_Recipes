import React, {useContext, useRef} from 'react';
import Recipe from "../components/Recipe";
import Filter from "../components/Filter";
import mainContext from "../context/mainContext";

const AllRecipes = () => {

    const {getRecipe, getTitleFilter, getIngFilter, getTimeFilter} = useContext(mainContext)

    const filtered = getRecipe.filter(x => {
        if(getTitleFilter === "" && getIngFilter === "" && getTimeFilter === "") {
            return x
        }

        if(getTitleFilter.length > 0 && getIngFilter === "" && getTimeFilter === "") {
            // return x.title === getTitleFilter
            return x.title.toLowerCase().includes(getTitleFilter.toLowerCase())
        }
        if(getTitleFilter === "" && getIngFilter.length > 0 && getTimeFilter === "") {
            return x.ingredients.includes(getIngFilter)
        }
        if(getTitleFilter === "" && getIngFilter === "" && getTimeFilter.length > 0) {
            return x.time === getTimeFilter
        }

        if(getTitleFilter.length > 0 && getIngFilter.length > 0 && getTimeFilter === "") {
            return x.title.toLowerCase().includes(getTitleFilter.toLowerCase()) && x.ingredients.includes(getIngFilter)
        }
        if(getTitleFilter.length > 0 && getIngFilter === "" && getTimeFilter.length > 0) {
            return x.title.toLowerCase().includes(getTitleFilter.toLowerCase()) && x.time === getTimeFilter
        }
        if(getTitleFilter === "" && getIngFilter.length > 0 && getTimeFilter.length > 0) {
            return x.ingredients.includes(getIngFilter) && x.time === getTimeFilter
        }

        if(getTitleFilter.length > 0 && getIngFilter.length > 0 && getTimeFilter.length > 0) {
            return x.title.toLowerCase().includes(getTitleFilter.toLowerCase()) && x.ingredients.includes(getIngFilter) && x.time === getTimeFilter
        }
    }
)
    return (
        <div className="page">
            <Filter/>

            <div className="wrap">
                {filtered.map((x, i) => <Recipe key={i} index={i} item={x}/>
                )}
            </div>
        </div>
    );
};

export default AllRecipes;