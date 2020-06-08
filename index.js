// Import a library to help create a component.
import React from 'react';
import {Text, AppRegistry, View} from 'react-native';
import {name as appName} from './app.json';
import Header from '../firstProject/src/components/Header';
import CardList from '../firstProject/src/components/CardList';

// Create a component.
const App = () => {
    return(
        <View>
            <Header headerText={"Yu-Gi-Oh"}/>
            <CardList />
        </View>
    );
};



// Render it to the device.
AppRegistry.registerComponent(appName, () => App);
