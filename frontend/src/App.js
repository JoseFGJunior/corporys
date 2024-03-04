import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginScreen from "./screens/UserScreens/LoginScreen";
import TipoProdutoListScreen from "./screens/ListScreens/TipoProdutoListScreen";
import AlmoxarifadoListScreen from "./screens/ListScreens/AlmoxarifadoListScreen";
import ClasseProdutoListScreen from "./screens/ListScreens/ClasseProdutoListScreen";
import ClienteListScreen from "./screens/ListScreens/ClienteListScreen";
import EmpresaListScreen from "./screens/ListScreens/EmpresaListScreen";
import ProdutoListScreen from "./screens/ListScreens/ProdutoListScreen";
import SubclasseProdutoListScreen from "./screens/ListScreens/SubclasseProdutoListScreen";
import AlmoxariadoDetailsScreen from "./screens/DetailsScreens/AlmoxarifadoDetailsScreen";
import ClienteDetailsScreen from "./screens/DetailsScreens/ClienteDetailsScreen";
import EmpresaDetailsScreen from "./screens/DetailsScreens/EmpresaDetailsScreen";
import ProdutoDetailsScreen from "./screens/DetailsScreens/ProdutoDetailsScreen";
import SubclasseProdutoDetailsScreen from "./screens/DetailsScreens/SubclasseProdutoDetailsScreen";
import TipoProdutoDetailsScreen from "./screens/DetailsScreens/TipoProdutoDetailsScreen";
import ClasseProdutoDetailsScreen from "./screens/DetailsScreens/ClasseProdutoDetailsScreen";
import AlmoxarifadoCreateScreen from "./screens/CreateScreens/AlmoxarifadoCreateScreen";
import ClasseProdutoCreateScreen from "./screens/CreateScreens/ClasseProdutoCreateScreen";
import SubclasseProdutoCreateScreen from "./screens/CreateScreens/SubclasseProdutoCreateScreen";
import TipoProdutoCreateScreen from "./screens/CreateScreens/TipoProdutoCreateScreen";
import ProdutoCreateScreen from "./screens/CreateScreens/ProdutoCreateScreen";
import ClienteCreateScreen from "./screens/CreateScreens/ClienteCreateScreen";
import EmpresaCreateScreen from "./screens/CreateScreens/EmpresaCreateScreen";
import MovimentacaoEstoqueCreateScreen from "./screens/SceScreens/MovimentacaoEstoqueCreateScreen";



function App() {
    return (
        <Router>
            <Header />
            <main className="py-3">
                <Container>
                    <Routes>
                        <Route path="/login" element={<LoginScreen />} />
                        <Route path="/almoxarifados" element={<AlmoxarifadoListScreen />} />
                        <Route path="/classesprodutos" element={<ClasseProdutoListScreen />} />
                        <Route path="/clientes" element={<ClienteListScreen />} />
                        <Route path="/empresas" element={<EmpresaListScreen />} />
                        <Route path="/produtos" element={<ProdutoListScreen />} />
                        <Route path="/subclassesprodutos" element={<SubclasseProdutoListScreen />} />
                        <Route path="/tiposprodutos" element={<TipoProdutoListScreen />} />
                        <Route path="/almoxarifados/:id" element={<AlmoxariadoDetailsScreen />} />
                        <Route path="/clientes/:id" element={<ClienteDetailsScreen />} />
                        <Route path="/empresas/:id" element={<EmpresaDetailsScreen />} />
                        <Route path="/produtos/:id" element={<ProdutoDetailsScreen />} />
                        <Route path="/subclassesprodutos/:id" element={<SubclasseProdutoDetailsScreen />} />
                        <Route path="/tiposprodutos/:id" element={<TipoProdutoDetailsScreen />} />
                        <Route path="/classesprodutos/:id" element={<ClasseProdutoDetailsScreen />} />
                        <Route path="/almoxarifados/cadastro" element={<AlmoxarifadoCreateScreen />} />
                        <Route path="/classesprodutos/cadastro" element={<ClasseProdutoCreateScreen />} />
                        <Route path="/subclassesprodutos/cadastro" element={<SubclasseProdutoCreateScreen />} />
                        <Route path="/tiposprodutos/cadastro" element={<TipoProdutoCreateScreen />} />
                        <Route path="/produtos/cadastro" element={<ProdutoCreateScreen />} />
                        <Route path="/clientes/cadastro" element={<ClienteCreateScreen />} />
                        <Route path="/empresas/cadastro" element={<EmpresaCreateScreen />} />
                        <Route path="/movimentacaoestoques/cadastro" element={<MovimentacaoEstoqueCreateScreen />} />

                    </Routes>
                </Container>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
