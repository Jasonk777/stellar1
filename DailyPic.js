import React, { Component } from 'react';
import { Text, View } from 'react-native';


export default class DailyPicsScreen extends Compnent {
    render() {
        return(
        <View
        style={{
            flex:1,
            justifyContent: "center",
            alignItems: "center"
        }}>
       <Text>Daily Pic Screen</Text>
       </View>
        )
    }
}