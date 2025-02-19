import { z } from 'zod'
import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { zValidator } from '@hono/zod-validator'
import { clerkMiddleware, getAuth } from '@hono/clerk-auth';

// import authors from './authors'
// import books from './books'

export const runtime = 'edge';

const app = new Hono().basePath('/api');

app.get('/hello', (c) => {
  return c.json({ hello: 'World' });
})

// best practices implementation with larger apps
// app.route('/authors', authors);
// app.route('/books', books);

// basics of hono
// app
//   .get('/hello',
//     clerkMiddleware(),
//     (c) => {
//       const auth = getAuth(c);

//       if (!auth?.userId) {
//         return c.json({ error: 'Unauthorized' });
//       }

//       return c.json({
//         message: 'Hello Next.js!',
//         userId: auth.userId,
//       })
//     })
// .get('/hello/:test',
//   (c) => {
//     return c.json({
//       message: 'Hello World',
//     })
//   })
// .post(
//   '/create/:postId',
//   zValidator('json', z.object({
//     name: z.string(),
//     userId: z.string(),
//   })),
//   zValidator('param', z.object({
//     postId: z.string(),
//   })),
//   (c) => {
//     const { name, userId } = c.req.valid('json');
//     const { postId } = c.req.valid('param');

//     return c.json({});
//   }
// )

export const GET = handle(app);
export const POST = handle(app);