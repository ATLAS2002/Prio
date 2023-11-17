import db from "../lib/db"

export const getAllGroups = async () => { 
    db.connect();
}

export const getGroup = async (id: string) => new Response(id)

export const sendChat = async (id: string, body: any) =>
    new Response(
        `Sending message to roomID : ${id}. Content : ${JSON.stringify(body)}`
    )
