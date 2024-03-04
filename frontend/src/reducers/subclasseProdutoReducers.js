import {
    SUBCLASSE_PRODUTO_CREATE_FAIL,
    SUBCLASSE_PRODUTO_CREATE_REQUEST,
    SUBCLASSE_PRODUTO_CREATE_RESET,
    SUBCLASSE_PRODUTO_CREATE_SUCCESS,
    SUBCLASSE_PRODUTO_DELETE_FAIL,
    SUBCLASSE_PRODUTO_DELETE_REQUEST,
    SUBCLASSE_PRODUTO_DELETE_RESET,
    SUBCLASSE_PRODUTO_DELETE_SUCCESS,
    SUBCLASSE_PRODUTO_DETAILS_FAIL,
    SUBCLASSE_PRODUTO_DETAILS_REQUEST,
    SUBCLASSE_PRODUTO_DETAILS_SUCCESS,
    SUBCLASSE_PRODUTO_LIST_FAIL,
    SUBCLASSE_PRODUTO_LIST_REQUEST,
    SUBCLASSE_PRODUTO_LIST_SUCCESS,
    SUBCLASSE_PRODUTO_UPDATE_FAIL,
    SUBCLASSE_PRODUTO_UPDATE_REQUEST,
    SUBCLASSE_PRODUTO_UPDATE_RESET,
    SUBCLASSE_PRODUTO_UPDATE_SUCCESS,
} from "../constants/subclasseProdutoConstants";

export const subclasseProdutoListReducer = (
    state = { subclassesProdutos: [] },
    action
) => {
    switch (action.type) {
        case SUBCLASSE_PRODUTO_LIST_REQUEST:
            return { loading: true, subclassesProdutos: [] };
        case SUBCLASSE_PRODUTO_LIST_SUCCESS:
            return { loading: false, subclassesProdutos: action.payload };
        case SUBCLASSE_PRODUTO_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const subclasseProdutoDetailsReducer = (state = { subclasseProduto: {} }, action) => {
    switch (action.type) {
        case SUBCLASSE_PRODUTO_DETAILS_REQUEST:
            return { loading: true, ...state };
        case SUBCLASSE_PRODUTO_DETAILS_SUCCESS:
            return { loading: false, subclasseProduto: action.payload };
        case SUBCLASSE_PRODUTO_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const subclasseProdutoCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case SUBCLASSE_PRODUTO_CREATE_REQUEST:
            return { loading: true };
        case SUBCLASSE_PRODUTO_CREATE_SUCCESS:
            return { loading: false, success: true, subclasse: action.payload };
        case SUBCLASSE_PRODUTO_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case SUBCLASSE_PRODUTO_CREATE_RESET:
            return {};
        default:
            return state;
    }
}

export const subclasseProdutoUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case SUBCLASSE_PRODUTO_UPDATE_REQUEST:
            return { loading: true };
        case SUBCLASSE_PRODUTO_UPDATE_SUCCESS:
            return { loading: false, success: true };
        case SUBCLASSE_PRODUTO_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case SUBCLASSE_PRODUTO_UPDATE_RESET:
            return {};
        default:
            return state;
    }
}

export const subclasseProdutoDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case SUBCLASSE_PRODUTO_DELETE_REQUEST:
            return { loading: true };
        case SUBCLASSE_PRODUTO_DELETE_SUCCESS:
            return { loading: false, success: true };
        case SUBCLASSE_PRODUTO_DELETE_FAIL:
            return { loading: false, error: action.payload };
        case SUBCLASSE_PRODUTO_DELETE_RESET:
            return {};
        default:
            return state;
    }
}

