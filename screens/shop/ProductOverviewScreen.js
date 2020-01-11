import React from "react";
import {
	Text,
	StyleSheet,
	View,
	FlatList,
	TouchableNativeFeedback
} from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import Colors from '../../constants/Colors';

const ProductOverviewScreen = props => {
	const products = useSelector(state => state.products.availableProducts);
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
							onAddToCart={() => {}}
						/>
				)}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	screen: {
		backgroundColor: 'white'
	}
});

export default ProductOverviewScreen;
