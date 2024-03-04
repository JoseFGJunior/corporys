import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DetailsComponent from "../../components/DetailsComponent";
import { useNavigate } from "react-router-dom";

import { createClasseProduto } from "../../actions/classeProdutoActions";

function ClasseProdutoCreateScreen() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [isEditing, setIsEditing] = useState(true);

    const handleSaveClick = () => {
        dispatch(createClasseProduto({ nome: nome, descricao: descricao }));
        navigate("/classesprodutos");
    };

    const fields = [
        {
            label: "Nome",
            placeholder: "Insira o nome",
            value: nome,
            onChange: (e) => setNome(e.target.value),
        },
        {
            label: "Descrição",
            placeholder: "Insira a descrição",
            value: descricao,
            onChange: (e) => setDescricao(e.target.value),
        },
    ];

    return (
        <DetailsComponent
            title="Cadastrar Classe de Produto"
            fields={fields}
            handleSaveClick={handleSaveClick}
            isEditing={isEditing}
        />
    );
}

export default ClasseProdutoCreateScreen;