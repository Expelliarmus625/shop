import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import { FlatList, Button } from "react-native";
import Colors from "../../constants/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";
const UserProductsScreen = props => {
	const products = useSelector(state => state.products.userProducts);

	return (
		<FlatList
			data={products}
			keyExtractor={item => item.id}
			renderItem={itemData => (
				<ProductItem
					image={itemData.item.imageUrl}
					title={itemData.item.title}
					price={itemData.item.price}
					onSelect={() => {}}
				>
					<Button
						color={Colors.accent}
						title='Edit'
						onPress={() => {}}
					/>
					<Button
						color={Colors.accent}
						title='Delete'
						onPress={() => {}}
					/>
				</ProductItem>
			)}
		/>
	);
};

UserProductsScreen.navigationOptions = navData => {
	return {
		headerTitle: "Your Products",
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

export default UserProductsScreen;
