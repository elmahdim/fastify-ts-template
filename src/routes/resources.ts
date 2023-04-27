import { FastifyPluginAsync } from 'fastify'
import { ResourcesService } from '../modules/resources/resources.service'

const service = new ResourcesService()

const resources: FastifyPluginAsync = async (fastify): Promise<void> => {
    fastify.get('/resources', async (request, reply) =>
        service.getAll(request, reply)
    )
}

export default resources
