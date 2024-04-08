import {Link} from "react-router-dom";

function Meal(props) {
    const {strMeal, idMeal, strMealThumb} = props;

    return (
        <div className="card">
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className="card-content">
                <span className="card-title">{strMeal}</span>
            </div>
            <div className="card-action">
                <Link to={`/meal/${idMeal}`} className="btn #ffc400 amber accent-3">
                    Watch recipe
                </Link>
            </div>
        </div>
    );
}

export {Meal};