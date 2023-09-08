import { createStore } from 'redux';
import rootReducer from './reducers/reducer.js'; // Annahme: Dein Root-Reducer ist in der "reducers" Datei

// Erstelle den Redux-Store
const store = createStore(rootReducer);

export default store;