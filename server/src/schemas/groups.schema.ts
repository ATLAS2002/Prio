import { t } from 'elysia'

const nameDTO = t.String({ minLength: 1 })
const ageDTO = t.Integer({ minimum: 16 })

export const bodyDTO = t.Object({
    name: nameDTO,
    age: ageDTO
})

export const groupIdDTO = t.String({ minLength: 1, maxLength: 10 })