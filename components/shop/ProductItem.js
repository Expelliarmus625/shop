import { StyleSheet, View, Text, Image, Button } from "react-native";
import React from 'react';
import Colors from "../../constants/Colors";


const ProductItem = props => {
    return (
        <View style = {styles.product}>
            <Image style = {styles.image} source = {{uri : props.image}}/>
            <View style = {styles.detail}>
                <Text style = {styles.title}>{props.title}</Text>
                <Text style = {styles.price}>{props.price.toFixed(2)}</Text>
            </View>
            <View style = {styles.actions}>
                <Button color = {Colors.accent} title = 'View Details' onPress = {props.onViewDetail}/>
                <Button color = {Colors.accent} title = 'To Cart' onPress = {props.onAddToCart}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    product : {
        borderColor : '#b5b5b5',
        borderWidth : 1,
        borderRadius : 10,
        backgroundColor : 'white',
        height : 300,
        marginTop : 10,
        marginHorizontal : 10,
        overflow : 'hidden'
    },
    image : {
        width : '100%',
        height : '60%'
    },
    title : {
        fontSize : 18,
        marginVertical : 4
    } ,
    price : {
        fontSize : 14,
        color : '#888'
    },
    actions : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        height : '25%',
        paddingHorizontal : 30
    },
    detail : {
        alignItems : 'center',
        height : '15%',
        padding : 10
    }
});

export default ProductItem;