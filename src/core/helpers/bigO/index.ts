const list = [
    { id: 0, name: 'Juliana' },
    { id: 1, name: 'Joao' },
    { id: 2, name: 'Anthony' },
    { id: 3, name: 'Istvan' },
    { id: 4, name: 'Anicele' },
];

const findElement = (matrix: number[][], target: number) => {
    const rows = matrix.length - 1;
    const column = matrix[0].length - 1;

    for (let i = 0; i <= rows; i++) {
        for (let j = 0; j <= column; j++) {
            if (matrix[i][j] == target) {
                return 1;
            }
        }
    }

    return 0;
};

const pessoas: Array<string> = [
    'Gabriel',
    'Felipe',
    'Vanessa',
    'Talita',
    'Joana',
    'Gustavo',
    'Luiz',
    'Paola',
    'Cris',
];

const filaClientes: Array<string> = [
    'Talita',
    'Gabriel',
    'Vanessa',
    'Felipe',
    'Samanta',
];

function fibonacci(numero: number): number {
    if (numero <= 1) return numero;

    return fibonacci(numero - 2) + fibonacci(numero - 1);
}

function combinar(nomes: Array<string>) {
    let combinacao = 0;

    for (let i = 0; i < nomes.length; i++) {
        for (let j = 0; j < nomes.length; j++) {
            if (i != j) {
                combinacao++;
                console.log(`#${combinacao}: ${nomes[i]} & ${nomes[j]}`);
            }
        }
    }
}

function proximoAtendimento(fila: Array<string>): string {
    console.log(`:: proximoAtendimento :: `);

    return fila[0];
}

function filaCompleta(fila: Array<string>): void {
    console.log(`:: filaCompleta :: `);

    for (let i = 0; i < fila.length; i++) {
        console.log(fila[i]);
    }
}

const pontuacao: Array<number> = [10, 20, 22, 50, 70, 100, 102, 444, 567, 789];

function buscaBinaria(numeros: number[], alvo: number): number {
    console.log(`:: buscaBinaria :: `);

    let esquerda: number = 0;
    let direita: number = numeros.length - 1;

    while (esquerda <= direita) {
        const mid: number = Math.floor((esquerda + direita) / 2);

        if (numeros[mid] === alvo) return mid;
        if (alvo < numeros[mid]) direita = mid - 1;
        else esquerda = mid + 1;
    }

    return -1;
}

const bigO = () => {
    console.log(list[0]);

    list.forEach((element) => {
        console.log(element);
    });

    for (let i = list.length - 1; i >= 0; i--) {
        console.log(list[i]);
    }

    const matrix = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
    ];

    console.log(`Vai para findElement`);

    const target = 13;
    const result = findElement(matrix, target);

    const mensagem = result == 0 ? ' False ' : ' true ';
    console.log(`Voltou de findElement`);

    console.log(mensagem);
    console.log(result);
    console.log(proximoAtendimento(filaClientes));

    filaCompleta(filaClientes);

    console.log(buscaBinaria(pontuacao, 444));

    combinar(pessoas);

    console.log(fibonacci(1));
    console.log(fibonacci(10));
    console.log(fibonacci(30));
    console.log(fibonacci(40));

    return 0;
};

export { bigO };
