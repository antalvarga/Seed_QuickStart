import { Request, Response } from 'express';
// import { fFibonacci } from '../../core/helpers/fibonacci';
import { helpers } from '../../core/helpers';

interface Algorithm {
    id: number;
    name: string;
    cb: () => void;
}

const inverter = () => {
    const myString = 'inverter';
    const newString = helpers.inverteString(myString);

    console.log(` newString :: ${newString} :: `);
};

const listAlgorithm: Algorithm[] = [
    { id: 0, name: 'Fibonacci s/bug', cb: helpers.isFibonacci },
    { id: 1, name: 'Fibonacci c/bug', cb: helpers.doFibonnaci },
    { id: 2, name: 'Complexidade :: Big O notation', cb: helpers.bigO },
    { id: 3, name: 'Números Primos', cb: helpers.nrPrimo },
    { id: 4, name: 'Busca binária', cb: helpers.buscaBinaria },
    { id: 5, name: 'Muxi :: 1-Inverter uma string', cb: inverter },
];

const Algorithm = (request: Request, response: Response) => {
    console.log(`Algoritimos disponiveis :: ${JSON.stringify(listAlgorithm)} `);

    const myId = parseInt(request.params.id);

    const algorithm = listAlgorithm.find((item) => item.id === myId);

    console.log(`Algoritimo escolhido :: ${JSON.stringify(algorithm)}`);

    if (algorithm) {
        algorithm.cb();
        response.json(algorithm);
    } else {
        response.status(404).json({ error: 'Algorithm not found' });
    }
};

export { Algorithm };
