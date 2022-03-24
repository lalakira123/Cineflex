import { Link } from "react-router-dom";

import "./style.css";

function Filme() {
    return(
        <div className="Filme">
            <main>
                <h2>Selecione o horário</h2>
                <div className="sessao">
                    <h3>Quinta-Feira - 24/06/2021</h3>
                    <div className="horario">
                        <Link to="/sessao"><p>15:00</p></Link>
                    </div>
                </div>
            </main>

            <footer>
                <div className="filme">
                    imagem
                </div>
                <p>Enola Holmes</p>
            </footer>
        </div>
    );
}

export default Filme;