import * as React from 'react';
import {
    View, StyleSheet,
} from 'react-native'

export const cardHeight = 250;
export const cardTitle = 45;
export const cardPadding = 10;


type CardProps = {
    name: String,
    color: String,
    price: String,
    style: StyleSheet
}

export default class Card extends React.Component<CardProps>{


    render() {
        const { color } = this.props;
        return (
            <View style={[styles.card, { backgroundColor: color }]}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        height: cardHeight,
        borderRadius: 10
    }
})