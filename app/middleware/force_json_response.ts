import { HttpContext } from '@adonisjs/core/http'
import { NextFn } from '@adonisjs/core/types/http'

export default class ForceJSONResponse {
  async handle({ request }: HttpContext, next: NextFn) {
    /**
     * Updating the "Accept" header to always accept "application/json" response
     * from the server. This will force the internals of the framework like
     * validator errors or auth errors to return a JSON response.
     */
    const headers = request.headers()
    headers.accept = 'application/json'

    return next()
  }
}
