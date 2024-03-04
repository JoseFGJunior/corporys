import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import DetailsComponent from "../../components/DetailsComponent";
import { useParams } from "react-router-dom";

import {listSubclasseProdutoDetails, updateSubclasseProduto} from "../../actions/subclasseProdutoActions";

function SubclasseProdutoDetailsScreen() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const subclasseProdutoDetails = useSelector((state) => state.subclasseProdutoDetails);
    const { loading, error, subclasseProduto } = subclasseProdutoDetails;

    const subclasseProdutoUpdate = useSelector((state) => state.subclasseProdutoUpdate);
    const { success: successUpdate } = subclasseProdutoUpdate;

    const [isEditing, setIsEditing] = useState(false);
    const [editedNome, setEditedNome] = useState("");
    const [editedDescricao, setEditedDescricao] = useState("");

    useEffect(() => {
        dispatch(listSubclasseProdutoDetails(id));
    }, [dispatch, id, successUpdate]);

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedNome(subclasseProduto.nome);
        setEditedDescricao(subclasseProduto.descricao);
    };

    const handleSaveClick = () => {
        dispatch(
            updateSubclasseProduto({
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
            initialValue: subclasseProduto.nome,
            onChange: (e) => setEditedNome(e.target.value),
        },
        {
            label: "Descrição",
            placeholder: "Insira a descrição",
            value: editedDescricao,
            initialValue: subclasseProduto.descricao,
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
                subclasseProduto && (
                    <DetailsComponent
                        title="Subclasse de Produto"
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

export default SubclasseProdutoDetailsScreen;