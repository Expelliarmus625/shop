import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ShopNavigator from "./navigation/ShopNavigator";
import { createStore, combineReducers } from "redux";
import { Provider, useSelector } from "react-redux";
import productsReducer from "./store/reducers/products";
import cartReducer from "./store/reducers/cart";
import ordersReducer from "./store/reducers/orders";
import { AppLoading } from "expo";
import * as Font from "expo-font";

const rootReducer = combineReducers({
	products: productsReducer,
	cart: cartReducer,
	orders: ordersReducer
});

const store = createStore(rootReducer);
const fetchFonts = () => {
	return Font.loadAsync({
		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
	});
};

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);

	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => {
					setFontLoaded(true);
				}}
				onError={() => {
					console.log("errer");
				}}
			/>
		);
	}
	return (
		<Provider store={store}>
			<ShopNavigator />
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
