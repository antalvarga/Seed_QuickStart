const isFibonacci = () => {
    let inicio = 1;
    const fim = 30;

    let atual = 0;
    let proximo = 0;

    while (proximo <= fim) {
        proximo = inicio + atual;

        if (proximo >= fim) {
            break;
        }

        console.log(proximo);

        atual = inicio;
        inicio = proximo;
    }
};

export { isFibonacci };

const nextFibonacci = (nowFibo: number) => {
    const nextFibo: number =
        nowFibo > 1
            ? nextFibonacci(nowFibo - 1) + nextFibonacci(nowFibo - 2)
            : nowFibo;

    return nextFibo;
};

const doFibonnaci = () => {
    const limit = 30;

    for (let i = 1; i <= limit; i++) {
        const myFibo = nextFibonacci(i);

        console.log(myFibo);

        if (myFibo >= limit) {
            break;
        }
    }
};

export { doFibonnaci };
