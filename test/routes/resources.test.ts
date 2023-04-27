import { test } from 'tap'
import { build } from '../helper'

test('resources', async (t) => {
    const app = await build(t)

    const response = await app.inject({
        url: '/resources',
    })

    t.same(JSON.parse(response.payload), { data: [] })
})
