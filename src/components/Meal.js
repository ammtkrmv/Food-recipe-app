import React, { useState } from "react";
import { useHttp } from "../hooks/http.hook";
import Mealitem from "./Mealitem";
const Meal=()=>{
    const { request } = useHttp()
    const[search,setSearch]=useState();
    const[Mymeal,setMeal]=useState();
    const searchMeal=(evt)=>{
        evt.preventDefault();
        request(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`) 
            .then((data)=>{
                setMeal(data.meals)
            })
    }
    return(
        <div className="main">
            <div className="heading">
                <h1>Search Your Food Recipe</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumpque temrore unde sed</h4>
            </div>
            <form onSubmit={searchMeal} className="searchBox">
                <input type="search" className="search-bar" placeholder="Enter food name" onChange={(e)=>setSearch(e.target.value)} value={search}>
                </input>
            </form>
            <div className="container">
                {
                    (Mymeal==null)? <p className="notFound">Not Found</p> :Mymeal.map((res)=>{
                        return(
                            <Mealitem data={res}/>
                        )
                    }) 
                }


                
            </div>
        </div>
    )
}
export default Meal;