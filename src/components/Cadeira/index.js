import { useState } from "react";

import "./style.css";

function Cadeira(props) {
    const {name, isAvailable, id, setCadeiras, cadeiras, setNumeros, numeros} = props;
    const [selecionado, setSelecionado] = useState({selecionado:false, classe:""});
    
    function selecionar() {
        if(selecionado.selecionado === false){
            setSelecionado({selecionado: true, classe: "selecionado"});
            setCadeiras([...cadeiras, id]);
            setNumeros([...numeros, name]);
        }
        if(selecionado.selecionado === true){
            setSelecionado({selecionado:false, classe: ""});
            for(let i = 0; i < cadeiras.length; i++) {
                if(cadeiras[i] === id){
                    cadeiras.splice(i, 1);
                    numeros.splice(i,1);
                }
            }
        }
    }

    return isAvailable ?(
        <p className={selecionado.classe} onClick={() => selecionar()}>{name}</p>
    ): <p className="bloqueado" onClick={() => alert("Esse assento não está disponível")}>{name}</p>
}

export default Cadeira;