export interface LoadArtistList {
  allList: () => Promise<LoadArtistList.Model>
}

export namespace LoadArtistList {
  export interface Model {
    artistmatches: {
      artist: {
        id?: string
        name: string
        url?: string
        image?: Array<{}>

      }
    }
  }
}
