import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps182898Navigator from '../features/Maps182898/navigator';
import Settings182876Navigator from '../features/Settings182876/navigator';
import Settings182861Navigator from '../features/Settings182861/navigator';
import NotificationList182860Navigator from '../features/NotificationList182860/navigator';
import Maps182859Navigator from '../features/Maps182859/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps182898: { screen: Maps182898Navigator },
Settings182876: { screen: Settings182876Navigator },
Settings182861: { screen: Settings182861Navigator },
NotificationList182860: { screen: NotificationList182860Navigator },
Maps182859: { screen: Maps182859Navigator },

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
