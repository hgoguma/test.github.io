import React, { useState } from 'react'
import Test from 'component/test'
import styles from 'styles/Home.module.scss'

export default function Home() {

  const [isTestStart, setIsTestStart] = useState(false)
 
  const handleTestStart = (e) => {
    setIsTestStart(!isTestStart)
  }

  return (
    <div className={styles.container}>
      {/* intro */}
      {
        !isTestStart ? 
        <div className={styles.intro}>
          <img className={styles.introImg} src="https://images2.imgbox.com/4c/dc/RGZrn8BM_o.png" onClick={handleTestStart} />
        </div>
        : null
      }

      {/* Test */}
      { isTestStart ? <Test /> : null }

      <footer className={styles.footer}>
        <p>Footer</p>
      </footer>
    </div>
  )
}