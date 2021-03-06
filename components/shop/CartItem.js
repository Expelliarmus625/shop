import React from "react";
import { StyleSheet, Text, View, TouchableNativeFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CartItem = props => {
	return (
		<View style={styles.cartItem}>
			<View style={styles.itemData}>
				<Text style={styles.qty}>{props.quantity} </Text>
				<Text style={styles.title}>{props.title}</Text>
			</View>
			<View style={styles.itemData}>
				<Text style={styles.amount}>{props.amount}</Text>
				{props.deletable && <TouchableNativeFeedback
					onPress={props.onRemove}
					style={styles.deleteButton}
				>
					<Ionicons name='md-close' size={23} color='red' />
				</TouchableNativeFeedback>}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	cartItem: {
		padding: 10,
		backgroundColor: "rgba(255,255,255,0)",
		flexDirection: "row",
		justifyContent: "space-between",
		marginHorizontal: 20
	},
	itemData: {
		flexDirection: "row",
		alignItems: "center"
	},
	qty: {
		fontFamily: "open-sans",
		color: "#888",
		fontSize: 16
	},
	title: {
		fontSize: "open-sans-bold",
		fontSize: 16,
		color: "black"
	},
	amount: {
		fontSize: "open-sans-bold",
		fontSize: 16,
		marginRight: 10,
		color: "#888"
	},
	deleteButton: {
		marginLeft: 20
	}
});

export default CartItem;
