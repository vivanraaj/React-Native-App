// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';


// Create a component

// use const instead of function to make it immutable
// below want to render some text
// inside text, we write jsx - shorter for whole js codes
const App = () => {
    return (
        <Text>Some Text</Text>
    );
};


// Render it to the device
// 1st argument is folder, 2nd is the component
AppRegistry.registerComponent('albums', () => App);
