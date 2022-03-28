import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "./style.css";

function Sucesso(props) {
    const [infoFilme, setInfoFilme] = useState({});

    useEffect(() => {
        const promessa = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${props.sucesso.sessao}/seats`);
        promessa.then(resposta => {
            const {data} = resposta;
            setInfoFilme(data);
        })
        promessa.catch(() => {
            alert("Não foi possível acessar a API!");
        })
    },[]);

    const {name, day, movie} = infoFilme;
    const {sucesso} = props;
    return Object.values(infoFilme).length > 0 ?(
        <div className="Sucesso">
            <main>
                <div className="sucesso">
                    <h2>Pedido feito</h2>
                    <h2>com sucesso!</h2>
                </div>    
                <div>
                    <h3>Filme e Sessão</h3>
                    <p>{movie.title}</p>
                    <p>{day.date} {name}</p>
                </div>
                <div>
                    <h3>Ingressos</h3>
                    {sucesso.cadeiras.map((cadeira) => {
                        return (
                            <p key={cadeira}>Assento {cadeira}</p>
                        );
                    })}
                </div>
                <div>
                    <h3>Comprador</h3>
                    <p>Nome: {sucesso.nome} </p>
                    <p>CPF: {`${sucesso.cpf[0]}${sucesso.cpf[1]}${sucesso.cpf[2]}.${sucesso.cpf[3]}${sucesso.cpf[4]}${sucesso.cpf[5]}.${sucesso.cpf[6]}${sucesso.cpf[7]}${sucesso.cpf[8]}-${sucesso.cpf[9]}${sucesso.cpf[10]}`} </p>
                </div>
                <Link to="/">
                    <button>Voltar para Home</button>
                </Link>
            </main>
        </div>
    ): <div className="Sucesso">
            <main>
                <h2>Carregando ...</h2>
            </main>
        </div>
}

export default Sucesso;