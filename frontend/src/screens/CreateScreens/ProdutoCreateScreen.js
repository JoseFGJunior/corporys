import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailsComponent from "../../components/DetailsComponent";
import { useNavigate } from "react-router-dom";

import { createProduto } from "../../actions/produtoActions";

import { listTiposProdutos } from "../../actions/tipoProdutoActions";
import { listClassesProdutos } from "../../actions/classeProdutoActions";
import { listSubclassesProdutos } from "../../actions/subclasseProdutoActions";

import SelectFieldComponent from "../../components/SelectFieldComponent";

function ProdutoCreateScreen() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const tipoProdutoList = useSelector((state) => state.tipoProdutoList);
    const { tiposProdutos } = tipoProdutoList;

    const classeProdutoList = useSelector((state) => state.classeProdutoList);
    const { classesProdutos } = classeProdutoList;

    const subclasseProdutosList = useSelector(
        (state) => state.subclasseProdutoList
    );
    const { subclassesProdutos } = subclasseProdutosList;

    const [nome, setNome] = useState("");
    const [descricaoResumida, setDescricaoResumida] = useState("");
    const [descricaoCompleta, setDescricaoCompleta] = useState("");
    const [tipo, setTipo] = useState("");
    const [classe, setClasse] = useState("");
    const [subclasse, setSubclasse] = useState("");
    const [isEditing, setIsEditing] = useState(true);

    useEffect(() => {
        dispatch(listTiposProdutos());
        dispatch(listClassesProdutos());
        dispatch(listSubclassesProdutos());
    }, [dispatch]);

    const handleSaveClick = () => {
        dispatch(
            createProduto({
                nome: nome,
                descricao_resumida: descricaoResumida,
                descricao_completa: descricaoCompleta,
                tipo: tipo,
                classe: classe,
                subclasse: subclasse,
            })
        );
        navigate("/produtos");
    };

    const fields = [
        {
            label: "Nome",
            placeholder: "Insira o nome",
            value: nome,
            onChange: (e) => setNome(e.target.value),
        },
        {
            label: "Descrição Resumida",
            placeholder: "Insira a descrição resumida",
            value: descricaoResumida,
            onChange: (e) => setDescricaoResumida(e.target.value),
        },
        {
            label: "Descrição Completa",
            placeholder: "Insira a descrição completa",
            value: descricaoCompleta,
            onChange: (e) => setDescricaoCompleta(e.target.value),
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
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
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
                    value={classe}
                    onChange={(e) => setClasse(e.target.value)}
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
                    value={subclasse}
                    onChange={(e) => setSubclasse(e.target.value)}
                    isEditing={isEditing}
                />
            ),
        },
    ];

    return (
        <DetailsComponent
            title="Cadastrar Produto"
            fields={fields}
            handleSaveClick={handleSaveClick}
            isEditing={isEditing}
        />
    );
}

export default ProdutoCreateScreen;
