import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import DetailsComponent from "../../components/DetailsComponent";
import { useParams } from "react-router-dom";

import {listClienteDetails, updateCliente} from "../../actions/clienteActions";

import { fetchCep } from "../../actions/cepActions";
import CepField from "../../components/CepField";

function ClienteDetailsScreen() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const clienteDetails = useSelector((state) => state.clienteDetails);
    const { loading, error, cliente } = clienteDetails;

    const clienteUpdate = useSelector((state) => state.clienteUpdate);
    const { success: successUpdate } = clienteUpdate;

    const cepFetch = useSelector((state) => state.cepFetch);
    const { cepFetched } = cepFetch;

    const [isEditing, setIsEditing] = useState(false);
    const [editedNome, setEditedNome] = useState("");
    const [editedCpf, setEditedCpf] = useState("");
    const [editedCnpj, setEditedCnpj] = useState("");
    const [editedEmail, setEditedEmail] = useState("");
    const [editedTelefone, setEditedTelefone] = useState("");
    const [editedCep, setEditedCep] = useState("");
    const [editedLogradouro, setEditedLogradouro] = useState("");
    const [editedNumero, setEditedNumero] = useState("");
    const [editedComplemento, setEditedComplemento] = useState("");
    const [editedBairro, setEditedBairro] = useState("");
    const [editedCidade, setEditedCidade] = useState("");
    const [editedEstado, setEditedEstado] = useState("");
    const [editedDataCadastro, setEditedDataCadastro] = useState("");

    useEffect(() => {
        dispatch(listClienteDetails(id));
        if (cepFetched) {
            setEditedLogradouro(cepFetched.logradouro || "");
            setEditedBairro(cepFetched.bairro || "");
            setEditedCidade(cepFetched.localidade || "");
            setEditedEstado(cepFetched.uf || "");
        }
    }, [dispatch, id, successUpdate, cepFetched]);

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedNome(cliente.nome);
        setEditedCpf(cliente.cpf);
        setEditedCnpj(cliente.cnpj);
        setEditedEmail(cliente.email);
        setEditedTelefone(cliente.telefone);
        setEditedCep(cliente.cep);
        setEditedLogradouro(cliente.logradouro);
        setEditedNumero(cliente.numero);
        setEditedComplemento(cliente.complemento);
        setEditedBairro(cliente.bairro);
        setEditedCidade(cliente.cidade);
        setEditedEstado(cliente.estado);
        setEditedCep(cliente.cep);
        setEditedDataCadastro(cliente.dataCadastro);

    };

    const handleCepButtonClick = () => {
        dispatch(fetchCep(editedCep));
    };

    const handleSaveClick = () => {
        dispatch(
            updateCliente({
                id: id,
                nome: editedNome,
                cpf: editedCpf,
                cnpj: editedCnpj,
                email: editedEmail,
                telefone: editedTelefone,
                cep: editedCep,
                logradouro: editedLogradouro,
                numero: editedNumero,
                complemento: editedComplemento,
                bairro: editedBairro,
                cidade: editedCidade,
                estado: editedEstado,
                dataCadastro: editedDataCadastro,
            })
        );
        setIsEditing(false);
    };

    const fields = [
        {
            label: "Nome",
            placeholder: "Insira o nome",
            value: editedNome,
            initialValue: cliente.nome,
            onChange: (e) => setEditedNome(e.target.value),
        },
        {
            label: "CPF",
            placeholder: "Insira o CPF",
            value: editedCpf,
            initialValue: cliente.cpf,
            onChange: (e) => setEditedCpf(e.target.value),
        },
        {
            label: "CNPJ",
            placeholder: "Insira o CNPJ",
            value: editedCnpj,
            initialValue: cliente.cnpj,
            onChange: (e) => setEditedCnpj(e.target.value),
        },
        {
            label: "Email",
            placeholder: "Insira o email",
            value: editedEmail,
            initialValue: cliente.email,
            onChange: (e) => setEditedEmail(e.target.value),
        },
        {
            label: "Telefone",
            placeholder: "Insira o telefone",
            value: editedTelefone,
            initialValue: cliente.telefone,
            onChange: (e) => setEditedTelefone(e.target.value),
        },
        {
            label: "CEP",
            component: (
                <CepField
                    value={editedCep}
                    onChange={(e) => setEditedCep(e.target.value)}
                    onButtonClick={handleCepButtonClick}
                    initialValue={cliente.cep}
                    isEditing={isEditing}
                />
            ),
        },
        {
            label: "Logradouro",
            placeholder: "Insira o logradouro",
            value: editedLogradouro,
            initialValue: cliente.logradouro,
            onChange: (e) => setEditedLogradouro(e.target.value),
        },
        {
            label: "Número",
            placeholder: "Insira o número",
            value: editedNumero,
            initialValue: cliente.numero,
            onChange: (e) => setEditedNumero(e.target.value),
        },
        {
            label: "Complemento",
            placeholder: "Insira o complemento",
            value: editedComplemento,
            initialValue: cliente.complemento,
            onChange: (e) => setEditedComplemento(e.target.value),
        },
        {
            label: "Bairro",
            placeholder: "Insira o bairro",
            value: editedBairro,
            initialValue: cliente.bairro,
            onChange: (e) => setEditedBairro(e.target.value),
        },
        {
            label: "Cidade",
            placeholder: "Insira a cidade",
            value: editedCidade,
            initialValue: cliente.cidade,
            onChange: (e) => setEditedCidade(e.target.value),
        },
        {
            label: "Estado",
            placeholder: "Insira o estado",
            value: editedEstado,
            initialValue: cliente.estado,
            onChange: (e) => setEditedEstado(e.target.value),
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
                title="Cliente"
                isEditing={isEditing}
                handleEditClick={handleEditClick}
                handleSaveClick={handleSaveClick}
                fields={fields}
            />
            )}
        </div>
    );
}

export default ClienteDetailsScreen;