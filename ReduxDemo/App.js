import { createStackNavigator } from 'react-navigation-stack';
import HomeComponent from './src/components/Home';
import { createAppContainer } from 'react-navigation';
import FriendsComponets from './src/components/Friends';
import React, { Component } from 'react';
import { createStore } from 'redux';
import FriendReducer from './src/reducer/FriendReducer';
import { Provider } from 'react-redux';

const AppNavigator = createStackNavigator({
  Home: { screen: HomeComponent },
  Friends: { screen: FriendsComponets }
});

const AppContainer = createAppContainer(AppNavigator);

// Creating a redux store from a reducer.
const store = createStore(FriendReducer)

export default class App extends Component {

  render() {
      return (
        // Provider is a component which provides the redux store to whole application.
        <Provider store = { store }>
          <AppContainer />
        </Provider>
      )
  }
}