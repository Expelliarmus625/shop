import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../../constants/Colors";
import CartItem from "../../components/shop/CartItem";
import * as cartActions from "../../store/actions/cart";
import * as ordersActions from "../../store/actions/orders";

const CartScreen = props => {
	const cartTotalAmount = useSelector(state => state.cart.totalAmount);
	const cartItems = useSelector(state => {
		const cartItemsArr = [];
		for (const key in state.cart.items) {
			cartItemsArr.push({
				productId: key,
				productTitle: state.cart.items[key].productTitle,
				productPrice: state.cart.items[key].productPrice,
				quantity: state.cart.items[key].quantity,
				sum: state.cart.items[key].sum
			});
		}
		return cartItemsArr;
	});
	const dispatch = useDispatch();
	return (
		<View style={styles.screen}>
			<View style={styles.summary}>
				<Text style={styles.summaryText}>
					Total:
					<Text style={styles.amount}> ${cartTotalAmount.toFixed(2)}</Text>
				</Text>
				<Button
					color={Colors.accent}
					title='Order Now'
					onPress={() => {
						dispatch(ordersActions.addOrder(cartItems, cartTotalAmount));
					}}
				/>
			</View>
			<View>
				<FlatList
					data={cartItems}
					keyExtractor={item => item.productId}
					renderItem={itemData => (
						<CartItem
							quantity={itemData.item.quantity}
							title={itemData.item.productTitle}
							amount={itemData.item.sum}
							deletable
							onRemove={() => {
								dispatch(cartActions.removeFromCart(itemData.item.productId));
							}}
						/>
					)}
				/>
			</View>
		</View>
	);
};

CartScreen.navigationOptions = {
    headerTitle : 'Your Cart '
}

const styles = StyleSheet.create({
	screen: {
		margin: 20
	},
	summary: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 20,
		padding: 10,
		borderColor: "#ccc",
		borderRadius: 10,
		borderWidth: 1
	},
	summaryText: {
		fontFamily: "open-sans-bold",
		fontSize: 18
	},
	amount: {
		color: Colors.accent
	}
});

export default CartScreen;
