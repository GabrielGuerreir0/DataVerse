import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Arvore from './pages/Arvore';
import Fila from './pages/Fila';
import Grafo from './pages/Grafo';
import HashTable from "./pages/HashTable";
import Heaps from "./pages/Heaps";
import Lista from "./pages/Lista";
import Pilha from "./pages/Pilha";
import Vetores from "./pages/Vetores";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Sobre" element={<Sobre/>}></Route>
                <Route path="/Arvore" element={<Arvore/>}></Route>
                <Route path="/Fila" element={<Fila/>}></Route>
                <Route path="/Grafo" element={<Grafo/>}></Route>
                <Route path="/HashTable" element={<HashTable/>}></Route>
                <Route path="/Heaps" element={<Heaps/>}></Route>
                <Route path="/Lista" element={<Lista/>}></Route>
                <Route path="/Pilha" element={<Pilha/>}></Route>
                <Route path="/Vetores" element={<Vetores/>}></Route>
            </Routes>
        </BrowserRouter>
    );

}

export default AppRoutes;