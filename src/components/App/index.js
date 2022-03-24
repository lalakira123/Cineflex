import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./reset.css";
import "./style.css";

import Header from "./../Header/";
import Catalogo from "./../Catalogo/";
import Filme from "./../Filme/";
import Assento from "./../Assento/";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Catalogo />}/>
                <Route path="/filme" element={<Filme />}/>
                <Route path="/sessao" element={<Assento />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;