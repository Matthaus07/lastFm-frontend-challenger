import { makeApiUrl, makeHttpClient } from '@/main/factories/http'
import { LoadAlbumList } from '@/domain'
import { RemoteLoadAlbumList } from '@/data/usecases/remote-album-list'
export const makeRemoteAlbumList = (): LoadAlbumList => {
  return new RemoteLoadAlbumList(makeApiUrl('/?method=album.search&album=a'),makeHttpClient())
}
