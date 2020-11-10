import React,{ useEffect, useState, useReducer } from 'react'
import axios from 'axios'
import Styles from './main-page-styles.scss'
import Context from '@/presentation/context/context'
import { LoadArtistList, LoadAlbumList } from '@/domain/'
import ArtistList from './components/main-list/main-list'
import { SaveData } from '@/domain/usecases/save-data'
import { SearchInput,SearchStatus,MessageVerifyLengthItem, MainHeader } from '@/presentation/components'
import { makeApiUrl } from '@/main/factories/http'
import { MainListReducer, initialState } from '@/presentation/store/main-page'
import { Link } from 'react-router-dom'

interface Props {
  artistList: LoadArtistList
  saveDataLocalStorage: SaveData
  albumList: LoadAlbumList
}

const SelectOptionChoice = [
  {
    id: 1,
    value: 'Artista'
  },
  {
    id: 2,
    value: 'Álbum'
  }
]
const MainPage: React.FC<Props> = ({ artistList, saveDataLocalStorage, albumList }: Props) => {
  const [addType, setAddType] = useState(1)
  const [stateMain, dispatch] = useReducer(MainListReducer, initialState)
  const [search, setSeach] = useState('')

  const loadInitialList = async () => {
    try {
      if (addType === 1) {
        const groupArtist = await artistList.allList()
        dispatch({ type: 'ARTIST_LIST', arr: groupArtist.artistmatches.artist, isLoading: false })
      } else {
        const groupAlbum = await albumList.allList()
        dispatch({ type: 'ALBUM_LIST', arr: groupAlbum.albummatches.album, isLoading: false })
      }
    } catch (error) {
      dispatch({ type: 'UNEXPECTED_ACTION', mainError: error.name })
    }
  }

  const hadleOptionChange = e => {
    const resultIdFilter = SelectOptionChoice.find(i => i.id === Number(e.target.value))
    setAddType(resultIdFilter.id)
  }

  const getNewResultData = async (url) => {
    const endpoint = makeApiUrl(url)
    const fetchResult = await axios.get(endpoint)
    if (addType === 1) {
      dispatch({ type: 'ARTIST_LIST',arr: fetchResult.data.results.artistmatches.artist , isLoading: false })
      await saveDataLocalStorage.save(search,fetchResult.data.results.artistmatches.artist)
    } else {
      dispatch({ type: 'ALBUM_LIST',arr: fetchResult.data.results.albummatches.album , isLoading: false })
      await saveDataLocalStorage.save(search,fetchResult.data.results.albummatches.album)
    }
  }

  const handleSubmitFilter = event => {
    event.preventDefault()

    if (addType === 1) {
      getNewResultData(`/?method=artist.search&artist=${search}`)
    } else if (addType === 2) {
      getNewResultData(`/?method=album.search&album=${search === '' ? 'a' : search}`)
    }
  }

  useEffect(() => {
    loadInitialList()
  },[addType])

  return (
    <>
      <MainHeader />

      <Context.Provider value={ { stateMain } } >
        {
          stateMain.isLoading === false
            ? <div className={Styles.container}>
              <div className={Styles.contentSearchFilter}>
                <form className='form' onSubmit={handleSubmitFilter}>
                  <h2>Pesquise por Artista ou álbum</h2>
                  <div >
                    <SearchInput value={search} onChange={ (e) => setSeach(e.target.value)}/>
                    <button className={!search ? Styles.contentButtonFilter : Styles.contentButtonDisabled}
                      disabled={!search}>Pesquisar</button>
                  </div>
                </form>
                <div className={Styles.contentSearch}>
                  <p>Pesquisar por:</p>
                  <select onChange={hadleOptionChange}>
                    {SelectOptionChoice.map(value => <option key={value.id} value={value.id}>{value.value}</option>)}
                  </select>
                </div>
                <Link to={'/history-search'}>Ir para Histórico</Link>
              </div>
              <div className={Styles.spaceBottomBetween}></div>
              {
                stateMain.arr.length === 0 ? <MessageVerifyLengthItem/>
                  : <ArtistList artistList={stateMain.arr} value={addType}/>
              }
            </div>
            : <SearchStatus/>
        }
      </Context.Provider>
    </>
  )
}
export default MainPage
