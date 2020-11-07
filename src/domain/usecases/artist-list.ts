export interface LoadArtistList {
  allList: () => Promise<LoadArtistList.Model[]>
}

export namespace LoadArtistList {
  export type Model ={
    id:string,
    name: string,
    url: string,
    image: Array<{}>
  }
}