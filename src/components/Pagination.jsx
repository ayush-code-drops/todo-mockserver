import React from 'react'
import styles from './style.module.css'
function Pagination({ total, currentpage, onClick }) {
const pages= new Array(total).fill(0).map((_, i) => currentpage === i + 1 ? <button key={i+1} disabled>{i + 1}</button> : <button className={styles.btn} key={i+1}  onClick={()=>onClick(i+1)}>{i + 1}</button>
    )
    
    return <div>{pages}</div>
}

export default Pagination