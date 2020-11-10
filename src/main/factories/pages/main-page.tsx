import { makeRemoteMainList } from '@/main/factories/usecases/main-page'
import MainList from '@/presentation/pages/main-page/main-page'
import React from 'react'
import { makeRemoteAlbumList } from '../usecases/album-list'
import { makeLocalSaveData } from '../usecases/save-access-token'

export const makeMainList: React.FC = () => {
  return (
    <MainList
      artistList={makeRemoteMainList()}
      saveDataLocalStorage={makeLocalSaveData()}
      albumList={makeRemoteAlbumList()}
    />
  )
}
