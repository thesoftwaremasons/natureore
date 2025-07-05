const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT;

app.prepare().then(() => {
  createServer((req, res) => {
    const parsed = parse(req.url, true);
    handle(req, res, parsed);
  }).listen(port, () => console.log(`> Ready on port ${port}`));
});
