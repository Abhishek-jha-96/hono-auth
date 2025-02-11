import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { swaggerUI } from '@hono/swagger-ui';

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);
app.get('/ui', swaggerUI({ url: '/doc' }));

serve({
  fetch: app.fetch,
  port,
});
