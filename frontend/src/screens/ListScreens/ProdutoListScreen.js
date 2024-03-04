import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import ListComponent from "../../components/ListComponent";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { listProdutos, deleteProduto} from "../../actions/produtoActions";

function ProdutoListScreen() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const produtoList = useSelector((state) => state.produtoList);
    const { loading, error, produtos } = produtoList;

    const produtoDelete = useSelector((state) => state.produtoDelete);
    const { success: successDelete } = produtoDelete;

    const produtoCreate = useSelector((state) => state.produtoCreate);
    const { success: successCreate } = produtoCreate;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    
    useEffect(() => {
        if (userInfo) {
            dispatch(listProdutos());
        } else {
            navigate("/login");
        }
    }, [dispatch, navigate, userInfo, successDelete, successCreate]);

    const deleteHandler = (id) => {
        if (window.confirm("Tem certeza que deseja deletar este produto?")) {
            dispatch(deleteProduto(id));
        }
    };

    return (
        <div>
            {userInfo && (
                <Container>
                    <ListComponent
                        title="Produtos"
                        items={produtos}
                        onDelete={deleteHandler}
                        loading={loading}
                        error={error}
                        Loader={Loader}
                        Message={Message}
                        linkUpdate="produtos"
                    />
                </Container>
            )}
        </div>
    );
}

export default ProdutoListScreen;