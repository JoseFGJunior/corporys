import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import DetailsComponent from "../../components/DetailsComponent";
import { useParams } from "react-router-dom";

import {listAlmoxarifadoDetails, updateAlmoxarifado} from "../../actions/almoxarifadoActions";

function AlmoxarifadoDetailsScreen() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const almoxarifadoDetails = useSelector((state) => state.almoxarifadoDetails);
    const { loading, error, almoxarifado } = almoxarifadoDetails;

    const almoxarifadoUpdate = useSelector((state) => state.almoxarifadoUpdate);
    const { success: successUpdate } = almoxarifadoUpdate;

    const [isEditing, setIsEditing] = useState(false);
    const [editedNome, setEditedNome] = useState("");
    const [editedDescricao, setEditedDescricao] = useState("");

    useEffect(() => {
        dispatch(listAlmoxarifadoDetails(id));
    }, [dispatch, id, successUpdate]);

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedNome(almoxarifado.nome);
        setEditedDescricao(almoxarifado.descricao);
    };

    const handleSaveClick = () => {
        dispatch(
            updateAlmoxarifado({
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
            initialValue: almoxarifado.nome,
            onChange: (e) => setEditedNome(e.target.value),
        },
        {
            label: "Descrição",
            placeholder: "Insira a descrição",
            value: editedDescricao,
            initialValue: almoxarifado.descricao,
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
            <DetailsComponent
                title="Almoxarifado"
                isEditing={isEditing}
                handleEditClick={handleEditClick}
                handleSaveClick={handleSaveClick}
                fields={fields}
            />
            )}
        </div>
    );

}

export default AlmoxarifadoDetailsScreen;