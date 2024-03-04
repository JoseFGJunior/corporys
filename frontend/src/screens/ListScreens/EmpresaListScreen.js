import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import ListComponent from "../../components/ListComponent";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { listEmpresas, deleteEmpresa} from "../../actions/empresaActions";

function EmpresaListScreen() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const empresaList = useSelector((state) => state.empresaList);
    const { loading, error, empresas } = empresaList;

    const empresaDelete = useSelector((state) => state.empresaDelete);
    const { success: successDelete } = empresaDelete;

    const empresaCreate = useSelector((state) => state.empresaCreate);
    const { success: successCreate } = empresaCreate;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    
    useEffect(() => {
        if (userInfo) {
            dispatch(listEmpresas());
        } else {
            navigate("/login");
        }
    }, [dispatch, navigate, userInfo, successDelete, successCreate]);

    const deleteHandler = (id) => {
        if (window.confirm("Tem certeza que deseja deletar esta empresa?")) {
            dispatch(deleteEmpresa(id));
        }
    };

    return (
        <div>
            {userInfo && (
                <Container>
                    <ListComponent
                        title="Empresas"
                        items={empresas}
                        onDelete={deleteHandler}
                        loading={loading}
                        error={error}
                        Loader={Loader}
                        Message={Message}
                        linkUpdate="empresas"
                    />
                </Container>
            )}
        </div>
    );
}

export default EmpresaListScreen;