import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import ListComponent from "../../components/ListComponent";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { listTiposProdutos, deleteTipoProduto} from "../../actions/tipoProdutoActions";

function TipoProdutoListScreen() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const tipoProdutoList = useSelector((state) => state.tipoProdutoList);
    const { loading, error, tiposProdutos } = tipoProdutoList;

    const tipoProdutoDelete = useSelector((state) => state.tipoProdutoDelete);
    const { success: successDelete } = tipoProdutoDelete;

    const tipoProdutoCreate = useSelector((state) => state.tipoProdutoCreate);
    const { success: successCreate } = tipoProdutoCreate;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            dispatch(listTiposProdutos());
        } else {
            navigate("/login");
        }
    }, [dispatch, navigate, userInfo, successDelete, successCreate]);

    const deleteHandler = (id) => {
        if (window.confirm("Tem certeza que deseja deletar este tipo de produto?")) {
            dispatch(deleteTipoProduto(id));
        }
    };

    return (
        <div>
            {userInfo && (
                <Container>
                    <ListComponent
                        title="Tipos de Produto"
                        items={tiposProdutos}
                        onDelete={deleteHandler}
                        loading={loading}
                        error={error}
                        Loader={Loader}
                        Message={Message}
                        linkUpdate="tiposprodutos"
                    />
                </Container>
            )}
        </div>
    );
}

export default TipoProdutoListScreen;
