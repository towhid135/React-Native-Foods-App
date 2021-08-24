import {MEALS} from "../../data/dummy-data"
import { TOGGLE_FAVORITE } from "../actions/actionMeals";
import {SET_FILTERS} from '../actions/actionMeals'
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

        case SET_FILTERS:
            const appliedFilters = action.filters
            const filteredMeals = state.meals.filter((meal) => {
                if(appliedFilters.isGlutenFree && !meal.isGlutenFree ) return false;
                if(appliedFilters.isLactoseFree && !meal.isLactoseFree) return false;
                if(appliedFilters.vegan && !meal.isVegan) return false;
                if(appliedFilters.vegetarian && !meal.isVegetarian) return false;
                else return true;
            })
            return {...state,filteredMeals: filteredMeals};
    
        default:
            return state;
    }
};

export default mealsReducer;