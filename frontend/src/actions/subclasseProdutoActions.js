import {
    SUBCLASSE_PRODUTO_CREATE_FAIL,
    SUBCLASSE_PRODUTO_CREATE_REQUEST,
    SUBCLASSE_PRODUTO_CREATE_RESET,
    SUBCLASSE_PRODUTO_CREATE_SUCCESS,
    SUBCLASSE_PRODUTO_DELETE_FAIL,
    SUBCLASSE_PRODUTO_DELETE_REQUEST,
    SUBCLASSE_PRODUTO_DELETE_RESET,
    SUBCLASSE_PRODUTO_DELETE_SUCCESS,
    SUBCLASSE_PRODUTO_DETAILS_FAIL,
    SUBCLASSE_PRODUTO_DETAILS_REQUEST,
    SUBCLASSE_PRODUTO_DETAILS_SUCCESS,
    SUBCLASSE_PRODUTO_LIST_FAIL,
    SUBCLASSE_PRODUTO_LIST_REQUEST,
    SUBCLASSE_PRODUTO_LIST_SUCCESS,
    SUBCLASSE_PRODUTO_UPDATE_FAIL,
    SUBCLASSE_PRODUTO_UPDATE_REQUESTS,
    SUBCLASSE_PRODUTO_UPDATE_REQUEST,
    SUBCLASSE_PRODUTO_UPDATE_RESET,
    SUBCLASSE_PRODUTO_UPDATE_SUCCESS,
} from "../constants/subclasseProdutoConstants";

import axios from "axios";

export const listSubclassesProdutos = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: SUBCLASSE_PRODUTO_LIST_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get("/api/subclasses-produto/", config);

        dispatch({
            type: SUBCLASSE_PRODUTO_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: SUBCLASSE_PRODUTO_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const listSubclasseProdutoDetails =
    (id) => async (dispatch, getState) => {
        try {
            dispatch({
                type: SUBCLASSE_PRODUTO_DETAILS_REQUEST,
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
                `/api/subclasses-produto/${id}`,
                config
            );

            dispatch({
                type: SUBCLASSE_PRODUTO_DETAILS_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: SUBCLASSE_PRODUTO_DETAILS_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    };

export const deleteSubclasseProduto = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SUBCLASSE_PRODUTO_DELETE_REQUEST,
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

        await axios.delete(`/api/subclasses-produto/delete/${id}/`, config);

        dispatch({
            type: SUBCLASSE_PRODUTO_DELETE_SUCCESS,
        });
    } catch (error) {
        dispatch({
            type: SUBCLASSE_PRODUTO_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const createSubclasseProduto = (subclasseProduto) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SUBCLASSE_PRODUTO_CREATE_REQUEST,
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
            `/api/subclasses-produto/create/`,
            subclasseProduto,
            config
        );

        dispatch({
            type: SUBCLASSE_PRODUTO_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: SUBCLASSE_PRODUTO_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const updateSubclasseProduto =
    (subclasseProduto) => async (dispatch, getState) => {
        try {
            dispatch({
                type: SUBCLASSE_PRODUTO_UPDATE_REQUEST,
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
                `/api/subclasses-produto/update/${subclasseProduto.id}/`,
                subclasseProduto,
                config
            );

            dispatch({
                type: SUBCLASSE_PRODUTO_UPDATE_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: SUBCLASSE_PRODUTO_UPDATE_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    };
