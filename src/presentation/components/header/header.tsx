import React from 'react'
import Styles from './header-styles.scss'

const MainHeader: React.FC = () => {
  return (
    <header className={Styles.header}>
      <section className={Styles.container}>
        <div className={Styles.headerContent}>
          <div className={Styles.headerGroup}>
            <h5>Matthaus Brandão</h5>
            <h6>Teste de Frontend</h6>
          </div>
          <div className={Styles.backgroundAvatar}>
            <h1>CB</h1>
          </div>
        </div>
      </section>
    </header>
  )
}

export default MainHeader
