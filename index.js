// Função que calcula o saldo de vitórias e determina o nível do jogador
function calcularRank(vitorias, derrotas) {
    const saldo = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldo, nivel };
}

// Exemplo de uso da função
const vitorias = parseInt(prompt("Digite o número de vitórias: "));
const derrotas = parseInt(prompt("Digite o número de derrotas: "));

const resultado = calcularRank(vitorias, derrotas);

alert(`O Herói tem saldo de ${resultado.saldo} vitórias e está no nível ${resultado.nivel}.`);
