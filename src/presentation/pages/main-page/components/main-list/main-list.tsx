import React, { useCallback, useEffect, useState } from 'react'
import { LoadArtistList } from '@/domain'
import Styles from './main-list-styles.scss'

interface Props {
  artistList: LoadArtistList.Model[]
  value: number
}
const SEE_PER_PAGE = 5
const ArtistList: React.FC<Props> = ({ artistList,value }: any) => {
  const [next, setNext] = useState(14)

  const imgDetailForItems = (array) => {
    return array.slice(2,3).map((urlImg,index) => <img className={Styles.imgThumbnail} key={index} src={`${urlImg['#text']}`}/>)
  }
  const loadNextResult = useCallback(() => {
    setNext(prevRange => prevRange + SEE_PER_PAGE)
  },[])

  return (

    <>
      { value === 1 ? <h2 className={Styles.subititleType}>Artista</h2> : <h2 className={Styles.subititleType}>Álbum</h2>}
      <div className={Styles.contentList}>
        {
          artistList.slice(0,next).map((item,index) =>
            <div className={Styles.contentDetail} key={index}>
              { imgDetailForItems(item.image) }

              <div className={Styles.textDescription}>
                <p className={Styles.ok}>{item.name}</p>
                <small>{value === 1 ? `${item.listeners} Ouvintes` : ''}</small>
              </div>

            </div>
          )}
      </div>
      { next >= artistList.length ? null
        : <button className={Styles.customButton} onClick={loadNextResult}>Ver mais</button>
      }
    </>

  )
}

export default ArtistList
