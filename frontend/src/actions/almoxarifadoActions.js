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

import axios from "axios";

export const listAlmoxarifados = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: ALMOXARIFADO_LIST_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get("/api/almoxarifados/", config);

        dispatch({
            type: ALMOXARIFADO_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ALMOXARIFADO_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}

export const listAlmoxarifadoDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ALMOXARIFADO_DETAILS_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get(`/api/almoxarifados/${id}`, config);

        dispatch({
            type: ALMOXARIFADO_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ALMOXARIFADO_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}

export const deleteAlmoxarifado = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ALMOXARIFADO_DELETE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            }
        };

        await axios.delete(`/api/almoxarifados/delete/${id}`, config);

        dispatch({
            type: ALMOXARIFADO_DELETE_SUCCESS,
        });

    } catch (error) {
        dispatch({
            type: ALMOXARIFADO_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}

export const createAlmoxarifado = (almoxarifado) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ALMOXARIFADO_CREATE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        };

        const { data } = await axios.post("/api/almoxarifados/create/", almoxarifado, config);

        dispatch({
            type: ALMOXARIFADO_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ALMOXARIFADO_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}

export const updateAlmoxarifado = (almoxarifado) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ALMOXARIFADO_UPDATE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        };

        const { data } = await axios.put(`/api/almoxarifados/update/${almoxarifado.id}/`, almoxarifado, config);

        dispatch({
            type: ALMOXARIFADO_UPDATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ALMOXARIFADO_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}

export const resetAlmoxarifadoCreate = () => (dispatch) => {
    dispatch({ type: ALMOXARIFADO_CREATE_RESET });
}
