import React, { useEffect, useState } from 'react'
import { MainHeader } from '@/presentation/components'
import Styles from './search-local-storage-page-styles.scss'
import { Link } from 'react-router-dom'
const LocalStoragePage: React.FC = () => {
  const [keyStorage, setKeyStorage] = useState([])

  useEffect(() => {
    setKeyStorage(Object.keys(localStorage))
  }, [])
  return (
    <>
      <MainHeader />
      <div className={Styles.sizeButtonBackMain}>
        <Link to={'/'}><div className={Styles.backMainPage}>Voltar para o menu</div></Link>
      </div>

      <h1>Pesquisas realizadas</h1>

      <ul>
        {
          keyStorage.map((i, index) => <li key={index}><p><b>Pesquisa:</b>{i}</p></li>)
        }
      </ul>
    </>
  )
}
export default LocalStoragePage
