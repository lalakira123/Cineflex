import { useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom"; 
import axios from "axios";

import "./style.css";

import Cadeira from "./../Cadeira/";

export default function Assento(props) {
    const {sucesso, setSucesso} = props;

    const [numeros, setNumeros] = useState([]);
    const [cadeiras, setCadeiras] = useState([]);
    const [assento, setAssento] = useState({});
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");

    const navigate = useNavigate();

    const { idSessao } = useParams();
    useEffect(() => {
        const promessa = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promessa.then(resposta => {
            const { data } = resposta;
            setAssento(data);
        })
        promessa.catch(() => {
            alert("Não foi possível acessar a API!");
        })
    }, []);

    useEffect(() => {
        setSucesso({...sucesso, nome: nome, cpf: cpf, cadeiras: numeros, sessao:idSessao});
    }, [nome, cpf, numeros, idSessao]);

    function validarInput(evento) {
        if(cpf.length !== 11 || cadeiras.length === 0 || nome.length === 0) {
            evento.preventDefault();
            alert("Complete os campos corretamente!");
        } else {
            enviarDados(evento);  
        }
    }

    function enviarDados(evento) {
        evento.preventDefault();
        const promessa = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",{
            ids: cadeiras,
            name: nome,
            cpf: cpf
        });
        promessa.then(() => {
            navigate("/sucesso");
        })
        promessa.catch(() => {
            alert("Não foi possível acessar a API!");
        })
    }

    const {name, seats, day, movie} = assento;
    return Object.values(assento).length > 0 ?(
            <div className="Assento">
                <main>
                    <h2>Selecione o(s) assento(s)</h2>
                    <div className="cadeiras">
                        {seats.map((assento) => {
                            const {name, isAvailable, id} = assento;
                            return (
                                <Cadeira 
                                    key={id} 
                                    name={name} 
                                    isAvailable={isAvailable} 
                                    id={id}
                                    setCadeiras={setCadeiras}
                                    cadeiras={cadeiras}
                                    setNumeros={setNumeros}
                                    numeros={numeros}
                                />
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
                    <form onSubmit={validarInput}>
                        <div className="info-cliente">
                                <div>
                                    <p>Nome do comprador:</p>
                                    <input 
                                        required 
                                        type="text" 
                                        placeholder="Digite seu nome..."
                                        onChange={(e) => setNome(e.target.value)}
                                        value={nome}
                                    />
                                </div>
                                <div>
                                    <p>CPF do comprador:</p>
                                    <input 
                                        required 
                                        type="number" 
                                        placeholder="Digite seu CPF..."
                                        onChange={(e) => setCpf(e.target.value)}
                                        value={cpf}
                                    />
                                </div>
                        </div>
                        <button onClick={validarInput} type="submit">Reservar assento(s)</button>
                    </form>
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
