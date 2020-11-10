import React from 'react'
import isEmpty from '../../../../public/is_empty.svg'
import Styles from './message-verify-length-item-styles.scss'

const MessageVerifyLengthItem: React.FC = () => {
  return (
    <div className={Styles.contentMessage}>
      <img className={Styles.ImageIsEmpty} src={isEmpty} />
      <h4>Erro inesperado. Por favor, tente mais tarde</h4>
    </div>

  )
}

export default MessageVerifyLengthItem
