export const initialState ={
    basket: [],
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount,item) => item.price + amount, 0)

const reducer = (state, action) => {
    console.log(action)
    switch (action.type){
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newsBasket =[...state.basket];

            if (index >= 0){
                newsBasket.splice(index, 1)
            }else{
                console.warn(`Can't remove the item that you selected`)
            }

            return {
                ...state,
                basket: newsBasket
            }

        default:
            return state;
    }
};

export default reducer;