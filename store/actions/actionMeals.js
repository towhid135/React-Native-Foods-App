/*its just a constant variable, if we type "TOGGLE_FAVORITE" every time 
we might face typo, for avoiding typo we have stored it on a variable*/
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';


export const toggleFavorite = (id) =>{
    return {type:TOGGLE_FAVORITE,mealId:id}; 
};

export const setFilters = filterSettings =>{
    return {type:SET_FILTERS, filters: filterSettings};
}