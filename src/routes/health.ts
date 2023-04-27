import { FastifyPluginAsync } from 'fastify'
import { HttpStatusCode } from '../../constants'

const health: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.get('/health', async function (request, reply) {
        reply.code(HttpStatusCode.Ok)
    })
}

export default health
