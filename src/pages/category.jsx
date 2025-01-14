import {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import { getFilteredCategory } from "./api";

import { Preloader } from "../components/preloader";
import {MealList} from "../components/meallist";

function Category() {
    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals));
    }, [name]);

    return (
        <>
            <h1>Category</h1>
            <button className="btn #ffc400 amber accent-3" onClick={goBack}>
                Go Back
            </button>
            {!meals.length ? <Preloader/> : <MealList meals={meals} />}
        </>
    );
}

export {Category};