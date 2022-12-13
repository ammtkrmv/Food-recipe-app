import React from "react";
import Meal from "./Meal";
const Mealitem=()=>{
    return(
        <>
            <div className="card">
                <img alt="" src="https://www.themealdb.com/images/media/meals/mlchx21564916997.jpg"></img>
                <div className="info">
                    <h2>Pancakes</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumpque temrore unde sed. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumpque temrore unde sed. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumpque temrore unde sed</p>
                </div>
                <div className="recipe">
                    <h2>Recipe</h2>
                    <img alt="" src="https://www.themealdb.com/images/media/meals/mlchx21564916997.jpg"></img>
                    <a href="https://www.youtube.com/watch?v=IEDEtZ4UVtI">Watch video</a>
                </div>
            </div>
        </>
    )
}
export default Mealitem; 