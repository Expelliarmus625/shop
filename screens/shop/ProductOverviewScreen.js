import React, { useState } from "react";
import {
	Text,
	StyleSheet,
	View,
	FlatList,
	TouchableNativeFeedback
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import Colors from "../../constants/Colors";
import * as cartActions from "../../store/actions/cart";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";

const ProductOverviewScreen = props => {
	const products = useSelector(state => state.products.availableProducts);
	const dispatch = useDispatch();
	return (
		<View style={styles.screen}>
			<FlatList
				data={products}
				renderItem={itemData => (
					<ProductItem
						title={itemData.item.title}
						price={itemData.item.price}
						image={itemData.item.imageUrl}
						onViewDetail={() => {
							props.navigation.navigate("productDetails", {
								productId: itemData.item.id,
								productTitle: itemData.item.title
							});
						}}
						onAddToCart={() => {
							dispatch(cartActions.addToCart(itemData.item));
						}}
					/>
				)}
			/>
		</View>
	);
};

ProductOverviewScreen.navigationOptions = navData => {
	return {
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title='Cart'
					iconName='md-cart'
					onPress={() => {
						navData.navigation.navigate("Cart");
					}}
				/>
			</HeaderButtons>
		),
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title='Menu'
					iconName='md-menu'
					onPress={() => {
						navData.navigation.toggleDrawer();
					}}
				/>
			</HeaderButtons>
		)
	};
};

const styles = StyleSheet.create({
	screen: {
		backgroundColor: "white"
	}
});

export default ProductOverviewScreen;
