import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import DetailsComponent from "../../components/DetailsComponent";
import { useParams } from "react-router-dom";

import {listEmpresaDetails, updateEmpresa} from "../../actions/empresaActions";

import { fetchCep } from "../../actions/cepActions";
import CepField from "../../components/CepField";


function EmpresaDetailsScreen() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const empresaDetails = useSelector((state) => state.empresaDetails);
    const { loading, error, empresa } = empresaDetails;

    const empresaUpdate = useSelector((state) => state.empresaUpdate);
    const { success: successUpdate } = empresaUpdate;

    const cepFetch = useSelector((state) => state.cepFetch);
    const { cepFetched } = cepFetch;

    const [isEditing, setIsEditing] = useState(false);
    const [editedNome, setEditedNome] = useState("");
    const [editedRazaoSocial, setEditedRazaoSocial] = useState("");
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
        dispatch(listEmpresaDetails(id));
        if (cepFetched) {
            setEditedLogradouro(cepFetched.logradouro || "");
            setEditedBairro(cepFetched.bairro || "");
            setEditedCidade(cepFetched.localidade || "");
            setEditedEstado(cepFetched.uf || "");
        }
    }, [dispatch, id, successUpdate, cepFetched]);

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedNome(empresa.nome);
        setEditedRazaoSocial(empresa.razao_social);
        setEditedCnpj(empresa.cnpj);
        setEditedEmail(empresa.email);
        setEditedTelefone(empresa.telefone);
        setEditedCep(empresa.cep);
        setEditedLogradouro(empresa.logradouro);
        setEditedNumero(empresa.numero);
        setEditedComplemento(empresa.complemento);
        setEditedBairro(empresa.bairro);
        setEditedCidade(empresa.cidade);
        setEditedEstado(empresa.estado);
        setEditedDataCadastro(empresa.dataCadastro);

    };

    
    const handleCepButtonClick = () => {
        dispatch(fetchCep(editedCep));
    };

    const handleSaveClick = () => {
        dispatch(
            updateEmpresa({
                id: id,
                nome: editedNome,
                razao_social: editedRazaoSocial,
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
    }

    const fields = [
        {
            label: "Nome",
            placeholder: "Insira o nome",
            value: editedNome,
            initialValue: empresa.nome,
            onChange: (e) => setEditedNome(e.target.value),
        },
        {
            label: "Razão Social",
            placeholder: "Insira a razão social",
            value: editedRazaoSocial,
            initialValue: empresa.razao_social,
            onChange: (e) => setEditedRazaoSocial(e.target.value),
        },
        {
            label: "CNPJ",
            placeholder: "Insira o CNPJ",
            value: editedCnpj,
            initialValue: empresa.cnpj,
            onChange: (e) => setEditedCnpj(e.target.value),
        },
        {
            label: "Email",
            placeholder: "Insira o email",
            value: editedEmail,
            initialValue: empresa.email,
            onChange: (e) => setEditedEmail(e.target.value),
        },
        {
            label: "Telefone",
            placeholder: "Insira o telefone",
            value: editedTelefone,
            initialValue: empresa.telefone,
            onChange: (e) => setEditedTelefone(e.target.value),
        },
        {
            label: "CEP",
            component: (
                <CepField
                    value={editedCep}
                    onChange={(e) => setEditedCep(e.target.value)}
                    onButtonClick={handleCepButtonClick}
                    initialValue={empresa.cep}
                    isEditing={isEditing}
                />
            ),
        },
        {
            label: "Logradouro",
            placeholder: "Insira o logradouro",
            value: editedLogradouro,
            initialValue: empresa.logradouro,
            onChange: (e) => setEditedLogradouro(e.target.value),
        },
        {
            label: "Número",
            placeholder: "Insira o número",
            value: editedNumero,
            initialValue: empresa.numero,
            onChange: (e) => setEditedNumero(e.target.value),
        },
        {
            label: "Complemento",
            placeholder: "Insira o complemento",
            value: editedComplemento,
            initialValue: empresa.complemento,
            onChange: (e) => setEditedComplemento(e.target.value),
        },
        {
            label: "Bairro",
            placeholder: "Insira o bairro",
            value: editedBairro,
            initialValue: empresa.bairro,
            onChange: (e) => setEditedBairro(e.target.value),
        },
        {
            label: "Cidade",
            placeholder: "Insira a cidade",
            value: editedCidade,
            initialValue: empresa.cidade,
            onChange: (e) => setEditedCidade(e.target.value),
        },
        {
            label: "Estado",
            placeholder: "Insira o estado",
            value: editedEstado,
            initialValue: empresa.estado,
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
                title="Empresa"
                isEditing={isEditing}
                handleEditClick={handleEditClick}
                handleSaveClick={handleSaveClick}
                fields={fields}
            />
            )}
        </div>
    );
}

export default EmpresaDetailsScreen;

                