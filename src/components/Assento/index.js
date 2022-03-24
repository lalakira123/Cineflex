import { Link } from "react-router-dom"; 

import "./style.css";

function Assento() {
    return (
        <div className="Assento">
            <main>
                <h2>Selecione o(s) assento(s)</h2>
                <div className="cadeiras">
                    <p>01</p>
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
                    imagem
                </div>
                <div>
                    <p>Enola Holmes</p>
                    <p>Quinta-Feira - 15:00</p>
                </div>
            </footer>
        </div>
    );
}

export default Assento;