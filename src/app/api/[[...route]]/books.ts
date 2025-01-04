// books.ts
import { Hono } from 'hono'

// best practices
// const app = new Hono()

// app.get('/', (c) => c.json('list books'))
// app.post('/', (c) => c.json('create a book', 201))
// app.get('/:id', (c) => c.json(`get ${c.req.param('id')}`))

// Using RPC with larger applications
const app = new Hono()
  .get('/', (c) => c.json('list books'))
  .post('/', (c) => c.json('create a book', 201))
  .get('/:id', (c) => c.json(`get ${c.req.param('id')}`))

export default app