export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const REMOVE_SINGLE_ITEM_FROM_CART = 'REMOVE_SINGLE_ITEM_FROM_CART';

export const addToCart = (item) => {
    debugger
    return {
        type: ADD_TO_CART,
        payload: {
            item,
            quantity: 1,
        },
    };
};

export const removeFromCart = (itemId) => {
    return {
        type: REMOVE_FROM_CART,
        payload: itemId,
    };
};

export const clearCart = () => {
    localStorage.removeItem('cartItems'); 
    return {
        type: CLEAR_CART,
    };
};

export const removeSingleItemFromCart = (itemId) => {
    
    return {
        type: REMOVE_SINGLE_ITEM_FROM_CART,
        payload: itemId,
    };
};
