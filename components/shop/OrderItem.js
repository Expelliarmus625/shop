import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import CartItem from "./CartItem";
import Colors from "../../constants/Colors";
const OrderItem = props => {
	return (
		<View style={styles.orderItem}>
			<View style={styles.summary}>
				<Text style={styles.totalAmount}>${props.amount}</Text>
				<Text style={styles.date}>{props.date}</Text>
			</View>
			<Button color={Colors.accent} title='Show Details' />
		</View>
	);
};

const styles = StyleSheet.create({
	orderItem: {
		borderColor: "#b5b5b5",
		borderWidth: 1,
		borderRadius: 10,
		backgroundColor: "white",
        height: 100,
        justifyContent : 'space-between',
        alignItems : 'center',
		marginTop: 20,
		marginHorizontal: 20,
		overflow: "hidden",
        backgroundColor: "#efefef",
        padding : 10,
	},
	summary: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%"
	},
	totalAmount: {
		fontFamily: "open-sans-bold",
		fontSize: 16
	},
	date: {
		fontSize: 16,
		fontFamily: "open-sans"
	}
});

export default OrderItem;
