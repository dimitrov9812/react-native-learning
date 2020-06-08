// Import a library to help create a component.
import React from 'react';
import {Text, AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Header from '../firstProject/src/components/Header';

// Create a component.
const App = () => {
    return(
        <>
            <Header headerText={"Yu-Gi-Oh"}/>
            <Text>Outside Header</Text>
        </>
    )
}



// Render it to the device.
AppRegistry.registerComponent(appName, () => App);
