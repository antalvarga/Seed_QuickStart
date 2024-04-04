const verificaSeNumeroPrimo = (numero: number): boolean => {
    let lRetorno = false;

    if (numero > 1) {
        for (let i = 2; i <= numero; i++) {
            if (numero % i == 0) {
                if (numero == i) {
                    lRetorno = true;
                    break;
                }

                break;
            }
        }
    }

    return lRetorno;
};

const nrPrimo = () => {
    console.log(`:: nrPrimo :: `);

    for (let i = 0; i <= 15; i++) {
        if (verificaSeNumeroPrimo(i)) {
            console.log(`Nr primo : ${i}`);
        }
    }

    return 0;
};

export { nrPrimo };
