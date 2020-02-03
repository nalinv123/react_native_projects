import HomeComponent from './src/components/Home';
import AboutComponent from './src/components/About';
import ContactComponent from './src/components/Contact';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React, { Component } from 'react';

let mainNavigator = createStackNavigator({
    Home: { screen: HomeComponent },
    About: { screen: AboutComponent },
    Contact: { screen: ContactComponent }
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }
);

const AppContainer = createAppContainer(mainNavigator);

export default class App extends Component {

    render() {
        return <AppContainer />;
    }
}