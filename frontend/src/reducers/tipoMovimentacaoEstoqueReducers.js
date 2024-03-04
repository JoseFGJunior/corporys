import {
    TIPO_MOVIMENTACAO_ESTOQUE_LIST_FAIL,
    TIPO_MOVIMENTACAO_ESTOQUE_LIST_REQUEST,
    TIPO_MOVIMENTACAO_ESTOQUE_LIST_SUCCESS,
} from "../constants/tipoMovimentacaoEstoqueConstants";

export const tipoMovimentacaoEstoqueListReducer = (
    state = { tiposMovimentacoesEstoque: [] },
    action
) => {
    switch (action.type) {
        case TIPO_MOVIMENTACAO_ESTOQUE_LIST_REQUEST:
            return { loading: true, tiposMovimentacoesEstoque: []};
        case TIPO_MOVIMENTACAO_ESTOQUE_LIST_SUCCESS:
            return { loading: false, tiposMovimentacoesEstoque: action.payload };
        case TIPO_MOVIMENTACAO_ESTOQUE_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}