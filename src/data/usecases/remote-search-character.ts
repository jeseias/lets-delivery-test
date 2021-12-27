import { UnexpectedError } from "@/domain/errors/unexpected-error";
import { SearchCharacter } from "@/domain/usecases/search-character";
import { HttpClient, HttpStatusCode } from "../protocols/http/http-client";

export class RemoteSearchCharacter implements SearchCharacter {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<SearchCharacter.Model>
  ) {}

  async search (name: string): Promise<SearchCharacter.Model> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}?name=${name}`,
      method: 'get'
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      default: throw new UnexpectedError()
    }
  }
}
