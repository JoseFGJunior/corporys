import {
    CLIENTE_CREATE_FAIL,
    CLIENTE_CREATE_REQUEST,
    CLIENTE_CREATE_RESET,
    CLIENTE_CREATE_SUCCESS,
    CLIENTE_DELETE_FAIL,
    CLIENTE_DELETE_REQUEST,
    CLIENTE_DELETE_RESET,
    CLIENTE_DELETE_SUCCESS,
    CLIENTE_DETAILS_FAIL,
    CLIENTE_DETAILS_REQUEST,
    CLIENTE_DETAILS_SUCCESS,
    CLIENTE_LIST_FAIL,
    CLIENTE_LIST_REQUEST,
    CLIENTE_LIST_SUCCESS,
    CLIENTE_UPDATE_FAIL,
    CLIENTE_UPDATE_REQUEST,
    CLIENTE_UPDATE_RESET,
    CLIENTE_UPDATE_SUCCESS,
} from "../constants/clienteConstants";

export const clienteListReducer = (state = { clientes: [] }, action) => {
    switch (action.type) {
        case CLIENTE_LIST_REQUEST:
            return { loading: true, clientes: [] };
        case CLIENTE_LIST_SUCCESS:
            return { loading: false, clientes: action.payload };
        case CLIENTE_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const clienteDetailsReducer = (state = { cliente: {} }, action) => {
    switch (action.type) {
        case CLIENTE_DETAILS_REQUEST:
            return { loading: true, ...state };
        case CLIENTE_DETAILS_SUCCESS:
            return { loading: false, cliente: action.payload };
        case CLIENTE_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const clienteCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case CLIENTE_CREATE_REQUEST:
            return { loading: true };
        case CLIENTE_CREATE_SUCCESS:
            return { loading: false, success: true, cliente: action.payload };
        case CLIENTE_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case CLIENTE_CREATE_RESET:
            return {};
        default:
            return state;
    }
}

export const clienteUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case CLIENTE_UPDATE_REQUEST:
            return { loading: true };
        case CLIENTE_UPDATE_SUCCESS:
            return { loading: false, success: true, cliente: action.payload };
        case CLIENTE_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case CLIENTE_UPDATE_RESET:
            return {};
        default:
            return state;
    }
}

export const clienteDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case CLIENTE_DELETE_REQUEST:
            return { loading: true };
        case CLIENTE_DELETE_SUCCESS:
            return { loading: false, success: true };
        case CLIENTE_DELETE_FAIL:
            return { loading: false, error: action.payload };
        case CLIENTE_DELETE_RESET:
            return {};
        default:
            return state;
    }
}
