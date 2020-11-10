export interface LoadAlbumList {
  allList: () => Promise<LoadAlbumList.Model>
}

export namespace LoadAlbumList {
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
