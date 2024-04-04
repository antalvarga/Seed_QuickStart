const pontuacao: Array<number> = [10, 20, 22, 50, 70, 100, 102, 444, 567, 789];

const fBuscaBinaria = (numeros: number[], alvo: number): number => {
    console.log(`:: busca Binária :: `);

    let esquerda: number = 0;
    let direita: number = numeros.length - 1;

    while (esquerda <= direita) {
        const mid: number = Math.floor((esquerda + direita) / 2);

        if (numeros[mid] === alvo) {
            return mid;
        }

        if (alvo < numeros[mid]) {
            direita = mid - 1;
        } else {
            esquerda = mid + 1;
        }
    }

    return 0;
};

const buscaBinaria = (): number => {
    const achou = fBuscaBinaria(pontuacao, 444);

    const message = achou ? `Econtrado em ${achou}` : `Não encontrado`;

    const response = { message };

    console.log(response);

    return 0;
};

export { buscaBinaria };
