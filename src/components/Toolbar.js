import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import mainContext from "../context/mainContext";

const Toolbar = () => {

    const {getRecipe, getFavorite} = useContext(mainContext)

    const navAll = useNavigate()
    const navCreate = useNavigate()
    const navFav = useNavigate()

    function goAll() {
        navAll("/")
    }
    function goCreate() {
        navCreate("/create")
    }
    function goFav() {
        navFav("/favorites")
    }

    return (
        <div className="toolbar">

            <div className="d-flex space">
 <div className="link" onClick={goAll}>ALL RECIPES ({getRecipe.length})</div>
 <div className="link" onClick={goCreate}>CREATE RECIPE</div>
 <div className="link" onClick={goFav}>FAVORITES ({getFavorite.length})</div>
            </div>

        </div>
    );
};

export default Toolbar;