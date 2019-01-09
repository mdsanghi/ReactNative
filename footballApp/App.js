

import {createStackNavigator,createAppContainer } from 'react-navigation';
import frmHome from './components/Forms/frmHome';
import frmDetail from './components/Forms/frmDetail';

const RootStack = createStackNavigator(
  {
    Home: frmHome,
    Details: frmDetail,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fcf',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

export default createAppContainer(RootStack);