class VooSeguro {
    #codigo;
    #combustivel;

    constructor(codigoPassado) {
        this.#codigo = codigoPassado;
        this.#combustivel = 100;
    }

    // Getter para o texto bonito
    get exibirStatus() {
        return `Combustível: ${this.#combustivel}%`;
    }

    // NOVO GETTER: Para pegar o número puro e fazer cálculos
    get nivelAtual() {
        return this.#combustivel;
    }

    set abastecer(quantidade) {
        if (quantidade < 0) {
            console.error("Tentativa de roubo!");
        } else if (this.#combustivel + quantidade > 100) {
            this.#combustivel = 100;
        } else {
            this.#combustivel += quantidade;
        }
    }

    gastar(quantidade) {
        // Diminui o combustível primeiro
        this.#combustivel -= quantidade;

        // Impede que fique menor que zero
        if (this.#combustivel < 0) {
            this.#combustivel = 0;
        }
    }
}

const vooVip = new VooSeguro("VIP-001");
const painelTexto = document.getElementById("painelCombustivel");
const btnGastar = document.getElementById("btnGastar");
const btnAbastecer = document.getElementById("btnAbastecerSeguro");

function atualizarTela() {
    const nivel = vooVip.nivelAtual;
    painelTexto.innerText = vooVip.exibirStatus;

    // Limpa as classes antes de verificar
    document.body.className = "";

    if (nivel === 0) {
        // CASO 1: Tudo fudendo (0%)
        document.body.classList.add("alerta-grave");
        alert("Nova contratação da Chapecoense");
        
    } else if (nivel < 10) {
        // CASO 2: Talvez fudendo (Menos de 10%)
        document.body.classList.add("alerta-leve");
        alert("Alerta, talvez o avião caia");

        // Remover o pisca amarelo após 3 segundos
        setTimeout(() => {
            document.body.classList.remove("alerta-leve");
        }, 3000);
    }
}

btnGastar.addEventListener("click", () => {
    vooVip.gastar(15); // Gastando de 15 em 15 para chegar rápido no erro
    atualizarTela();
});

btnAbastecer.addEventListener("click", () => {
    vooVip.abastecer = 10;
    atualizarTela();
});