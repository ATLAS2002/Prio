export const getAllGroups = async () => { }

export const getGroup = async (id: string) => new Response(id)

export const sendChat = async (id: string, body: any) =>
    new Response(
        `Sending message to roomID : ${id}. Content : ${JSON.stringify(body)}`
    )
