import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import ListComponent from "../../components/ListComponent";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import {listAlmoxarifados, deleteAlmoxarifado} from "../../actions/almoxarifadoActions";

function AlmoxarifadoListScreen() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const almoxarifadoList = useSelector((state) => state.almoxarifadoList);
    const { loading, error, almoxarifados } = almoxarifadoList;

    const almoxarifadoDelete = useSelector((state) => state.almoxarifadoDelete);
    const { success: successDelete } = almoxarifadoDelete;

    const almoxarifadoCreate = useSelector((state) => state.almoxarifadoCreate);
    const { success: successCreate } = almoxarifadoCreate;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    
    useEffect(() => {
        if (userInfo) {
            dispatch(listAlmoxarifados());
        } else {
            navigate("/login");
        }
    }, [dispatch, navigate, userInfo, successDelete, successCreate]);

    const deleteHandler = (id) => {
        if (window.confirm("Tem certeza que deseja deletar este almoxarifado?")) {
            dispatch(deleteAlmoxarifado(id));
        }
    };

    return (
        <div>
            {userInfo && (
                <Container>
                    <ListComponent
                        title="Almoxarifados"
                        items={almoxarifados}
                        onDelete={deleteHandler}
                        loading={loading}
                        error={error}
                        Loader={Loader}
                        Message={Message}
                        linkUpdate="almoxarifados"
                    />
                </Container>
            )}
        </div>
    );
}

export default AlmoxarifadoListScreen;