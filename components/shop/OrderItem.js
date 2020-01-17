import React, { useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import CartItem from "./CartItem";
import Colors from "../../constants/Colors";

const OrderItem = props => {
	const [showDetails, setShowDetails] = useState(false);

	return (
		<View style={styles.orderItem}>
			<View style={styles.summary}>
				<Text style={styles.totalAmount}>${props.amount.toFixed(2)}</Text>
				<Text style={styles.date}>{props.date}</Text>
			</View>
			<Button
				color={Colors.accent}
				title={showDetails ? "Hide Details" : "Show Details"}
				onPress={() => {
					setShowDetails(prevState => !prevState);
				}}
			/>
			{showDetails && (
				<View style={styles.detailItems}>
					{props.items.map(item => (
						<CartItem
							key={item.productId}
							quantity={item.quantity}
							amount={item.sum}
							title={item.productTitle}
						/>
					))}
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	orderItem: {
		borderColor: "#b5b5b5",
		borderWidth: 1,
		borderRadius: 10,
		backgroundColor: "white",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 20,
		marginHorizontal: 20,
		overflow: "hidden",
		backgroundColor: "#efefef",
		padding: 10
	},
	detailItems: {
		width: "100%"
	},
	summary: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		margin: 10
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
