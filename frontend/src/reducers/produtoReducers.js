import {
    PRODUTO_CREATE_FAIL,
    PRODUTO_CREATE_REQUEST,
    PRODUTO_CREATE_RESET,
    PRODUTO_CREATE_SUCCESS,
    PRODUTO_DELETE_FAIL,
    PRODUTO_DELETE_REQUEST,
    PRODUTO_DELETE_RESET,
    PRODUTO_DELETE_SUCCESS,
    PRODUTO_DETAILS_FAIL,
    PRODUTO_DETAILS_REQUEST,
    PRODUTO_DETAILS_SUCCESS,
    PRODUTO_LIST_FAIL,
    PRODUTO_LIST_REQUEST,
    PRODUTO_LIST_SUCCESS,
    PRODUTO_UPDATE_FAIL,
    PRODUTO_UPDATE_REQUEST,
    PRODUTO_UPDATE_RESET,
    PRODUTO_UPDATE_SUCCESS,
} from "../constants/produtoConstants";

export const produtoListReducer = (
    state = {produtos: [] },
    action
) => {
    switch (action.type) {
        case PRODUTO_LIST_REQUEST:
            return { loading: true, produtos: [] };
        case PRODUTO_LIST_SUCCESS:
            return { loading: false, produtos: action.payload };
        case PRODUTO_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const produtoDetailsReducer = (state = { produto: {} }, action) => {
    switch (action.type) {
        case PRODUTO_DETAILS_REQUEST:
            return { loading: true, ...state };
        case PRODUTO_DETAILS_SUCCESS:
            return { loading: false, produto: action.payload };
        case PRODUTO_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const produtoCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUTO_CREATE_REQUEST:
            return { loading: true };
        case PRODUTO_CREATE_SUCCESS:
            return { loading: false, success: true, produto: action.payload };
        case PRODUTO_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case PRODUTO_CREATE_RESET:
            return {};
        default:
            return state;
    }
}

export const produtoUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUTO_UPDATE_REQUEST:
            return { loading: true };
        case PRODUTO_UPDATE_SUCCESS:
            return { loading: false, success: true, produto: action.payload };
        case PRODUTO_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case PRODUTO_UPDATE_RESET:
            return {};
        default:
            return state;
    }
}

export const produtoDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUTO_DELETE_REQUEST:
            return { loading: true };
        case PRODUTO_DELETE_SUCCESS:
            return { loading: false, success: true };
        case PRODUTO_DELETE_FAIL:
            return { loading: false, error: action.payload };
        case PRODUTO_DELETE_RESET:
            return {};
        default:
            return state;
    }
}

