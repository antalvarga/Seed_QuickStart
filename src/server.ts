import 'dotenv/config';
import 'tsconfig-paths/register';
import { server } from '@infra/server';
import { Estados } from '@enums/estados';

const myPort = process.env.PORT || 3333;

server.listen(myPort, () => {
    console.log(`Server is running in ${Estados.RJ}`);
});
