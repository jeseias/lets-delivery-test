import { UnexpectedError } from '@/domain/errors'
import { LoadCharacterByName } from '@/domain/usecases/load-character-by-name'
import { HttpClient, HttpStatusCode } from '@/data/protocols/http/http-client'

export class RemoteLoadCharacterByName implements LoadCharacterByName {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadCharacterByName.Model>
  ) {}

  async load (name: string): Promise<LoadCharacterByName.Model> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}?name=${name}`,
      method: 'get'
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return (httpResponse.body as LoadCharacterByName.Model)
      default: throw new UnexpectedError()
    }
  }
}
