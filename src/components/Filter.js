import React, {useContext, useRef} from 'react';
import mainContext from "../context/mainContext";

const Filter = () => {

    const {setTitleFilter, setIngFilter, setIngAmountFilter, setTimeFilter} = useContext(mainContext)

    const titleRef = useRef()
    const ingRef = useRef()
    // const amountRef = useRef()
    const timeRef = useRef()


    function filter() {
        setTitleFilter(titleRef.current.value)
        setIngFilter(ingRef.current.value)
        // setIngAmountFilter(amountRef.current.value)
        setTimeFilter(timeRef.current.value)
    }

    return (
        <div className="d-flex f-inputs">
            <div className="by">Filter by:</div>
            <input type="text" ref={titleRef} placeholder="Recipe Title"/>
            <input type="text" ref={ingRef} placeholder="Ingredient"/>
            {/*<input type="text" ref={amountRef} placeholder="Ingredients Amount"/>*/}
            <input type="text" ref={timeRef} placeholder="Prep Time"/>
            <button className="filter" onClick={filter}>Filter</button>
        </div>
    );
};

export default Filter;