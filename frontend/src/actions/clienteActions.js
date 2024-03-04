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

import axios from "axios";

export const listClientes = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: CLIENTE_LIST_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get("/api/clientes/", config);

        dispatch({
            type: CLIENTE_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: CLIENTE_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const listClienteDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CLIENTE_DETAILS_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get(`/api/clientes/${id}`, config);

        dispatch({
            type: CLIENTE_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: CLIENTE_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const deleteCliente = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CLIENTE_DELETE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        await axios.delete(`/api/clientes/delete/${id}/`, config);

        dispatch({
            type: CLIENTE_DELETE_SUCCESS,
        });
    } catch (error) {
        dispatch({
            type: CLIENTE_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const createCliente = (cliente) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CLIENTE_CREATE_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.post(`/api/clientes/create/`, cliente, config);

        dispatch({
            type: CLIENTE_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: CLIENTE_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const updateCliente = (cliente) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CLIENTE_UPDATE_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.put(
            `/api/clientes/update/${cliente.id}/`,
            cliente,
            config
        );

        dispatch({
            type: CLIENTE_UPDATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: CLIENTE_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
