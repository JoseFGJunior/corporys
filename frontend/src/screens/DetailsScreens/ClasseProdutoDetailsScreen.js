import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import DetailsComponent from "../../components/DetailsComponent";
import { useParams } from "react-router-dom";

import {listClasseProdutoDetails, updateClasseProduto} from "../../actions/classeProdutoActions";

function ClasseProdutoDetailsScreen() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const classeProdutoDetails = useSelector((state) => state.classeProdutoDetails);
    const { loading, error, classeProduto } = classeProdutoDetails;

    const classeProdutoUpdate = useSelector((state) => state.classeProdutoUpdate);
    const { success: successUpdate } = classeProdutoUpdate;

    const [isEditing, setIsEditing] = useState(false);
    const [editedNome, setEditedNome] = useState("");
    const [editedDescricao, setEditedDescricao] = useState("");

    useEffect(() => {
        dispatch(listClasseProdutoDetails(id));
    }, [dispatch, id, successUpdate]);

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedNome(classeProduto.nome);
        setEditedDescricao(classeProduto.descricao);
    };

    const handleSaveClick = () => {
        dispatch(
            updateClasseProduto({
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
            initialValue: classeProduto.nome,
            onChange: (e) => setEditedNome(e.target.value),
        },
        {
            label: "Descrição",
            placeholder: "Insira a descrição",
            value: editedDescricao,
            initialValue: classeProduto.descricao,
            onChange: (e) => setEditedDescricao(e.target.value),
        },
    ];

    return (
        <div>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                classeProduto && (
                    <DetailsComponent
                        title="Classe de Produto"
                        handleEditClick={handleEditClick}
                        handleSaveClick={handleSaveClick}
                        isEditing={isEditing}
                        fields={fields}
                    />
                )
            )}
        </div>
    );
}

export default ClasseProdutoDetailsScreen;