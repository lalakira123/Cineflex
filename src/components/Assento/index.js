import { useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom"; 
import axios from "axios";

import "./style.css";

import Cadeira from "./../Cadeira/";

function Assento() {
    const [assento, setAssento] = useState({});
    const { idSessao } = useParams();
    useEffect(() => {
        const promessa = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promessa.then(resposta => {
            const { data } = resposta;
            console.log(data);
            setAssento(data);
    })
    }, []);

    const {name, seats, day, movie} = assento;
    return Object.values(assento).length > 0 ?(
        <div className="Assento">
            <main>
                <h2>Selecione o(s) assento(s)</h2>
                <div className="cadeiras">
                    {seats.map((assento) => {
                        const {name, isAvailable, id} = assento;
                        return (
                            <Cadeira name={name} isAvailable={isAvailable} id={id}/>
                        );
                    })}
                </div>
                <div className="legenda">
                    <div>
                        <div className="selecionado"></div>
                        <p>Selecionado</p>
                    </div>
                    <div>
                        <div className="disponivel"></div>
                        <p>Disponível</p>
                    </div>
                    <div>
                        <div className="indisponivel"></div>
                        <p>Indisponível</p>
                    </div>
                </div>
                <div className="info-cliente">
                    <div>
                        <p>Nome do comprador:</p>
                        <input placeholder="Digite seu nome..."/>
                    </div>
                    <div>
                        <p>CPF do comprador:</p>
                        <input placeholder="Digite seu CPF..."/>
                    </div>
                </div>
                <Link to="/sucesso">
                    <button>Reservar assento(s)</button>
                </Link>
            </main>

            <footer>
                <div className="filme">
                    <img src={movie.posterURL} alt={movie.title}/>
                </div>
                <div>
                    <p>{movie.title}</p>
                    <p>{day.weekday} - {name}</p>
                </div>
            </footer>
        </div>
    ): <div className="Assento">
            <main>
                <h2>Carregando ...</h2>
            </main>
        </div>
}

export default Assento;