import { registerRootComponent } from 'expo';

import App from './App';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import Ex3 from './Ex3';
import Ex4 from './Ex4';
import Ex5 from './Ex5'

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Ex5);
