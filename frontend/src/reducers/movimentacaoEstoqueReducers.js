import {
    MOVIMENTACAO_ESTOQUE_CREATE_FAIL,
    MOVIMENTACAO_ESTOQUE_CREATE_REQUEST,
    MOVIMENTACAO_ESTOQUE_CREATE_RESET,
    MOVIMENTACAO_ESTOQUE_CREATE_SUCCESS,
    MOVIMENTACAO_ESTOQUE_DELETE_FAIL,
    MOVIMENTACAO_ESTOQUE_DELETE_REQUEST,
    MOVIMENTACAO_ESTOQUE_DELETE_RESET,
    MOVIMENTACAO_ESTOQUE_DELETE_SUCCESS,
    MOVIMENTACAO_ESTOQUE_DETAILS_FAIL,
    MOVIMENTACAO_ESTOQUE_DETAILS_REQUEST,
    MOVIMENTACAO_ESTOQUE_DETAILS_SUCCESS,
    MOVIMENTACAO_ESTOQUE_LIST_FAIL,
    MOVIMENTACAO_ESTOQUE_LIST_REQUEST,
    MOVIMENTACAO_ESTOQUE_LIST_SUCCESS,
    MOVIMENTACAO_ESTOQUE_UPDATE_FAIL,
    MOVIMENTACAO_ESTOQUE_UPDATE_REQUEST,
    MOVIMENTACAO_ESTOQUE_UPDATE_RESET,
    MOVIMENTACAO_ESTOQUE_UPDATE_SUCCESS,
} from "../constants/movimentacaoEstoqueConstants";

export const movimentacaoEstoqueListReducer = (
    state = { loading: true, movimentacaoEstoques: [] },
    action
) => {
    switch (action.type) {
        case MOVIMENTACAO_ESTOQUE_LIST_REQUEST:
            return { loading: true };
        case MOVIMENTACAO_ESTOQUE_LIST_SUCCESS:
            return { loading: false, movimentacaoEstoques: action.payload };
        case MOVIMENTACAO_ESTOQUE_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const movimentacaoEstoqueDetailsReducer = (state = { movimentacaoEstoque: {} }, action) => {
    switch (action.type) {
        case MOVIMENTACAO_ESTOQUE_DETAILS_REQUEST:
            return { loading: true, ...state };
        case MOVIMENTACAO_ESTOQUE_DETAILS_SUCCESS:
            return { loading: false, movimentacaoEstoque: action.payload };
        case MOVIMENTACAO_ESTOQUE_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const movimentacaoEstoqueCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case MOVIMENTACAO_ESTOQUE_CREATE_REQUEST:
            return { loading: true };
        case MOVIMENTACAO_ESTOQUE_CREATE_SUCCESS:
            return { loading: false, success: true, movimentacaoEstoque: action.payload };
        case MOVIMENTACAO_ESTOQUE_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case MOVIMENTACAO_ESTOQUE_CREATE_RESET:
            return {};
        default:
            return state;
    }
}

export const movimentacaoEstoqueUpdateReducer = (state = { movimentacaoEstoque: {} }, action) => {
    switch (action.type) {
        case MOVIMENTACAO_ESTOQUE_UPDATE_REQUEST:
            return { loading: true };
        case MOVIMENTACAO_ESTOQUE_UPDATE_SUCCESS:
            return { loading: false, success: true, movimentacaoEstoque: action.payload };
        case MOVIMENTACAO_ESTOQUE_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case MOVIMENTACAO_ESTOQUE_UPDATE_RESET:
            return { movimentacaoEstoque: {} };
        default:
            return state;
    }
}

export const movimentacaoEstoqueDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case MOVIMENTACAO_ESTOQUE_DELETE_REQUEST:
            return { loading: true };
        case MOVIMENTACAO_ESTOQUE_DELETE_SUCCESS:
            return { loading: false, success: true };
        case MOVIMENTACAO_ESTOQUE_DELETE_FAIL:
            return { loading: false, error: action.payload };
        case MOVIMENTACAO_ESTOQUE_DELETE_RESET:
            return {};
        default:
            return state;
    }
}

