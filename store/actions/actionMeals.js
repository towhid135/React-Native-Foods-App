/*its just a constant variable, if we type "TOGGLE_FAVORITE" every time 
we might face typo, for avoiding typo we have stored it on a variable*/
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';


export const toggleFavorite = (id) =>{
    return {type:TOGGLE_FAVORITE,mealId:id}; 
};