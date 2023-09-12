import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import AsyncStorage from '@react-native-community/async-storage';

// Set up AsyncStorage as a global variable
global.storage = AsyncStorage;

AppRegistry.registerComponent(appName, () => App);
