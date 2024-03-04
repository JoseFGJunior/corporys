import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import ListComponent from "../../components/ListComponent";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { listClassesProdutos, deleteClasseProduto} from "../../actions/classeProdutoActions";

function ClasseProdutoListScreen() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const classeProdutoList = useSelector((state) => state.classeProdutoList);
    const { loading, error, classesProdutos } = classeProdutoList;

    const classeProdutoDelete = useSelector((state) => state.classeProdutoDelete);
    const { success: successDelete } = classeProdutoDelete;

    const classeProdutoCreate = useSelector((state) => state.classeProdutoCreate);
    const { success: successCreate } = classeProdutoCreate;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    
    useEffect(() => {
        if (userInfo) {
            dispatch(listClassesProdutos());
        } else {
            navigate("/login");
        }
    }, [dispatch, navigate, userInfo, successDelete, successCreate]);

    const deleteHandler = (id) => {
        if (window.confirm("Tem certeza que deseja deletar esta classe de produto?")) {
            dispatch(deleteClasseProduto(id));
        }
    };

    return (
        <div>
            {userInfo && (
                <Container>
                    <ListComponent
                        title="Classes de Produtos"
                        items={classesProdutos}
                        onDelete={deleteHandler}
                        loading={loading}
                        error={error}
                        Loader={Loader}
                        Message={Message}
                        linkUpdate="classesprodutos"
                    />
                </Container>
            )}
        </div>
    );
}

export default ClasseProdutoListScreen;