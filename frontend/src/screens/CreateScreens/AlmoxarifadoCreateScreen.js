import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DetailsComponent from "../../components/DetailsComponent";
import { useNavigate } from "react-router-dom";

import { createAlmoxarifado } from "../../actions/almoxarifadoActions";

function AlmoxarifadoCreateScreen() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [isEditing, setIsEditing] = useState(true);

    const handleSaveClick = () => {
        dispatch(createAlmoxarifado({ nome: nome, descricao: descricao }));
        navigate("/almoxarifados");
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
            title="Cadastrar Almoxarifado"
            fields={fields}
            handleSaveClick={handleSaveClick}
            isEditing={isEditing}
        />
    );
}

export default AlmoxarifadoCreateScreen;