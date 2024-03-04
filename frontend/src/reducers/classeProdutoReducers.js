import {
    CLASSE_PRODUTO_CREATE_FAIL,
    CLASSE_PRODUTO_CREATE_REQUEST,
    CLASSE_PRODUTO_CREATE_RESET,
    CLASSE_PRODUTO_CREATE_SUCCESS,
    CLASSE_PRODUTO_DELETE_FAIL,
    CLASSE_PRODUTO_DELETE_REQUEST,
    CLASSE_PRODUTO_DELETE_RESET,
    CLASSE_PRODUTO_DELETE_SUCCESS,
    CLASSE_PRODUTO_DETAILS_FAIL,
    CLASSE_PRODUTO_DETAILS_REQUEST,
    CLASSE_PRODUTO_DETAILS_SUCCESS,
    CLASSE_PRODUTO_LIST_FAIL,
    CLASSE_PRODUTO_LIST_REQUEST,
    CLASSE_PRODUTO_LIST_SUCCESS,
    CLASSE_PRODUTO_UPDATE_FAIL,
    CLASSE_PRODUTO_UPDATE_REQUEST,
    CLASSE_PRODUTO_UPDATE_RESET,
    CLASSE_PRODUTO_UPDATE_SUCCESS,
} from "../constants/classeProdutoConstants";

export const classeProdutoListReducer = (
    state = { classesProdutos: [] },
    action
) => {
    switch (action.type) {
        case CLASSE_PRODUTO_LIST_REQUEST:
            return { loading: true, classesProdutos: [] };
        case CLASSE_PRODUTO_LIST_SUCCESS:
            return { loading: false, classesProdutos: action.payload };
        case CLASSE_PRODUTO_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const classeProdutoDetailsReducer = (state = { classeProduto: {} }, action) => {
    switch (action.type) {
        case CLASSE_PRODUTO_DETAILS_REQUEST:
            return { loading: true, ...state};
        case CLASSE_PRODUTO_DETAILS_SUCCESS:
            return { loading: false, classeProduto: action.payload };
        case CLASSE_PRODUTO_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const classeProdutoCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case CLASSE_PRODUTO_CREATE_REQUEST:
            return { loading: true };
        case CLASSE_PRODUTO_CREATE_SUCCESS:
            return { loading: false, success: true, classe: action.payload };
        case CLASSE_PRODUTO_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case CLASSE_PRODUTO_CREATE_RESET:
            return {};
        default:
            return state;
    }
}

export const classeProdutoUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case CLASSE_PRODUTO_UPDATE_REQUEST:
            return { loading: true };
        case CLASSE_PRODUTO_UPDATE_SUCCESS:
            return { loading: false, success: true, classe: action.payload };
        case CLASSE_PRODUTO_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case CLASSE_PRODUTO_UPDATE_RESET:
            return {};
        default:
            return state;
    }
}

export const classeProdutoDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case CLASSE_PRODUTO_DELETE_REQUEST:
            return { loading: true };
        case CLASSE_PRODUTO_DELETE_SUCCESS:
            return { loading: false, success: true };
        case CLASSE_PRODUTO_DELETE_FAIL:
            return { loading: false, error: action.payload };
        case CLASSE_PRODUTO_DELETE_RESET:
            return {};
        default:
            return state;
    }
}
