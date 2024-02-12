import http, { IncomingMessage, ServerResponse } from 'http';
import dotenv from 'dotenv/config.js';
// import { router } from './router/router';

export const server = http.createServer(router);

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
function router(req: IncomingMessage, res: ServerResponse<IncomingMessage> & { req: IncomingMessage }): void {
  throw new Error('Function not implemented.');
}
