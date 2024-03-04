import {
    TIPO_MOVIMENTACAO_ESTOQUE_LIST_FAIL,
    TIPO_MOVIMENTACAO_ESTOQUE_LIST_REQUEST,
    TIPO_MOVIMENTACAO_ESTOQUE_LIST_SUCCESS,
} from "../constants/tipoMovimentacaoEstoqueConstants";

import axios from "axios";

export const listTiposMovimentacaoEstoque = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: TIPO_MOVIMENTACAO_ESTOQUE_LIST_REQUEST,
        });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get("/api/tipos-movimentacao-estoque/", config);

        dispatch({
            type: TIPO_MOVIMENTACAO_ESTOQUE_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: TIPO_MOVIMENTACAO_ESTOQUE_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}