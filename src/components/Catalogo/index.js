import {Link} from "react-router-dom";

import "./style.css";

function Catalogo() {
    return (
        <div className="Catalogo">
            <main>
                <h2>Selecione o filme</h2>
                <div>
                    <Link to="/filme">
                        <div className="filme">
                            imagem
                        </div>
                    </Link>
                </div>
            </main>
        </div>
    )
}

export default Catalogo;