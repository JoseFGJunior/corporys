import {
    ALMOXARIFADO_CREATE_FAIL,
    ALMOXARIFADO_CREATE_REQUEST,
    ALMOXARIFADO_CREATE_RESET,
    ALMOXARIFADO_CREATE_SUCCESS,
    ALMOXARIFADO_DELETE_FAIL,
    ALMOXARIFADO_DELETE_REQUEST,
    ALMOXARIFADO_DELETE_RESET,
    ALMOXARIFADO_DELETE_SUCCESS,
    ALMOXARIFADO_DETAILS_FAIL,
    ALMOXARIFADO_DETAILS_REQUEST,
    ALMOXARIFADO_DETAILS_SUCCESS,
    ALMOXARIFADO_LIST_FAIL,
    ALMOXARIFADO_LIST_REQUEST,
    ALMOXARIFADO_LIST_SUCCESS,
    ALMOXARIFADO_UPDATE_FAIL,
    ALMOXARIFADO_UPDATE_REQUEST,
    ALMOXARIFADO_UPDATE_RESET,
    ALMOXARIFADO_UPDATE_SUCCESS,
} from "../constants/almoxarifadoConstants";

export const almoxarifadoListReducer = (state = { almoxarifados: [] }, action) => {
    switch (action.type) {
        case ALMOXARIFADO_LIST_REQUEST:
            return { loading: true, almoxarifados: [] };
        case ALMOXARIFADO_LIST_SUCCESS:
            return { loading: false, almoxarifados: action.payload };
        case ALMOXARIFADO_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const almoxarifadoDetailsReducer = (state = { almoxarifado: {} }, action) => {
    switch (action.type) {
        case ALMOXARIFADO_DETAILS_REQUEST:
            return { loading: true, ...state };
        case ALMOXARIFADO_DETAILS_SUCCESS:
            return { loading: false, almoxarifado: action.payload };
        case ALMOXARIFADO_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const almoxarifadoCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case ALMOXARIFADO_CREATE_REQUEST:
            return { loading: true };
        case ALMOXARIFADO_CREATE_SUCCESS:
            return { loading: false, success: true, almoxarifado: action.payload };
        case ALMOXARIFADO_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case ALMOXARIFADO_CREATE_RESET:
            return {};
        default:
            return state;
    }
}

export const almoxarifadoUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case ALMOXARIFADO_UPDATE_REQUEST:
            return { loading: true };
        case ALMOXARIFADO_UPDATE_SUCCESS:
            return { loading: false, success: true };
        case ALMOXARIFADO_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case ALMOXARIFADO_UPDATE_RESET:
            return {};
        default:
            return state;
    }
}

export const almoxarifadoDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case ALMOXARIFADO_DELETE_REQUEST:
            return { loading: true };
        case ALMOXARIFADO_DELETE_SUCCESS:
            return { loading: false, success: true };
        case ALMOXARIFADO_DELETE_FAIL:
            return { loading: false, error: action.payload };
        case ALMOXARIFADO_DELETE_RESET:
            return {};
        default:
            return state;
    }
}

