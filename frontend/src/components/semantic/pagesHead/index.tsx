import React, {FC} from 'react'
import styles from './PagesHead.module.scss'

interface props {
  title: string;
  subtitle?: string;
}

const PagesHead: FC<props> = ({title, subtitle}) => {
  return (
    <div className={styles.head}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  )
}

export default  PagesHead;