import React from "react";
import { Container, Nav, Navbar, Row, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

function Header() {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="#home">Corporys</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown
                                title="Cadastros"
                                id="basic-nav-dropdown"
                            >
                                <LinkContainer to="almoxarifados">
                                    <NavDropdown.Item>
                                        Almoxarifados
                                    </NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="empresas">
                                    <NavDropdown.Item>
                                        Empresas
                                    </NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="tiposprodutos">
                                    <NavDropdown.Item>
                                        Tipos de Produtos
                                    </NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="classesprodutos">
                                    <NavDropdown.Item>
                                        Classes de Produtos
                                    </NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="subclassesprodutos">
                                    <NavDropdown.Item>
                                        Subclasses de Produtos
                                    </NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="produtos">
                                    <NavDropdown.Item>
                                        Produtos
                                    </NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="clientes">
                                    <NavDropdown.Item>
                                        Clientes
                                    </NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="movimentacaoestoques">
                                    <NavDropdown.Item>
                                        Movimentação de Estoque
                                    </NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>

                            {!userInfo ? (
                                <LinkContainer to="login">
                                    <Nav.Link>Login</Nav.Link>
                                </LinkContainer>
                            ) : (
                                <LinkContainer
                                    to="logout"
                                    onClick={logoutHandler}
                                >
                                    <Nav.Link>Logout</Nav.Link>
                                </LinkContainer>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
