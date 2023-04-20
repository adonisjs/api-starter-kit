import { test } from '@japa/runner'

test.group('main route', () => {
  test('see hello world', async ({ client }) => {
    const response = await client.get('/')
    response.assertStatus(200)
    response.assertBody({ hello: 'world' })
  })
})
