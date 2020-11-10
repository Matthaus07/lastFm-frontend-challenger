import { makeApiUrl, makeHttpClient } from '@/main/factories/http'
import { LoadArtistList } from '@/domain'
import { RemoteLoadArtistList } from '@/data/usecases/remote-artist-list'
export const makeRemoteMainList = (): LoadArtistList => {
  return new RemoteLoadArtistList(makeApiUrl('/?method=artist.search&artist=a'),makeHttpClient())
}
