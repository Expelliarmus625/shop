import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import Colors from "../constants/Colors";
import ProductDetailsScreen from "../screens/shop/ProductDetailsScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
import { Ionicons } from "@expo/vector-icons";

const defNavOpt = {
	headerTitleStyle: {
		fontFamily: "open-sans-bold"
	},
	headerTintColor: "white",
	headerStyle: {
		backgroundColor: Colors.accent
	}
};

const ProductsNavigator = createStackNavigator(
	{
		products: {
			screen: ProductOverviewScreen,
			navigationOptions: {
				title: "Products"
			}
		},
		Cart: {
			screen: CartScreen,
			navigationOptions: {
				title: "Your Cart"
			}
		},
		productDetails: ProductDetailsScreen
	},
	{
		navigationOptions: {
			drawerIcon: drawerConfig => (
				<Ionicons name='md-list' size={23} color={drawerConfig.tintColor} />
			)
		},
		defaultNavigationOptions: defNavOpt
	}
);

const OrdersNavigator = createStackNavigator(
	{
		Orders: OrdersScreen
	},
	{
		navigationOptions: {
			drawerIcon: drawerConfig => (
				<Ionicons name='md-cart' size={23} color={drawerConfig.tintColor} />
			)
		},
		defaultNavigationOptions: defNavOpt
	}
);

const ShopNavigator = createDrawerNavigator(
	{
		Products: ProductsNavigator,
		Orders: OrdersNavigator
	},
	{
		contentOptions: {
			activeTintColor: Colors.primary
		}
	}
);

export default createAppContainer(ShopNavigator);
