import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailsComponent from "../../components/DetailsComponent";
import { useNavigate } from "react-router-dom";

import { createMovimentacaoEstoque } from "../../actions/movimentacaoEstoqueActions";

import { listProdutos } from "../../actions/produtoActions";
import { listEmpresas } from "../../actions/empresaActions";
import { listAlmoxarifados } from "../../actions/almoxarifadoActions";
import { listTiposMovimentacaoEstoque } from "../../actions/tipoMovimentacaoEstoqueActions";

import ItemsListComponent from "../../components/ItemsListComponent";

import SelectFieldComponent from "../../components/SelectFieldComponent";
import { Form } from "react-bootstrap";

function MovimentacaoEstoqueCreateScreen() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const produtoList = useSelector((state) => state.produtoList);
    const { produtos } = produtoList;

    const empresaList = useSelector((state) => state.empresaList);
    const { empresas } = empresaList;

    const almoxarifadoList = useSelector((state) => state.almoxarifadoList);
    const { almoxarifados } = almoxarifadoList;

    const tipoMovimentacaoEstoqueList = useSelector(
        (state) => state.tipoMovimentacaoEstoqueList
    );
    const { tiposMovimentacoesEstoque } = tipoMovimentacaoEstoqueList;

    const [movimentacaoEstoqueData, setMovimentacaoEstoqueData] = useState({
        empresa: "",
        almoxarifado: "",
        tipo_movimentacao: "",
        descricao: "",
    });

    const [itemsData, setItemsData] = useState([]);

    const [isEditing, setIsEditing] = useState(true);

    useEffect(() => {
        dispatch(listProdutos());
        dispatch(listEmpresas());
        dispatch(listAlmoxarifados());
        dispatch(listTiposMovimentacaoEstoque());
    }, [dispatch]);

    const handleAddItem = () => {
        setItemsData([
            ...itemsData,
            {
                produto: "",
                quantidade: "",
                valor_unitario: "",
                custo: "",
            },
        ]);
    };

    const handleSaveClick = () => {
        console.log("Dados da movimentação:", movimentacaoEstoqueData);
        console.log("Dados dos itens:", itemsData);
        dispatch(
            createMovimentacaoEstoque({
                movimentacao_data: movimentacaoEstoqueData,
                items_data: itemsData,
            })
        );
        navigate("/movimentacaoestoques");
    };

    const handleItemChange = (index, field, value) => {
        const updatedItemsData = [...itemsData];
        updatedItemsData[index][field] = value;

        if (field === "valor_unitario" || field === "quantidade") {
            const valor_unitario = parseFloat(
                updatedItemsData[index]["valor_unitario"]
            );
            const quantidade = parseFloat(
                updatedItemsData[index]["quantidade"]
            );
            const custo =
                isNaN(valor_unitario) || isNaN(quantidade)
                    ? ""
                    : (valor_unitario * quantidade).toFixed(2);
            updatedItemsData[index]["custo"] = custo;
        }
        setItemsData(updatedItemsData);
    };

    const fields = [
        {
            label: "Empresa",
            component: (
                <SelectFieldComponent
                    options={[
                        { id: "", nome: "Selecione uma empresa" },
                        ...empresas,
                    ]}
                    value={movimentacaoEstoqueData.empresa}
                    onChange={(e) =>
                        setMovimentacaoEstoqueData({
                            ...movimentacaoEstoqueData,
                            empresa: e.target.value,
                        })
                    }
                    isEditing={isEditing}
                />
            ),
        },
        {
            label: "Almoxarifado",
            component: (
                <SelectFieldComponent
                    options={[
                        { id: "", nome: "Selecione um almoxarifado" },
                        ...almoxarifados,
                    ]}
                    value={movimentacaoEstoqueData.almoxarifado}
                    onChange={(e) =>
                        setMovimentacaoEstoqueData({
                            ...movimentacaoEstoqueData,
                            almoxarifado: e.target.value,
                        })
                    }
                    isEditing={isEditing}
                />
            ),
        },
        {
            label: "Tipo de Movimentação",
            component: (
                <SelectFieldComponent
                    options={[
                        { id: "", nome: "Selecione um tipo de movimentação" },
                        ...tiposMovimentacoesEstoque,
                    ]}
                    value={movimentacaoEstoqueData.tipo_movimentacao}
                    onChange={(e) =>
                        setMovimentacaoEstoqueData({
                            ...movimentacaoEstoqueData,
                            tipo_movimentacao: e.target.value,
                        })
                    }
                    isEditing={isEditing}
                />
            ),
        },
        {
            label: "Descrição",
            component: (
                <Form.Control
                    type="text"
                    value={movimentacaoEstoqueData.descricao}
                    onChange={(e) =>
                        setMovimentacaoEstoqueData({
                            ...movimentacaoEstoqueData,
                            descricao: e.target.value,
                        })
                    }
                    isEditing={isEditing}
                />
            ),
        },
    ];

    return (
        <DetailsComponent
            title="Movimentação de Estoque"
            fields={fields}
            additionalContent={
                <Form.Group className="mb-3">
                    <ItemsListComponent
                        itemsData={itemsData}
                        handleItemChange={handleItemChange}
                        isEditing={isEditing}
                        handleAddItem={handleAddItem}
                        disabled={!isEditing}
                        produtos={produtos}
                    />
                </Form.Group>
            }
            handleSaveClick={handleSaveClick}
            isEditing={isEditing}
        />
    );
}

export default MovimentacaoEstoqueCreateScreen;
