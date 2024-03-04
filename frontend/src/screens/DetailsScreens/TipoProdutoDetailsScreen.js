import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import DetailsComponent from "../../components/DetailsComponent";
import { useParams } from "react-router-dom";

import {listTipoProdutoDetails, updateTipoProduto} from "../../actions/tipoProdutoActions";

function TipoProdutoDetailsScreen() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const tipoProdutoDetails = useSelector((state) => state.tipoProdutoDetails);
    const { loading, error, tipoProduto } = tipoProdutoDetails;

    const tipoProdutoUpdate = useSelector((state) => state.tipoProdutoUpdate);
    const { success: successUpdate } = tipoProdutoUpdate;

    const [isEditing, setIsEditing] = useState(false);
    const [editedNome, setEditedNome] = useState("");
    const [editedDescricao, setEditedDescricao] = useState("");

    useEffect(() => {
        dispatch(listTipoProdutoDetails(id));
    }, [dispatch, id, successUpdate]);

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedNome(tipoProduto.nome);
        setEditedDescricao(tipoProduto.descricao);
    };

    const handleSaveClick = () => {
        dispatch(
            updateTipoProduto({
                id: id,
                nome: editedNome,
                descricao: editedDescricao,
            })
        );
        setIsEditing(false);
    };

    const fields = [
        {
            label: "Nome",
            placeholder: "Insira o nome",
            value: editedNome,
            initialValue: tipoProduto.nome,
            onChange: (e) => setEditedNome(e.target.value),
        },
        {
            label: "Descrição",
            placeholder: "Insira a descrição",
            value: editedDescricao,
            initialValue: tipoProduto.descricao,
            onChange: (e) => setEditedDescricao(e.target.value),
        },
    ];

    return (
        <div>
            <DetailsComponent
                title="Tipo de Produto"
                loading={loading}
                error={error}
                isEditing={isEditing}
                handleEditClick={handleEditClick}
                handleSaveClick={handleSaveClick}
                successUpdate={successUpdate}
                fields={fields}
            />
        </div>
    );
}

export default TipoProdutoDetailsScreen;