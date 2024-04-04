import * as zodErrors from './zodErrors';
import * as isFibonacci from './fibonacci';
import * as bigO from './bigO';
import * as nrPrimo from './nrPrimo';
import * as buscaBinaria from './buscaBinaria';
import * as inverteString from './inverteString';

export const helpers = {
    ...zodErrors,
    ...isFibonacci,
    ...bigO,
    ...nrPrimo,
    ...buscaBinaria,
    ...inverteString,
};
