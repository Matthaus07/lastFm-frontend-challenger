import React, { memo, useContext } from 'react'
import Spinner from '../spinner/spinner'
import Styles from './search-status-styles.scss'
import Context from '@/presentation/context/context'
const SearchStatus: React.FC = () => {
  const { stateMain } = useContext(Context)
  const { isLoading, mainError } = stateMain
  return (

    <div className={Styles.errorWrap}>

      { isLoading && <Spinner className={Styles.spinner} />}
      { mainError && <span className={Styles.error}>{mainError}</span>
      }    </div>

  )
}

export default memo(SearchStatus)
