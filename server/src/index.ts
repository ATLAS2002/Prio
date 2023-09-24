import Elysia, { ws } from 'elysia'
import cors from '@elysiajs/cors'
import groupRoutes from '@routes/groups.routes'
// import route from '@lib/plugin'
import colors from 'colors.ts'

colors.enable()

const app = new Elysia()
    // .use(route({ name: 'main', seed: { prefix: '/api' }}))
    .use(cors({ origin: true }))
    .use(ws())
    .ws('/ws', {
        open: async (ws) => {
            console.log('Websocket connection established'.blue)
            ws.send('Websocket connection established')
        },
        message: async (ws, message) => {
            ws.send({
                message,
                time: Date.now()
            })
        },
        close: async (ws) => {
            console.log('Websocket connection closed'.yellow)
            ws.close()
        }
    })
    .use(groupRoutes)
    .listen(8000)

export type Server = typeof app

console.log(
    `Elysia `.colors('#CC3300').bold +
    `🦊 is running at `.colors('#CC3300') +
    `${'http://' + app.server?.hostname + ':' + app.server?.port}`.underline.colors('#CC3300').bold
)
