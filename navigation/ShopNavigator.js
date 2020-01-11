import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen'
import Colors from '../constants/Colors';

const ProductsNavigator = createStackNavigator({
    products : ProductOverviewScreen
},
{
    defaultNavigationOptions : {
        headerTintColor : 'white',
        headerStyle : {
            backgroundColor : Colors.accent
        },
    }
}); 

export default createAppContainer(ProductsNavigator);