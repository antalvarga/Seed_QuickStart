import * as GetSecret from './GetSecret';
import * as GenerateSecret from './GenerateSecret';

export const Secret = {
    ...GetSecret,
    ...GenerateSecret,
};
