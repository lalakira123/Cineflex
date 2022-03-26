import { useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import "./style.css";

function Filme() {
    const [sessao, setSessao] = useState({});
    const { idFilme } = useParams();

    useEffect(() => {
        const promessa = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promessa.then( resposta => {
            const {data} = resposta;
            setSessao(data);
        });
        promessa.catch(() => {
            alert("Não foi possível acessar a API!");
        })
    },[]);

    const {title, posterURL, days} = sessao;
    return Object.values(sessao).length > 0 ?(
        <div className="Filme">
            <main>
                <h2>Selecione o horário</h2>
                {days.map((dia) => {
                    const {weekday, date, showtimes} = dia;
                    return (
                        <div className="sessao" key={weekday + date}>
                            <h3>{weekday} - {date}</h3>
                            <div className="horario">
                                {showtimes.map((horario) => {
                                    const { name, id } = horario;
                                    return (
                                        <Link to={`/sessao/${id}`} key={name}><p>{name}</p></Link>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </main>

            <footer>
                <div className="filme">
                   <img src={posterURL} alt={title}/>
                </div>
                <p>{title}</p>
            </footer>
        </div>
    ):  <div className="Filme">
            <main>
                <h2>Carregando ...</h2>
            </main>
        </div>
}

export default Filme;