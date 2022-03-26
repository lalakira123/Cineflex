import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";

import "./reset.css";
import "./style.css";

import Header from "./../Header/";
import Catalogo from "./../Catalogo/";
import Filme from "./../Filme/";
import Assento from "./../Assento/";
import Sucesso from "./../Sucesso/";

function App() {
    const [sucesso, setSucesso] = useState({});
   return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Catalogo />}/>
                <Route path="/filme/:idFilme" element={<Filme />}/>
                <Route path="/sessao/:idSessao" element={<Assento sucesso={sucesso} setSucesso={setSucesso}/>}/>
                <Route path="/sucesso" element={<Sucesso sucesso={sucesso}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;