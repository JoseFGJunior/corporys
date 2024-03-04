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

import axios from "axios";

export const listProdutos = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUTO_LIST_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get("/api/produtos/", config);

        dispatch({
            type: PRODUTO_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PRODUTO_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const listProdutoDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUTO_DETAILS_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get(`/api/produtos/${id}`, config);

        dispatch({
            type: PRODUTO_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PRODUTO_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const createProduto = (produto) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUTO_CREATE_REQUEST,
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

        const { data } = await axios.post(`/api/produtos/create/`, produto, config);

        dispatch({
            type: PRODUTO_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PRODUTO_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const updateProduto = (produto) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUTO_UPDATE_REQUEST,
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
            `/api/produtos/update/${produto.id}/`,
            produto,
            config
        );

        dispatch({
            type: PRODUTO_UPDATE_SUCCESS,
            payload: data,
        });
        dispatch({
            type: PRODUTO_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PRODUTO_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const deleteProduto = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUTO_DELETE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        await axios.delete(`/api/produtos/delete/${id}/`, config);

        dispatch({
            type: PRODUTO_DELETE_SUCCESS,
        });
    } catch (error) {
        dispatch({
            type: PRODUTO_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
