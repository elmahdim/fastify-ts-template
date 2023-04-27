import { test } from 'tap'
import { build } from '../helper'
import { HttpStatusCode } from '../../constants'

test('health', async (t) => {
    const app = await build(t)

    const response = await app.inject({
        url: '/health',
    })

    t.equal(response.statusCode, HttpStatusCode.Ok)
})
