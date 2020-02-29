import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import React, { Component } from 'react';
import { createStore } from 'redux';
import reducer from './src/reducer/reducer';
import { Provider } from 'react-redux';
import MainComponent from './src/component/Main';
import SearchComponet from './src/component/Farmer/Search';
import DealerLoginComponet from './src/component/Dealer/Login';
import DealerRegisterComponent from './src/component/Dealer/Register';
import SearchResultsComponent from './src/component/Farmer/SearchResults';
import DealerHome from './src/component/Dealer/Home';

const AppNavigator = createStackNavigator({
  Main: {
    screen: MainComponent,
  },
  CropSearch: {
    screen: SearchComponet
  },
  DealerLogin: {
    screen: DealerLoginComponet
  },
  DealerRegister: {
    screen: DealerRegisterComponent
  },
  CropSearchResults: {
    screen: SearchResultsComponent
  },
  DealerHome: {
    screen: DealerHome
  },
  initialRouteName: 'Main'
});

const store = createStore(reducer);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return ( 
      <Provider store = { store }>
        <AppContainer />
      </Provider>
    )
  }
}