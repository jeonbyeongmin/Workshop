import reducers from '../reducers';
import {createStore} from 'redux';
import { exp } from 'react-native-reanimated';

export default function initStore (){
    const store = createStore (reducers);
    return store;
}