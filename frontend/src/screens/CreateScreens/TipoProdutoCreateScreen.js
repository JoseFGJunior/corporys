import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DetailsComponent from "../../components/DetailsComponent";
import { useNavigate } from "react-router-dom";

import { createTipoProduto } from "../../actions/tipoProdutoActions";

function TipoProdutoCreateScreen() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [isEditing, setIsEditing] = useState(true);

    const handleSaveClick = () => {
        dispatch(createTipoProduto({ nome: nome, descricao: descricao }));
        navigate("/tiposprodutos");
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
            title="Cadastrar Tipo de Produto"
            fields={fields}
            handleSaveClick={handleSaveClick}
            isEditing={isEditing}
        />
    );
}

export default TipoProdutoCreateScreen;