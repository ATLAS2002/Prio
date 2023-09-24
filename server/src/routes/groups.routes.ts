import Elysia, { t } from 'elysia'

import {
    getAllGroups,
    getGroup,
    sendChat
} from '@handlers/groups.handlers'

import {
    bodyDTO,
    groupIdDTO
} from '@schemas/groups.schema'

export default new Elysia()
    .group('/groups', groups => groups
        .get('/', getAllGroups)
        .group('/:id', group => group
            .get('/', ({ params: { id } }) => getGroup(id))
            .post('/', ({ body, params: { id } }) => sendChat(id, body), { body: bodyDTO, id: groupIdDTO })
            // .patch('/', renameGroup)
            // .delete('/', removeGroup)
        )
    ) 
