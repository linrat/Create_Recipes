import React, {useState} from 'react';
import {useContext, useRef} from "react";
import mainContext from "../context/mainContext";
import {useNavigate} from "react-router-dom";

const CreateRecipePage = () => {

    const [getIngredient, setIngredient] = useState([])
    const [getStep, setStep] = useState([])
    const [getPhoto, setPhoto] = useState([])

    const {getRecipe, setRecipe} = useContext(mainContext)

    const nav = useNavigate()

    const titleRef = useRef()
    const timeRef = useRef()
    const ingRef = useRef()
    const stepsRef = useRef()
    const photoRef = useRef()

    function createRecipe() {
        const recipe = {
            title: titleRef.current.value,
            url: titleRef.current.value.replace(/ /g, "-"),
            time: timeRef.current.value,
            ingredients: getIngredient,
            steps: getStep,
            photo: getPhoto,
        }
        setRecipe([...getRecipe, recipe])
        setIngredient([])
        setStep([])
        setPhoto([])
        nav("/")
    }

    function addIngredient() {
        const ingredient = ingRef.current.value
        setIngredient([...getIngredient, ingredient])
        ingRef.current.value = ""
    }

    function addStep() {
        const step = stepsRef.current.value
        setStep([...getStep, step])
        stepsRef.current.value = ""
    }

    function addPhoto() {
        const photo = photoRef.current.value
        setPhoto([...getPhoto, photo])
        photoRef.current.value = ""
    }


    return (
        <div className="page">
            <h2>CREATE RECIPE</h2>

            <div className="card d-flex column">
                <h4 className="name">Title</h4>
                <input type="text" ref={titleRef}/>

                <h4 className="name">Preparation Time</h4>
                <input type="number" ref={timeRef} placeholder="minutes"/>

                <h4 className="name">Ingredients</h4>
                <input type="text" ref={ingRef}/>
                <button className="btn" onClick={addIngredient}>Add</button>

                <h4 className="name">Preparation Steps</h4>
                <input type="text" ref={stepsRef}/>
                <button className="btn" onClick={addStep}>Add</button>

                <h4 className="name">Add Photos</h4>
                <input type="text" ref={photoRef} placeholder="https://"/>
                <button className="btn" onClick={addPhoto}>Add</button>

                <div className="btn create" onClick={createRecipe}>CREATE RECIPE</div>
            </div>

        </div>
    );
};

export default CreateRecipePage;