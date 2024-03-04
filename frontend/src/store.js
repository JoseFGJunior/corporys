import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {
    tipoProdutoListReducer,
    tipoProdutoCreateReducer,
    tipoProdutoDeleteReducer,
    tipoProdutoDetailsReducer,
    tipoProdutoUpdateReducer,
} from "./reducers/tipoProdutoReducer";
import {
    almoxarifadoCreateReducer,
    almoxarifadoDeleteReducer,
    almoxarifadoDetailsReducer,
    almoxarifadoListReducer,
    almoxarifadoUpdateReducer,
} from "./reducers/almoxarifadoReducers";
import {
    clienteCreateReducer,
    clienteDeleteReducer,
    clienteDetailsReducer,
    clienteListReducer,
    clienteUpdateReducer,
} from "./reducers/clienteReducers";
import {
    empresaCreateReducer,
    empresaDeleteReducer,
    empresaDetailsReducer,
    empresaListReducer,
    empresaUpdateReducer,
} from "./reducers/empresaReducers";
import {
    produtoCreateReducer,
    produtoDeleteReducer,
    produtoDetailsReducer,
    produtoListReducer,
    produtoUpdateReducer,
} from "./reducers/produtoReducers";
import {
    subclasseProdutoCreateReducer,
    subclasseProdutoDeleteReducer,
    subclasseProdutoDetailsReducer,
    subclasseProdutoListReducer,
    subclasseProdutoUpdateReducer,
} from "./reducers/subclasseProdutoReducers";
import {
    classeProdutoCreateReducer,
    classeProdutoDeleteReducer,
    classeProdutoDetailsReducer,
    classeProdutoListReducer,
    classeProdutoUpdateReducer,
} from "./reducers/classeProdutoReducers";
import {
    movimentacaoEstoqueCreateReducer,
    movimentacaoEstoqueDeleteReducer,
    movimentacaoEstoqueDetailsReducer,
    movimentacaoEstoqueListReducer,
    movimentacaoEstoqueUpdateReducer,
} from "./reducers/movimentacaoEstoqueReducers";
import { tipoMovimentacaoEstoqueListReducer } from "./reducers/tipoMovimentacaoEstoqueReducers";
import { userLoginReducer } from "./reducers/userReducers";
import { cepFetchReducer } from "./reducers/cepReducers";

const reducer = combineReducers({
    tipoProdutoList: tipoProdutoListReducer,
    tipoProdutoDetails: tipoProdutoDetailsReducer,
    tipoProdutoCreate: tipoProdutoCreateReducer,
    tipoProdutoUpdate: tipoProdutoUpdateReducer,
    tipoProdutoDelete: tipoProdutoDeleteReducer,
    almoxarifadoList: almoxarifadoListReducer,
    almoxarifadoDetails: almoxarifadoDetailsReducer,
    almoxarifadoCreate: almoxarifadoCreateReducer,
    almoxarifadoUpdate: almoxarifadoUpdateReducer,
    almoxarifadoDelete: almoxarifadoDeleteReducer,
    clienteList: clienteListReducer,
    clienteDetails: clienteDetailsReducer,
    clienteCreate: clienteCreateReducer,
    clienteUpdate: clienteUpdateReducer,
    clienteDelete: clienteDeleteReducer,
    empresaList: empresaListReducer,
    empresaDetails: empresaDetailsReducer,
    empresaCreate: empresaCreateReducer,
    empresaUpdate: empresaUpdateReducer,
    empresaDelete: empresaDeleteReducer,
    produtoList: produtoListReducer,
    produtoDetails: produtoDetailsReducer,
    produtoCreate: produtoCreateReducer,
    produtoUpdate: produtoUpdateReducer,
    produtoDelete: produtoDeleteReducer,
    subclasseProdutoList: subclasseProdutoListReducer,
    subclasseProdutoDetails: subclasseProdutoDetailsReducer,
    subclasseProdutoCreate: subclasseProdutoCreateReducer,
    subclasseProdutoUpdate: subclasseProdutoUpdateReducer,
    subclasseProdutoDelete: subclasseProdutoDeleteReducer,
    classeProdutoList: classeProdutoListReducer,
    classeProdutoDetails: classeProdutoDetailsReducer,
    classeProdutoCreate: classeProdutoCreateReducer,
    classeProdutoUpdate: classeProdutoUpdateReducer,
    classeProdutoDelete: classeProdutoDeleteReducer,
    userLogin: userLoginReducer,
    cepFetch: cepFetchReducer,
    movimentacaoEstoqueList: movimentacaoEstoqueListReducer,
    movimentacaoEstoqueDetails: movimentacaoEstoqueDetailsReducer,
    movimentacaoEstoqueCreate: movimentacaoEstoqueCreateReducer,
    movimentacaoEstoqueUpdate: movimentacaoEstoqueUpdateReducer,	
    movimentacaoEstoqueDelete: movimentacaoEstoqueDeleteReducer,
    tipoMovimentacaoEstoqueList: tipoMovimentacaoEstoqueListReducer,
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
