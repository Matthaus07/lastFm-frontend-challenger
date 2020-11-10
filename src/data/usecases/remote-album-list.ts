import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError , LoadAlbumList } from '@/domain/'

export class RemoteLoadAlbumList implements LoadAlbumList {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadAlbumList.Model>
  ) {}

  async allList (): Promise<LoadAlbumList.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    })

    const remoteAlbum = httpResponse.body || []
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return Object.assign(remoteAlbum)
      case HttpStatusCode.noContent: return null
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadAlbumList {
  export interface Model {
    albummatches: {
      album: {
        id?: string
        name: string
        url?: string
        image?: Array<{}>
      }
    }
  }
}
