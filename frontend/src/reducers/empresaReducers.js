import {
    EMPRESA_CREATE_FAIL,
    EMPRESA_CREATE_REQUEST,
    EMPRESA_CREATE_RESET,
    EMPRESA_CREATE_SUCCESS,
    EMPRESA_DELETE_FAIL,
    EMPRESA_DELETE_REQUEST,
    EMPRESA_DELETE_RESET,
    EMPRESA_DELETE_SUCCESS,
    EMPRESA_DETAILS_FAIL,
    EMPRESA_DETAILS_REQUEST,
    EMPRESA_DETAILS_SUCCESS,
    EMPRESA_LIST_FAIL,
    EMPRESA_LIST_REQUEST,
    EMPRESA_LIST_SUCCESS,
    EMPRESA_UPDATE_FAIL,
    EMPRESA_UPDATE_REQUEST,
    EMPRESA_UPDATE_RESET,
    EMPRESA_UPDATE_SUCCESS,
} from "../constants/empresaConstants";

export const empresaListReducer = (state = { empresas: [] }, action) => {
    switch (action.type) {
        case EMPRESA_LIST_REQUEST:
            return { loading: true, empresas: [] };
        case EMPRESA_LIST_SUCCESS:
            return { loading: false, empresas: action.payload };
        case EMPRESA_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const empresaDetailsReducer = (state = { empresa: {} }, action) => {
    switch (action.type) {
        case EMPRESA_DETAILS_REQUEST:
            return { loading: true, ...state };
        case EMPRESA_DETAILS_SUCCESS:
            return { loading: false, empresa: action.payload };
        case EMPRESA_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const empresaCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case EMPRESA_CREATE_REQUEST:
            return { loading: true };
        case EMPRESA_CREATE_SUCCESS:
            return { loading: false, success: true, empresa: action.payload };
        case EMPRESA_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case EMPRESA_CREATE_RESET:
            return {};
        default:
            return state;
    }
}

export const empresaUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case EMPRESA_UPDATE_REQUEST:
            return { loading: true };
        case EMPRESA_UPDATE_SUCCESS:
            return { loading: false, success: true, empresa: action.payload };
        case EMPRESA_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case EMPRESA_UPDATE_RESET:
            return {};
        default:
            return state;
    }
}

export const empresaDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case EMPRESA_DELETE_REQUEST:
            return { loading: true };
        case EMPRESA_DELETE_SUCCESS:
            return { loading: false, success: true };
        case EMPRESA_DELETE_FAIL:
            return { loading: false, error: action.payload };
        case EMPRESA_DELETE_RESET:
            return {};
        default:
            return state;
    }
}

