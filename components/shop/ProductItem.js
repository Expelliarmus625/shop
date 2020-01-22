// Props : image, title, price, onViewDetail, onAddToCart


import { StyleSheet, View, Text, Image, Button } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

const ProductItem = props => {
	return (
		<View style={styles.product}>
			<TouchableNativeFeedback onPress={props.onSelect}>
				<Image style={styles.image} source={{ uri: props.image }} />
				<View style={styles.detail}>
					<Text style={styles.title}>{props.title}</Text>
					<Text style={styles.price}>{props.price.toFixed(2)}</Text>
				</View>
				<View style={styles.actions}>
					{props.children}
				</View>
			</TouchableNativeFeedback>
		</View>
	);
};

const styles = StyleSheet.create({
	product: {
		borderColor: "#b5b5b5",
		borderWidth: 1,
		borderRadius: 10,
		backgroundColor: "white",
		height: 300,
		marginTop: 20,
		marginHorizontal: 20,
		overflow: "hidden",
		backgroundColor: "#efefef"
	},
	image: {
		width: "100%",
		height: "60%",
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20
	},
	title: {
		fontFamily: "open-sans-bold",
		fontSize: 18,
		marginVertical: 4
	},
	price: {
		fontFamily: "open-sans",
		fontSize: 14,
		color: "#888"
	},
	actions: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		height: "25%",
		paddingHorizontal: 30
	},
	detail: {
		alignItems: "center",
		height: "15%",
		padding: 10
	}
});

export default ProductItem;
