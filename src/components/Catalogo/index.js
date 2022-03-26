import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "./style.css";

function Catalogo() {
    const [filmes, setFilmes] = useState([]);
    useEffect(() => {
        const promessa = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promessa.then((resposta) => {
        setFilmes(resposta.data);
        });
        promessa.catch(() => {
            alert("Não foi possível acessar a API!");
        })
    },[]);

    return filmes.length > 0 ?(
        <div className="Catalogo">
            <main>
                <h2>Selecione o filme</h2>
                <div>
                    {filmes.map((filme) => {
                        const { posterURL, id, title } = filme;
                        return ( 
                            <Link to={`/filme/${id}`} key={id}>
                                <div className="filme">
                                    <img src={posterURL} alt={title}/>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </main>
        </div>
    ): <div className="Catalogo">
            <main>
                <h2>Carregando ...</h2>
            </main>
        </div>
}

export default Catalogo;