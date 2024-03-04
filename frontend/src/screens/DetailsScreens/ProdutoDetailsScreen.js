import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import DetailsComponent from "../../components/DetailsComponent";
import { useParams } from "react-router-dom";

import {listProdutoDetails, updateProduto} from "../../actions/produtoActions";

import { listTiposProdutos } from "../../actions/tipoProdutoActions";
import { listClassesProdutos } from "../../actions/classeProdutoActions";
import { listSubclassesProdutos } from "../../actions/subclasseProdutoActions";

import SelectFieldComponent from "../../components/SelectFieldComponent";

function ProdutoDetailsScreen() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const produtoDetails = useSelector((state) => state.produtoDetails);
    const { loading, error, produto } = produtoDetails;

    const produtoUpdate = useSelector((state) => state.produtoUpdate);
    const { success: successUpdate } = produtoUpdate;

    const tipoProdutoList = useSelector((state) => state.tipoProdutoList);
    const { tiposProdutos } = tipoProdutoList;

    const classeProdutoList = useSelector((state) => state.classeProdutoList);
    const { classesProdutos } = classeProdutoList;

    const subclasseProdutosList = useSelector(
        (state) => state.subclasseProdutoList
    );
    const { subclassesProdutos } = subclasseProdutosList;


    const [isEditing, setIsEditing] = useState(false);
    const [editedNome, setEditedNome] = useState("");
    const [editedDescricaoCompleta, setEditedDescricaoCompleta] = useState("");
    const [editedDescricaoResumida, setEditedDescricaoResumida] = useState("");
    const [editedTipo, setEditedTipo] = useState("");
    const [editedClasse, setEditedClasse] = useState("");
    const [editedSubclasse, setEditedSubclasse] = useState("");


    useEffect(() => {
        dispatch(listProdutoDetails(id));
        dispatch(listTiposProdutos());
        dispatch(listClassesProdutos());
        dispatch(listSubclassesProdutos());
    }, [dispatch, id, successUpdate]);

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedNome(produto.nome);
        setEditedDescricaoCompleta(produto.descricao_completa);
        setEditedDescricaoResumida(produto.descricao_resumida);
        setEditedTipo(produto.tipo);
        setEditedClasse(produto.classe);
        setEditedSubclasse(produto.subclasse);
    };

    const handleSaveClick = () => {
        dispatch(
            updateProduto({
                id: id,
                nome: editedNome,
                descricao_completa: editedDescricaoCompleta,
                descricao_resumida: editedDescricaoResumida,
                tipo: editedTipo,
                classe: editedClasse,
                subclasse: editedSubclasse,
            })
        );
        setIsEditing(false);
    };

    const fields = [
        {
            label: "Nome",
            placeholder: "Insira o nome",
            value: editedNome,
            initialValue: produto.nome,
            onChange: (e) => setEditedNome(e.target.value),
        },
        {
            label: "Descrição Completa",
            placeholder: "Insira a descrição completa",
            value: editedDescricaoCompleta,
            initialValue: produto.descricao_completa,
            onChange: (e) => setEditedDescricaoCompleta(e.target.value),
        },
        {
            label: "Descrição Resumida",
            placeholder: "Insira a descrição resumida",
            value: editedDescricaoResumida,
            initialValue: produto.descricao_resumida,
            onChange: (e) => setEditedDescricaoResumida(e.target.value),
        },
        {
            label: "Tipo",
            placeholder: "Selecione um tipo",
            component: (
                <SelectFieldComponent
                    options={[
                        { id: "", nome: "Selecione um tipo" },
                        ...tiposProdutos,
                    ]}
                    initialValue={produto.tipo}
                    value={editedTipo}
                    onChange={(e) => setEditedTipo(e.target.value)}
                    isEditing={isEditing}
                />
            ),
        },
        {
            label: "Classe",
            placeholder: "Selecione uma classe",
            component: (
                <SelectFieldComponent
                    options={[
                        { id: "", nome: "Selecione uma classe" },
                        ...classesProdutos,
                    ]}
                    initialValue={produto.classe}
                    value={editedClasse}
                    onChange={(e) => setEditedClasse(e.target.value)}
                    isEditing={isEditing}
                />
            ),
        },
        {
            label: "Subclasse",
            placeholder: "Selecione uma subclasse",
            component: (
                <SelectFieldComponent
                    options={[
                        { id: "", nome: "Selecione uma subclasse" },
                        ...subclassesProdutos,
                    ]}
                    initialValue={produto.subclasse}
                    value={editedSubclasse}
                    onChange={(e) => setEditedSubclasse(e.target.value)}
                    isEditing={isEditing}
                />
            ),
        },
    ];

    return (
        <div>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
            <DetailsComponent
                title="Produto"
                isEditing={isEditing}
                handleEditClick={handleEditClick}
                handleSaveClick={handleSaveClick}
                fields={fields}
            />
            )}
        </div>
    );
}

export default ProdutoDetailsScreen;