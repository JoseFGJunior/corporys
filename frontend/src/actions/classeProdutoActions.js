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

import axios from "axios";

export const listClassesProdutos = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: CLASSE_PRODUTO_LIST_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get("/api/classes-produto/", config);

        dispatch({
            type: CLASSE_PRODUTO_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: CLASSE_PRODUTO_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}

export const listClasseProdutoDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CLASSE_PRODUTO_DETAILS_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get(`/api/classes-produto/${id}`, config);

        dispatch({
            type: CLASSE_PRODUTO_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: CLASSE_PRODUTO_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}

export const deleteClasseProduto = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CLASSE_PRODUTO_DELETE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            }
        };

        await axios.delete(`/api/classes-produto/delete/${id}/`, config);

        dispatch({
            type: CLASSE_PRODUTO_DELETE_SUCCESS,
        });

    } catch (error) {
        dispatch({
            type: CLASSE_PRODUTO_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}

export const createClasseProduto = (classeProduto) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CLASSE_PRODUTO_CREATE_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            }
        };

        const { data } = await axios.post(`/api/classes-produto/create/`, classeProduto, config);

        dispatch({
            type: CLASSE_PRODUTO_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: CLASSE_PRODUTO_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}

export const updateClasseProduto = (classeProduto) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CLASSE_PRODUTO_UPDATE_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            }
        };

        const { data } = await axios.put(`/api/classes-produto/update/${classeProduto.id}/`, classeProduto, config);

        dispatch({
            type: CLASSE_PRODUTO_UPDATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: CLASSE_PRODUTO_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}

