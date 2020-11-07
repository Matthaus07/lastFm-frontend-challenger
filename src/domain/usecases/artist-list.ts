export interface LoadArtistList {
  allList: () => Promise<LoadArtistList.Model[]>
}

export namespace LoadArtistList {
  export interface Model {
    id: string
    name: string
    url: string
    image: Array<{}>
  }
}
