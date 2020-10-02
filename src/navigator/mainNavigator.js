import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps5123002Navigator from '../features/Maps5123002/navigator';
import Messaging6123001Navigator from '../features/Messaging6123001/navigator';
import Settings7123000Navigator from '../features/Settings7123000/navigator';
import Tutorial9122998Navigator from '../features/Tutorial9122998/navigator';
import CalendarView10122997Navigator from '../features/CalendarView10122997/navigator';
import BlankScreen0122996Navigator from '../features/BlankScreen0122996/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps5123002: { screen: Maps5123002Navigator },
Messaging6123001: { screen: Messaging6123001Navigator },
Settings7123000: { screen: Settings7123000Navigator },
Tutorial9122998: { screen: Tutorial9122998Navigator },
CalendarView10122997: { screen: CalendarView10122997Navigator },
BlankScreen0122996: { screen: BlankScreen0122996Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
