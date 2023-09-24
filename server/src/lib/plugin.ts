import Elysia from 'elysia'

export default (config: any) => 
    new Elysia(config)
    .get('/', () => new Error(`This path is invalid. Please use ${config.seed.prefix} endpoint`))