import { createStore } from "redux";
import productReducer from "./reducers/productReducer";
// import { legacy_createStore as createStore} from 'redux'

const store = createStore(productReducer);

export default store;
