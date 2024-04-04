import 'express-async-error';
import express from 'express';
import { Error } from '@provider/middlewares/Errors';
import routes from '@/routes';

const server = express();
const db = process.env.DATABASE || 'postg';
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

console.log(`Timezone :: ${timezone}`);
console.log(`Database :: ${db}`);

server.use(express.json());
server.use(routes);
server.use(Error);

export { server };
