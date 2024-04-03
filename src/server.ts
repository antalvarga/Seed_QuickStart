import 'dotenv/config';
import 'tsconfig-paths/register';
import { server } from '@infra/server';

const myPort = process.env.PORT || 3333;

server.listen(myPort, () => {
    console.log('Server is running');
});
