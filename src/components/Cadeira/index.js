import { useState } from "react";

import "./style.css";

function Cadeira(props) {
    const [selecionado, setSelecionado] = useState({selecionado:false, classe:""});
    
    function selecionar() {
        if(selecionado.selecionado === false){
            setSelecionado({selecionado: true, classe: "selecionado"});
        }
        if(selecionado.selecionado === true){
            setSelecionado({selecionado:false, classe: ""});
        }
    }

    const {name, isAvailable, id} = props;
    return isAvailable ?(
        <p className={selecionado.classe} onClick={() => selecionar()} key={id}>{name}</p>
    ): <p className="bloqueado" onClick={() => alert("Esse assento não está disponível")} key={id}>{name}</p>
}

export default Cadeira;