import { Link } from "react-router-dom";

import "./style.css";

function Sucesso() {
    return (
        <div className="Sucesso">
            <main>
                <div className="sucesso">
                    <h2>Pedido feito</h2>
                    <h2>com sucesso!</h2>
                </div>    
                <div>
                    <h3>Filme e Sessão</h3>
                    <p>Enola Holmes</p>
                    <p>24/06/2021 15:00</p>
                </div>
                <div>
                    <h3>Ingressos</h3>
                    <p>Assento 15</p>
                    <p>Assento 16</p>
                </div>
                <div>
                    <h3>Comprador</h3>
                    <p>Nome: João da Silva Sauro</p>
                    <p>CPF: 123.456.789-10</p>
                </div>
                <Link to="/">
                    <button>Voltar para Home</button>
                </Link>
            </main>
        </div>
    );
}

export default Sucesso;