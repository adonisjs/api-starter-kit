/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router
  .group(() => {
    router.get('/', async () => {
      return {
        hello: 'world',
      }
    })
  })
  .use(middleware.forceJsonResponse())
  .as('api')
