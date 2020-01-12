import {
	StyleSheet,
	View,
	Text,
	Image,
	Button,
	ScrollView
} from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import Colors from "../../constants/Colors";
import * as cartActions from '../../store/actions/cart';

const ProductDetailsScreen = props => {
	const prodId = props.navigation.getParam("productId");
	const dispatch = useDispatch();
	const selectedProd = useSelector(state =>
		state.products.availableProducts.find(item => item.id === prodId)
	);
	return (
		<ScrollView>
			<Image style={styles.image} source={{ uri: selectedProd.imageUrl }} />
			<View style = {styles.actions}>
				<Button color={Colors.accent} title='Add to Cart' onPress={() => {
					dispatch(cartActions.addToCart(selectedProd));
				}} />
			</View>
			<Text style={styles.price}>${selectedProd.price}</Text>
			<Text style={styles.description}>{selectedProd.description}</Text>
		</ScrollView>
	);
};

ProductDetailsScreen.navigationOptions = navData => {
	return {
		headerTitle: navData.navigation.getParam("productTitle")
	};
};

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 300
	},
	price: {
        fontFamily : 'open-sans-bold',
		fontSize: 20,
		color: "#888",
		textAlign: "center",
		marginVertical: 20
    },
    actions : {
        marginVertical : 10,
        alignItems : 'center'
    },
	description: {
        fontFamily : 'open-sans',
		fontSize: 14,
        textAlign: "center",
        marginHorizontal : 20 
	}
});

export default ProductDetailsScreen;
