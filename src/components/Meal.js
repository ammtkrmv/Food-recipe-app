import React from "react";
import Mealitem from "./Mealitem";
const Meal=()=>{
    return(
        <div className="main">
            <div className="heading">
                <h1>Search Your Food Recipe</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumpque temrore unde sed</h4>
            </div>
            <div className="searchBox">
                <input type="search" className="search-bar" placeholder="Enter food name">
                </input>
            </div>
            <div className="container">
                <Mealitem/>
            </div>
        </div>
    )
}
export default Meal;