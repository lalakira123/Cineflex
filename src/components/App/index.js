import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./reset.css";
import "./style.css";

import Header from "./../Header/";
import Catalogo from "./../Catalogo/";
import Filme from "./../Filme/";
import Assento from "./../Assento/";
import Sucesso from "./../Sucesso/";

function App() {
       return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Catalogo />}/>
                <Route path="/filme/:idFilme" element={<Filme />}/>
                <Route path="/sessao/:idSessao" element={<Assento />}/>
                <Route path="/sucesso" element={<Sucesso />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;