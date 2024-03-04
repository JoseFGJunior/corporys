import {
    TIPO_PRODUTO_LIST_REQUEST,
    TIPO_PRODUTO_LIST_SUCCESS,
    TIPO_PRODUTO_LIST_FAIL,
    TIPO_PRODUTO_DETAILS_REQUEST,
    TIPO_PRODUTO_DETAILS_SUCCESS,
    TIPO_PRODUTO_DETAILS_FAIL,
    TIPO_PRODUTO_CREATE_REQUEST,
    TIPO_PRODUTO_CREATE_SUCCESS,
    TIPO_PRODUTO_CREATE_FAIL,
    TIPO_PRODUTO_CREATE_RESET,
    TIPO_PRODUTO_UPDATE_REQUEST,
    TIPO_PRODUTO_UPDATE_SUCCESS,
    TIPO_PRODUTO_UPDATE_FAIL,
    TIPO_PRODUTO_UPDATE_RESET,
    TIPO_PRODUTO_DELETE_REQUEST,
    TIPO_PRODUTO_DELETE_SUCCESS,
    TIPO_PRODUTO_DELETE_FAIL,
    TIPO_PRODUTO_DELETE_RESET,
} from "../constants/tipoProdutoConstants";

import axios from "axios";

export const listTiposProdutos = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: TIPO_PRODUTO_LIST_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get("/api/tipos-produto/", config);

        dispatch({
            type: TIPO_PRODUTO_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: TIPO_PRODUTO_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const listTipoProdutoDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: TIPO_PRODUTO_DETAILS_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get(`/api/tipos-produto/${id}/`, config);

        dispatch({
            type: TIPO_PRODUTO_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: TIPO_PRODUTO_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const updateTipoProduto =
    (tipoProduto) => async (dispatch, getState) => {
        try {
            dispatch({
                type: TIPO_PRODUTO_UPDATE_REQUEST,
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
                `/api/tipos-produto/update/${tipoProduto.id}/`,
                tipoProduto,
                config
            );

            dispatch({
                type: TIPO_PRODUTO_UPDATE_SUCCESS,
                payload: data,
            });
            dispatch({
                type: TIPO_PRODUTO_DETAILS_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: TIPO_PRODUTO_UPDATE_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    };

export const createTipoProduto = (tipoProduto) => async (dispatch, getState) => {
    try {
        dispatch({
            type: TIPO_PRODUTO_CREATE_REQUEST,
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
        const { data } = await axios.post(
            `/api/tipos-produto/create/`,
            tipoProduto,
            config
        );

        dispatch({
            type: TIPO_PRODUTO_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: TIPO_PRODUTO_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const deleteTipoProduto = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: TIPO_PRODUTO_DELETE_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        await axios.delete(`/api/tipos-produto/delete/${id}/`, config);

        dispatch({
            type: TIPO_PRODUTO_DELETE_SUCCESS,
        });
    } catch (error) {
        dispatch({
            type: TIPO_PRODUTO_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
