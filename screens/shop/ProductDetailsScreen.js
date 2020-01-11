import {
	StyleSheet,
	View,
	Text,
	Image,
	Button,
	ScrollView
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";

const ProductDetailsScreen = props => {
	const prodId = props.navigation.getParam("productId");
	const selectedProd = useSelector(state =>
		state.products.availableProducts.find(item => item.id === prodId)
	);
	return (
		<View>
			<Text>{selectedProd.title}</Text>
		</View>
    );
};

ProductDetailsScreen.navigationOptions = navData => {
    return{
        headerTitle : navData.navigation.getParam('productTitle')
    };
};

const styles = StyleSheet.create({});

export default ProductDetailsScreen;
