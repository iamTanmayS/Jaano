/**
 * @format
 */
import 'react-native-gesture-handler'
import "./src/Navigation/gesture-handler.native"
import "./src/Navigation/gesture-handler"
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
