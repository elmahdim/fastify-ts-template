import { FastifyRequest, FastifyReply } from 'fastify'

export class ResourcesService {
    async getAll(request: FastifyRequest, reply: FastifyReply) {
        reply.send({
            data: [],
        })
    }
}
