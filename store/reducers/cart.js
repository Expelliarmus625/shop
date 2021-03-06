import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
import {ADD_ORDER } from '../actions/orders';
import CartItem from "../../models/cart-item";
import { DELETE_PRODUCT } from "../actions/products";

const initialState = {
	items: {},
	totalAmount: 0
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			const addedProduct = action.product;
			const prodPrice = addedProduct.price;
			const prodTitle = addedProduct.title;

			if (state.items[addedProduct.id]) {
				const updatedCartItems = new CartItem(
					state.items[addedProduct.id].quantity + 1,
					prodPrice,
					prodTitle,
					state.items[addedProduct.id].sum + prodPrice
				);
				return {
					...state,
					items: {
						...state.items,
						[addedProduct.id]: updatedCartItems
					},
					totalAmount: state.totalAmount + prodPrice
				};
			} else {
				const newCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
				return {
					...state,
					items: { ...state.items, [addedProduct.id]: newCartItem },
					totalAmount: state.totalAmount + prodPrice
				};
			}
		case REMOVE_FROM_CART:
			const selectedItem = state.items[action.prodId];
			const currQty = selectedItem.quantity;
			let updatedCartItems;
			if (currQty > 1) {
				const updatedCartItem = new CartItem(
					selectedItem.quantity - 1,
					selectedItem.productPrice,
					selectedItem.productTitle,
					selectedItem.sum - selectedItem.productPrice
				);
				updatedCartItems = { ...state.items, [action.prodId]: updatedCartItem };
			} else {
				updatedCartItems = { ...state.items };
				delete updatedCartItems[action.prodId];
			}
			return {
				...state,
				items : updatedCartItems,
				totalAmount : state.totalAmount - selectedItem.productPrice
			};

		case ADD_ORDER :
			return initialState;

		case DELETE_PRODUCT : 
			if(!state.items[action.pid]){
				return state;
			}
			const updatedItems = {...state.items};
			itemTotal = state.items[action.pid].sum;
			delete updatedItems[action.pid];
			return{
				...state,
				items : updatedItems,
				totalAmount : state.totalAmount - itemTotal
			}
	}
	return state;
};
