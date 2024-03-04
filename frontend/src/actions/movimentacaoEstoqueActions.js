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

import axios from "axios";

export const listMovimentacaoEstoques = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: MOVIMENTACAO_ESTOQUE_LIST_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get("/api/movimentacaoestoques/", config);

        dispatch({
            type: MOVIMENTACAO_ESTOQUE_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: MOVIMENTACAO_ESTOQUE_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const listMovimentacaoEstoqueDetails =
    (id) => async (dispatch, getState) => {
        try {
            dispatch({
                type: MOVIMENTACAO_ESTOQUE_DETAILS_REQUEST,
            });
            const {
                userLogin: { userInfo },
            } = getState();
            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                },
            };
            const { data } = await axios.get(
                `/api/movimentacaoestoques/${id}`,
                config
            );

            dispatch({
                type: MOVIMENTACAO_ESTOQUE_DETAILS_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: MOVIMENTACAO_ESTOQUE_DETAILS_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    };

export const createMovimentacaoEstoque = (formData) => async (dispatch, getState) => {
    try {
        dispatch({
            type: MOVIMENTACAO_ESTOQUE_CREATE_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.post(
            `/api/movimentacoes-estoque-items/create/`,
            formData,
            config
        );

        dispatch({
            type: MOVIMENTACAO_ESTOQUE_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: MOVIMENTACAO_ESTOQUE_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const updateMovimentacaoEstoque =
    (movimentacaoEstoque) => async (dispatch, getState) => {
        try {
            dispatch({
                type: MOVIMENTACAO_ESTOQUE_UPDATE_REQUEST,
            });
            const {
                userLogin: { userInfo },
            } = getState();
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${userInfo.token}`,
                },
            };
            const { data } = await axios.put(
                `/api/movimentacaoestoques/${movimentacaoEstoque._id}`,
                movimentacaoEstoque,
                config
            );

            dispatch({
                type: MOVIMENTACAO_ESTOQUE_UPDATE_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: MOVIMENTACAO_ESTOQUE_UPDATE_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    };

export const deleteMovimentacaoEstoque = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: MOVIMENTACAO_ESTOQUE_DELETE_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        await axios.delete(`/api/movimentacaoestoques/${id}`, config);

        dispatch({
            type: MOVIMENTACAO_ESTOQUE_DELETE_SUCCESS,
        });
    } catch (error) {
        dispatch({
            type: MOVIMENTACAO_ESTOQUE_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
