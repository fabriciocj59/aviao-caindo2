import Voo from './Voo.js';

let mensagemTela = document.getElementById("avisoSistema");
const registroButton = document.querySelector("#btnRegistrar")

const codigoInput = document.querySelector("#codigo")
const origemInput = document.querySelector("#origem")
const destinoInput = document.querySelector("#destino")

registroButton.addEventListener('click', () => {
    try {
        console.log("Iniciando registro do voo...");

        const codigo = codigoInput.value
        const origem = origemInput.value
        const destino = destinoInput.value

        let vooRuim = new Voo(codigo, origem, destino);

        mensagemTela.innerText = "Voo cadastrado com sucesso!";
        mensagemTela.style.color = "green";
    } catch (erro) {
        console.error("Ops, algo deu errado. A equipe de resgate foi acionada.");

        mensagemTela.innerText = erro.message;
        mensagemTela.style.color = "red";
    }
    finally {
        console.log("Tentativa de registro finalizada no sistema.");
    }
})
