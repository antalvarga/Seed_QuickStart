import 'dotenv/config';
import 'tsconfig-paths/register';
import { server } from '@infra/server';

server.listen(3333, () => {
    console.log('Server is running');
});
