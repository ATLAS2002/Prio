import { Elysia, ws } from 'elysia'

const app = new Elysia()
    .use(ws())
    .ws('/ws', {
        message: (ws, message) => {
            ws.send({
                message,
                time: Date.now()
            })
        },
        open: (ws) => {
            ws.send('Websocket connection established')
        },
        close: (ws) => {
            ws.send('Connection closed')
        }
    })
    .get('/', () => 'home')
    .get('/ping', () => 'pong1')
    .listen(8000)

console.log(
    `🦊 Elysia is running at ${
        'http://' + app.server?.hostname + ':' + app.server?.port
    }`
)
