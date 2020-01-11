import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import Colors from "../constants/Colors";
import ProductDetailsScreen from "../screens/shop/ProductDetailsScreen";

const ProductsNavigator = createStackNavigator(
	{
		products: {
			screen : ProductOverviewScreen,
			navigationOptions : {
				title : 'Products'
			},
		},
		productDetails : ProductDetailsScreen
	},
	{
		defaultNavigationOptions: {
			headerTitleStyle : {
				fontFamily : 'open-sans-bold'
			},
			headerTintColor: "white",
			headerStyle: {
				backgroundColor: Colors.accent
			}
		}
	}
);

export default createAppContainer(ProductsNavigator);
