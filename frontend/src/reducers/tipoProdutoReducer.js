import {
    TIPO_PRODUTO_LIST_REQUEST,
    TIPO_PRODUTO_LIST_SUCCESS,
    TIPO_PRODUTO_LIST_FAIL,
    TIPO_PRODUTO_DETAILS_REQUEST,
    TIPO_PRODUTO_DETAILS_SUCCESS,
    TIPO_PRODUTO_DETAILS_FAIL,
    TIPO_PRODUTO_CREATE_REQUEST,
    TIPO_PRODUTO_CREATE_SUCCESS,
    TIPO_PRODUTO_CREATE_FAIL,
    TIPO_PRODUTO_CREATE_RESET,
    TIPO_PRODUTO_UPDATE_REQUEST,
    TIPO_PRODUTO_UPDATE_SUCCESS,
    TIPO_PRODUTO_UPDATE_FAIL,
    TIPO_PRODUTO_UPDATE_RESET,
    TIPO_PRODUTO_DELETE_REQUEST,
    TIPO_PRODUTO_DELETE_SUCCESS,
    TIPO_PRODUTO_DELETE_FAIL,
    TIPO_PRODUTO_DELETE_RESET,
} from '../constants/tipoProdutoConstants';

export const tipoProdutoListReducer = (state = { tiposProdutos: [] }, action) => {
    switch (action.type) {
        case TIPO_PRODUTO_LIST_REQUEST:
            return { loading: true, tiposProdutos: [] }
        case TIPO_PRODUTO_LIST_SUCCESS:
            return { loading: false, tiposProdutos: action.payload }
        case TIPO_PRODUTO_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const tipoProdutoDetailsReducer = (state = { tipoProduto: {} }, action) => {
    switch (action.type) {
        case TIPO_PRODUTO_DETAILS_REQUEST:
            return { loading: true, ...state }
        case TIPO_PRODUTO_DETAILS_SUCCESS:
            return { loading: false, tipoProduto: action.payload }
        case TIPO_PRODUTO_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const tipoProdutoCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case TIPO_PRODUTO_CREATE_REQUEST:
            return { loading: true }
        case TIPO_PRODUTO_CREATE_SUCCESS:
            return { loading: false, success: true, tipoProduto: action.payload }
        case TIPO_PRODUTO_CREATE_FAIL:
            return { loading: false, error: action.payload }
        case TIPO_PRODUTO_CREATE_RESET:
            return {}
        default:
            return state
    }
}

export const tipoProdutoUpdateReducer = (state = { tipoProduto: {} }, action) => {
    switch (action.type) {
        case TIPO_PRODUTO_UPDATE_REQUEST:
            return { loading: true }
        case TIPO_PRODUTO_UPDATE_SUCCESS:
            return { loading: false, success: true, tipoProduto: action.payload }
        case TIPO_PRODUTO_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        case TIPO_PRODUTO_UPDATE_RESET:
            return { tipoProduto: {} }
        default:
            return state
    }
}

export const tipoProdutoDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case TIPO_PRODUTO_DELETE_REQUEST:
            return { loading: true }
        case TIPO_PRODUTO_DELETE_SUCCESS:
            return { loading: false, success: true }
        case TIPO_PRODUTO_DELETE_FAIL:
            return { loading: false, error: action.payload }
        case TIPO_PRODUTO_DELETE_RESET:
            return {}
        default:
            return state
    }
}

