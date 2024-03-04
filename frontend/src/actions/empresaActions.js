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

import axios from "axios";

export const listEmpresas = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: EMPRESA_LIST_REQUEST,
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

        const { data } = await axios.get("/api/empresas/", config);

        dispatch({
            type: EMPRESA_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: EMPRESA_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const listEmpresaDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: EMPRESA_DETAILS_REQUEST,
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

        const { data } = await axios.get(`/api/empresas/${id}/`, config);

        dispatch({
            type: EMPRESA_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: EMPRESA_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const deleteEmpresa = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: EMPRESA_DELETE_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        await axios.delete(`/api/empresas/delete/${id}/`, config);

        dispatch({
            type: EMPRESA_DELETE_SUCCESS,
        });
    } catch (error) {
        dispatch({
            type: EMPRESA_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const createEmpresa = (empresa) => async (dispatch, getState) => {
    try {
        dispatch({
            type: EMPRESA_CREATE_REQUEST,
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
        const { data } = await axios.post(`/api/empresas/create/`, empresa, config);

        dispatch({
            type: EMPRESA_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: EMPRESA_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const updateEmpresa = (empresa) => async (dispatch, getState) => {
    try {
        dispatch({
            type: EMPRESA_UPDATE_REQUEST,
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
            `/api/empresas/update/${empresa.id}/`,
            empresa,
            config
        );

        dispatch({
            type: EMPRESA_UPDATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: EMPRESA_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
