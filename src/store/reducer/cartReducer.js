
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART,
    REMOVE_SINGLE_ITEM_FROM_CART,
} from '../action/cartAction';

const localStorageCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

const initialState = {
    cartItems: localStorageCartItems,
};
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const existingItemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.item.id
            );

            if (existingItemIndex !== -1) {
                const updatedCartItemsAdd = [...state.cartItems];
                updatedCartItemsAdd[existingItemIndex].quantity += action.payload.quantity;
                localStorage.setItem('cartItems', JSON.stringify(updatedCartItemsAdd));

                return {
                    ...state,
                    cartItems: updatedCartItemsAdd,
                };
            } else {
                const newCartItems = [...state.cartItems, action.payload];
                localStorage.setItem('cartItems', JSON.stringify(newCartItems));

                return {
                    ...state,
                    cartItems: newCartItems,
                };
            }

        case REMOVE_FROM_CART:
            const updatedCartItemsRemove = state.cartItems.filter(
                (item) => item.id !== action.payload
            );
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItemsRemove));

            return {
                ...state,
                cartItems: updatedCartItemsRemove,
            };

        case CLEAR_CART:
            localStorage.removeItem('cartItems');
            return {
                ...state,
                cartItems: [],
            };
        case REMOVE_SINGLE_ITEM_FROM_CART:
            const updatedCartItemsSingle = state.cartItems.filter(
                (cartItem) => cartItem.item.id !== action.payload
            );
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItemsSingle));

            return {
                ...state,
                cartItems: updatedCartItemsSingle,
            };

        default:
            return state;
    }
};

export default cartReducer;
