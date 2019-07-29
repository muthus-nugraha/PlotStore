import {
  Platform
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import Home from './containers/HomeScreen.js';

const Routes = {
  Home: {
    name: 'Home', 
    navigationOptions: {
      header: null,
    },
    screen: Home,
  },
};


export default AppNavigator = StackNavigator(
  {
    ...Routes,
  },
  {
    headerMode: 'screen',
    mode: 'card',
    navigationOptions: {
      headerTitleStyle: {
        color: "#FF0000",
        alignSelf: 'center',
        fontSize: 16,
      },
      headerStyle: {
        borderBottomWidth: 0,
        borderBottomColor: "#00FF00",
      },
    },
    initialRouteName: 'Home',
  }
);