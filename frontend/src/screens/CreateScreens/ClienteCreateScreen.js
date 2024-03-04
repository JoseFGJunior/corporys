import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailsComponent from "../../components/DetailsComponent";
import { useNavigate } from "react-router-dom";

import { createCliente } from "../../actions/clienteActions";

import { fetchCep } from "../../actions/cepActions";
import CepField from "../../components/CepField";


function ClienteCreateScreen() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cepFetch = useSelector((state) => state.cepFetch);
    const { cepFetched } = cepFetch;

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cep, setCep] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [isEditing, setIsEditing] = useState(true);

    useEffect(() => {
        if (cepFetched) {
            setLogradouro(cepFetched.logradouro || "");
            setBairro(cepFetched.bairro || "");
            setCidade(cepFetched.localidade || "");
            setEstado(cepFetched.uf || "");
        }
    }, [dispatch, cepFetched]);

    const handleSaveClick = () => {
        dispatch(
            createCliente({
                nome: nome,
                cpf: cpf,
                cnpj: cnpj,
                email: email,
                telefone: telefone,
                cep: cep,
                logradouro: logradouro,
                numero: numero,
                complemento: complemento,
                bairro: bairro,
                cidade: cidade,
                estado: estado,
            })
        );
        navigate("/clientes");
    }

    
    const handleCepButtonClick = () => {
        dispatch(fetchCep(cep));
    };

    const fields = [
        {
            label: "Nome",
            placeholder: "Insira o nome",
            value: nome,
            onChange: (e) => setNome(e.target.value),
        },
        {
            label: "CPF",
            placeholder: "Insira o CPF",
            value: cpf,
            onChange: (e) => setCpf(e.target.value),
        },
        {
            label: "CNPJ",
            placeholder: "Insira o CNPJ",
            value: cnpj,
            onChange: (e) => setCnpj(e.target.value),
        },
        {
            label: "Email",
            placeholder: "Insira o email",
            value: email,
            onChange: (e) => setEmail(e.target.value),
        },
        {
            label: "Telefone",
            placeholder: "Insira o telefone",
            value: telefone,
            onChange: (e) => setTelefone(e.target.value),
        },
        {
            label: "CEP",
            component: (
                <CepField
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    onButtonClick={handleCepButtonClick}
                    isEditing={isEditing}
                />
            ),
        },
        {
            label: "Logradouro",
            placeholder: "Insira o logradouro",
            value: logradouro,
            onChange: (e) => setLogradouro(e.target.value),
        },
        {
            label: "Número",
            placeholder: "Insira o número",
            value: numero,
            onChange: (e) => setNumero(e.target.value),
        },
        {
            label: "Complemento",
            placeholder: "Insira o complemento",
            value: complemento,
            onChange: (e) => setComplemento(e.target.value),
        },
        {
            label: "Bairro",
            placeholder: "Insira o bairro",
            value: bairro,
            onChange: (e) => setBairro(e.target.value),
        },
        {
            label: "Cidade",
            placeholder: "Insira a cidade",
            value: cidade,
            onChange: (e) => setCidade(e.target.value),
        },
        {
            label: "Estado",
            placeholder: "Insira o estado",
            value: estado,
            onChange: (e) => setEstado(e.target.value),
        },
    ];

    return (
        <DetailsComponent
            title="Cadastrar Cliente"
            fields={fields}
            handleSaveClick={handleSaveClick}
            isEditing={isEditing}
        />
    );
}

export default ClienteCreateScreen;