import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import ListComponent from "../../components/ListComponent";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { listSubclassesProdutos, deleteSubclasseProduto} from "../../actions/subclasseProdutoActions";

function SubclasseProdutoListScreen() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const subclasseProdutoList = useSelector((state) => state.subclasseProdutoList);
    const { loading, error, subclassesProdutos } = subclasseProdutoList;

    const subclasseProdutoDelete = useSelector((state) => state.subclasseProdutoDelete);
    const { success: successDelete } = subclasseProdutoDelete;

    const subclasseProdutoCreate = useSelector((state) => state.subclasseProdutoCreate);
    const { success: successCreate } = subclasseProdutoCreate;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    
    useEffect(() => {
        if (userInfo) {
            dispatch(listSubclassesProdutos());
        } else {
            navigate("/login");
        }
    }, [dispatch, navigate, userInfo, successDelete, successCreate]);

    const deleteHandler = (id) => {
        if (window.confirm("Tem certeza que deseja deletar esta subclasseProduto?")) {
            dispatch(deleteSubclasseProduto(id));
        }
    };

    return (
        <div>
            {userInfo && (
                <Container>
                    <ListComponent
                        title="Subclasses de Produto"
                        items={subclassesProdutos}
                        onDelete={deleteHandler}
                        loading={loading}
                        error={error}
                        Loader={Loader}
                        Message={Message}
                        linkUpdate="subclassesProdutos"
                    />
                </Container>
            )}
        </div>
    );
}

export default SubclasseProdutoListScreen;