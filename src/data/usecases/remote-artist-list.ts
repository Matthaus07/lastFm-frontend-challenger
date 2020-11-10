import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError , LoadArtistList } from '@/domain/'

export class RemoteLoadArtistList implements LoadArtistList {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadArtistList.Model>
  ) {}

  async allList (): Promise<LoadArtistList.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    })

    const remoteArtist = httpResponse.body || []
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return Object.assign(remoteArtist)
      case HttpStatusCode.noContent: return null
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadArtistList {
  export interface Model {
    artistmatches: {
      artist: {
        id?: string
        name?: string
        url?: string
        image?: Array<{}>

      }
    }
  }
}
