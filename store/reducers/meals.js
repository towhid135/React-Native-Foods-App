import {MEALS} from "../../data/dummy-data"
import { TOGGLE_FAVORITE } from "../actions/actionMeals";
const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
}

const mealsReducer = (state = initialState , action) =>{
    //console.log('inside switch case toggle_favorite');
    switch (action.type) {
        case TOGGLE_FAVORITE:
            //console.log('Inside toogle_favorite');
            const existingIndex = state.favoriteMeals.findIndex((favMeal) => action.mealId === favMeal.id);
            if (existingIndex >= 0) {
                //console.log('removing favorite');
                const updatedFavMeals = [...state.favoriteMeals];
                updatedFavMeals.splice(existingIndex,1);
                return {...state,favoriteMeals: updatedFavMeals}
            }
            else{
                //console.log('adding favorite');
                const meal = state.meals.find((curMeal) => curMeal.id === action.mealId);
                return {...state,favoriteMeals: state.favoriteMeals.concat(meal) }
            }
    
        default:
            return state;
    }
};

export default mealsReducer;