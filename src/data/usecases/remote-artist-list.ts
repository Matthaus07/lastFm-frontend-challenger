import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError } from '@/domain/'
import { LoadArtistList } from '@/domain/'

export class RemoteLoadArtistList implements LoadArtistList {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadArtistList.Model[]>
  ) {}

  async allList (): Promise<LoadArtistList.Model[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    })
    const remoteArtist = httpResponse.body || []
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return remoteArtist.map(remoteArtist => Object.assign(remoteArtist))
      case HttpStatusCode.noContent: return []
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadArtistList {
  export type Model = {
    id:string,
    name: string,
    url: string,
    image: Array<{}>
  }
}