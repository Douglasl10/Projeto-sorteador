
function generateNumber() {
    // Obtém os valores mínimo e máximo
    let min = Math.ceil(document.querySelector('.input-min').value);
    let max = Math.floor(document.querySelector('.input-max').value);
    const parabens = document.querySelector('.congratulation');

    // Verifica se os valores estão corretos
    if (min >= max) {
        parabens.innerHTML = "Por favor, insira um valor mínimo menor que o máximo.";
        return;
    }

    // Gera um número aleatório
    const result = Math.floor(Math.random() * (max - min + 1) + min);

    // Atualiza o texto do parágrafo com o resultado
    parabens.innerHTML = `Parabéns! Você foi sorteado com o número: ${result}`;
}
