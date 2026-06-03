import { createServer } from '@pondwader/socks5-server';

const port = Number(process.env.PROXY_LOCAL_PORT || 8081);
const username = process.env.PROXY_USER || 'zen';
const password = process.env.PROXY_PASS || '123456';

const server = createServer({
  auth: {
    username,
    password
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log('SOCKS5 proxy listening on 127.0.0.1:' + port);
  console.log('Auth user: ' + username);
});
