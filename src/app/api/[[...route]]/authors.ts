// authors.ts
import { Hono } from 'hono'

// best practices
// const app = new Hono()

// app.get('/', (c) => c.json('list authors'))
// app.post('/', (c) => c.json('create an author', 201))
// app.get('/:id', (c) => c.json(`get ${c.req.param('id')}`))

// Using RPC with larger applications
const app = new Hono()
  .get('/', (c) => c.json('list authors'))
  .post('/', (c) => c.json('create an author', 201))
  .get('/:id', (c) => c.json(`get ${c.req.param('id')}`))

export default app