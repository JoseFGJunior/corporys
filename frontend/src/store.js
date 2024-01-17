import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { tipoProdutoListReducer } from "./reducers/tipoProdutoReducer";
import { userLoginReducer } from "./reducers/userReducers";


const reducer = combineReducers({
    tipoProdutoList: tipoProdutoListReducer,
    userLogin: userLoginReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

export const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = configureStore({
    reducer: reducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middleware),
});

export default store;
