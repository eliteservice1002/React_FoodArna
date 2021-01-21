import { createStore } from 'redux';
import Public from './../reducers/public';
const store = createStore(
    Public
);
export default store;