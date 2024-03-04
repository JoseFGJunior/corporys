import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import ListComponent from "../../components/ListComponent";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { listClientes, deleteCliente} from "../../actions/clienteActions";

function ClienteListScreen() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const clienteList = useSelector((state) => state.clienteList);
    const { loading, error, clientes } = clienteList;

    const clienteDelete = useSelector((state) => state.clienteDelete);
    const { success: successDelete } = clienteDelete;

    const clienteCreate = useSelector((state) => state.clienteCreate);
    const { success: successCreate } = clienteCreate;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    
    useEffect(() => {
        if (userInfo) {
            dispatch(listClientes());
        } else {
            navigate("/login");
        }
    }, [dispatch, navigate, userInfo, successDelete, successCreate]);

    const deleteHandler = (id) => {
        if (window.confirm("Tem certeza que deseja deletar este cliente?")) {
            dispatch(deleteCliente(id));
        }
    };

    return (
        <div>
            {userInfo && (
                <Container>
                    <ListComponent
                        title="Clientes"
                        items={clientes}
                        onDelete={deleteHandler}
                        loading={loading}
                        error={error}
                        Loader={Loader}
                        Message={Message}
                        linkUpdate="clientes"
                    />
                </Container>
            )}
        </div>
    );
}

export default ClienteListScreen;